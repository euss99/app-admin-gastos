# Gestión de Gastos Personal

Esta es una aplicación para administrar los gastos personales de una persona. Con esta herramienta, podrás llevar un registro detallado de tus gastos, categorizarlos y ver de manera visual el porcentaje de gastos en cada categoría.

Se han reforzado varios conceptos importantes de Vue.js y la Composition API, al igual que en proyectos anteriores, y se han agregado nuevas características para mejorar la experiencia del usuario. A continuación, se explicaran cómo se aplicaron cada uno de los conceptos y las características adicionales:

## Conceptos y Características Reforzadas:

### 1. Creación de Componentes

Siguiendo las buenas prácticas, se han utilizado la estructura de componentes de Vue.js para dividir la interfaz de usuario en componentes reutilizables y fáciles de mantener. Los componentes en ExpenseManager son:

- **Alerta**: Muestra una alerta con un mensaje personalizado según el tipo de alerta utilizando slots.
- **Presupuesto**: Componente inicial donde se establece el presupuesto disponible para administrar los gastos.
- **ControlPresupuesto**: Muestra la gráfica de pastel que representa visualmente el porcentaje de gastos en cada categoría, así como el presupuesto, el dinero disponible y el gasto realizado. También incluye un botón para resetear la aplicación.
- **Filtros**: Permite filtrar los gastos por categoría utilizando un select.
- **Gasto**: Representa un gasto con detalles como la imagen de la categoría, nombre, monto y fecha.
- **Modal**: Componente modal para crear o editar un gasto.

### 2. Custom Events

Se han utilizado custom events para facilitar la comunicación entre los componentes. Por ejemplo, cuando se agrega un nuevo gasto, se emite un evento personalizado para actualizar la lista de gastos y recalcular el porcentaje de gastos en cada categoría.

### 3. Directivas

En ExpenseManager, se ha empleado directivas de Vue.js como `v-if`, `v-for`, `v-model`, etc. para mostrar y manipular dinámicamente elementos del DOM según el estado de la aplicación y para iterar sobre listas de gastos y categorías.

### 4. State y Emits

Para mantener la coherencia de la interfaz y el estado de la aplicación, se han utilizado el estado del componente (data) para almacenar información relevante, como los gastos y las categorías. Asimismo, se han emitido eventos personalizados (emits) para notificar cambios en el estado y permitir que otros componentes respondan en consecuencia.

### 5. Computed

Se ha utilizado computed properties para calcular y derivar datos en base a la información almacenada en el estado del componente. Utilizamos computed properties para obtener el porcentaje de gastos en cada categoría y mostrarlo en la gráfica de pastel.

### 6. Métodos de los Arrays

Se ha utilizado métodos de arrays como `filter` y `reduce` para realizar búsquedas y transformaciones sobre la lista de gastos y categorías. Estos métodos nos permiten manipular los datos de manera efectiva y obtener información relevante.

### 7. Local Storage

Para mantener la persistencia de datos, se han utilizado el Local Storage del navegador. De esta manera, los datos de los gastos y las categorías se mantienen incluso si el usuario cierra y vuelve a abrir la aplicación.

### 8. Watch

Se han implementado la opción `watch` de Vue.js para monitorear cambios en el estado y realizar acciones específicas en respuesta a estos cambios. Por ejemplo, se pueden vigilar los cambios en el presupuesto para recalcular el dinero disponible y el porcentaje de gastos.

### 9. Props

Utilizamos props para pasar datos desde el componente principal a los componentes hijos. Por ejemplo, en el componente `Gasto`, utilizamos props para mostrar los detalles de cada gasto.

## Dependencia Adicional

Se ha incorporado la dependencia `vue3-circle-progress` para agregar una gráfica de pastel interactiva y visualmente atractiva que representan el porcentaje de gastos.

## Mobile First

Se ha aplicado el enfoque "Mobile First" en el diseño, asegurándonos de que la aplicación sea completamente funcional y estéticamente agradable en dispositivos móviles y pantallas más grandes.

## Helpers

En la carpeta `helpers`, se han incluido funciones reutilizables que mejoran la funcionalidad y la mantenibilidad de la aplicación.

## Instalación y Uso

Para utilizar ExpenseManager en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/euss99/app-admin-gastos.git`
2. Navega a la carpeta del proyecto: `cd app-admin-gastos`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm run serve`
5. Abre tu navegador y visita: `http://localhost:5173`
