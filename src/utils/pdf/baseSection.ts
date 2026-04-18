import i18n from '../../i18n';
import { PdfBuilder } from './PdfBuilder';
import { formatDate } from './helpers';

export const addBaseSection = (builder: PdfBuilder) => {
  builder.addChapterCover(
    i18n.t('pdf.baseSection.coverTitle'),
    i18n.t('pdf.baseSection.coverDesc')
  );
  
  const birthInfo = [];
  if (builder.data.birthDate) birthInfo.push(`* ${formatDate(builder.data.birthDate)}`);
  if (builder.data.birthPlace) birthInfo.push(builder.data.birthPlace);
  if (builder.data.birthCountry) birthInfo.push(`(${builder.data.birthCountry})`);
  if (birthInfo.length > 0) {
    builder.drawKeyValue(i18n.t('pdf.baseSection.born'), birthInfo.join(' '));
  }

  builder.drawKeyValue(i18n.t('pdf.baseSection.address'), `${builder.data.street} ${builder.data.houseNumber}, ${builder.data.zipCode} ${builder.data.city}`);
  builder.drawKeyValue(i18n.t('pdf.baseSection.maritalStatus'), builder.data.maritalStatus);
  if (builder.data.marriageDate) builder.drawKeyValue(i18n.t('pdf.baseSection.marriageDate'), formatDate(builder.data.marriageDate));
  if (builder.data.divorceDate) builder.drawKeyValue(i18n.t('pdf.baseSection.divorceDate'), formatDate(builder.data.divorceDate));
  if (builder.data.childrenCount) builder.drawKeyValue(i18n.t('pdf.baseSection.childrenCount'), builder.data.childrenCount);
  if (builder.data.taxId) builder.drawKeyValue(i18n.t('pdf.baseSection.taxId'), builder.data.taxId);
  if (builder.data.socialSecurityNumber) builder.drawKeyValue(i18n.t('pdf.baseSection.ssn'), builder.data.socialSecurityNumber);
  
  builder.currentY -= 10;

  if (builder.data.children && builder.data.children.length > 0) {
    builder.drawLineText(i18n.t('pdf.baseSection.children'), true, 12);
    const headers = (i18n.t('pdf.baseSection.childrenHeaders', { returnObjects: true }) as string[]);
    const rows = builder.data.children.map(c => [
      `${c.firstName} ${c.middleName || ''}`.trim(),
      c.lastName,
      formatDate(c.birthDate),
      c.birthPlace,
      c.phone
    ]);
    builder.drawTable(headers, rows);
    builder.currentY -= 10;
  }
  
  if (builder.data.contacts && builder.data.contacts.length > 0) {
    builder.drawLineText(i18n.t('pdf.baseSection.contacts'), true, 12);
    const headers = (i18n.t('pdf.baseSection.contactsHeaders', { returnObjects: true }) as string[]);
    const rows = builder.data.contacts.map(c => [c.type, c.name, c.phone, c.email]);
    builder.drawTable(headers, rows);
  }
};
