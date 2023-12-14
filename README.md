# ChartService

Der ChartService ist ein wichtiger Microservice in CreativeCharts, der für die Verwaltung der Diagrammdaten
verantwortlich ist. Er wurde in JavaScript entwickelt und läuft in einer Node.js-Umgebung.

## Funktionalität

Der ChartService bietet die folgenden Hauptfunktionen:

- Verwaltung von Diagrammdaten, einschließlich Erstellung, Bearbeitung und Löschung
- Anbindung an die MongoDB-Datenbank und Verwendung von Mongoose für das Datenmodell
- Bereitstellung von RESTful-API-Endpunkten für den Zugriff auf Diagrammdaten

## Einrichtung

**Voraussetzungen:**

- [Node.js](https://nodejs.org/) installieren.
- Zugriff auf eine MongoDB-Instanz.

**Cli-Kommando zum Herunterladen des ChartService-Repositorys und Starten des ChartService:**

```bash
git clone [ChartService-Repository-URL]
 ```

```bash
cd [ChartService-Verzeichnis]/src
```

```bash
npm install
```

```bash
# Kopieren Sie die .env.example-Datei und passen Sie die MongoDB-Verbindungszeichenfolgen in der .env-Datei an.
node server.js
