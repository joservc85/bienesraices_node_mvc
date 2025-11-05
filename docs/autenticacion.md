# Autenticación

## Método
- [ ] **JWT** (header `Authorization: Bearer <token>`)  
- [ ] **Sesiones/cookies**  
*(marca la opción real y elimina la otra)*

## Registro / Login
- `POST /auth/register` → crea usuario
- `POST /auth/login` → devuelve token/crea sesión

## Middleware
- `authRequired` → bloquea rutas sin token/sesión
- `roleRequired('admin')` → control RBAC (si aplica)

## Seguridad
- Hash con bcrypt/argon2
- Expiración del token: **X horas**
- Refresh tokens (si aplica)
- Rate limiting + Helmet
