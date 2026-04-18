import i18n from '../../i18n';
import { rgb } from 'pdf-lib';
import { PdfBuilder } from './PdfBuilder';
import { splitTextToLines } from './helpers';

export const addCoverPage = (builder: PdfBuilder) => {
  const coverPage = builder.pdfDoc.addPage([builder.PAGE_WIDTH, builder.PAGE_HEIGHT]);
  const fullName = `${builder.data.salutation ? builder.data.salutation + ' ' : ''}${builder.data.firstName} ${builder.data.middleName ? builder.data.middleName + ' ' : ''}${builder.data.lastName}`.trim();
  const documentTitle = builder.data.documentTitle || i18n.t('pdf.coverPage.title');

  if (builder.templateName === 'modern') {
    const titleLines = splitTextToLines(documentTitle, builder.PAGE_WIDTH - 100, builder.fontSerif, 48);
    let titleY = builder.PAGE_HEIGHT - 120;
    titleLines.forEach(line => {
      coverPage.drawText(line, {
        x: 50,
        y: titleY,
        size: 48,
        font: builder.fontSerif,
        color: builder.config.colors.primary,
      });
      titleY -= 50;
    });

    coverPage.drawLine({
      start: { x: 50, y: titleY - 15 },
      end: { x: 150, y: titleY - 15 },
      thickness: 3,
      color: builder.config.colors.accent,
    });
    coverPage.drawText(fullName, {
      x: 50,
      y: titleY - 60,
      size: 24,
      font: builder.fontRegular,
      color: builder.config.colors.lightText,
    });
  } else {
    coverPage.drawRectangle({
      x: 0,
      y: builder.PAGE_HEIGHT - 300,
      width: builder.PAGE_WIDTH,
      height: 300,
      color: builder.config.colors.primary,
    });

    const titleLines = splitTextToLines(documentTitle, builder.PAGE_WIDTH - 100, builder.fontBold, 42);
    let titleY = builder.PAGE_HEIGHT - 120;
    titleLines.forEach(line => {
      coverPage.drawText(line, {
        x: 50,
        y: titleY,
        size: 42,
        font: builder.fontBold,
        color: builder.config.colors.primaryText,
      });
      titleY -= 45;
    });

    coverPage.drawText(fullName, {
      x: 50,
      y: titleY - 15,
      size: 24,
      font: builder.fontRegular,
      color: rgb(0.9, 0.9, 0.9),
    });

    coverPage.drawLine({
      start: { x: 50, y: builder.PAGE_HEIGHT - 250 },
      end: { x: builder.PAGE_WIDTH - 50, y: builder.PAGE_HEIGHT - 250 },
      thickness: 2,
      color: builder.config.colors.accent,
    });
  }

  coverPage.drawText('Vertrauliche Dokumente & Informationen', {
    x: 50,
    y: builder.PAGE_HEIGHT - 350,
    size: 16,
    font: builder.fontBold,
    color: builder.config.colors.text,
  });

  coverPage.drawText('Bitte sicher aufbewahren und im Notfall den berechtigten\nPersonen übergeben.', {
    x: 50,
    y: builder.PAGE_HEIGHT - 380,
    size: 12,
    font: builder.fontRegular,
    color: builder.config.colors.lightText,
    lineHeight: 18,
  });

  coverPage.drawText('© Rote-Mappe Generator - https://github.com/Alpha63/rote-mappe', {
    x: 50,
    y: 30,
    size: 7,
    font: builder.fontRegular,
    color: rgb(0.65, 0.65, 0.65),
  });
};
