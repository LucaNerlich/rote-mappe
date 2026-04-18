# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-04-18

### Added
- **Initial Release:** Grundgerüst der Notfallakte-Anwendung.
- **Wizard-Navigation:** Schritt-für-Schritt-Formular zur Erfassung von Basisdaten, Kontakten, medizinischen Informationen, digitalem Nachlass und Finanzen.
- **Lokale Verarbeitung (Privacy First):** Alle Daten werden ausschließlich im Browser verarbeitet, es findet keine Server-Kommunikation statt.
- **Backup & Restore:** Möglichkeit, die eingegebenen Daten als `.json`-Datei zu exportieren und später wieder zu importieren.
- **PDF-Generierung:** Direkter Export der erfassten Notfallakte als strukturierte und formatierte PDF-Datei.
- **PWA-Unterstützung:** Die App kann als Progressive Web App (PWA) lokal installiert und offline genutzt werden.
- **Installations-Button:** Ein nativer "Als lokale App installieren"-Button auf der Startseite (wird angezeigt, wenn der Browser dies unterstützt).
- **Internationalisierung (i18n):** Vollständige Mehrsprachigkeit (Deutsch & Englisch) mit automatischer Spracherkennung implementiert.
- **Performance:** Die rechenintensive PDF-Generierung wurde in einen Web Worker ausgelagert, sodass die Benutzeroberfläche während des Exports flüssig bleibt.
- **Dark Mode:** Vollständige Unterstützung für einen dunklen Modus mit Toggle-Button auf der Welcome-Page, der Sidebar und im mobilen Header.
- **Markdown-Editor:** Integration von `@uiw/react-md-editor` in Textbereiche für einfache Formatierungen (Fett, Kursiv, Hyperlinks).
- **PDF-Formatierung:** Der PDF-Generator liest nun Markdown-Tags aus den Textfeldern und rendert fett- und kursivgedruckten Text sowie echte, klickbare Hyperlinks.