# KnoTech — Web Informativa

Sitio web estático y responsive para **KnoTech**, empresa de servicios tecnológicos especializados en redes, seguridad y soporte.

## 📁 Estructura del proyecto

```
web-informativa/
├── index.html            # Página principal (HTML semántico)
├── css/
│   └── styles.css        # Estilos: variables CSS, glassmorphism, dark mode, responsive
├── js/
│   └── main.js           # Funcionalidades JS: dark mode, hamburguesa, scroll, validación
├── assets/
│   ├── img/              # Imágenes (hero usa gradiente CSS, no depende de archivos externos)
│   └── icons/
│       └── favicon.svg   # Favicon SVG con tema de red
└── README.md             # Este archivo
```

## 🎯 Servicios ofrecidos

| Servicio | Descripción |
|---|---|
| 🌐 Instalación de Redes | Cableado estructurado Cat6/6A, switches, routers, Wi-Fi |
| 📷 Cámaras de Seguridad | CCTV IP/analógico, 4K, NVR/DVR, monitoreo remoto |
| 🖥️ Audio Visual | Pantallas interactivas, proyectores, videoconferencia |
| 🔐 Accesos Biométricos | Huella dactilar, reconocimiento facial, RFID |
| 🛠️ Soporte y Mantenimiento | Contratos preventivos/correctivos, 24/7 |

## ✨ Características

- **Dark/Light mode** con persistencia en `localStorage`
- **Glassmorphism** en tarjetas de servicios con efectos hover
- **Menú hamburguesa** animado para móviles
- **Scroll suave** con anclas de navegación
- **Botón "Volver arriba"** flotante (aparece a los 300px de scroll)
- **Reveal on scroll** con IntersectionObserver
- **Validación de formulario** con retroalimentación amigable
- **Año dinámico** en footer
- **Accesible**: ARIA labels, roles semánticos, foco visible

## 📱 Breakpoints responsive

| Dispositivo | Ancho | Tarjetas |
|---|---|---|
| Móvil | < 640px | 1 columna |
| Tablet | 641–1024px | 2 columnas |
| Escritorio | > 1024px | 3 columnas + navbar horizontal |

## 🚀 Uso

Abrir `index.html` directamente en el navegador (no requiere servidor).  
Para desarrollo local con live-reload:

```bash
# Con VS Code: instala la extensión "Live Server" y haz clic en "Go Live"
# O con npx:
npx serve .
```

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (Variables, Grid, Flexbox, animaciones, glassmorphism)
- JavaScript ES2021 (sin frameworks, sin dependencias)
- Google Fonts: Inter + Poppins
- SVG inline icons

## 📈 Escalabilidad

Para añadir nuevos servicios, duplica un `<article class="service-card ...">` dentro del `#services-grid` en `index.html` y asigna una clase de color (`card-indigo`, `card-cyan`, etc.).

---

> **KnoTech** · contacto@knotech.mx · Monterrey, NL, México
