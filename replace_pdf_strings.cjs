const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'utils', 'pdf');

const replacements = [
  { file: 'baseSection.ts', old: "'BASISDATEN & KONTAKTE'", new: "i18n.t('pdf.baseSection.coverTitle')" },
  { file: 'baseSection.ts', old: "'Persönliche Angaben, Adressdaten und wichtige\\nKontaktpersonen für den Notfall.'", new: "i18n.t('pdf.baseSection.coverDesc')" },
  { file: 'baseSection.ts', old: "'Geboren:'", new: "i18n.t('pdf.baseSection.born')" },
  { file: 'baseSection.ts', old: "'Adresse:'", new: "i18n.t('pdf.baseSection.address')" },
  { file: 'baseSection.ts', old: "'Familienstand:'", new: "i18n.t('pdf.baseSection.maritalStatus')" },
  { file: 'baseSection.ts', old: "'Hochzeitsdatum:'", new: "i18n.t('pdf.baseSection.marriageDate')" },
  { file: 'baseSection.ts', old: "'Scheidungsdatum:'", new: "i18n.t('pdf.baseSection.divorceDate')" },
  { file: 'baseSection.ts', old: "'Anzahl Kinder:'", new: "i18n.t('pdf.baseSection.childrenCount')" },
  { file: 'baseSection.ts', old: "'Steuer-ID:'", new: "i18n.t('pdf.baseSection.taxId')" },
  { file: 'baseSection.ts', old: "'Sozialversicherungsnummer:'", new: "i18n.t('pdf.baseSection.ssn')" },
  { file: 'baseSection.ts', old: "'Kinder:'", new: "i18n.t('pdf.baseSection.children')" },
  { file: 'baseSection.ts', old: "['Vorname', 'Nachname', 'Geburtsdatum', 'Geburtsort', 'Telefon']", new: "(i18n.t('pdf.baseSection.childrenHeaders', { returnObjects: true }) as string[])" },
  { file: 'baseSection.ts', old: "'Wichtige Kontakte:'", new: "i18n.t('pdf.baseSection.contacts')" },
  { file: 'baseSection.ts', old: "['Beziehung', 'Name', 'Telefon', 'E-Mail']", new: "(i18n.t('pdf.baseSection.contactsHeaders', { returnObjects: true }) as string[])" },

  { file: 'contractsSection.ts', old: "'VERTRÄGE & VERBINDLICHKEITEN'", new: "i18n.t('pdf.contractsSection.coverTitle')" },
  { file: 'contractsSection.ts', old: "'Übersicht über Versicherungen, Miete,\\nKredite und sonstige laufende Verträge.'", new: "i18n.t('pdf.contractsSection.coverDesc')" },
  { file: 'contractsSection.ts', old: "'Laufende Verträge:'", new: "i18n.t('pdf.contractsSection.contracts')" },
  { file: 'contractsSection.ts', old: "['Vertragsart', 'Anbieter / Gesellschaft', 'Vertrags- / Policennummer']", new: "(i18n.t('pdf.contractsSection.headers', { returnObjects: true }) as string[])" },

  { file: 'coverPage.ts', old: "'NOTFALLAKTE'", new: "i18n.t('pdf.coverPage.title')" },
  { file: 'coverPage.ts', old: "'Wichtige Dokumente und Informationen'", new: "i18n.t('pdf.coverPage.subtitle')" },
  { file: 'coverPage.ts', old: "'Erstellt am:'", new: "i18n.t('pdf.coverPage.createdOn')" },
  { file: 'coverPage.ts', old: "'von'", new: "i18n.t('pdf.coverPage.of')" },
  { file: 'coverPage.ts', old: "'Rechtlicher Hinweis: Die in diesem Dokument enthaltenen Informationen und Anlagen stellen keine\\nrechtsverbindliche Beratung dar. Die Formulare, insbesondere Vollmachten und Patientenverfügungen,\\nsind Muster und können im Einzelfall eine anwaltliche oder notarielle Prüfung nicht ersetzen.'", new: "i18n.t('pdf.coverPage.legalNotice')" },

  { file: 'customSection.ts', old: "'Weitere Hinweise, Anweisungen & Worte zu diesem Kapitel'", new: "i18n.t('pdf.customSection.notesTitle')" },

  { file: 'digitalSection.ts', old: "'DIGITALE IDENTITÄT'", new: "i18n.t('pdf.digitalSection.coverTitle')" },
  { file: 'digitalSection.ts', old: "'Zugangsdaten für Geräte, E-Mail-Konten, Social Media\\nund andere digitale Dienste.'", new: "i18n.t('pdf.digitalSection.coverDesc')" },
  { file: 'digitalSection.ts', old: "['Dienst', 'Benutzername', 'Passwort/PIN', 'Link']", new: "(i18n.t('pdf.digitalSection.headers', { returnObjects: true }) as string[])" },
  { file: 'digitalSection.ts', old: "'Digitale Identität'", new: "i18n.t('pdf.digitalSection.coverTitle')" }, // Used for notes title

  { file: 'documentsSection.ts', old: "'DOKUMENTE & ZEUGNISSE'", new: "i18n.t('pdf.documentsSection.coverTitle')" },
  { file: 'documentsSection.ts', old: "'Persönliche Urkunden, Ausweise und wichtige Zeugnisse.'", new: "i18n.t('pdf.documentsSection.coverDesc')" },
  { file: 'documentsSection.ts', old: "'Persönliche Dokumente:'", new: "i18n.t('pdf.documentsSection.docs')" },
  { file: 'documentsSection.ts', old: "['Dokument']", new: "(i18n.t('pdf.documentsSection.docHeaders', { returnObjects: true }) as string[])" },
  { file: 'documentsSection.ts', old: "'Zeugnisse & Weiterbildungszertifikate:'", new: "i18n.t('pdf.documentsSection.certs')" },
  { file: 'documentsSection.ts', old: "['Schule / Institution', 'Abschlusstitel', 'Jahr']", new: "(i18n.t('pdf.documentsSection.certHeaders', { returnObjects: true }) as string[])" },
  { file: 'documentsSection.ts', old: "'Personalausweis'", new: "i18n.t('pdf.documentsSection.idCard')" },
  { file: 'documentsSection.ts', old: "'Reisepass'", new: "i18n.t('pdf.documentsSection.passport')" },
  { file: 'documentsSection.ts', old: "'Führerschein'", new: "i18n.t('pdf.documentsSection.driversLicense')" },
  { file: 'documentsSection.ts', old: "'Geburtsurkunde'", new: "i18n.t('pdf.documentsSection.birthCert')" },
  { file: 'documentsSection.ts', old: "'Heiratsurkunde'", new: "i18n.t('pdf.documentsSection.marriageCert')" },
  { file: 'documentsSection.ts', old: "'Scheidungsurkunde'", new: "i18n.t('pdf.documentsSection.divorceCert')" },
  { file: 'documentsSection.ts', old: "'Zeugnis: '", new: "i18n.t('pdf.documentsSection.certPrefix')" },
  { file: 'documentsSection.ts', old: "'Ohne Titel'", new: "i18n.t('pdf.documentsSection.withoutTitle')" },

  { file: 'financeSection.ts', old: "'FINANZEN & VERMÖGENSWERTE'", new: "i18n.t('pdf.financeSection.coverTitle')" },
  { file: 'financeSection.ts', old: "'Übersicht über Bankkonten, Depots, Immobilien und\\nweitere Vermögenswerte.'", new: "i18n.t('pdf.financeSection.coverDesc')" },
  { file: 'financeSection.ts', old: "'WICHTIG: Bankinterne Vollmachten müssen im Original vorliegen!'", new: "i18n.t('pdf.financeSection.warning')" },
  { file: 'financeSection.ts', old: "'Bankkonten & Depots:'", new: "i18n.t('pdf.financeSection.accounts')" },
  { file: 'financeSection.ts', old: "['Bank / Depot', 'Inhaber', 'IBAN / Kontonr.', 'BIC']", new: "(i18n.t('pdf.financeSection.accountHeaders', { returnObjects: true }) as string[])" },
  { file: 'financeSection.ts', old: "'Weitere Vermögenswerte (Gold, Krypto, etc.):'", new: "i18n.t('pdf.financeSection.assets')" },
  { file: 'financeSection.ts', old: "['Art des Vermögens', 'Details & Aufbewahrungsort']", new: "(i18n.t('pdf.financeSection.assetHeaders', { returnObjects: true }) as string[])" },
  { file: 'financeSection.ts', old: "'Immobilien:'", new: "i18n.t('pdf.financeSection.realEstate')" },
  { file: 'financeSection.ts', old: "['Immobilienart', 'Land', 'Adresse / Lage']", new: "(i18n.t('pdf.financeSection.realEstateHeaders', { returnObjects: true }) as string[])" },

  { file: 'helpers.ts', old: "'Anhang: '", new: "i18n.t('pdf.helpers.attachment')" },
  { file: 'helpers.ts', old: "'Anhang (PDF): '", new: "i18n.t('pdf.helpers.attachmentPdf')" },
  // helpers.ts has no actual text in it, it's PdfBuilder! Need to modify the replacement logic for PdfBuilder

  { file: 'PdfBuilder.ts', old: "\`Anhang (PDF): ${doc.name}\`", new: "\`${i18n.t('pdf.helpers.attachmentPdf')}${doc.name}\`" },
  { file: 'PdfBuilder.ts', old: "\`Anhang: ${doc.name}\`", new: "\`${i18n.t('pdf.helpers.attachment')}${doc.name}\`" },
  { file: 'PdfBuilder.ts', old: "\`(Bitte heften Sie hier an dieser Stelle später das Original oder eine Kopie von: ${doc.name} ein)\`", new: "i18n.t('pdf.helpers.placeholderText', { name: doc.name })" },
  { file: 'PdfBuilder.ts', old: "\`Weitere Hinweise, Anweisungen & Worte zu ${sectionName}\`", new: "i18n.t('pdf.helpers.notesTitle', { sectionName })" },
  { file: 'PdfBuilder.ts', old: "'Weitere Hinweise, Anweisungen & Worte'", new: "i18n.t('pdf.helpers.generalNotesTitle')" },

  { file: 'keysSection.ts', old: "'ALLGEMEINE HINWEISE & SCHLÜSSEL'", new: "i18n.t('pdf.keysSection.coverTitle')" },
  { file: 'keysSection.ts', old: "'Schlüsselverzeichnis und sonstige wichtige Informationen.'", new: "i18n.t('pdf.keysSection.coverDesc')" },
  { file: 'keysSection.ts', old: "'Schlüsselverzeichnis:'", new: "i18n.t('pdf.keysSection.keys')" },
  { file: 'keysSection.ts', old: "['Schlüsselname', 'Einsatzzweck', 'Ablageort']", new: "(i18n.t('pdf.keysSection.headers', { returnObjects: true }) as string[])" },

  { file: 'medicalSection.ts', old: "'MEDIZINISCHE DATEN'", new: "i18n.t('pdf.medicalSection.coverTitle')" },
  { file: 'medicalSection.ts', old: "'Informationen zu Blutgruppe, Organspendeausweis,\\nVorerkrankungen, Medikamenten und Allergien.'", new: "i18n.t('pdf.medicalSection.coverDesc')" },
  { file: 'medicalSection.ts', old: "'Blutgruppe:'", new: "i18n.t('pdf.medicalSection.bloodType')" },
  { file: 'medicalSection.ts', old: "'Nicht bekannt'", new: "i18n.t('pdf.medicalSection.unknown')" },
  { file: 'medicalSection.ts', old: "'Organspendeausweis:'", new: "i18n.t('pdf.medicalSection.organDonor')" },
  { file: 'medicalSection.ts', old: "'Ja'", new: "i18n.t('pdf.medicalSection.yes')" },
  { file: 'medicalSection.ts', old: "'Nein'", new: "i18n.t('pdf.medicalSection.no')" },
  { file: 'medicalSection.ts', old: "'Keine Angabe'", new: "i18n.t('pdf.medicalSection.noAnswer')" },
  { file: 'medicalSection.ts', old: "'Vorerkrankungen / Chronische Leiden:'", new: "i18n.t('pdf.medicalSection.conditions')" },
  { file: 'medicalSection.ts', old: "'Aktueller Medikamentenplan:'", new: "i18n.t('pdf.medicalSection.medications')" },
  { file: 'medicalSection.ts', old: "'Allergien:'", new: "i18n.t('pdf.medicalSection.allergies')" },
  { file: 'medicalSection.ts', old: "'Widerspruch gegen Organ- und Gewebespende'", new: "i18n.t('pdf.medicalSection.contradictionTitle')" },
  { file: 'medicalSection.ts', old: "Ort, Datum", new: "i18n.t('pdf.medicalSection.locationDate')" }, // need exact match later
  { file: 'medicalSection.ts', old: "'Unterschrift'", new: "i18n.t('pdf.medicalSection.signature')" },

  { file: 'poaSection.ts', old: "'VOLLMACHTEN & VERFÜGUNGEN'", new: "i18n.t('pdf.poaSection.coverTitle')" },
  { file: 'poaSection.ts', old: "'Wichtige rechtliche Dokumente, Testament und\\nweitere Vollmachten.'", new: "i18n.t('pdf.poaSection.coverDesc')" },
  { file: 'poaSection.ts', old: "'WICHTIG: Testament und Vorsorgevollmacht müssen fast immer im Original vorliegen!'", new: "i18n.t('pdf.poaSection.warning')" },
  { file: 'poaSection.ts', old: "'Aufbewahrungsort des Testaments:'", new: "i18n.t('pdf.poaSection.testamentLoc')" },

  { file: 'tocPage.ts', old: "'INHALTSVERZEICHNIS'", new: "i18n.t('pdf.tocPage.title')" },
];

const processed = new Set();

replacements.forEach(r => {
  const fp = path.join(srcDir, r.file);
  if (!fs.existsSync(fp)) return;
  let content = fs.readFileSync(fp, 'utf8');
  if (r.old === "Ort, Datum") {
      content = content.replace(/'Ort, Datum'/g, "i18n.t('pdf.medicalSection.locationDate')");
  } else if (r.old === "['Dokument']") {
      content = content.replace(/\['Dokument'\]/g, "(i18n.t('pdf.documentsSection.docHeaders', { returnObjects: true }) as string[])");
  } else {
      content = content.split(r.old).join(r.new);
  }
  
  if (!content.includes("import i18n from")) {
    if (r.file === 'PdfBuilder.ts') {
        content = "import i18n from '../../i18n';\n" + content;
    } else {
        content = "import i18n from '../../i18n';\n" + content;
    }
  }
  fs.writeFileSync(fp, content, 'utf8');
  processed.add(r.file);
});

// For medicalSection contradictionBody:
const msPath = path.join(srcDir, 'medicalSection.ts');
let msContent = fs.readFileSync(msPath, 'utf8');
const oldBodyText = "`Ich, ${fullNameDonor}, geboren am ${formatDate(builder.data.birthDate || '')},\\nwiderspreche hiermit ausdrücklich einer Entnahme meiner Organe\\nund Gewebe nach meinem Tod.\\n\\nDieser Widerspruch ist bindend und darf nicht von Angehörigen\\noder Dritten übergangen werden.`";
const newBodyText = "i18n.t('pdf.medicalSection.contradictionBody', { name: fullNameDonor, date: formatDate(builder.data.birthDate || '') })";
msContent = msContent.replace(oldBodyText, newBodyText);
fs.writeFileSync(msPath, msContent, 'utf8');

console.log("Replaced strings in PDF utils.");
