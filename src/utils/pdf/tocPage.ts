import i18n from '../../i18n';
import { rgb } from 'pdf-lib';
import { PdfBuilder } from './PdfBuilder';

export const createTocPlaceholder = (builder: PdfBuilder) => {
  const tocPage = builder.pdfDoc.addPage([builder.PAGE_WIDTH, builder.PAGE_HEIGHT]);
  builder.tocY = builder.PAGE_HEIGHT - 80;
  
  tocPage.drawText('© Rote-Mappe Generator - https://github.com/Alpha63/rote-mappe', {
    x: 50,
    y: 30,
    size: 7,
    font: builder.fontRegular,
    color: rgb(0.65, 0.65, 0.65),
  });

  tocPage.drawText(i18n.t('pdf.tocPage.title'), {
    x: 50,
    y: builder.tocY,
    size: 24,
    font: builder.fontBold,
    color: builder.config.colors.chapterCoverText,
  });
  builder.tocY -= 40;
};

export const fillToc = (builder: PdfBuilder) => {
  const tocNumeralColumnWidth = builder.fontRegular.widthOfTextAtSize('XX.', 14) + 15;

  let tocPageIndex = 1;
  let currentTocPage = builder.pdfDoc.getPage(tocPageIndex);

  builder.tocEntries.forEach(entry => {
    if (builder.tocY < 60) {
      tocPageIndex++;
      currentTocPage = builder.pdfDoc.insertPage(tocPageIndex, [builder.PAGE_WIDTH, builder.PAGE_HEIGHT]);
      
      currentTocPage.drawText('© Rote-Mappe Generator - https://github.com/Alpha63/rote-mappe', {
        x: 50,
        y: 30,
        size: 7,
        font: builder.fontRegular,
        color: rgb(0.65, 0.65, 0.65),
      });
      
      builder.tocY = builder.PAGE_HEIGHT - 80;
    }
    
    const firstSpaceIndex = entry.title.indexOf(' ');
    const numeral = entry.title.substring(0, firstSpaceIndex);
    const title = entry.title.substring(firstSpaceIndex + 1);

    currentTocPage.drawText(numeral, {
      x: 50,
      y: builder.tocY,
      size: 14,
      font: builder.fontRegular,
      color: builder.config.colors.text,
    });

    currentTocPage.drawText(title, {
      x: 50 + tocNumeralColumnWidth,
      y: builder.tocY,
      size: 14,
      font: builder.fontRegular,
      color: builder.config.colors.text,
    });
    
    builder.tocY -= 25;
  });
};
