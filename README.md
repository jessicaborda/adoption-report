# Adoption Report - Dashboard de Adopción de Herramientas

Este proyecto es una aplicación web moderna construida con **Next.js** diseñada para visualizar datos de adopción y uso de herramientas dentro de una organización. Fue desarrollada como una prueba técnica para el puesto de Frontend Developer.

## 🚀 Características Principales

-   **Dashboard Interactivo**: Visualización de métricas clave (Executive Summary).
-   **Gráficos Dinámicos**: Implementación de gráficos de evolución utilizando **Recharts**.
-   **Arquitectura Escalable**: Organización basada en características (Feature-based architecture).
-   **Diseño Atómico**: Componentes modulares y reutilizables siguiendo los principios de Atomic Design.
-   **Estilos con SCSS**: Sistema de diseño basado en variables y módulos SCSS para un mantenimiento sencillo.
-   **Mock API**: Integración con un servidor de datos simulado mediante `json-server`.

## 🛠️ Tecnologías Utilizadas

-   **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
-   **Librería UI**: [React 19](https://react.dev/)
-   **Estilado**: [Sass (SCSS)](https://sass-lang.com/) y [Tailwind CSS](https://tailwindcss.com/)
-   **Gráficos**: [Recharts](https://recharts.org/)
-   **Servidor de Datos**: [JSON Server](https://github.com/typicode/json-server)
-   **Tipado**: [TypeScript](https://www.typescriptlang.org/)

## 📋 Requisitos Previos

Asegúrate de tener instalado:
-   [Node.js](https://nodejs.org/) (Versión 18 o superior)
-   npm, yarn, pnpm o bun

## ⚙️ Configuración e Instalación

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Ejecutar el servidor de datos (Mock API):**
    Este paso es fundamental ya que el dashboard consume datos de este servidor.
    ```bash
    npm run server
    ```
    El servidor correrá en `http://localhost:3001`.

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🏗️ Estructura del Proyecto

```text
├── app/                # Rutas y páginas de Next.js (App Router)
├── components/         # Componentes UI organizados (Atoms, Molecules, Organisms)
├── features/           # Lógica de negocio y componentes específicos por funcionalidad
├── lib/                # Utilidades y configuraciones compartidas
├── public/             # Archivos estáticos
├── server/             # Configuración del servidor mock (db.json)
├── styles/             # Variables globales y estilos base (SCSS)
└── package.json        # Dependencias y scripts
```

## 📄 Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo de Next.js.
-   `npm run server`: Inicia el servidor `json-server` para la API de prueba.
-   `npm run build`: Crea la versión de producción de la aplicación.
-   `npm run lint`: Ejecuta el linter para encontrar y corregir errores de código.
