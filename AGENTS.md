# AGENTS.md - Protocolo de Desarrollo para Knotech MX

---

## 🧱 Stack Tecnológico del Proyecto

- **Frontend:** Next.js
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **CMS:** Agility CMS
- **Hosting / Deploy:** Cloudflare Pages
- **Dominio / DNS:** Cloudflare
- **Control de versiones:** Git + GitHub

---

## 🎯 Objetivo del Proyecto

El objetivo principal es construir una página web informativa, visual, profesional y escalable para **Knotech MX** , enfocada en mostrar:

- Servicios de instalación de redes.
- CCTV y videovigilancia.
- Cableado estructurado.
- Configuración de racks.
- Antenas AP / redes WiFi.
- Soporte técnico.
- Soluciones tecnológicas para hogares, negocios y empresas.

Durante la primera etapa, el sitio debe mantenerse principalmente informativo.
En una segunda etapa, se podrá evaluar la integración de módulos adicionales, como catálogo, cotizador, tickets, punto de venta o panel administrativo.

---

## 🛡️ Seguridad No Negociable

- Nunca hardcodear claves, tokens, API keys, credenciales o secretos.
- Usar siempre variables de entorno mediante `.env.local`.
- No subir archivos `.env`, `.env.local`, claves privadas o credenciales al repositorio.
- Validar datos provenientes del CMS o formularios antes de usarlos.
- No exponer stack traces ni errores técnicos al usuario final.
- No registrar en consola información sensible como correos completos, tokens, contraseñas o datos personales.
- Usar HTTPS siempre que el sitio esté en producción.
- Mantener configuraciones seguras en Cloudflare, especialmente DNS, SSL/TLS y protección básica.

---

## 🏗️ Arquitectura y Estructura

El proyecto debe mantener una estructura clara, limpia y escalable.

Estructura sugerida:

```bash
src/
  app/
  components/
  lib/
  services/
  styles/
  types/
  utils/
public/
```

Reglas:

- Usar TypeScript en todo el proyecto.
- Evitar el uso de `any`.
- Separar lógica de presentación y lógica de datos.
- Los componentes deben ser reutilizables y fáciles de mantener.
- Las llamadas al CMS deben centralizarse en `lib/` o `services/`.
- Evitar archivos demasiado grandes.
- Mantener funciones pequeñas y claras.
- No mezclar lógica de negocio dentro de componentes visuales.
- Usar nombres descriptivos para archivos, funciones y componentes.

---

## 🧩 Frontend con Next.js

- Usar el App Router de Next.js salvo que exista una razón clara para usar Pages Router.
- Priorizar componentes server-side cuando sea conveniente.
- Usar componentes client-side solo cuando se requiera interactividad.
- Optimizar imágenes con `next/image`.
- Cuidar SEO básico en cada página.
- Definir metadata adecuada para título, descripción y redes sociales.
- Mantener diseño responsive desde el inicio.
- Priorizar rendimiento, accesibilidad y carga rápida.

---

## 🎨 Diseño y UI

El sitio debe transmitir una imagen:

- Tecnológica.
- Profesional.
- Moderna.
- Confiable.
- Clara para clientes no técnicos.

Reglas visuales:

- Usar Tailwind CSS.
- Mantener una paleta de colores coherente con la identidad de Knotech MX.
- Evitar saturar las secciones con demasiada información.
- Priorizar claridad sobre efectos innecesarios.
- Usar animaciones solo si aportan valor.
- Diseñar primero para móvil y después adaptar a escritorio.
- Cuidar contraste, legibilidad y jerarquía visual.

---

## 🗂️ CMS - Agility CMS

Agility CMS se usará como sistema de gestión de contenidos.

Debe entenderse como el backend de contenido del sitio, no necesariamente como un backend tradicional de negocio.

El CMS servirá para administrar:

- Textos del sitio.
- Imágenes.
- Servicios.
- Secciones informativas.
- Blog o noticias, si se agregan después.
- Información editable sin modificar código.

Reglas:

- No hardcodear contenido que deba ser editable desde el CMS.
- Modelar el contenido de forma clara y reutilizable.
- Usar slugs para páginas o servicios.
- Validar la respuesta del CMS antes de renderizar.
- Mantener tipos de TypeScript para las estructuras del CMS.
- No depender de IDs fijos si se puede usar slug o identificadores semánticos.
- Preparar el sitio para que el contenido pueda crecer sin rehacer la arquitectura.

---

## ☁️ Cloudflare

Cloudflare se usará para:

- Dominio.
- DNS.
- SSL/TLS.
- Hosting mediante Cloudflare Pages.
- Posibles funciones dinámicas futuras con Cloudflare Workers.

Reglas:

- El despliegue debe conectarse al repositorio de GitHub.
- La rama principal de producción será `main`.
- Cada push o merge a `main` puede disparar un deploy automático.
- Usar variables de entorno configuradas en Cloudflare Pages para producción.
- No guardar secretos directamente en el código.
- Revisar los previews antes de mandar cambios importantes a producción.
- Mantener SSL/TLS en modo seguro.

---

## 🔀 Git y GitHub

Todo el control de cambios del proyecto se manejará mediante Git y GitHub.

Repositorio oficial:

```bash
https://github.com/Rogilio/knotech-mx-web.git
```

### Flujo recomendado

No trabajar directamente sobre `main` para cambios grandes.

Usar ramas por funcionalidad:

```bash
git checkout -b feat/nombre-funcionalidad
```

Ejemplos:

```bash
feat/home-page
feat/services-section
feat/contact-form
fix/navbar-responsive
docs/update-readme
style/landing-layout
```

### Commits

Usar Conventional Commits:

```bash
feat: agregar sección de servicios
fix: corregir menú responsive
docs: actualizar instrucciones de instalación
style: ajustar diseño de hero principal
refactor: reorganizar componentes de servicios
chore: actualizar configuración del proyecto
```

### Reglas de commits

- Los commits deben ser claros y descriptivos.
- No hacer commits gigantes con muchos cambios mezclados.
- Separar cambios de diseño, lógica y documentación cuando sea posible.
- No subir código roto.
- Antes de hacer commit, ejecutar pruebas o al menos validar que el proyecto compile.

Comandos recomendados antes de commit:

```bash
npm run lint
npm run build
```

### Pull Requests

Cuando el proyecto crezca o trabajen más personas:

- Crear Pull Request hacia `main`.
- Revisar visualmente los cambios.
- Validar que Cloudflare genere preview correctamente.
- Revisar que no se suban secretos ni archivos innecesarios.
- Documentar qué se cambió y por qué.

### Archivos que no deben subirse

Asegurarse de tener en `.gitignore`:

```bash
node_modules/
.next/
out/
.env
.env.local
.env.production
.env.development
.DS_Store
dist/
coverage/
```

---

## 🧪 Testing y Calidad

- Mantener el proyecto compilando correctamente.
- Usar ESLint y Prettier.
- Validar que no existan errores de TypeScript.
- Probar el sitio en móvil y escritorio.
- Revisar navegación, enlaces, botones y formularios.
- Validar rendimiento con Lighthouse cuando haya cambios importantes.
- Cuidar accesibilidad básica:
  - textos legibles,
  - contraste suficiente,
  - etiquetas `alt` en imágenes,
  - navegación clara,
  - estructura semántica correcta.

---

## 📝 Documentación

Mantener actualizado el archivo `README.md` con:

- Descripción del proyecto.
- Stack tecnológico.
- Instalación.
- Variables de entorno necesarias.
- Scripts disponibles.
- Flujo de desarrollo.
- Instrucciones de despliegue.
- Información básica del CMS y Cloudflare.

Ejemplo de scripts documentados:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

---

## 🚫 Lo que No Debe Hacerse

- No usar `any` sin justificación.
- No hardcodear secretos.
- No subir `.env`.
- No modificar la arquitectura base sin razón clara.
- No mezclar muchas funcionalidades en un solo commit.
- No hacer cambios grandes directo en `main`.
- No duplicar componentes innecesariamente.
- No dejar código comentado sin razón.
- No subir imágenes pesadas sin optimizar.
- No instalar librerías innecesarias.
- No romper el diseño responsive.
- No depender de contenido fijo si debe venir del CMS.

---

## ✅ Prioridades del Proyecto

1. Sitio visual, profesional y confiable.
2. Código limpio y escalable.
3. Buena estructura para crecer después.
4. Integración correcta con GitHub y Cloudflare.
5. Contenido administrable desde Agility CMS.
6. Buen rendimiento y SEO.
7. Facilidad para agregar módulos futuros.

---

## 🧠 Consideración para Agentes o IA

Cuando una IA o herramienta como Antigravity, Codex u otro asistente trabaje sobre este repositorio, debe:

- Leer este archivo antes de modificar código.
- Respetar el stack definido.
- Mantener consistencia con la arquitectura.
- No cambiar tecnologías principales sin autorización.
- Explicar cambios importantes antes de aplicarlos.
- Preferir soluciones simples, mantenibles y escalables.
- Generar código compatible con Next.js, TypeScript, Tailwind CSS, Agility CMS y Cloudflare Pages.
- Considerar que los cambios se versionan mediante GitHub.
- Evitar cambios fuera del alcance solicitado.

---

## 📌 Resumen de Decisión Técnica

Esta arquitectura permite iniciar con un sitio informativo rápido y profesional, y después escalar hacia funcionalidades más avanzadas sin rehacer el proyecto desde cero.

---

## 📦 Versiones en Uso (Actualizadas)

Versiones concretas instaladas en el proyecto:

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "typescript": "^5",
  "eslint": "^9",
  "eslint-config-next": "16.2.4"
}
```

> Tailwind CSS v4 usa `@import "tailwindcss"` en `globals.css` en lugar de directivas `@tailwind`.  
> El `@import` de Google Fonts **debe ir antes** de `@import "tailwindcss"`, o genera una advertencia de CSS.

---

## 🗂️ Ubicación Real del Proyecto Next.js

El código Next.js vive en la subcarpeta `app/` dentro del repositorio:

```
knotech/                ← raíz del repositorio Git
  app/                  ← proyecto Next.js (aquí se ejecutan los comandos)
    src/
      app/
      components/
      lib/
      types/
    public/
    package.json
  web-informativa/      ← sitio estático original (referencia, no production)
  AGENTS.md
  .gitignore
```

**Comandos deben ejecutarse siempre desde `knotech/app/`:**

```bash
cd knotech/app
npm run dev
npm run lint
npm run build
```

**Build command para Cloudflare Pages:**
```bash
cd app && npm install && npm run build
```
**Output directory:** `app/.next`

---

## 🧩 Reglas Server vs Client Components

Seguir esta tabla para decidir el tipo de cada componente:

| Usa `'use client'` si... | Mantén como Server Component si... |
|---|---|
| Necesita `useState`, `useRef`, `useEffect` | Solo renderiza JSX con datos estáticos |
| Maneja eventos del DOM (click, scroll, submit) | Recibe datos como props desde el servidor |
| Accede a `localStorage`, `window`, `document` | Importa datos de `lib/data/*.ts` |
| Usa hooks de contexto (`useTheme`, etc.) | No tiene interactividad |

**Componentes Client actuales:** `ThemeProvider`, `Navbar`, `Benefits`, `Contact`, `BackToTop`  
**Componentes Server actuales:** `Footer`, `Hero`, `Services`, `Testimonials`, `ServiceCard`, `TestimonialCard`, `BenefitItem`

---

## 🎨 Sistema de Variables CSS

Las variables CSS están definidas en `src/app/globals.css` y deben usarse en Tailwind mediante la sintaxis `var()`:

```css
/* Disponibles en light y dark mode */
--clr-bg           /* fondo principal */
--clr-bg-alt       /* fondo alternativo (secciones pares) */
--clr-surface      /* fondo de cards con glassmorphism */
--clr-surface-hover/* fondo de cards al hover */
--clr-border       /* color de bordes */
--clr-text         /* texto principal */
--clr-text-muted   /* texto secundario / subtítulos */
--clr-primary      /* #6366f1 (indigo) */
--clr-primary-dark /* #4f46e5 */
--clr-nav-bg       /* fondo del navbar con blur */
```

**Dark mode:** se activa agregando `data-theme="dark"` al elemento `<html>`.  
**ThemeProvider** maneja esto automáticamente. No usar clases `dark:` de Tailwind; usar las variables CSS.

Uso correcto en componentes:
```tsx
// ✅ Correcto — usa la variable CSS
<div className="bg-[var(--clr-bg)] text-[var(--clr-text)]">

// ❌ Incorrecto — no usa el sistema de variables del proyecto
<div className="bg-slate-100 text-slate-900">
```

---

## 📐 Paleta de Colores por Servicio

Cada servicio tiene un color asignado. Respetar estos colores para mantener consistencia visual:

| Servicio | Color | Clases Tailwind |
|---|---|---|
| Instalación de Redes | Indigo | `indigo-500` |
| Instalación de Cámaras | Cyan | `cyan-500` |
| Audio Visual | Violet | `violet-500` |
| Accesos Biométricos | Amber | `amber-500` |
| Soporte y Mantenimiento | Emerald | `emerald-500` |
| Próximos Servicios | Rose | `rose-500` |

Gradiente principal de la marca: `from-indigo-500 to-cyan-500`

---

## 📁 Estructura de Datos y Tipos

El contenido del sitio está tipado y centralizado. Antes de modificar datos, consultar los tipos en `src/types/index.ts`:

```typescript
Service     → src/lib/data/services.ts     (6 servicios)
Testimonial → src/lib/data/testimonials.ts (3 testimonios)
Benefit     → src/lib/data/benefits.ts     (beneficios + métricas + stats)
```

**Cuando se integre Agility CMS**, estas rutas serán el punto de reemplazo. Los tipos TypeScript deben mantenerse compatibles.

---

## ⚠️ Pitfalls Conocidos (ESLint / Next.js)

1. **`setState` dentro de `useEffect` directo**: El ESLint config de Next.js 16 (`react-hooks/set-state-in-effect`) rechaza llamadas directas a `setState` dentro de `useEffect`. Usar inicializadores lazy con función:
   ```tsx
   // ❌ Falla lint
   const [val, setVal] = useState('');
   useEffect(() => { setVal(localStorageValue); }, []);

   // ✅ Correcto
   const [val, setVal] = useState(() => localStorage.getItem('key') ?? 'default');
   ```

2. **Imports no utilizados**: El linter detecta imports no usados. Eliminar siempre los imports que no se necesiten (ej. `import Link from 'next/link'` si solo se usan anclas `<a>`).

3. **Orden de `@import` en CSS**: En Tailwind v4, el `@import` de fuentes externas debe preceder a `@import "tailwindcss"`.

4. **`suppressHydrationWarning`**: El elemento `<html>` debe tener este atributo cuando el `data-theme` se establece en el cliente para evitar errores de hidratación.


