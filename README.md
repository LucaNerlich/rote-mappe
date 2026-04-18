<div align="center">
  <h1>🚨 Notfallakte Generator (Rote Mappe)</h1>
  <p>
    <strong>Eine 100% lokale, sichere und browserbasierte Anwendung zur Erstellung Ihrer persönlichen Notfallmappe.</strong>
  </p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-datenschutz--sicherheit">Datenschutz</a> •
    <a href="#-installation--bereitstellung">Installation</a> •
    <a href="#-technologien">Technologien</a> •
    <a href="#-lizenz">Lizenz</a>
  </p>
  <br />
  <a href="https://ko-fi.com/alpha63" target="_blank">
    <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Unterstütze mich auf Ko-fi" height="55" />
  </a>
  <p><em>Dieses Projekt ist zu 100% kostenlos und werbefrei.<br/>Wenn dir dieses Tool geholfen hat, freue ich mich riesig über einen virtuellen Kaffee als Unterstützung für die Weiterentwicklung! ☕</em></p>
</div>

---

## 📖 Über das Projekt

Dieses Tool ist aus einem **eigenen Bedürfnis innerhalb der Familie** heraus entstanden. Oftmals wird das Thema Notfallvorsorge vor sich hergeschoben, weil es unangenehm, komplex oder unübersichtlich wirkt. Der Notfallakte Generator soll genau hier ansetzen und als zentraler Anlaufpunkt dienen, um dieses so wichtige Thema endlich **strukturiert, unkompliziert und vor allem sicher** angehen zu können.

Ein Unfall, eine schwere Krankheit oder andere unvorhersehbare Ereignisse können jeden treffen. In solchen Momenten ist es für Angehörige, Ärzte und Vertrauenspersonen von größter Wichtigkeit, schnell auf alle relevanten und gebündelten Informationen zugreifen zu können.

Der **Notfallakte Generator** führt den Nutzer schrittweise durch alle essenziellen Lebensbereiche:
- Persönliche Basisdaten & Kontakte
- Medizinische Daten & Organspende-Verfügungen
- Finanzen, Bankkonten & Vermögenswerte
- Laufende Verträge & Verbindlichkeiten
- Digitale Identitäten & Passwörter
- Wichtige Dokumente (Urkunden, Ausweise, Zeugnisse)
- Vollmachten & Patientenverfügungen

Am Ende des geführten Prozesses (Wizard) generiert die Anwendung ein übersichtliches, druckfertiges PDF-Dokument ("Die Rote Mappe"), welches als physischer Begleiter für den Notfall ausgedruckt und sicher hinterlegt werden kann.

## 📸 Vorschau

![Startseite](Images/welcome.png)
*Die übersichtliche Startseite der Anwendung.*

![Wizard / Formular](Images/Basis_u_Kontakte.png)
*Schritt-für-Schritt-Datenerfassung mit dem integrierten Editor.*

![Dark Mode Ansicht](Images/Dark_Basis_u_Kontakte.png)
*Die App im neuen, augenschonenden Dark Mode.*

![PDF Vorschau](Images/PDF_Generierung.png)
*Die fertig generierte, druckfertige Rote Mappe als PDF.*

## ✨ Features

- **🛡️ 100% Lokal & Zero-Knowledge-Architektur:** Alle sensiblen Daten werden **ausschließlich** lokal in Ihrem Browser verarbeitet. Es findet **keine** Kommunikation mit externen Servern statt. Ihre Daten bleiben immer bei Ihnen.
- **🌍 Mehrsprachigkeit (i18n):** Die Anwendung ist vollständig auf Deutsch und Englisch verfügbar.
- **📱 PWA & Offline-Fähigkeit:** Die App lässt sich direkt als Desktop- oder Mobile-App installieren und funktioniert ohne aktive Internetverbindung.
- **🌗 Dark Mode:** Elegantes, augenschonendes Design, das sich an Ihre Systemeinstellungen anpasst oder manuell umgeschaltet werden kann.
- **✏️ Rich-Text & Markdown:** Formatieren Sie Ihre Notizen und eigenen Kapitel ganz einfach mit dem integrierten Editor. Die Formatierungen (Fett, Kursiv) und Hyperlinks werden originalgetreu und klickbar in das PDF übernommen.
- **📝 Intelligente & asynchrone PDF-Generierung:** Automatische Erstellung eines Inhaltsverzeichnisses, tabellarischer Übersichten und Einbettung hochgeladener Scans direkt in das PDF. Dies geschieht blockierungsfrei im Hintergrund (via Web Worker), sodass die App stets flüssig bleibt.
- **🎨 Anpassbares Design:** Wählen Sie zwischen verschiedenen professionellen Layout-Vorlagen für Ihr fertiges PDF-Dokument (z.B. "Klassisch Rot", "Modern & Edel", "Standard Blau").
- **💾 Lokales Backup & Restore:** Exportieren Sie Ihre eingegebenen Daten zusammen mit dem PDF als verschlüsseltes ZIP-Archiv. Die enthaltene `.json`-Backupdatei können Sie jederzeit wieder in die App laden, um Ihre Notfallakte in der Zukunft einfach zu aktualisieren.
- **🔄 Session-Schutz:** Automatischer Schutz vor Datenverlust beim versehentlichen Neuladen der Seite durch Zwischenspeicherung im temporären `sessionStorage` des Browsers. Nach dem Schließen des Tabs sind alle Daten unwiderruflich gelöscht.
- **📱 Modernes & Responsives UI:** Übersichtliche und kompakte Nutzeroberfläche, optimiert für Desktop- und Laptop-Bildschirme.

## 🔒 Datenschutz & Sicherheit

Der Schutz Ihrer hochsensiblen Daten steht bei diesem Projekt an oberster Stelle. 

- **Kein Backend, Keine Datenbank:** Die Anwendung besitzt keine Server-Komponente, die Daten speichert. Sie läuft komplett als statische Webanwendung in Ihrem Browser.
- **DSGVO-konform by Design:** Da keine personenbezogenen Daten den Client verlassen, ist die Anwendung inhärent datenschutzkonform.
- **Keine Tracking-Skripte:** Es werden keine externen Analyse-Tools, Tracker oder externe Schriftarten geladen.

## 🛠️ Technologien

Dieses Projekt nutzt modernste Webtechnologien für maximale Performance und Sicherheit:

- **React 19** – Modernes Frontend-Framework
- **TypeScript** – Für eine typsichere und robuste Codebasis
- **Vite** – Extrem schnelles Build-Tool und Entwicklungsumgebung
- **Tailwind CSS 4** – Utility-first CSS-Framework für das Design
- **pdf-lib** – Komplexe PDF-Generierung direkt im Browser
- **@uiw/react-md-editor** – Leichtgewichtiger WYSIWYG-Editor für formatierbare Texte
- **JSZip** – Lokale Erstellung von ZIP-Archiven für das Backup

## 🚀 Installation & Bereitstellung

Das Projekt kann auf verschiedene Arten lokal ausgeführt oder auf einem eigenen Server bereitgestellt werden.

### Option 1: Schneller Start mit Docker (Empfohlen)

Die Anwendung ist für den Betrieb mit Docker optimiert.

1. **Repository klonen:**
   ```bash
   git clone https://github.com/Alpha63/rote-mappe.git
   cd rote-mappe
   ```

2. **Container starten:**
   ```bash
   docker-compose up -d
   ```

3. **Anwendung öffnen:**  
   Navigieren Sie in Ihrem Browser zu `http://localhost:8080`.

### Option 2: Lokale Entwicklung (Node.js)

Wenn Sie aktiv am Code arbeiten möchten oder die App ohne Docker lokal starten wollen:

1. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Die App ist unter `http://localhost:5173` erreichbar.

3. **Produktions-Build erstellen:**
   ```bash
   npm run build
   ```
   Die optimierten, statischen Dateien befinden sich anschließend im `dist/`-Verzeichnis und können von jedem beliebigen Webserver (NGINX, Apache, etc.) ausgeliefert werden.

## 🤝 Mitwirken (Contributing)

Beiträge zum Projekt sind jederzeit willkommen! Wenn Sie Fehler finden, Verbesserungen am Design vorschlagen möchten oder neue Funktionen entwickeln, zögern Sie nicht, ein Issue oder einen Pull Request zu erstellen.

## 📜 Lizenz

Dieses Projekt steht unter der **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** Lizenz.

Das bedeutet:
- **Teilen & Bearbeiten:** Sie dürfen das Projekt kopieren, verändern und weiterentwickeln.
- **Namensnennung:** Der ursprüngliche Autor muss genannt werden.
- **Nicht kommerziell:** Die Nutzung, Bereitstellung oder der Verkauf dieses Tools im Rahmen einer kommerziellen Dienstleistung ist **strengstens untersagt**.
- **Weitergabe unter gleichen Bedingungen:** Abgeleitete Werke müssen unter derselben Lizenz veröffentlicht werden.

Weitere Details finden Sie in der `LICENSE` Datei.