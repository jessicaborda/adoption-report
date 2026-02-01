# Adoption Report – Dashboard de Adopción de Herramientas

Este proyecto es una aplicación web moderna construida con **Next.js**, diseñada para visualizar datos de adopción y uso de herramientas dentro de una organización.  
Fue desarrollada como una **prueba técnica frontend**, con foco en arquitectura, experiencia de usuario y claridad en la visualización de datos.

---

## 🚀 Características Principales

- **Dashboard interactivo** con métricas clave de adopción (Executive Summary).
- **Visualización de evolución temporal** mediante gráficos construidos con **Recharts**.
- **Arquitectura escalable basada en features**, separando claramente lógica de negocio y UI.
- **Componentes modulares y reutilizables**, siguiendo principios de Atomic Design.
- **Sistema de estilos consistente** usando SCSS (variables y módulos) y utilidades de Tailwind CSS.
- **Mock API** mediante `json-server`, simulando un backend REST real.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **Librería UI**: [React 19](https://react.dev/)
- **Estilado**: [Sass (SCSS)](https://sass-lang.com/) y [Tailwind CSS](https://tailwindcss.com/)
- **Gráficos**: [Recharts](https://recharts.org/)
- **Servidor de Datos (Mock)**: [JSON Server](https://github.com/typicode/json-server)
- **Tipado**: [TypeScript](https://www.typescriptlang.org/)

---

## 🧠 Decisiones de Arquitectura

El proyecto utiliza una combinación de **Feature-based architecture** y **Atomic Design**, adaptada al alcance del dashboard.

- La lógica de negocio, transformación y agregación de datos vive en la capa de `features`.
- Los componentes UI reciben **datos ya procesados**, manteniéndose simples y predecibles.
- Se decidió **prescindir de la capa de organisms**, ya que las vistas no requerían una composición estructural compleja.  
  En este caso, el uso de *atoms* y *molecules* fue suficiente para representar correctamente las secciones del dashboard sin introducir sobrearquitectura.

Esta decisión prioriza claridad, mantenibilidad y foco en UX.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- npm, yarn, pnpm o bun

---

## ⚙️ Configuración e Instalación

### 1. Instalar dependencias
```bash
npm install


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
