# 📁 Estructura del Proyecto

```
GUIA-MALLORCA/
│
├── 📄 index.html                 ★ Página principal - Abre esto!
├── 🎨 styles.css                 ★ Estilos responsivos
├── 💻 script.js                  ★ Lógica interactiva + Mapas
│
├── 📋 Documentación
│   ├── README.md                 → Guía completa del proyecto
│   ├── INICIO-RAPIDO.md          → Instrucciones rápidas (LEER PRIMERO)
│   ├── CHANGELOG.md              → Historial de versiones
│   └── MEJORAS-FUTURAS.md        → Roadmap y ideas
│
├── ⚙️ Configuración
│   ├── manifest.json             → PWA app manifest
│   ├── package.json              → Dependencias Node.js
│   ├── .env.example              → Variables de entorno (ejemplo)
│   ├── .htaccess                 → Configuración Apache
│   ├── .gitignore                → Git ignore rules
│   ├── robots.txt                → SEO - Instrucciones para bots
│   └── sitemap.xml               → Mapa del sitio para SEO
│
├── 🔧 Backend/Service Worker
│   └── sw.js                     → Service Worker (offline)
│
├── 📖 Este archivo
│   └── ESTRUCTURA.md             → (Este archivo)
│
└── 📚 Recursos Adicionales
    └── (Assets como imágenes van aquí si se añaden)
```

## 📊 Resumen de Archivos

### 🎯 Archivos Críticos (Necesarios para funcionar)
| Archivo | Tamaño | Descripción |
|---------|--------|-------------|
| `index.html` | ~15KB | Estructura HTML - **ABRE ESTO** |
| `styles.css` | ~20KB | Estilos CSS responsivos |
| `script.js` | ~12KB | Lógica JavaScript + mapa |
| `manifest.json` | ~2KB | PWA configuration |
| `sw.js` | ~2KB | Service Worker |

### 📚 Archivos de Documentación (Recomendado leer)
| Archivo | Audiencia | Propósito |
|---------|-----------|----------|
| `README.md` | Todos | Guía general del proyecto |
| `INICIO-RAPIDO.md` | Usuarios | Instrucciones para empezar |
| `CHANGELOG.md` | Desarrolladores | Historial de cambios |
| `MEJORAS-FUTURAS.md` | Colaboradores | Ideas de mejora |

### ⚙️ Archivos de Configuración
| Archivo | Para Qué Sirve |
|---------|---|
| `package.json` | Define dependencias y scripts Node |
| `.env.example` | Variables de configuración (ejemplo) |
| `.htaccess` | Configuración de servidor Apache |
| `robots.txt` | Instrucciones para motores de búsqueda |
| `sitemap.xml` | Mapa del sitio para SEO |
| `.gitignore` | Qué archivos ignorar en Git |

## 📏 Tamaño Total del Proyecto

```
Tamaño sin dependencias externas: ~50KB

Desglose:
├── HTML: ~15KB
├── CSS: ~20KB
├── JavaScript: ~12KB
├── Configuración: ~3KB
└── Total: ~50KB (muy ligero!)

Librerias Externas (CDN, no incluidas):
├── Leaflet JS: ~40KB
├── Font Awesome: ~60KB
└── Total: ~100KB (cargadas desde CDN)
```

## 🔄 Flujo de Archivos

```
Usuario abre index.html
    ↓
HTML carga CSS (styles.css)
    ↓
HTML carga JavaScript (script.js)
    ↓
JavaScript carga Leaflet desde CDN
    ↓
JavaScript carga Font Awesome desde CDN
    ↓
Se inicializa el mapa
    ↓
Se carga Service Worker (sw.js)
    ↓
App lista para usar! ✅
```

## 🎨 Estructura HTML

```html
<html>
  <head>
    <meta> (viewport, SEO, PWA)
    <links> (CSS, manifest, fonts)
  </head>
  <body>
    <header> (Logo + título)
    <nav> (Selector de días 1-3)
    <main>
      <div.content-wrapper>
        <div.map-section> (Mapa Leaflet)
        <div.info-section> (Itinerario del día)
      </div>
    </main>
    <footer> (Copyright)
    <scripts> (Leaflet, script.js)
  </body>
</html>
```

## 🎯 Estructura de Datos (JavaScript)

```javascript
routeData = {
  0: { // Día 1
    title: "Día 1: Caló des Moro - Palma",
    stops: [
      {
        name: "Punto de Interés",
        lat: 39.5696,      // Latitud
        lng: 2.6502,       // Longitud
        type: "start",     // start, stop, end
        description: "..."
      },
      // ... más paradas
    ]
  },
  1: { ... }, // Día 2
  2: { ... }  // Día 3
}
```

## 🚀 Proceso de Despliegue

```
1. Desarrollar localmente
   ├── Editar archivos
   └── Abrir index.html

2. Probar en navegador
   ├── Chrome ✅
   ├── Firefox ✅
   └── Safari ✅

3. Subir a Git
   ├── git add .
   ├── git commit -m "mensaje"
   └── git push

4. Desplegar a hosting
   ├── GitHub Pages (automático)
   ├── Netlify (drag & drop)
   └── Vercel (1 click)
```

## 📱 Responsividad

```
Breakpoints CSS:
├── Desktop: 1200px+ (3 columnas)
├── Tablet: 768px-1199px (2 columnas)
└── Móvil: <768px (1 columna)

Mobile-First Design:
✓ Optimizado para 320px (iPhone SE)
✓ Funciona en 4K (2560px+)
✓ Touch-friendly en todos los tamaños
```

## 🔗 Dependencias Externas (CDN)

```
Leaflet Maps:
https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/

Font Awesome Icons:
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/

OpenStreetMap Tiles:
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

## 🎯 Cómo Navegar el Código

### Para cambiar contenido:
```
→ Edita: index.html
  Busca: <h3>, <p> tags en las secciones day-content
```

### Para cambiar estilos:
```
→ Edita: styles.css
  Busca: :root { --primary-color: ... }
```

### Para cambiar lógica/mapas:
```
→ Edita: script.js
  Busca: const routeData = { ... }
```

### Para cambiar información PWA:
```
→ Edita: manifest.json
→ Edita: sw.js
```

## 📊 Estadísticas del Proyecto

```
Ruta Incluida: Mallorca 3 días
├── Puntos de interés: 15
├── Distancia total: ~250 km
├── Duración conducción: ~5 horas
└── Días: 3

Restaurantes sugeridos: 10+
Playas visitadas: 4+
Pueblos explorados: 4+
Miradores: 3+
```

## ✅ Checklist - Antes de Publicar

- [ ] Todos los archivos HTML válidos (W3C)
- [ ] CSS sin errores en todos navegadores
- [ ] JavaScript sin errores (F12 Console)
- [ ] Mapas cargan correctamente
- [ ] Responsive funciona en móvil
- [ ] Links externos funcionan
- [ ] Service Worker registrado
- [ ] SEO básico (title, meta description)
- [ ] Lighthouse score >90
- [ ] Funciona sin internet

## 🚀 Próximos Pasos

1. **Abrir en navegador:** `index.html`
2. **Probar versión de escritorio:** Completa
3. **Probar en móvil:** Abre en teléfono
4. **Publicar en línea:** GitHub Pages / Netlify
5. **Compartir link:** ¡A viajar!

---

**Estructura Creada: ✅ Abril 2024**

Proyecto simp, elegante y funcional para disfrutar tu viaje a Mallorca.
