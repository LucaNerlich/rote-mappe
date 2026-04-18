import i18n from '../../i18n';
import { PdfBuilder } from './PdfBuilder';

export const addPoaSection = async (builder: PdfBuilder) => {
  if (builder.data.testamentLocation || builder.data.testamentDocument?.documentAction !== 'skip' || builder.data.patientenverfuegung?.documentAction !== 'skip' || builder.data.vorsorgevollmacht?.documentAction !== 'skip' || (builder.data.customPowersOfAttorney && builder.data.customPowersOfAttorney.length > 0) || builder.data.poaNotes) {
    builder.addChapterCover(
      i18n.t('pdf.poaSection.coverTitle'),
      'Informationen zum Testament, Vorsorgevollmachten\nund Patientenverfügungen.'
    );
    builder.drawWarning('Zwingend im Original: Testament und Vorsorgevollmacht! (Kopie ist rechtlich oft wirkungslos)');
    builder.drawWarning('Patientenverfügung: Original am sichersten, Kopie wird im Notfall oft akzeptiert.');
    builder.currentY -= 5;

    if (builder.data.testamentLocation) {
      builder.drawLineText(i18n.t('pdf.poaSection.testamentLoc'), true, 12);
      builder.drawMultilineText(builder.data.testamentLocation);
      builder.currentY -= 5;
    }
  }

  // Vollmachten
  const poaDocsToAppend = [
    builder.data.patientenverfuegung,
    builder.data.vorsorgevollmacht,
    builder.data.betreuungsverfuegung,
    builder.data.testamentDocument
  ];
  for (const doc of poaDocsToAppend) {
    await builder.addDocumentPage(doc);
  }
  
  // Custom POAs
  if (builder.data.customPowersOfAttorney) {
    for (const doc of builder.data.customPowersOfAttorney) {
      await builder.addDocumentPage(doc);
    }
  }

  if (builder.data.poaNotes) {
    builder.addNotesPage(builder.data.poaNotes, 'Vollmachten & Verfügungen');
  }
};
