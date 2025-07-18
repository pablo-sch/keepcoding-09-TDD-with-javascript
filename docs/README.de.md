# Test-Driven-Development-Übung mit JavaScript

`>` **KeepCoding Projekte - Web 18:** 📁 [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

`>` **Wähle deine Sprache:** [Englisch](README.md) 🔄 [Spanish](README.es.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Projektziele

Um die in den virtuellen Kursen erworbenen Kenntnisse unter Beweis zu stellen, besteht dieses Projekt darin, Testing-Übungen mithilfe der „jest“-Abhängigkeit durchzuführen.

<!-- ------------------------------------------------------------------------------------------- -->

## Erlerntes und Entwickeltes Wissen

### Softwaretests

Tests sind unerlässlich, um Fehler vor dem Deployment zu erkennen, Vertrauen in den Code zu stärken, Entscheidungen über Releases zu unterstützen und gute Entwicklungspraktiken zu fördern. Sie sind ein zentraler Bestandteil von Methoden wie Waterfall, Agile und DevOps, wo Tests oft automatisiert in CI/CD-Zyklen integriert sind.

### Testarten

#### 1. Externe Tests (End-to-End)

- Manuell: Ein Tester überprüft das Verhalten der Anwendung visuell anhand vordefinierter Schritte.
- Automatisiert: Simulieren Benutzerinteraktionen, um das Verhalten nach Codeänderungen zu validieren.

#### 2. Funktionale Tests

- Unit-Tests: Testen einzelne Funktionen oder Module isoliert.
- Integrationstests: Prüfen das Zusammenspiel mehrerer Komponenten.
- End-to-End: Simulieren vollständige Nutzerabläufe, um die Gesamtfunktionalität der Anwendung sicherzustellen.

#### 3. Nicht-funktionale Tests

- Sicherheit: Erkennen Schwachstellen und prüfen den Schutz sensibler Daten.
- Leistung: Messen Antwortzeiten und Verhalten unter Last.
- Benutzerfreundlichkeit: Analysieren die reale Nutzererfahrung in der Oberfläche.
- Barrierefreiheit: Stellen sicher, dass die Anwendung auch für Menschen mit Behinderungen nutzbar ist.

### Verwendete Werkzeuge

- Jasmine, Jest, Mocha + Chai: Unit-Tests für JavaScript und Node.js.
- Supertest: Funktionstests in Backend-Umgebungen.
- Selenium, Puppeteer, Protractor, Playwright: Automatisierte End-to-End-Tests im Browser.

### TDD (Testgetriebene Entwicklung)

Bei TDD wird zuerst ein Test geschrieben, dann der minimale Code zur Erfüllung des Tests und anschließend refaktorisiert. Diese Methode erhöht die Codequalität, vermeidet unnötige Komplexität und erkennt Fehler frühzeitig. Sie basiert auf den SOLID-Prinzipien und fördert sauberen, wartbaren Code.

### BDD und ATDD

BDD (Verhaltensorientierte Entwicklung) und ATDD (Akzeptanztestgetriebene Entwicklung) zielen darauf ab, Entwickler, Tester und Fachbereiche durch klar definierte Verhaltensbeschreibungen zu vereinen. Sie verwenden strukturierte Sprachen wie Gherkin, um Szenarien zu formulieren, die für alle Beteiligten verständlich sind.

<!-- ------------------------------------------------------------------------------------------- -->

## Projektdetails

TODO

<!-- ------------------------------------------------------------------------------------------- -->

## Verwendete Technologien

- **Sprachen:** JavaScript.
- **Bemerkenswerte Abhängigkeiten (Node.js):** Babel, Jest und Axios.

<!-- ------------------------------------------------------------------------------------------- -->

## Installations- und Nutzungshinweise

### 1. Softwareanforderungen

- **[Node.js](https://nodejs.org/en/download/)** (getestet mit Version **v22.15.1**)
- **[Git](https://git-scm.com/downloads)** (getestet mit Version **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (getestet mit Version **1.99.0**)

### 2. Repository-Klonen

```bash
git clone https://github.com/pablo-sch/keepcoding-09-TDD-with-javascript.git
```

`>` **Klon-Demo in VSCode ansehen:** 🎥 [Gif Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### 3. Befehle

```sh
# Installiere die Projektabhängigkeiten.
npm install

# Führe Tests einmalig mit Jest aus.
npm test

# Führe Tests im Beobachtungsmodus aus, nur betroffene Tests.
npm test:watch

# Führe alle Tests im Beobachtungsmodus aus.
npm test:watchAll

# Zeige die Liste der Testdateien an.
npm test:list

# Führe Tests aus und zeige Ergebnisse im JSON-Format.
npm test:json
```

## Beiträge und Lizenzierung

Projekt unter MIT-Lizenz. Frei zur Nutzung und Verbreitung mit Namensnennung. Externe Beiträge werden nicht akzeptiert, aber Vorschläge sind willkommen.
