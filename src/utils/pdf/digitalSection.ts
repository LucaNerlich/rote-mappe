import i18n from '../../i18n';
import { PdfBuilder } from './PdfBuilder';

export const addDigitalSection = (builder: PdfBuilder) => {
  builder.addChapterCover(
    i18n.t('pdf.digitalSection.coverTitle'),
    i18n.t('pdf.digitalSection.coverDesc')
  );
  
  if (builder.data.digitalIdentities && builder.data.digitalIdentities.length > 0) {
    const headers = (i18n.t('pdf.digitalSection.headers', { returnObjects: true }) as string[]);
    const rows: string[][] = [];
    builder.data.digitalIdentities.forEach(entry => {
      if (entry.type === 'heading') {
        if (rows.length > 0) {
          builder.drawTable(headers, rows.splice(0, rows.length));
        }
        builder.currentY -= 5; 
        builder.drawLineText(entry.title || '', true, 12, builder.config.colors.text);
        builder.currentY -= 5;
      } else if (entry.title) {
        rows.push([entry.title, entry.username || '', entry.password || '', entry.url || '']);
      }
    });
    if (rows.length > 0) {
      builder.drawTable(headers, rows);
    }
  }
  
  if (builder.data.devicePINs) {
    builder.addNotesPage(builder.data.devicePINs, i18n.t('pdf.digitalSection.coverTitle'));
  }
};
