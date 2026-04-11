// Script de build para Vercel: inyecta el token de Mapbox desde variable de entorno
const fs = require('fs');
const path = require('path');

const token = process.env.MAPBOX_TOKEN || '';

if (!token) {
  console.warn('⚠️  MAPBOX_TOKEN no definido. El mapa no funcionará.');
}

const configContent = `window.MAPBOX_TOKEN = '${token}';\n`;
fs.writeFileSync(path.join(__dirname, 'config.js'), configContent, 'utf8');

console.log('✅ config.js generado correctamente.');
