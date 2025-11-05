# Base de datos

## Motor
PostgreSQL / MySQL / SQLite *(elige el real)*

## Esquema (resumen)
- `usuarios`: id, email, hash, rol, timestamps
- `propiedades`: id, titulo, precio, ubicacion, coords, estado, timestamps
- (añade tus tablas reales)

## Migraciones / Seeds
- Scripts en `seed/`
- Índices: compuestos para búsquedas (ej. `ubicacion, precio`)
