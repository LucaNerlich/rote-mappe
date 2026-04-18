import { generatePDFBlob } from './pdfGenerator';
import i18n from '../i18n';

self.onmessage = async (e: MessageEvent) => {
  try {
    const { formData, templateName, includePlaceholders, includeWarnings, language } = e.data;
    
    if (language && i18n.changeLanguage) {
      await i18n.changeLanguage(language);
    }
    
    const blob = await generatePDFBlob(formData, templateName, includePlaceholders, includeWarnings);
    
    self.postMessage({ success: true, blob });
  } catch (error: unknown) {
    const err = error as Error;
    self.postMessage({ success: false, error: err?.message || String(error) });
  }
};
