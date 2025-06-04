# Ejercicio de Test-Driven Development con JavaScript

**Proyectos KeepCoding - Web 18**  
Consulta la lista completa de repositorios y descripciones en [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Selecciona tu idioma

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Objetivo del proyecto

Con el fin de demostrar los conocimientos adquiridos en clases virtuales, este proyecto consiste en realizar ejercicios de testing mediante la dependencia “jest”.

<!-- ------------------------------------------------------------------------------------------- -->

## Conocimientos Aprendidos y Desarrollados

### Pruebas (Testing)

#### Definición y Objetivos

Las pruebas de software constituyen un proceso fundamental cuyo propósito principal es identificar errores (bugs) antes de que el código se despliegue en producción. Su implementación persigue los siguientes objetivos:

1. **Detección temprana de errores**: Permitir la identificación de defectos durante las primeras etapas del ciclo de desarrollo, con el fin de minimizar el coste y el impacto de las correcciones.
2. **Incremento de la confianza en el código**: Proporcionar una mayor seguridad sobre la estabilidad y funcionalidad del software, aunque ningún conjunto de pruebas puede garantizar una ausencia total de fallos.
3. **Apoyo en la toma de decisiones de despliegue**: Facilitar la evaluación de si el software está listo para incorporar nuevas funcionalidades o si, por el contrario, es preferible retrasar el lanzamiento para corregir incidencias.
4. **Fomento de la calidad y la limpieza del código**: Incentivar a los desarrolladores a escribir código modular y bien estructurado, ya que un código más legible y organizado resulta más sencillo de probar y de mantener.

#### Papel en la Gestión de Proyectos (PM) y DevOps

Las pruebas de software deben integrarse en cualquier metodología de desarrollo, ya sea Waterfall, Agile o DevOps. En particular, dentro de un entorno DevOps, las pruebas forman parte de un ciclo continuo de entrega (conocido como “loop infinito”) y suelen automatizarse para garantizar despliegues rápidos y fiables.

- En metodologías **Waterfall**, se planifican fases de prueba tras la finalización de cada etapa de diseño o desarrollo.
- En metodologías **Agile**, las pruebas se incorporan iterativamente a cada sprint, fomentando la retroalimentación constante.
- En entornos **DevOps**, la automatización de pruebas permite validar el software con cada cambio en el repositorio, manteniendo la calidad a lo largo de todo el ciclo de vida.

### Tipos de Pruebas

#### 1. Pruebas Externas (End-to-End Visuales)

1. **Manuales**  
   Consisten en que un tester sigue un conjunto de pasos predefinidos y verifica visualmente el correcto funcionamiento de la interfaz de usuario. Este enfoque permite detectar problemas de usabilidad y de flujo que, a veces, escapan a las pruebas automatizadas.

2. **Automáticas**  
   Se basa en grabar y reproducir interacciones del usuario con la aplicación (clics, entradas de texto, navegación, etc.). Estas pruebas se programan para ejecutarse periódicamente y validar que la interfaz mantiene su comportamiento esperado tras cambios en el código.

#### 2. Pruebas Funcionales

1. **Unitarias**  
   Evalúan unidades de código individuales (funciones, clases o módulos) de forma aislada. Cada prueba debe comprobar un único aspecto del comportamiento de la unidad bajo condiciones controladas.

2. **De Integración**  
   Verifican que varios componentes, módulos o servicios funcionen correctamente en conjunto. Por ejemplo, en el contexto de un backend, consisten en realizar peticiones HTTP a la API y validar las respuestas recibidas, asegurando que cada capa (controlador, servicio, base de datos) interactúa según lo previsto.

3. **End-to-End (E2E)**  
   Simulan flujos completos de usuario, como inicio de sesión, procesos de compra o cualquier otro recorrido típico en la aplicación. Estas pruebas garantizan que la aplicación, en su contexto global, responde adecuadamente a las acciones del usuario. Debido a su complejidad para su creación y mantenimiento, se recomienda limitar su uso a los escenarios más críticos.

#### 3. Pruebas No Funcionales

1. **Seguridad**  
   Buscan detectar vulnerabilidades en dependencias y paquetes, así como garantizar el correcto cifrado y manejo de datos sensibles. Incluyen análisis de penetración, auditorías de dependencias y pruebas de autenticación y autorización.

2. **Rendimiento**  
   Evalúan métricas como el Time To First Byte (TTFB), la capacidad de la aplicación para soportar carga simultánea y el cálculo de costes de operación en función del uso. Estas pruebas son esenciales para garantizar un desempeño óptimo en entornos de producción con alta concurrencia.

3. **Usabilidad**  
   Analizan la interacción de usuarios reales con la aplicación, con el fin de identificar posibles dificultades o barreras en la navegación. Se pueden emplear estudios de usabilidad, pruebas con usuarios y análisis de métricas de interacción.

4. **Accesibilidad**  
   Verifican que la interfaz sea usable para personas con discapacidad, asegurando que todos los elementos visuales estén correctamente renderizados y que existan alternativas para navegación mediante teclado o lectores de pantalla. También se comprueba el contraste de colores y la adecuación semántica del HTML.

### Herramientas de Apoyo

#### Requisitos Básicos

- **Conocimiento profundo del lenguaje de programación** sobre el que se va a trabajar.
- **Familiaridad con el código existente**, así como con la arquitectura de la aplicación.
- **Comprensión de las funcionalidades a testar**, incluyendo requisitos y criterios de aceptación.

#### Software Recomendado

1. **Pruebas Unitarias**

   - **Jasmine**: Framework de pruebas para JavaScript.
   - **Jest**: Herramienta de testing desarrollada por Facebook, muy usada en proyectos React y Node.js.
   - **Mocha + Chai**: Combinación de runner (Mocha) y librería de aserciones (Chai) para Node.js.

2. **Pruebas Funcionales**

   - **Supertest**: Biblioteca para realizar peticiones HTTP y validar respuestas en entornos Node.js.

3. **Pruebas E2E**
   - **Selenium**: Framework que permite automatizar navegadores web.
   - **Puppeteer**: Librería de alto nivel para controlar Chrome/Chromium mediante el Protocolo DevTools.
   - **Protractor**: Solución específica para proyectos Angular.
   - **Playwright**: Herramienta multiplataforma para pruebas confiables en entornos web (Chrome, Firefox, Safari).

## Jest

Jest es un framework de pruebas unitarias desarrollado por Facebook, diseñado para ser rápido, extensible y fácil de configurar. Sus características principales incluyen:

1. **Configuración y Ajustes**

   - Permite definir archivos de configuración (`jest.config.js`) para establecer patrones de búsqueda, exclusión de directorios, transformaciones de código (por ejemplo, Babel) y mapeo de módulos.

2. **Hooks (beforeEach, afterEach, etc.)**

   - Ofrece funciones de ciclo de vida para preparar el entorno antes de cada prueba (`beforeEach`) y para realizar tareas de limpieza tras su ejecución (`afterEach`). También cuenta con `beforeAll` y `afterAll` para acciones a nivel de suite de pruebas.

3. **Manejo de Excepciones**

   - Soporta aserciones que esperan que determinadas funciones lancen excepciones (`toThrow()`) y captura de errores asincrónicos.

4. **Testeo de Promesas**

   - Facilita la validación de promesas resueltas y rechazadas usando métodos como `resolves` y `rejects`, así como la sintaxis `async/await`.

5. **Mocking de Módulos y Funciones**

   - Permite simular dependencias y reemplazar implementaciones reales por duplicados (mocks), lo que hace posible aislar la unidad de prueba y controlar el comportamiento de módulos externos.

6. **Cobertura de Código (Coverage)**
   - Genera informes de cobertura que indican qué líneas, ramas y funciones han sido ejecutadas durante las pruebas. Esto ayuda a cuantificar la efectividad del conjunto de pruebas y a localizar áreas sin cobertura.

## TDD (Test Driven Development)

### Definición

El Desarrollo Guiado por Pruebas (Test Driven Development) es una metodología iterativa en la que se escriben pruebas automatizadas antes de implementar la funcionalidad. El ciclo básico, conocido como **Red–Green–Refactor**, consta de:

1. **Red**: Escribir una prueba que falle (ya que la funcionalidad aún no existe).
2. **Green**: Implementar la funcionalidad mínima necesaria para que la prueba pase satisfactoriamente.
3. **Refactor**: Mejorar el código sin modificar su comportamiento, asegurándose de que todos los tests continúen pasando.

Este ciclo se repite de forma contínua para cada nuevo requisito o cambio en el sistema.

#### Leyes del TDD (Robert C. Martin)

1. **No escribir código de producción sin antes escribir una prueba que falle.**
2. **No escribir más de una prueba unitaria suficiente para ocasionar un único fallo.** (Incluso un error de compilación se considera un fallo.)
3. **No escribir más código del estrictamente necesario para hacer pasar la prueba.**

#### Reglas Adicionales

1. **Especificar claramente los requisitos de la funcionalidad**: Sin una definición precisa, el proceso TDD pierde efectividad.
2. **Considerar todos los casos posibles** (incluyendo éxitos y errores) dentro de los criterios de aceptación.
3. **Diseñar cada prueba para verificar únicamente la lógica de la unidad en cuestión**, utilizando mocks cuando sea necesario para aislarla de dependencias externas.
4. **Determinar con claridad qué aspecto se desea probar en cada test**, evitando abarcar múltiples criterios en una sola prueba.
5. **La cantidad de pruebas no está predeterminada**, sino que depende de los escenarios que cubra la funcionalidad implementada.

#### Principios SOLID Aplicados en TDD

- **S – Single Responsibility Principle**: Cada clase o módulo debe tener una única responsabilidad.
- **O – Open/Closed Principle**: El código debe poder extenderse sin modificar su implementación existente.
- **L – Liskov Substitution Principle**: Cualquier tipo derivado debe poder sustituir a su tipo base sin alterar el comportamiento correcto del programa.
- **I – Interface Segregation Principle**: No obligar a una clase a depender de interfaces que no utiliza.
- **D – Dependency Inversion Principle**: Los detalles de implementación deben depender de abstracciones y no al revés.

#### Beneficios del TDD

- Mejora la calidad general del código, al obligar a pensar en los requisitos antes de escribir la implementación.
- Promueve un diseño centrado en requerimientos, reduciendo funcionalidades innecesarias.
- Genera código más simple y enfocado en la funcionalidad mínima viable.
- Reduce la redundancia y facilita la identificación de errores en fases tempranas.
- Disminuye el tiempo dedicado a la depuración y aumenta la productividad del equipo.
- Contribuye a una base de código menos propensa a incorporar defectos a futuro.

#### Contrapartidas del TDD

- Requiere una curva de aprendizaje pronunciada para desarrolladores inexpertos en esta metodología.
- Existe el riesgo de perder la visión global del proyecto al centrarse excesivamente en pruebas unitarias e casos concretos.
- Si los requisitos no están bien definidos, pueden surgir errores en la construcción de las pruebas.
- Puede resultar complejo integrar servicios externos (bases de datos, APIs) si no se manejan adecuadamente los mocks y stubs.
- Su adopción en el desarrollo frontend puede ser más difícil, dado que a menudo el foco de atención recae en la lógica del negocio y no en la interfaz de usuario.
- Requiere una inversión significativa de tiempo y recursos al inicio del proyecto.

## Aproximaciones Relacionadas

### BDD (Behavior Driven Development)

El Desarrollo Guiado por Comportamiento (Behaviour Driven Development) extiende los conceptos de TDD mediante un lenguaje compartido entre los equipos técnicos y las partes interesadas del negocio. Las pruebas de aceptación, escritas en un lenguaje de estilo natural (como Gherkin), describen el comportamiento esperado del sistema desde la perspectiva del usuario.

- **Herramientas principales**:

  - **Cucumber**: Framework que interpreta archivos en lenguaje Gherkin para realizar pruebas automatizadas.
  - **Gherkin**: Sintaxis de texto plano basada en palabras clave (Given, When, Then) para describir escenarios de comportamiento.

- **Ventajas**:

  1. Define comportamientos en lugar de pruebas específicas, lo que favorece la colaboración entre desarrolladores, testers y usuarios de negocio.
  2. Mejora la comunicación y el entendimiento mutuo al utilizar un lenguaje natural para describir funcionalidades.
  3. Presenta una curva de aprendizaje menor que TDD puro, dado que no se centra solamente en pruebas unitarias.
  4. Facilita la adopción de metodologías ágiles, al proporcionar un marco de trabajo para la definición de criterios de aceptación antes de comenzar la implementación.
  5. Permite alcanzar un consenso sobre las funcionalidades a desarrollar antes de escribir código.

- **Inconvenientes**:
  1. Existe el riesgo de omitir casos relevantes si no se definen exhaustivamente los escenarios de comportamiento.
  2. Resulta más complejo mantener pruebas de comportamiento para bases de datos y aplicaciones con interfaces gráficas ricas (frontend).
  3. Requiere una inversión de tiempo media–alta para la redacción y mantenimiento de scripts en Gherkin.
  4. Demanda comunicación constante entre los distintos perfiles (desarrolladores, testers y clientes), lo cual puede ralentizar la dinámica de equipos poco acostumbrados a este enfoque.

### ATDD (Acceptance Test Driven Development)

El Desarrollo Guiado por Pruebas de Aceptación (Acceptance Test Driven Development) se asemeja a BDD, pero con un énfasis mayor en garantizar que se cumplan los objetivos correctos desde la fase inicial del proyecto.

- **Objetivo principal**: Asegurar que el equipo trabaje únicamente en funcionalidades necesarias, evitando esfuerzos en componentes innecesarios.
- **Ventajas**:

  1. Promueve un diseño flexible y preparado para cambios futuros, sin condicionar la solución a la interfaz de usuario o la base de datos.
  2. Proporciona retroalimentación temprana sobre el cumplimiento de los objetivos del proyecto.
  3. Permite al Product Owner revisar y validar los criterios de aceptación, aumentando la confianza en el equipo de desarrollo.

- **Modo de operación**: Se basa en la definición de pruebas de aceptación que describen el comportamiento deseado del sistema de forma comprensible para todos los implicados. Una vez validadas, el equipo de desarrollo implementa la funcionalidad de forma iterativa, asegurándose de pasar dichas pruebas antes de continuar con nuevas tareas.

<!-- ------------------------------------------------------------------------------------------- -->

## Detalles del proyecto

TODO

<!-- ------------------------------------------------------------------------------------------- -->

## Tecnologías utilizadas

### Lenguajes

- **JavaScript**: para agregar interactividad y características dinámicas al sitio web, mejorando la experiencia del usuario con funcionalidades como validación de formularios, animaciones y manejo de eventos.

### Dependencias

- babel
- jest
- axios

<!-- ------------------------------------------------------------------------------------------- -->

## Instrucciones de instalación y uso

### Requisitos de software

- **[Git](https://git-scm.com/downloads)** (testeado en la versión **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (testeado en la versión **1.99.0**)

### Clonación del repositorio

- **Proyecto**

```bash
`git clone https://github.com/pablo-sch/keepcoding-09-TDD-with-javascript.git`
```

- **Demo**

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

<!-- ------------------------------------------------------------------------------------------- -->

## Vista previa del proyecto

Ninguna

<!-- ------------------------------------------------------------------------------------------- -->

## Contribuciones y licencias

Este proyecto no cuenta con contribuciones externas ni licencias.
