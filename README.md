### Formulario Prueba

Este proyecto es un ejemplo de un formulario utilizando React, Formik, Yup y Chakra UI.

## Video Ejemplo

https://tinyurl.com/29scoesh

## Tecnologías Utilizadas

-   **React:** Biblioteca de JavaScript para construir interfaces de usuario.
-   **Formik:** Librería para gestionar formularios en React de manera sencilla.
-   **Yup:** Librería para la validación de esquemas y datos.
-   **ChakraUI:** Librería de componentes de UI para React que permite crear interfaces accesibles y personalizables.
-   **Redux:** Biblioteca para la gestión de los estados de la aplicación de manera centralizada.

## Instalación y Configuración

1. Clona el repositorio

```bash
   ` git clone https://github.com/tuusuario/formulario-prueba.git`
```

2. Navega al directorio del proyecto:

```bash
   cd formulario-prueba
```

3. Instala las dependencias

```bash
   npm Install
```

4. Inicia el servidor>

```bash
npm run dev
```

## Partes del proyecto

# FormExample.js

Este componente contiene el formulario principal que utiliza Formik para la gestión del estado y Yup para la validación de los campos. Chakra UI se utiliza para estilizar los componentes del formulario.

# ChakraTheme.js

Este archivo contiene la configuración del tema personalizado para Chakra UI, centralizando estilos para evitar repetición y mantener una apariencia coherente en toda la aplicación.

# formService.js, formSlice.js y store.js

En este proyecto, he optado por implementar Redux para gestionar estados de forma dinámica, estp para simular de una mejor manera una aplicacion real. Las funciones de formService.js manipulan datos en localStorage, simulando interacciones API, y de hecho podrían adaptarse fácilmente para interactuar con una API real.

**formService.js:** Administra la persistencia de datos de formularios utilizando localStorage, permitiendo guardar, recuperar y manipular formularios localmente.

**formSlice.js:** En Redux, maneja el estado específico de los formularios con acciones para agregar, actualizar y eliminar formularios, facilitando la gestión dinámica de datos.

**store.js:** Centraliza y configura el estado global de la aplicación en Redux, combinando slices de estado y definiendo middlewares para acciones asíncronas, proporcionando una única fuente de verdad para los datos de la aplicación.

# Header

He creado un header que incluye un navbar con tres enlaces. Cuando la resolución cambia a la de un dispositivo móvil, el navbar se oculta y aparece un menú hamburguesa funcional.
