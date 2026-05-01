# AGENTS.md - Reglas SRP (Senior Reliability Protocol)

## 🛡️ Seguridad NO Negociable

- NUNCA hardcodear secrets. Usar `process.env` con validación.
- Validar TODOS los inputs con Zod (o equivalente).
- NUNCA concatenar strings para queries SQL. Usar ORM/parametrizado.
- Manejo de errores: NUNCA exponer stack traces al cliente.
- Logs: No registrar passwords, tokens, o emails completos.
- Headers: Recordar usar Helmet y CORS restringido.

## 🏗️ Arquitectura y Estructura

- Separación estricta: Routes → Controllers → Services → Repositories.
- Todo el código en TypeScript (tipado estricto).
- Funciones menores a 30 líneas. Archivos menores a 300 líneas.
- Complejidad ciclomática ≤ 10 por función.

## 🧪 Testing y Calidad

- Tests unitarios con mocks para TODA nueva lógica de negocio.
- Tests de integración para endpoints críticos.
- Cobertura mínima del 80% en código nuevo.

## 📝 Formato y Commits

- Usar Conventional Commits (feat:, fix:, docs:, etc.)
- Siempre incluir JSDoc en funciones públicas.

## 🚫 Lo que NO Debes Hacer

- No usar `any` en TypeScript.
- No ignorar promesas (sin `void` o `catch`).
- No modificar archivos fuera del scope solicitado sin preguntar.
