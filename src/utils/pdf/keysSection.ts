import i18n from '../../i18n';
import { PdfBuilder } from './PdfBuilder';

export const addKeysSection = (builder: PdfBuilder) => {
  builder.addChapterCover(
    'SCHLÜSSEL & HINWEISE',
    'Schlüsselverzeichnis und weitere persönliche\nAnweisungen für die Angehörigen.'
  );

  if (builder.data.keys && builder.data.keys.length > 0 && builder.data.keys.some(k => k.name || k.purpose)) {
    builder.drawLineText('Schlüsselverzeichnis & Ersatzschlüssel:', true, 12);
    const headers = (i18n.t('pdf.keysSection.headers', { returnObjects: true }) as string[]);
    const rows = builder.data.keys.filter(k => k.name || k.purpose).map(k => [k.name || '', k.purpose || '', k.location || '']);
    builder.drawTable(headers, rows);
  }

  if (builder.data.generalNotes) {
    builder.addNotesPage(builder.data.generalNotes, 'Allgemeine Hinweise & Schlüssel');
  }
};
