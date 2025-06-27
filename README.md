# Test Practico CG
## Tecnologías utilizadas

- Angular 17+ (con componentes standalone)
- SCSS (estilos modulares y responsivos)
- RxJS (BehaviorSubject)
- HTML + TypeScript (arquitectura por componentes)
- FormsModule (para formularios reactivos simples)

## Lógica y decisión de arquitectura
He optado por una arquitectura basada en componentes standalone, como recomienda Angular desde la versión 17. Esto permite que cada componente sea independiente, fácilmente testeable, y reutilizable sin depender de NgModules tradicionales.

Separé la lógica en los siguientes componentes:

- **`budget-creator`**: componente principal, orquesta todo el flujo.
- **`product-table-model`**: modal para agregar productos.
- **`product-list`**: lista visual de productos agregados.
- **`summary`**: visualización del total del presupuesto.

Además, centralicé el estado del presupuesto en un servicio (`ProductService`) que expone la data mediante `BehaviorSubject`, permitiendo que múltiples componentes se sincronicen de forma reactiva.

---

## Propuesta Visual

### ¿Qué mejorarías del flujo actual?

- El flujo original tiene muchos pasos desconectados visualmente.
- La acción de agregar productos está semi-oculta en una tabla modal poco clara.
- La jerarquía visual no refleja la importancia de los productos agregados ni del total del presupuesto.

### ¿Cómo lo harías más claro, usable o eficiente?

- Simplifiqué el flujo a una sola pantalla, con todas las acciones visibles:
  - Comentario del presupuesto
  - Agregado de productos
  - Lista y total visibles en todo momento
- Separé el modal como un componente reusable y flotante, con tabla legible.
- Agregué estados vacíos (UX friendly) y botones claros.

### Diseño propuesto

- Fondo blanco con sombras suaves y bordes redondeados para jerarquía visual.
- Paleta sobria con azul principal y acentos en verde/rojo para acciones.
- Estilo limpio y adaptable, usable en mobile y desktop.

## Parte 2 – Análisis Crítico

### Problemas detectados
- La jerarquía visual no es clara: el mensaje más importante (la notificación al dueño) 
  se pierde entre los mensajes técnicos.
- Los botones de acción están muy juntos y no tienen etiquetas, solo íconos.
- El botón "VER" es ambiguo y no indica claramente que abre una orden de trabajo.

### Mejoras propuestas
- Separar claramente los mensajes automáticos de los mensajes de técnicos.
- Añadir texto a los íconos ("Agregar imagen", "Agregar evento").
- Mejorar la jerarquía del botón "VER" con color o ícono distintivo.
- En generar, agregar cambios de color para mejorar la diferenciacion de los botones.