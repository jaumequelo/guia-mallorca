# 🗺️ Guía Interactiva de Viaje a Mallorca - 4 Días desde Calvià

Una web-app responsiva y moderna para planificar tu viaje a Mallorca de 4 días optimizado en coche desde Calvià, con mapas interactivos, información detallada de parkings y seguimiento del progreso.

## 📱 Características

✅ **Diseño Responsive** - Totalmente adaptado a móviles, tablets y escritorio  
✅ **Mapa Interactivo** - Visualiza la ruta diaria con Mapbox GL JS  
✅ **Ruta Optimizada** - 4 días planificados por zonas geográficas (Palma, Tramontana, Norte, Este)  
✅ **Menú Flotante** - Navegación fácil entre días con botón hamburguesa  
✅ **Información de Parkings** - Recomendaciones de estacionamiento por zona  
✅ **Marcadores de Parkings en Mapa** - Visualiza dónde aparcar en cada día  
✅ **Seguimiento de Progreso** - Panel acordeón para trackear paradas visitadas  
✅ **Pantalla Completa del Mapa** - Botón para expandir mapa al 100%  
✅ **Restaurantes Separados** - Distintos de las paradas principales  
✅ **Información Detallada** - Horarios, consejos prácticos, gastronomía local  

## 🚗 Ruta de 4 Días Optimizada

### **Día 1: Palma & Bellver**
- Castillo de Bellver
- Catedral La Seu & Palau Almudaina
- Barrio Santa Catalina
- **Distancia:** ~40 km | **Conducción:** ~1.5 horas

### **Día 2: Serra de Tramontana**
- Valldemossa (Real Cartuja)
- Deià (pueblo de artistas)
- Sa Foradada (mirador)
- Puerto de Sóller & Tranvía vintage 1911
- Fornalutx (uno de los pueblos más bonitos)
- **Distancia:** ~95 km | **Conducción:** ~2.5 horas

### **Día 3: Cap de Formentor y Norte**
- Alcúdia (casco antiguo medieval)
- Parque Natural s'Albufera
- Cap de Formentor & Faro (+300m acantilados)
- Pollença
- **Distancia:** ~110 km | **Conducción:** ~2.5 horas

### **Día 4: Sur, Interior & Este**
- Es Trenc (playa virgen de 2km)
- Caló des Moro (cala escondida)
- Cuevas del Drach (lago subterráneo Martel)
- Coves d'Artà (arco de 100m)
- Capdepera (castillo medieval)
- Petra & Santuario de Bonany
- **Distancia:** ~160 km | **Conducción:** ~3.5 horas

## 🛠️ Características Técnicas

### Navegación
- **Botón flotante en esquina inferior derecha** - Menú de selección de días
- Cierre automático del menú al seleccionar día
- Scroll inteligente al mapa (respeta header sticky)
- **Tecla ESC** para cerrar menú o salir de pantalla completa

### Mapa
- **Mapbox GL JS v3.3.0** - Mapas vectoriales interactivos
- **OSRM API** - Cálculo de rutas optimizadas en coche
- **Marcadores diferenciados:**
  - 🟢 Verde: Inicio (Calvià)
  - 🟠 Naranja: Paradas
  - 🔵 Azul: Fin del día
  - 🍽️ Utensilio: Restaurantes (separados de ruta)
  - ✅ Verde oscuro: Paradas visitadas
  - 🅿️ Rojo: Parkings (opcional)

### Parkings
- **Información por zona:** Palma, Tramontana, Formentor+Norte, Costa Este
- **Checkbox en menú flotante** - Mostrar/ocultar parkings en el mapa
- **Detalles incluidos:** Tipo (gratis/pago), coste, coordenadas
- **Sincronización automática** con sección "Dónde Aparcar"

### Progreso
- **Panel acordeón** - Se expande/colapsa al pulsar
- **Seguimiento por día** - Contador de paradas completadas
- **localStorage** - Progreso persiste al cerrar navegador
- **Botón Reiniciar** - Borra todo el progreso

## 📂 Estructura de Archivos

```
GUIA-MALLORCA/
├── index.html             # Página principal
├── styles.css             # Estilos responsive
├── script.js              # Lógica y mapas (Mapbox)
├── config.js              # Token Mapbox (generado en build)
├── build.js               # Script para inyectar TOKEN en Vercel
├── manifest.json          # PWA manifest
├── vercel.json            # Configuración Vercel
├── .gitignore             # Git ignore
├── README.md              # Este archivo
└── package.json           # Dependencias Node
```

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive (Grid, Flexbox, transiciones)
- **JavaScript (Vanilla)** - Sin dependencias directas
- **Mapbox GL JS v3.3.0** - Mapas vectoriales interactivos
- **OSRM (Open Route Service Machine)** - Cálculo de rutas
- **Font Awesome 6.4.0** - Iconografía
- **localStorage API** - Persistencia de datos

## 📋 Cómo Usar

### 1. **Abrir la Aplicación**
```bash
# Localmente
1. Descarga o clona los archivos
2. Abre index.html en tu navegador
3. O despliega en Vercel/GitHub Pages
```

### 2. **Navegar por Días**
- Pulsa el botón hamburguesa `☰` en esquina inferior derecha
- Selecciona el día que quieres visualizar
- El mapa se actualiza con coordenadas, ruta y paradas

### 3. **Pantalla Completa del Mapa**
- Haz clic en el botón `⤢` (esquina superior izquierda del mapa)
- O presiona `ESC` para salir
- Ideal para navegación en móvil

### 4. **Seguimiento de Progreso**
- Haz clic en "Mi Progreso de Viaje" para expandir
- Marca paradas visitadas con los checkboxes
- El progreso se guarda automáticamente

### 5. **Ver Parkings**
- En el menú flotante hay un checkbox "Parkings en el mapa"
- También está en la sección "Dónde Aparcar"
- Muestra puntos rojos `P` en el mapa

### 6. **Interactuar con el Mapa**
- Click en marcadores para ver detalles
- Arrastra para moverte
- Zoom con mouse scroll o gesture táctil

## 💡 Consejos Prácticos

### 🌅 Playas
- **Caló des Moro** - Llega antes de las 9:00 (muy concurrida)
- **Es Trenc** - La mejor playa del sur, descarga mapas offline
- **Sa Calobra** - Acceso por carretera única o en barco desde Sóller

### 🚗 Conducción & Parking
- Alquila auto en aeropuerto de Palma
- **Tramontana** - Carreteras sinuosas, conduce despacio
- **Recomendaciones de parking** - Consulta la sección "Dónde Aparcar"
- Lleva monedas para parkings de pago

### 🍽️ Gastronomía Típica
- **Ensaimada** - Dulce espiral hojaldre
- **Pa amb oli** - Pan con aceite y tomillo
- **Sobrasada** - Embutido rojo con pimentón
- **Tumbet** - Verduras estofadas a la mallorquina
- **Arròs brut** - Arroz de montaña

### 📚 Reservas Importantes
- Restaurantes populares: 2-3 semanas anticipación
- Tranvía de Sóller: compra tickets online
- Cuevas del Drach: reserva entrada online
- Cap de Formentor: ve temprano en verano (restricciones de acceso)

## 🌐 Despliegue Online

### Vercel (Recomendado - Token seguro)
```bash
# El TOKEN de Mapbox se inyecta desde variables de entorno
1. Crea cuenta en vercel.com
2. Conecta tu repo GitHub
3. Añade MAPBOX_TOKEN en Settings → Environment Variables
4. Deploy automático en cada push
```

### GitHub Pages
```bash
1. Push a rama main
2. Settings → Pages → Source: main/root
3. URL pública en 1-2 minutos
```

### Netlify
```bash
1. Arrastra carpeta a netlify.com
2. Configura variables de entorno para MAPBOX_TOKEN
3. ¡Listo!
```

## ⚙️ Problemas Comunes

### El mapa no carga
- ✅ Verifica conexión a internet
- ✅ Comprueba que `MAPBOX_TOKEN` está configurado
- ✅ Abre consola (F12) y busca errores

### Parkings no aparecen
- ✅ Marca el checkbox "Parkings en el mapa"
- ✅ Verifica que has seleccionado un día

### Scroll lento en móvil
- ✅ Desactiva otras aplicaciones
- ✅ Limpia caché del navegador

## 📞 Contacto y Repositorio

- **GitHub:** https://github.com/jaumequelo/guia-mallorca
- **Sitio Web:** https://guia-mallorca.vercel.app

## 📜 Licencia

Uso personal. Libre para modificar.

## 🙏 Créditos

- **Mapbox GL JS** - Mapas vectoriales
- **OSRM** - Cálculo de rutas
- **OpenStreetMap** - Datos cartográficos
- **Font Awesome** - Iconografía
- **Jaume Quelo** - Contenido y desarrollo

---

**¡Disfruta tu viaje por Mallorca! 🏖️☀️🧗**

*Última actualización: Abril 2026*
