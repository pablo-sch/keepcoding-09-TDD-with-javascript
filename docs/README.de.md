# Test-Driven-Development-Übung mit JavaScript

**KeepCoding Projects - Web 18**  
Detaillierte Liste der Repositories und Beschreibungen in [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Wähle deine Sprache

- 🇺🇸 [Englisch](README.md)
- 🇪🇸 [Spanisch](README.es.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Projektziele

Um die in den virtuellen Kursen erworbenen Kenntnisse unter Beweis zu stellen, besteht dieses Projekt darin, Testing-Übungen mithilfe der „jest“-Abhängigkeit durchzuführen.

<!-- ------------------------------------------------------------------------------------------- -->

## Erlernte und Entwickelte Kenntnisse

### Testing

#### Definition und Ziele

Softwaretests sind ein grundlegender Prozess, dessen Hauptzweck darin besteht, Fehler (Bugs) zu identifizieren, bevor der Code in die Produktion gelangt. Die Implementierung verfolgt folgende Ziele:

1. **Frühzeitige Fehlererkennung**: Ermöglicht die Identifizierung von Defekten in frühen Phasen des Entwicklungszyklus, um Kosten und Auswirkungen von Korrekturen zu minimieren.
2. **Steigerung des Vertrauens in den Code**: Bietet eine höhere Sicherheit bezüglich Stabilität und Funktionalität der Software, auch wenn kein Test-Set eine vollständige Fehlerfreiheit garantieren kann.
3. **Unterstützung bei Deployment-Entscheidungen**: Erleichtert die Beurteilung, ob die Software bereit ist, neue Funktionen zu integrieren, oder ob es besser ist, den Release zu verschieben, um Probleme zu beheben.
4. **Förderung von Codequalität und -sauberkeit**: Motiviert Entwickler, modularen und gut strukturierten Code zu schreiben, da lesbarer und organisierter Code einfacher zu testen und zu warten ist.

#### Rolle im Projektmanagement (PM) und DevOps

Softwaretests sollten in jede Entwicklungsmethodik integriert werden, sei es Waterfall, Agile oder DevOps. Insbesondere in einem DevOps-Kontext sind Tests Teil eines kontinuierlichen Lieferzyklus (bekannt als „unendliche Schleife“) und werden häufig automatisiert, um schnelle und zuverlässige Deployments zu gewährleisten.

- In **Waterfall**-Methodiken werden Testphasen nach Abschluss jeder Design- oder Entwicklungsphase geplant.
- In **Agile**-Methodiken werden Tests iterativ in jeden Sprint integriert, um konstantes Feedback zu fördern.
- In **DevOps**-Umgebungen ermöglicht die Automatisierung von Tests, die Software mit jeder Änderung im Repository zu validieren und dadurch die Qualität während des gesamten Lebenszyklus zu sichern.

### Testarten

#### 1. Externe Tests (End-to-End Visuell)

1. **Manuell**  
   Ein Tester folgt einer vordefinierten Schritt-für-Schritt-Anleitung und überprüft visuell die korrekte Funktionsweise der Benutzeroberfläche. Dieser Ansatz deckt oft Usability- und Ablaufprobleme auf, die automatisierten Tests entgehen können.

2. **Automatisiert**  
   Basieren auf der Aufzeichnung und Wiedergabe von Benutzerinteraktionen mit der Anwendung (Klicks, Texteingaben, Navigation usw.). Diese Tests werden zeitgesteuert ausgeführt, um zu prüfen, ob die Benutzeroberfläche nach Codeänderungen weiterhin wie erwartet funktioniert.

#### 2. Funktionale Tests

1. **Unit-Tests**  
   Testen einzelne Codeeinheiten (Funktionen, Klassen oder Module) isoliert. Jeder Test sollte nur einen Aspekt des Verhaltens der Codeeinheit unter kontrollierten Bedingungen überprüfen.

2. **Integrations-Tests**  
   Verifizieren, dass mehrere Komponenten, Module oder Dienste gemeinsam korrekt funktionieren. Beispielsweise werden im Backend-Bereich HTTP-Anfragen an die API gesendet und die empfangenen Antworten validiert, um sicherzustellen, dass jede Schicht (Controller, Service, Datenbank) erwartungsgemäß zusammenarbeitet.

3. **End-to-End-Tests (E2E)**  
   Simulieren vollständige Benutzerabläufe, wie Anmeldeprozesse, Kaufvorgänge oder andere typische Anwendungsszenarien. Diese Tests stellen sicher, dass die Anwendung in ihrem Gesamtkontext auf Benutzeraktionen korrekt reagiert. Aufgrund ihres Aufwands für Erstellung und Wartung sollten sie auf die kritischsten Szenarien beschränkt werden.

#### 3. Nicht-Funktionale Tests

1. **Sicherheit**  
   Ziel ist es, Schwachstellen in Abhängigkeiten und Paketen zu entdecken sowie die korrekte Verschlüsselung und Handhabung sensibler Daten zu gewährleisten. Umfasst Penetrationstests, Abhängigkeits-Audits und Authentifizierungs-/Autorisierungsprüfungen.

2. **Performance**  
   Bewerten Metriken wie Time To First Byte (TTFB), die Fähigkeit der Anwendung, gleichzeitig hohe Last zu bewältigen, sowie die Berechnung der Betriebskosten anhand der Nutzung. Diese Tests sind essenziell, um eine optimale Performance in produktiven Umgebungen mit hoher Konkurrenz sicherzustellen.

3. **Usability**  
   Analysieren die Interaktion realer Nutzer mit der Anwendung, um mögliche Schwierigkeiten oder Barrieren bei der Navigation zu identifizieren. Methoden umfassen Usability-Studien, Benutzertests und die Auswertung von Interaktionsmetriken.

4. **Accessibility**  
   Überprüfen, ob die Benutzeroberfläche für Menschen mit Behinderungen zugänglich ist, indem sichergestellt wird, dass alle visuellen Elemente korrekt gerendert werden und Alternativen wie Tastaturnavigation oder Screenreader-Unterstützung vorhanden sind. Ebenfalls relevant sind Farbkontrast und semantische HTML-Struktur.

### Hilfsmittel

#### Grundlegende Voraussetzungen

- **Tiefgehende Kenntnisse der Programmiersprache**, die getestet werden soll.
- **Vertrautheit mit dem bestehenden Code** sowie der Architektur der Anwendung.
- **Verständnis der zu testenden Funktionalitäten**, einschließlich Anforderungen und Akzeptanzkriterien.

#### Empfohlene Software

1. **Unit-Tests**

   - **Jasmine**: Testframework für JavaScript.
   - **Jest**: Von Facebook entwickeltes Testing-Tool, weit verbreitet in React- und Node.js-Projekten.
   - **Mocha + Chai**: Kombination aus Test-Runner (Mocha) und Assertion-Bibliothek (Chai) für Node.js.

2. **Funktionale Tests**

   - **Supertest**: Bibliothek zum Senden von HTTP-Anfragen und Validieren von Antworten in Node.js-Umgebungen.

3. **E2E-Tests**
   - **Selenium**: Framework zur Automatisierung von Webbrowsern.
   - **Puppeteer**: High-Level-Bibliothek zur Steuerung von Chrome/Chromium über das DevTools-Protokoll.
   - **Protractor**: Spezielle Lösung für Angular-Projekte.
   - **Playwright**: Plattformübergreifendes Tool für zuverlässige Web-Tests (Chrome, Firefox, Safari).

## Jest

Jest ist ein von Facebook entwickeltes Framework für Unit-Tests, das auf Geschwindigkeit, Erweiterbarkeit und einfache Konfiguration ausgelegt ist. Die wichtigsten Merkmale sind:

1. **Konfiguration und Einstellungen**

   - Ermöglicht das Definieren von Konfigurationsdateien (`jest.config.js`), um Suchmuster, Verzeichnisausschlüsse, Code-Transformationen (z. B. Babel) und Modul-Mapping festzulegen.

2. **Hooks (beforeEach, afterEach, etc.)**

   - Bietet Lifecycle-Funktionen, um die Umgebung vor jedem Test vorzubereiten (`beforeEach`) und nach der Ausführung aufzuräumen (`afterEach`). Außerdem stehen `beforeAll` und `afterAll` für Aktionen auf Suite-Ebene zur Verfügung.

3. **Ausnahmebehandlung**

   - Unterstützt Assertions, die erwarten, dass bestimmte Funktionen Ausnahmen auslösen (`toThrow()`), und fängt asynchrone Fehler ab.

4. **Testing von Promises**

   - Erleichtert die Validierung aufgelöster und abgelehnter Promises mittels `resolves` und `rejects` sowie der `async/await`-Syntax.

5. **Mocking von Modulen und Funktionen**

   - Erlaubt das Simulieren von Abhängigkeiten und das Ersetzen realer Implementierungen durch Mocks, um die getestete Einheit zu isolieren und das Verhalten externer Module zu kontrollieren.

6. **Code-Coverage**
   - Generiert Berichte, die anzeigen, welche Zeilen, Zweige und Funktionen während der Tests ausgeführt wurden. Dies hilft, die Effektivität der Tests zu quantifizieren und ungetestete Bereiche zu identifizieren.

## TDD (Test Driven Development)

### Definition

Test Driven Development (TDD) ist eine iterative Methodik, bei der automatisierte Tests geschrieben werden, bevor die tatsächliche Funktionalität implementiert wird. Der grundlegende Zyklus, bekannt als **Red–Green–Refactor**, besteht aus:

1. **Red**: Schreibe einen Test, der fehlschlägt (da die Funktionalität noch nicht existiert).
2. **Green**: Implementiere die minimal erforderliche Funktionalität, damit der Test erfolgreich besteht.
3. **Refactor**: Verbessere den Code, ohne sein Verhalten zu ändern, und stelle sicher, dass alle Tests weiterhin erfolgreich sind.

Dieser Zyklus wiederholt sich kontinuierlich bei jeder neuen Anforderung oder Änderung im System.

#### TDD-Gesetze (Robert C. Martin)

1. **Schreibe keinen Produktionscode, ohne zuvor einen Test zu schreiben, der fehlschlägt.**
2. **Schreibe nicht mehr als einen Unit-Test, der ausreicht, um einen einzelnen Fehler zu erzeugen.** (Selbst ein Kompilierungsfehler zählt als Fehler.)
3. **Schreibe nicht mehr Code, als unbedingt notwendig, damit der Test besteht.**

#### Zusätzliche Regeln

1. **Anforderungen der Funktionalität klar festlegen**: Ohne präzise Definitionen verliert der TDD-Prozess an Effektivität.
2. **Alle möglichen Fälle berücksichtigen** (inklusive Erfolgs- und Fehlerfälle) innerhalb der Akzeptanzkriterien.
3. **Jeden Test so gestalten, dass nur die Logik der getesteten Einheit überprüft wird**, und bei Bedarf Mocks verwenden, um externe Abhängigkeiten zu isolieren.
4. **Genau bestimmen, welcher Aspekt in jedem Test überprüft wird**, und vermeiden, mehrere Kriterien in einem Test zu bündeln.
5. **Die Anzahl der Tests ist nicht vorhergegeben**, sondern richtet sich nach den Szenarien, die die implementierte Funktionalität abdecken.

#### SOLID-Prinzipien im TDD

- **S – Single Responsibility Principle**: Jede Klasse oder jedes Modul sollte nur eine einzige Verantwortung haben.
- **O – Open/Closed Principle**: Code sollte erweiterbar sein, ohne dass bestehender Code verändert werden muss.
- **L – Liskov Substitution Principle**: Jeder abgeleitete Typ muss den Basistyp ersetzen können, ohne das korrekte Verhalten des Programms zu beeinträchtigen.
- **I – Interface Segregation Principle**: Eine Klasse sollte nicht gezwungen werden, von Schnittstellen zu abhängen, die sie nicht verwendet.
- **D – Dependency Inversion Principle**: Implementierungsdetails sollten von Abstraktionen abhängen und nicht umgekehrt.

#### Vorteile von TDD

- Verbessert die Gesamtqualität des Codes, da Entwickler gezwungen werden, Anforderungen vor der Implementierung zu bedenken.
- Fördert ein an Anforderungen ausgerichtetes Design und reduziert unnötige Funktionalitäten.
- Führt zu einfacherem Code, der sich auf minimale, funktionsfähige Anforderungen konzentriert.
- Reduziert Redundanzen und erleichtert die frühzeitige Fehlererkennung.
- Verringert die Zeit für Debugging und steigert die Produktivität des Teams.
- Trägt zu einem Codebestand bei, der weniger anfällig für zukünftige Fehler ist.

#### Nachteile von TDD

- Erfordert eine steile Lernkurve für Entwickler, die mit dieser Methodik nicht vertraut sind.
- Es besteht die Gefahr, den Gesamtüberblick zu verlieren, wenn man sich zu sehr auf Unit-Tests und Einzelfälle konzentriert.
- Wenn Anforderungen nicht klar definiert sind, können Tests fehlerhaft erstellt werden.
- Die Integration externer Services (Datenbanken, APIs) kann komplex werden, wenn Mocks und Stubs nicht richtig gehandhabt werden.
- Die Anwendung im Frontend kann schwieriger sein, da dort oft die Benutzeroberfläche und nicht nur die Geschäftslogik im Fokus steht.
- Erfordert zu Projektbeginn einen erheblichen Zeit- und Ressourceneinsatz.

## Verwandte Ansätze

### BDD (Behavior Driven Development)

Behavior Driven Development (BDD) erweitert die TDD-Konzepte durch eine gemeinsame Sprache zwischen technischen Teams und Fachbereichen. Akzeptanztests, die in einem natürlichen Sprachstil (z. B. Gherkin) geschrieben sind, beschreiben das erwartete Verhalten des Systems aus Anwendersicht.

- **Hauptwerkzeuge**:

  - **Cucumber**: Framework, das Gherkin-Dateien interpretiert, um automatisierte Tests durchzuführen.
  - **Gherkin**: Klartext-Syntax, die auf Schlüsselwörtern (Given, When, Then) basiert, um Verhaltensszenarien zu beschreiben.

- **Vorteile**:

  1. Definiert Verhaltensweisen statt spezifischer Tests, was die Zusammenarbeit zwischen Entwicklern, Testern und Fachanwendern fördert.
  2. Verbessert Kommunikation und gegenseitiges Verständnis durch die Verwendung einer natürlichen Sprache zur Beschreibung von Funktionen.
  3. Bietet eine geringere Lernkurve als reines TDD, da der Fokus nicht nur auf Unit-Tests liegt.
  4. Erleichtert die Einführung agiler Methoden, indem es einen Rahmen zur Definition von Akzeptanzkriterien vor der Implementierung bereitstellt.
  5. Ermöglicht einen Konsens über zu entwickelnde Funktionen, bevor Code geschrieben wird.

- **Nachteile**:
  1. Das Risiko, relevante Fälle auszulassen, besteht, wenn Verhaltensszenarien nicht umfassend definiert sind.
  2. Die Pflege von Verhaltenstests für Datenbanken und umfangreiche Frontend-Anwendungen kann komplex sein.
  3. Erfordert einen mittelhohen bis hohen Zeitaufwand für das Schreiben und Warten von Gherkin-Skripten.
  4. Benötigt eine ständige Kommunikation zwischen Entwicklern, Testern und Kunden, was Teams ohne dieses Vorgehen ausbremsen kann.

### ATDD (Acceptance Test Driven Development)

Acceptance Test Driven Development (ATDD) ähnelt BDD, legt jedoch größeren Wert darauf, dass von Beginn des Projekts an die richtigen Ziele verfolgt werden.

- **Hauptziel**: Sicherstellen, dass das Team nur an notwendigen Funktionen arbeitet und unnötige Komponenten vermieden werden.
- **Vorteile**:

  1. Fördert ein flexibles Design, das für zukünftige Änderungen gewappnet ist, ohne die Lösung an UI oder Datenbank zu binden.
  2. Bietet frühzeitig Feedback zum Erreichen der Projektziele.
  3. Ermöglicht dem Product Owner, Akzeptanzkriterien zu prüfen und zu validieren, wodurch das Vertrauen in das Entwicklungsteam steigt.

- **Vorgehensweise**: Basierend auf der Definition von Akzeptanztests, die das gewünschte Systemverhalten in verständlicher Form für alle Beteiligten beschreiben. Nach deren Validierung implementiert das Entwicklungsteam die Funktionalität iterativ und stellt sicher, dass diese Tests bestanden werden, bevor neue Aufgaben begonnen werden.

<!-- ------------------------------------------------------------------------------------------- -->

## Projektdetails

TODO

<!-- ------------------------------------------------------------------------------------------- -->

## Verwendete Technologien

### Sprachen

- **JavaScript**: Um der Website Interaktivität und dynamische Funktionen hinzuzufügen, wodurch die Benutzererfahrung durch Funktionen wie Formularvalidierung, Animationen und Event-Handling verbessert wird.

### Abhängigkeiten

- babel
- jest
- axios

<!-- ------------------------------------------------------------------------------------------- -->

## Installations- und Gebrauchsanweisungen

### Softwareanforderungen

- **[Git](https://git-scm.com/downloads)** (getestet mit Version **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (getestet mit Version **1.99.0**)

### Klonen des Repositories

```bash
`git clone https://github.com/pablo-sch/keepcoding-09-TDD-with-javascript.git`
```

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

<!-- ------------------------------------------------------------------------------------------- -->

## Projektvorschau

Keine

<!-- ------------------------------------------------------------------------------------------- -->

## Beiträge und Lizenzen

Dieses Projekt enthält keine externen Beiträge oder Lizenzen.
