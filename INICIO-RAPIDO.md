# Guía Rápida - Cómo Usar la App

## 🚀 Opción 1: Usar Localmente (Recomendado para Comenzar)

1. **Descargar los archivos**
   - Descarga todos archivos de esta carpeta
   - Mantén la estructura: `index.html`, `styles.css`, `script.js`, etc.

2. **Abrir en navegador**
   - Click derecho en `index.html` → "Abrir con" → navegador
   - O arrastra `index.html` a la ventana del navegador
   - **O simplemente haz doble click en index.html**

3. **¡Listo!** La app funcionará inmediatamente

---

## 📱 Cómo Usar la Aplicación

### Navegar por Días
- Usa los 3 botones azules en la parte superior
- Cambia entre "Día 1", "Día 2", "Día 3"
- El mapa se actualiza automáticamente

### Entender el Mapa
- 🟢 Círculo verde = Inicio del día
- 🔴 Círculo rojo = Paradas (lugares a visitar)
- 🔵 Círculo azul = Fin del día
- Números = Orden de visita

### Hacer Click en Marcadores
- Click en cualquier número del mapa
- Verás el nombre y descripción del lugar
- Cierra el popup con X

### Leer la Información
- Izquierda: Mapa interactivo
- Derecha: Itinerario detallado de cada parada
- Incluye horarios, comidas, consejos

---

## 🌐 Opción 2: Publicar Online (Compartir con Otros)

### GitHub Pages (Gratis)
1. Crea cuenta en [github.com](https://github.com)
2. Click en "+" → "New repository"
3. Nombre: `guia-mallorca`
4. Marca "Add a README file"
5. Click "Create repository"
6. Sube los archivos:
   - Arrastra todos los archivos a la ventana
   - Commit changes
7. Ve a Settings → Pages
8. Selecciona "main" como rama
9. ¡Tu URL: `https://tuusuario.github.io/guia-mallorca`

### Netlify (Más Fácil)
1. Ve a [netlify.com](https://netlify.com) → Sign up
2. Arrastra la carpeta GUIA-MALLORCA completa
3. Espera 5 segundos
4. ¡Tu URL: aparecerá automática!

### Vercel (Alternativa)
1. Ve a [vercel.com](https://vercel.com)
2. Click "New Project"
3. Importa el repositorio de GitHub
4. Deploy (1 click)

---

## 📲 Instalar como App en Móvil

### iPhone (iOS)
1. Abre Safari
2. Ve a tu URL
3. Click en el icono compartir (⬆️ en la esquina)
4. Tap "Add to Home Screen"
5. Dale un nombre
6. Tap "Add"

### Android
1. Abre Chrome
2. Ve a tu URL
3. Click en los 3 puntos (menú)
4. Tap "Install app"
5. Tap "Install"

**Resultado:** Icono en la pantalla de inicio como app nativa

---

## 🎨 Personalizar la App

### Cambiar Colores
1. Abre `styles.css`
2. Busca `:root {`
3. Cambia estos valores:
```css
--primary-color: #0066cc;      /* Azul principal */
--secondary-color: #ff6b35;    /* Naranja */
--accent-color: #00d4aa;       /* Verde turquesa */
```

### Agregar Más Paradas
1. Abre `script.js`
2. Busca `const routeData = {`
3. Añade nuevas coordenadas:
```javascript
{
    name: "Nombre del Lugar",
    lat: 39.5696,
    lng: 2.6502,
    type: "stop",
    description: "Descripción breve"
}
```

### Cambiar Información del Día
1. Abre `index.html`
2. Busca el día que quieras editar
3. Cambia el texto en los `<p>` y `<h3>`

---

## 💾 Tips de Navegación

### En Móvil
- ✅ Toca los botones de día 1, 2, 3
- ✅ Desliza el dedo sobre el mapa para mover
- ✅ Pellizco para zoom
- ✅ Lee la información bajo el mapa

### En Escritorio
- ✅ Click en los botones de día
- ✅ Arrastra el mouse sobre el mapa
- ✅ Scroll con la rueda
- ✅ Lee cómodo en el lado derecho

### Modo Oscuro
- La app detecta tu preferencia del sistema
- Automáticamente se adapta

---

## ⚠️ Problemas Comunes

### El mapa no carga
**Solución:**
- Recarga la página (F5)
- Borra caché (Ctrl+Shift+Del)
- Verifica conexión a internet

### No veo los marcadores
**Solución:**
- Haz zoom en el mapa (rueda o pinch)
- Centra en Mallorca
- Abre consola (F12) busca errores

### La app va lenta
**Solución:**
- Cierra otras pestañas
- Limpia caché del navegador
- Usa Chrome o Firefox (más rápido)

### No se ve bien en móvil
**Solución:**
- Actualiza el navegador
- Gira el teléfono (landscape)
- Cierra aplicaciones de fondo

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que TODOS los archivos estén en la misma carpeta
2. Asegúrate que los nombres no cambien (.html, .css, .js)
3. Prueba en otro navegador
4. Abre la consola (F12) para ver mensajes de error

---

## 🎯 Checklist Antes de Viajar

- [ ] Descargargó la app offline (screenshot o descarga)
- [ ] Guardó la dirección con mapas: OK
- [ ] Reservó restaurantes con anticipación
- [ ] Alquiló el auto en el aeropuerto
- [ ] Tiene protector solar
- [ ] Montedas para parkings
- [ ] Desacargó el PDF (Ctrl+P → Guardar como PDF)
- [ ] ¡Pasaporte/DNI listo!

---

## 🏖️ ¡Buen Viaje a Mallorca!

Espero que disfrutes cada parada, cada playa y cada atardecer.

**Consejos que no olvides:**
- Llega temprano a las playas populares
- Prueba la gastronomía local
- Tómate tiempo en los pueblos
- Saca muchas fotos
- Vuelve a Mallorca

---

Created with ❤️ for travelers | Updated: April 2024
