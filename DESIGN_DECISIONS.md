# Design Decisions

Este documento resume las principales decisiones técnicas y de diseño tomadas durante el desarrollo del **Adoption Report Dashboard**.

---

## Arquitectura y Componentes

El proyecto utiliza una combinación de **Feature-based architecture** y **Atomic Design**, adaptada al alcance del dashboard.

- La lógica de negocio, obtención y transformación de datos se concentra en la capa de `features`.
- Los componentes UI (`atoms` y `molecules`) se limitan a representar información ya procesada.
- Se decidió **no incluir una capa de organisms**, ya que la complejidad del dashboard no lo requería.  
  Esta decisión evitó sobrearquitectura y mantuvo una estructura más clara y mantenible.

Las páginas actúan como orquestadores, conectando datos y componentes sin contener lógica de negocio.

---

## Diseño y UX

El desarrollo del dashboard se basó en un diseño previo realizado en Figma, que sirvió como guía para la jerarquía visual, distribución de la información y consistencia UI.

🔗 **Diseño base en Figma:**  
[Ver diseño en Figma](https://www.figma.com/design/TZxh6VRzyd2ls9QVdnIx9q/adoption_report?node-id=0-1&t=YQZ91KMxZ2CRnOEW-1)

El diseño fue adaptado durante la implementación para asegurar:
- claridad en la lectura de métricas,
- correcta jerarquía visual,
- y una experiencia fluida en distintos tamaños de pantalla.

---

## Herramientas Elegidas

- **Next.js (App Router)**: Base del proyecto, con soporte moderno para layouts y escalabilidad.
- **React + TypeScript**: Componentes tipados, predecibles y fáciles de mantener.
- **Recharts**: Librería declarativa para visualización de datos, adecuada para dashboards.
- **SCSS + Tailwind CSS**: Combinación de estilos estructurales y utilidades rápidas.
- **json-server**: Backend mock para simular una API REST real sin introducir complejidad innecesaria.

---

## Alternativas Evaluadas

- **Backend real (Prisma, Supabase, Firebase)**: descartado por exceder el alcance del desafío.
- **D3.js**: descartado por su bajo nivel y mayor complejidad para este caso.
- **Lógica en componentes UI**: descartada para mantener separación de responsabilidades.

---

## Criterios de UX

- **Jerarquía visual clara**: KPIs visibles desde el primer vistazo.
- **Legibilidad**: gráficos renderizados como líneas (sin áreas) para reducir ruido visual.
- **Consistencia**: uso coherente de colores, etiquetas y métricas.
- **Escaneabilidad**: información presentada en bloques breves y comprensibles.

---

## Conclusión

Las decisiones priorizan claridad, mantenibilidad y experiencia de usuario, manteniendo la solución alineada con el alcance del desafío y preparada para evolucionar sin reescrituras significativas.
