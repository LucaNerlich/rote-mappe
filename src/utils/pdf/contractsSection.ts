import i18n from '../../i18n';
import { PdfBuilder } from './PdfBuilder';

export const addContractsSection = (builder: PdfBuilder) => {
  const hasContracts = builder.data.contracts && builder.data.contracts.length > 0 && builder.data.contracts.some(c => c.type || c.provider);
  if (hasContracts || builder.data.contractNotes) {
    builder.addChapterCover(
      i18n.t('pdf.contractsSection.coverTitle'),
      i18n.t('pdf.contractsSection.coverDesc')
    );
    if (hasContracts) {
      const headers = (i18n.t('pdf.contractsSection.headers', { returnObjects: true }) as string[]);
      const rows = builder.data.contracts.filter(c => c.type || c.provider).map(c => [c.type || '', c.provider || '', c.contractNumber || '']);
      builder.drawTable(headers, rows);
    }
    
    if (builder.data.contractNotes) {
      builder.addNotesPage(builder.data.contractNotes, 'Verträge & Verbindlichkeiten');
    }
  }
};
