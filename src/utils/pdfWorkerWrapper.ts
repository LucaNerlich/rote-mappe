import { FormData } from '../types';
import i18n from '../i18n';

export const generatePDFAsync = (
  formData: FormData,
  templateName: string = 'default',
  includePlaceholders: boolean = true,
  includeWarnings: boolean = true
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('./pdfWorker.ts', import.meta.url), { type: 'module' });

    worker.onmessage = (e: MessageEvent) => {
      const { success, blob, error } = e.data;
      if (success) {
        resolve(blob);
      } else {
        reject(new Error(error));
      }
      worker.terminate();
    };

    worker.onerror = (err) => {
      reject(err);
      worker.terminate();
    };

    worker.postMessage({
      formData,
      templateName,
      includePlaceholders,
      includeWarnings,
      language: i18n.language,
      origin: window.location.origin
    });
  });
};
