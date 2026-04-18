import i18n from '../../i18n';
import { PdfBuilder } from './PdfBuilder';

export const addCustomSections = (builder: PdfBuilder) => {
  if (builder.data.customChapters && builder.data.customChapters.length > 0) {
    builder.data.customChapters.forEach(chapter => {
      if (chapter.title || chapter.content) {
        builder.addChapterCover(
          chapter.title ? chapter.title.toUpperCase() : 'WEITERES KAPITEL',
          'Benutzerdefiniertes Kapitel mit eigenen Informationen.'
        );
        if (chapter.content) {
          builder.drawMultilineHeading(i18n.t('pdf.customSection.notesTitle'), 18);
          builder.currentY -= 10;
          builder.drawMultilineText(chapter.content);
        }
      }
    });
  }
};
