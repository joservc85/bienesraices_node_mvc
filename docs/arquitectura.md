# Arquitectura

## Visión general
Aplicación **Node.js + Express** con patrón **MVC**. Vistas en **Pug**, estilos con **Tailwind CSS** (Webpack/PostCSS).

## Capas
- **Routes** → definen endpoints públicos
- **Controllers** → orquestan lógica de cada endpoint
- **Models** → acceso a datos (ORM/queries)
- **Middleware** → auth, validaciones, errores
- **Views (Pug)** → render del lado servidor

## Flujo de petición
Cliente → Nginx (reverse proxy) → Express (routes) → Controller → Model/DB → View/JSON → Respuesta

## Dependencias clave
- Express, Pug, Tailwind, Webpack/PostCSS  
- (Añade aquí ORM/DB reales: Sequelize/Prisma/pg/mysql2)
