# 🗺️ Guía Interactiva de Viaje a Mallorca - 3 Días desde Calvià

Una web-app responsiva y moderna para planificar tu viaje a Mallorca de 3 días optimizado en coche desde Calvià.

## 📱 Características

✅ **Diseño Responsive** - Totalmente adaptado a móviles, tablets y escritorio  
✅ **Mapa Interactivo** - Visualiza la ruta diaria con Leaflet + OpenStreetMap  
✅ **Ruta Optimizada** - 3 días planificados para maximizar experiencias  
✅ **Información Detallada** - Horarios, restaurantes, consejos prácticos  
✅ **Navegación Fluida** - Cambia entre días con un clic  
✅ **Modo Offline** - Service Worker para funcionar sin internet  
✅ **Imprimible** - Descarga la guía en PDF si lo necesitas  

## 🚗 Ruta de 3 Días Optimizada

### **Día 1: Caló des Moro - Palma**
- Salida desde Calvià
- Desayuno en Can Joan de s'Aigo (ensaimadas)
- Caló des Moro: cala virgen con snorkel
- Castillo de Bellver
- Exploración centro histórico de Palma
- Cena en barrio Santa Catalina

**Distancia:** ~50 km | **Conducción:** ~1.5 horas

### **Día 2: Playas del Sur - Sierra Tramontana**
- Desayuno tradicional en Bar Tony
- Es Trenc: una de las mejores playas
- Valldemossa: pueblo medieval con La Cartuja
- Deià: inspirador pueblo de artistas
- Mirador Sa Foradada: atardecer espectacular

**Distancia:** ~80 km | **Conducción:** ~2 horas

### **Día 3: Tranvía - Fornalutx - Cap de Formentor**
- Fornalutx: callejuelas encantadoras
- Puerto de Sóller: pescadores y barcos
- **Tranvía vintage de 1911**: experiencia única a través de campos de naranjas
- Cap de Formentor: acantilados de +300m
- Atardecer en el Faro

**Distancia:** ~120 km | **Conducción:** ~2.5 horas

## 📂 Estructura de Archivos

```
GUIA-MALLORCA/
├── index.html          # Página principal
├── styles.css          # Estilos responsive
├── script.js           # Lógica interactiva y mapa
├── sw.js              # Service Worker (offline)
├── README.md          # Este archivo
└── manifest.json      # PWA manifest (opcional)
```

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive con Grid y Flexbox
- **JavaScript** - Lógica interactiva
- **Leaflet.js** - Mapas interactivos
- **Font Awesome** - Iconografía
- **OpenStreetMap** - Datos cartográficos

## 📋 Cómo Usar

### 1. **Abrir la Aplicación**
- Descarga o clona los archivos
- Abre `index.html` en tu navegador (preferiblemente Chrome, Firefox, Safari)

### 2. **Navegar por Días**
- Usa los botones en la parte superior para cambiar de día
- El mapa se actualiza automáticamente
- Lee la información de cada parada

### 3. **Interactuar con el Mapa**
- click en los marcadores para ver detalles
- Arrastra para moverte
- Zoom con mouse o gestos de móvil

### 4. **Imprimir o Guardar**
- Press `Ctrl+P` (Windows) o `Cmd+P` (Mac)
- Selecciona "Guardar como PDF"

## 💡 Consejos Prácticos

### 🌅 Playas
- Llega temprano a Caló des Moro y Es Trenc para estacionamiento
- Lleva sombrilla, agua y protector solar SPF 50+
- Es Trenc es ideal para snorkel

### 🚗 Conducción
- Alquila auto en aeropuerto de Palma
- Carreteras sind sinuosas en Tramontana - conduce con cuidado
- Ten monedas para parkings de pago
- Descarga mapas offline de Google Maps como respaldo

### 🍽️ Gastronomía Local
- **Ensaimadas** - Desayuno típico
- **Pa amb oli** - Pan con aceite
- **Arròs brut** - Arroz local
- **Escalivada** - Verduras asadas
- **Sepia a la mallorquina** - Joya local

### 📚 Reservas
- Restaurantes populares: reserva con 2-3 semanas anticipación
- Tranvía de Sóller: compra tickets en línea
- Cuevas del Drach: entrada por internet

## 📱 Funcionalidad Móvil

La app está optimizada para:
- ✅ iPhone 12 Pro, Android 11+
- ✅ Tablets (iPad, Samsung Tab)
- ✅ Escritorio (Chrome, Firefox, Safari)

### Mejoras Móviles:
- Tipografía escalable
- Toques optimizados
- Mapas táctiles fluidos
- Menús colapsables
- Carga rápida

## 🔄 Actualizar Contenido

### Cambiar puntos de interés:
Edita el objeto `routeData` en `script.js`:

```javascript
const routeData = {
    0: { // Día 1
        stops: [
            {
                name: "Tu Lugar",
                lat: 39.5696,
                lng: 2.6502,
                type: "stop",
                description: "Descripción"
            }
        ]
    }
}
```

### Cambiar estilos:
Edita variables CSS en `styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #ff6b35;
    /* ... */
}
```

## 🌐 Despliegue Online

### Opción 1: GitHub Pages
```bash
git init
git add .
git commit -m "Guía Mallorca"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/guia-mallorca.git
git push -u origin main
```

### Opción 2: Netlify
1. Arrastra la carpeta a [netlify.com](https://netlify.com)
2. ¡Listo! Tendrás URL pública

### Opción 3: Vercel
```bash
npm i -g vercel
vercel
```

## ⚙️ Problemas Comunes

### El mapa no carga
- Verifica conexión a internet
- Limpia caché del navegador (Ctrl+Shift+Del)
- Usa otro navegador

### Marcadores no aparecen
- Abre la consola (F12)
- Busca errores en rojo
- Verifica coordenadas están correctas

### Mapa muy lento en móvil
- Desactiva otras pestañas
- Cierra apps en background
- Actualiza navegador

## 📞 Contacto y Soporte

Para mejoras o sugerencias:
- Crea un issue en GitHub
- Contáctame por email

## 📜 Licencia

Esta guía es de uso personal y puede ser modificada libremente.
Atribución a OpenStreetMap y Leaflet.

## 🙏 Créditos

- **Leaflet** - Mapas interactivos
- **OpenStreetMap** - Datos cartográficos
- **Font Awesome** - Iconos
- **Contenido** - Información de viaje verificada

---

**¡Disfruta tu viaje a Mallorca! 🏖️☀️**

*Última actualización: Abril 2024*
