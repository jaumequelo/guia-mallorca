'use strict';

// ============================================================
// DATOS DE RUTAS POR DÍA
// ============================================================

const routeData = {
  0: {
    parkingTitle: 'Día 1 — Palma',
    parkingTip: 'Aparca en el Parking Son Moix (gratuito, junto a Bellver) y visita el centro histórico a pie. Deja el coche aparcado y muévete andando entre La Seu, Sa Llotja, Es Baluard y Santa Catalina — son todos a 5-10 minutos.',
    center: [2.65, 39.569],
    zoom: 13,
    stops: [
      { name: 'Salida desde Calvià', lat: 39.5656, lng: 2.5137, type: 'start' },
      { name: 'Fundació Pilar i Joan Miró', lat: 39.5679, lng: 2.6331, type: 'stop' },
      { name: 'Castillo de Bellver', lat: 39.5697, lng: 2.6338, type: 'stop' },
      { name: 'Catedral La Seu & Centro Histórico', lat: 39.5676, lng: 2.6509, type: 'stop' },
      { name: 'Sa Llotja (La Lonja Gótica)', lat: 39.5682, lng: 2.6481, type: 'stop' },
      { name: 'Es Baluard — Museu d\'Art Modern', lat: 39.5698, lng: 2.6452, type: 'stop' },
      { name: 'Barrio Santa Catalina', lat: 39.5720, lng: 2.6412, type: 'end' },
    ],
    parkings: [
      { name: 'Parking Son Moix', lat: 39.5693, lng: 2.6281, info: 'Gratuito · Junto a Bellver · Mejor opción para el día' },
      { name: 'Parking Avda. Gabriel Roca', lat: 39.5690, lng: 2.6461, info: 'De pago · Centro histórico · Junto al puerto' },
      { name: 'Parking Parc de la Mar', lat: 39.5665, lng: 2.6502, info: 'De pago · Frente a La Seu · Muy céntrico' },
      { name: 'Parking Santa Catalina', lat: 39.5715, lng: 2.6390, info: 'De pago · Barrio Santa Catalina' },
    ],
    restaurants: [
      { name: 'Ombu (Puerto Palma)', lat: 39.5681, lng: 2.6507, info: 'Tapas creativas con vistas al mar' },
      { name: 'Naan Street Food (Santa Catalina)', lat: 39.5726, lng: 2.6404, info: 'Cocina asiática creativa' },
    ],
  },
  1: {
    parkingTitle: 'Día 2 — Serra de Tramontana',
    parkingTip: 'En Valldemossa, usa el parking de pago de la entrada al pueblo. En Deià el aparcamiento en la carretera es muy limitado. En Puerto Sóller hay parking de pago junto al puerto.',
    center: [2.66, 39.72],
    zoom: 11,
    stops: [
      { name: 'Salida desde Calvià', lat: 39.5656, lng: 2.5137, type: 'start' },
      { name: 'Valldemossa', lat: 39.7106, lng: 2.6245, type: 'stop' },
      { name: 'Deià', lat: 39.7481, lng: 2.6521, type: 'stop' },
      { name: 'Mirador Sa Foradada', lat: 39.7487, lng: 2.5978, type: 'stop' },
      { name: 'Mirador de Ses Barques', lat: 39.7842, lng: 2.7289, type: 'stop' },
      { name: 'Puerto de Sóller', lat: 39.7956, lng: 2.6961, type: 'stop' },
      { name: 'Fornalutx', lat: 39.7793, lng: 2.7426, type: 'end' },
    ],
    parkings: [
      { name: 'Parking Valldemossa', lat: 39.7093, lng: 2.6226, info: 'De pago · Entrada del pueblo · Señalizado' },
      { name: 'Aparcamiento Deià (carretera Ma-10)', lat: 39.7472, lng: 2.6508, info: 'Limitado · Arcén de la carretera · Madruga' },
      { name: 'Parking Puerto de Sóller', lat: 39.7948, lng: 2.6943, info: 'De pago · Junto al puerto y tranvía' },
      { name: 'Aparcamiento Fornalutx', lat: 39.7788, lng: 2.7410, info: 'Gratuito · Entrada al pueblo' },
    ],
    restaurants: [
      { name: 'Kingfisher (Puerto Sóller)', lat: 39.7959, lng: 2.6973, info: 'Pescado fresco con vistas al mar' },
      { name: 'Arume Restaurant (Palma)', lat: 39.5703, lng: 2.6448, info: 'Cocina japonesa · Plaza de la Navegación' },
    ],
  },
  2: {
    parkingTitle: 'Día 3 — Norte & Formentor',
    parkingTip: 'En temporada alta usa el bus lanzadera desde Port de Pollença al Cap de Formentor (acceso en coche restringido). En Alcúdia aparca extramuros (gratuito). En Port de Pollença hay parking fácil en el paseo.',
    center: [3.08, 39.85],
    zoom: 10,
    stops: [
      { name: 'Salida desde Calvià', lat: 39.5656, lng: 2.5137, type: 'start' },
      { name: 'Inca — Mercado de Cueros', lat: 39.7192, lng: 2.9148, type: 'stop' },
      { name: 'Alcúdia (Casco Antiguo)', lat: 39.8549, lng: 3.1212, type: 'stop' },
      { name: 'Parque Natural s\'Albufera', lat: 39.8012, lng: 3.1138, type: 'stop' },
      { name: 'Port de Pollença', lat: 39.9066, lng: 3.0812, type: 'stop' },
      { name: 'Platja de Formentor', lat: 39.9302, lng: 3.1821, type: 'stop' },
      { name: 'Cap de Formentor & Faro', lat: 39.9706, lng: 3.2074, type: 'end' },
    ],
    parkings: [
      { name: 'Parking Alcúdia (extramuros)', lat: 39.8538, lng: 3.1198, info: 'Gratuito · Fuera de las murallas medievales' },
      { name: 'Parking Port de Pollença', lat: 39.9055, lng: 3.0801, info: 'Gratuito · Paseo marítimo · Fácil' },
      { name: 'Parking Platja Formentor', lat: 39.9285, lng: 3.1810, info: 'Gratuito · En la misma playa' },
      { name: 'Parking s\'Albufera', lat: 39.8020, lng: 3.1129, info: 'Gratuito · Exterior al parque natural' },
    ],
    restaurants: [
      { name: 'Los Patos (Pollença)', lat: 39.8806, lng: 3.0146, info: 'Cocina tradicional en ambiente de celler' },
      { name: 'Figueret (Pollença)', lat: 39.8812, lng: 3.0151, info: 'Bacalao gratinado con sobrasada y miel' },
    ],
  },
  3: {
    parkingTitle: 'Día 4 — Sur, Interior & Este',
    parkingTip: 'En Es Trenc, usa el parking de pago de los alrededores (llega pronto en verano). Para Caló des Moro aparca en la urbanización Cala Llombards (15 min a pie). En Cuevas del Drach hay parking gratuito junto a la entrada.',
    center: [3.05, 39.55],
    zoom: 9,
    stops: [
      { name: 'Salida desde Calvià', lat: 39.5656, lng: 2.5137, type: 'start' },
      { name: 'Es Trenc', lat: 39.3637, lng: 2.9843, type: 'stop' },
      { name: 'Caló des Moro', lat: 39.3425, lng: 3.0649, type: 'stop' },
      { name: 'Cuevas del Drach (Porto Cristo)', lat: 39.5403, lng: 3.3384, type: 'stop' },
      { name: 'Coves d\'Artà (Canyamel)', lat: 39.6802, lng: 3.4451, type: 'stop' },
      { name: 'Artà (Santuario Sant Salvador)', lat: 39.6985, lng: 3.3427, type: 'stop' },
      { name: 'Capdepera (Castillo Medieval)', lat: 39.7072, lng: 3.4323, type: 'end' },
    ],
    parkings: [
      { name: 'Parking Es Trenc', lat: 39.3651, lng: 2.9831, info: 'De pago · Acceso a la playa · Llega pronto en verano' },
      { name: 'Parking Cala Llombards (Caló des Moro)', lat: 39.3512, lng: 3.0589, info: 'Gratuito · 15 min a pie a la cala' },
      { name: 'Parking Cuevas del Drach', lat: 39.5409, lng: 3.3391, info: 'Gratuito · Junto a la entrada de las cuevas' },
      { name: 'Parking Capdepera', lat: 39.7065, lng: 3.4308, info: 'Gratuito · Base del castillo' },
    ],
    restaurants: [
      { name: 'Celler Son Toreó (Sineu)', lat: 39.6446, lng: 2.9936, info: 'Cocina km 0 en bodega antigua' },
      { name: 'Celler Can Ripoll (Inca)', lat: 39.7185, lng: 2.9142, info: 'El celler más histórico de Mallorca' },
    ],
  },
};

// ============================================================
// ESTADO GLOBAL
// ============================================================

let map = null;
let currentDay = 0;
let routeMarkers = [];
let parkingMarkers = [];
let restaurantMarkers = [];
let showParkings = false;
let showRestaurants = false;

const ROUTE_SOURCE_ID = 'route-source';
const ROUTE_LAYER_ID = 'route-layer';
const STORAGE_KEY = 'mallorcaProgress';

// ============================================================
// INICIALIZACIÓN
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initFloatingNav();
  initDayNavigation();
  initCheckboxes();
  initProgressPanel();
  initMapExpand();
  initParkingControls();
  initMap();
  updateParkingSection(0);
});

// ============================================================
// MENÚ FLOTANTE (hamburger)
// ============================================================

function initFloatingNav() {
  const toggle = document.getElementById('floatingNavToggle');
  const nav = document.getElementById('floatingNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// ============================================================
// NAVEGACIÓN ENTRE DÍAS
// ============================================================

function initDayNavigation() {
  document.querySelectorAll('.day-btn[data-day]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const day = parseInt(btn.dataset.day, 10);
      switchToDay(day);
      const nav = document.getElementById('floatingNav');
      if (nav) nav.classList.remove('open');
    });
  });
}

function switchToDay(dayIndex) {
  currentDay = dayIndex;

  // Mostrar contenido del día seleccionado
  document.querySelectorAll('.day-content').forEach((el) => {
    el.style.display = 'none';
  });
  const dayEl = document.getElementById('day-' + dayIndex);
  if (dayEl) dayEl.style.display = 'block';

  // Marcar botón activo
  document.querySelectorAll('.day-btn[data-day]').forEach((btn) => {
    btn.classList.toggle('active', parseInt(btn.dataset.day, 10) === dayIndex);
  });

  // Actualizar mapa
  updateMapForDay(dayIndex);

  // Actualizar sección de parkings
  updateParkingSection(dayIndex);
}

// ============================================================
// MAPA MAPBOX GL
// ============================================================

function initMap() {
  const token = window.MAPBOX_TOKEN;

  if (!token) {
    const mapEl = document.getElementById('map');
    if (mapEl) {
      mapEl.style.display = 'flex';
      mapEl.style.alignItems = 'center';
      mapEl.style.justifyContent = 'center';
      mapEl.style.background = '#f5f7fa';
      mapEl.style.color = '#888';
      mapEl.style.fontSize = '0.95rem';
      mapEl.style.padding = '2rem';
      mapEl.style.textAlign = 'center';
      mapEl.innerHTML =
        '<div><i class="fas fa-map-marked-alt" style="font-size:3rem;color:#ccc;display:block;margin-bottom:1rem;"></i>' +
        '<p>Para ver el mapa configura tu token de Mapbox en <code>config.js</code>.<br>' +
        'Consulta <code>config.example.js</code> para más información.</p></div>';
    }
    return;
  }

  mapboxgl.accessToken = token;

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [2.9, 39.7],
    zoom: 9,
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');

  map.on('load', () => {
    updateMapForDay(currentDay);
  });
}

function updateMapForDay(dayIndex) {
  if (!map) return;

  // Esperar a que el estilo esté cargado
  if (!map.isStyleLoaded()) {
    map.once('idle', () => updateMapForDay(dayIndex));
    return;
  }

  clearRouteLayer();
  clearAllMarkers();

  const data = routeData[dayIndex];
  if (!data) return;

  // Dibujar línea de ruta
  const coords = data.stops.map((s) => [s.lng, s.lat]);

  map.addSource(ROUTE_SOURCE_ID, {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: { type: 'LineString', coordinates: coords },
    },
  });

  map.addLayer({
    id: ROUTE_LAYER_ID,
    type: 'line',
    source: ROUTE_SOURCE_ID,
    layout: { 'line-join': 'round', 'line-cap': 'round' },
    paint: {
      'line-color': '#0066cc',
      'line-width': 3,
      'line-dasharray': [2, 2],
    },
  });

  // Añadir marcadores de paradas
  data.stops.forEach((stop, i) => {
    const color =
      stop.type === 'start' ? '#4CAF50' : stop.type === 'end' ? '#2196F3' : '#ff6b35';
    const label =
      stop.type === 'start' ? '⚑' : stop.type === 'end' ? '★' : String(i);

    const el = createMarkerElement([
      'width:32px', 'height:32px', 'border-radius:50%',
      'background:' + color, 'border:3px solid white',
      'box-shadow:0 2px 8px rgba(0,0,0,0.3)',
      'display:flex', 'align-items:center', 'justify-content:center',
      'color:white', 'font-size:12px', 'font-weight:700', 'cursor:pointer',
    ]);
    el.textContent = label;

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      '<strong>' + escapeHtml(stop.name) + '</strong>'
    );

    const marker = new mapboxgl.Marker(el)
      .setLngLat([stop.lng, stop.lat])
      .setPopup(popup)
      .addTo(map);

    routeMarkers.push(marker);
  });

  // Ajustar vista a los límites del día
  const bounds = new mapboxgl.LngLatBounds();
  data.stops.forEach((s) => bounds.extend([s.lng, s.lat]));
  map.fitBounds(bounds, { padding: 60, maxZoom: 14 });

  // Mostrar marcadores adicionales si están activos
  if (showParkings) addParkingMarkers(dayIndex);
  if (showRestaurants) addRestaurantMarkers(dayIndex);
}

function clearRouteLayer() {
  if (!map) return;
  if (map.getLayer(ROUTE_LAYER_ID)) map.removeLayer(ROUTE_LAYER_ID);
  if (map.getSource(ROUTE_SOURCE_ID)) map.removeSource(ROUTE_SOURCE_ID);
}

function clearAllMarkers() {
  routeMarkers.forEach((m) => m.remove());
  routeMarkers = [];
  clearParkingMarkers();
  clearRestaurantMarkers();
}

// ============================================================
// UTILIDAD: CREAR ELEMENTO DE MARCADOR
// ============================================================

function createMarkerElement(styles) {
  const el = document.createElement('div');
  el.style.cssText = styles.join(';');
  return el;
}

// ============================================================
// MARCADORES DE PARKINGS
// ============================================================

function clearParkingMarkers() {
  parkingMarkers.forEach((m) => m.remove());
  parkingMarkers = [];
}

function addParkingMarkers(dayIndex) {
  const data = routeData[dayIndex];
  if (!data || !map) return;

  data.parkings.forEach((p) => {
    const el = createMarkerElement([
      'width:30px', 'height:30px', 'border-radius:6px',
      'background:#1565C0', 'border:2px solid white',
      'box-shadow:0 2px 8px rgba(0,0,0,0.3)',
      'display:flex', 'align-items:center', 'justify-content:center',
      'color:white', 'font-size:13px', 'font-weight:700', 'cursor:pointer',
    ]);
    el.textContent = 'P';

    const popup = new mapboxgl.Popup({ offset: 20 }).setHTML(
      '<strong>' + escapeHtml(p.name) + '</strong><br><small>' + escapeHtml(p.info) + '</small>'
    );

    const marker = new mapboxgl.Marker(el)
      .setLngLat([p.lng, p.lat])
      .setPopup(popup)
      .addTo(map);

    parkingMarkers.push(marker);
  });
}

// ============================================================
// MARCADORES DE RESTAURANTES
// ============================================================

function clearRestaurantMarkers() {
  restaurantMarkers.forEach((m) => m.remove());
  restaurantMarkers = [];
}

function addRestaurantMarkers(dayIndex) {
  const data = routeData[dayIndex];
  if (!data || !map) return;

  data.restaurants.forEach((r) => {
    const el = createMarkerElement([
      'width:30px', 'height:30px', 'border-radius:50%',
      'background:#E53935', 'border:2px solid white',
      'box-shadow:0 2px 8px rgba(0,0,0,0.3)',
      'display:flex', 'align-items:center', 'justify-content:center',
      'font-size:14px', 'cursor:pointer',
    ]);
    el.textContent = '🍽';

    const popup = new mapboxgl.Popup({ offset: 20 }).setHTML(
      '<strong>' + escapeHtml(r.name) + '</strong><br><small>' + escapeHtml(r.info) + '</small>'
    );

    const marker = new mapboxgl.Marker(el)
      .setLngLat([r.lng, r.lat])
      .setPopup(popup)
      .addTo(map);

    restaurantMarkers.push(marker);
  });
}

// ============================================================
// CONTROLES DE PARKINGS Y RESTAURANTES
// ============================================================

function initParkingControls() {
  const parkingsCb = document.getElementById('showParkingsCheckbox');
  const restaurantsCb = document.getElementById('showRestaurantsCheckbox');
  const parkingInfo = document.getElementById('parkingInfo');

  if (parkingsCb) {
    parkingsCb.addEventListener('change', () => {
      showParkings = parkingsCb.checked;
      if (parkingInfo) parkingInfo.style.display = showParkings ? 'block' : 'none';
      if (showParkings) {
        addParkingMarkers(currentDay);
      } else {
        clearParkingMarkers();
      }
    });
  }

  if (restaurantsCb) {
    restaurantsCb.addEventListener('change', () => {
      showRestaurants = restaurantsCb.checked;
      if (showRestaurants) {
        addRestaurantMarkers(currentDay);
      } else {
        clearRestaurantMarkers();
      }
    });
  }

  // Botón de parkings en el menú flotante
  const parkingsBtn = document.getElementById('parkingsActionBtn');
  if (parkingsBtn) {
    parkingsBtn.addEventListener('click', () => {
      showParkings = !showParkings;
      if (parkingsCb) parkingsCb.checked = showParkings;
      if (parkingInfo) parkingInfo.style.display = showParkings ? 'block' : 'none';
      if (showParkings) {
        addParkingMarkers(currentDay);
      } else {
        clearParkingMarkers();
      }
      const nav = document.getElementById('floatingNav');
      if (nav) nav.classList.remove('open');
    });
  }

  // Botón de restaurantes en el menú flotante
  const restaurantesBtn = document.getElementById('restaurantesActionBtn');
  if (restaurantesBtn) {
    restaurantesBtn.addEventListener('click', () => {
      showRestaurants = !showRestaurants;
      if (restaurantsCb) restaurantsCb.checked = showRestaurants;
      if (showRestaurants) {
        addRestaurantMarkers(currentDay);
      } else {
        clearRestaurantMarkers();
      }
      const nav = document.getElementById('floatingNav');
      if (nav) nav.classList.remove('open');
    });
  }
}

// ============================================================
// SECCIÓN DE INFORMACIÓN DE PARKINGS
// ============================================================

function updateParkingSection(dayIndex) {
  const data = routeData[dayIndex];
  if (!data) return;

  const titleEl = document.getElementById('parkingTitle');
  const tipEl = document.getElementById('parkingTip');
  const gridEl = document.getElementById('parkingGrid');

  if (titleEl) titleEl.textContent = data.parkingTitle;
  if (tipEl) tipEl.textContent = data.parkingTip;

  if (gridEl) {
    gridEl.innerHTML = data.parkings
      .map(
        (p) =>
          '<div class="parking-item">' +
          '<h4><i class="fas fa-parking"></i> ' + escapeHtml(p.name) + '</h4>' +
          '<p>' + escapeHtml(p.info) + '</p>' +
          '</div>'
      )
      .join('');
  }
}

// ============================================================
// PROGRESO DE VIAJE (checkboxes + localStorage)
// ============================================================

function initCheckboxes() {
  const saved = getSavedProgress();

  document.querySelectorAll('.stop-checkbox').forEach((cb) => {
    const key = cb.dataset.day + '-' + cb.dataset.stop;
    if (saved[key]) {
      cb.checked = true;
      markItemVisited(cb, true);
    }

    cb.addEventListener('change', () => {
      const progress = getSavedProgress();
      const k = cb.dataset.day + '-' + cb.dataset.stop;
      if (cb.checked) {
        progress[k] = true;
        markItemVisited(cb, true);
      } else {
        delete progress[k];
        markItemVisited(cb, false);
      }
      saveProgress(progress);
      renderProgressPanel();
    });
  });

  renderProgressPanel();
}

function markItemVisited(checkbox, visited) {
  const item = checkbox.closest('.itinerary-item');
  if (item) item.classList.toggle('completed', visited);
}

function initProgressPanel() {
  const toggle = document.getElementById('progressToggle');
  const panel = document.getElementById('progressPanel');

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
    });
  }

  const clearBtn = document.getElementById('clearProgress');
  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('¿Seguro que quieres reiniciar todo el progreso de viaje?')) {
        saveProgress({});
        document.querySelectorAll('.stop-checkbox').forEach((cb) => {
          cb.checked = false;
          markItemVisited(cb, false);
        });
        renderProgressPanel();
      }
    });
  }
}

function renderProgressPanel() {
  const content = document.getElementById('progressContent');
  if (!content) return;

  const saved = getSavedProgress();

  // Recopilar paradas agrupadas por día
  const dayStops = {};
  document.querySelectorAll('.stop-checkbox').forEach((cb) => {
    const day = cb.dataset.day;
    const stopKey = day + '-' + cb.dataset.stop;
    if (!dayStops[day]) dayStops[day] = [];
    const nameEl = cb.closest('.itinerary-item')
      ? cb.closest('.itinerary-item').querySelector('.stop-info h3')
      : null;
    dayStops[day].push({
      key: stopKey,
      name: nameEl ? nameEl.textContent.trim() : 'Parada ' + cb.dataset.stop,
      done: !!saved[stopKey],
    });
  });

  const dayTitles = ['Día 1 — Palma', 'Día 2 — Tramontana', 'Día 3 — Norte', 'Día 4 — Sur & Este'];

  let html = '';
  Object.keys(dayStops)
    .sort()
    .forEach((day) => {
      const stops = dayStops[day];
      const done = stops.filter((s) => s.done).length;
      const total = stops.length;
      const title = dayTitles[parseInt(day, 10)] || 'Día ' + (parseInt(day, 10) + 1);

      html +=
        '<div class="progress-day">' +
        '<h4><i class="fas fa-calendar-day"></i> ' +
        escapeHtml(title) +
        ' <span class="progress-counter">' + done + '/' + total + '</span></h4>';

      stops.forEach((s) => {
        html +=
          '<div class="progress-stop' + (s.done ? ' completed' : '') + '">' +
          (s.done
            ? '<i class="fas fa-check-circle" style="color:#28a745;margin-right:0.4rem;"></i>'
            : '<i class="far fa-circle" style="margin-right:0.4rem;color:#ccc;"></i>') +
          escapeHtml(s.name) +
          '</div>';
      });

      html += '</div>';
    });

  content.innerHTML = html || '<p style="color:#888;font-size:0.9rem;">Marca las paradas visitadas en el itinerario.</p>';
}

function getSavedProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (err) {
    console.warn('Failed to parse saved progress:', err);
    return {};
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('localStorage not available:', err);
  }
}

// ============================================================
// MAPA PANTALLA COMPLETA
// ============================================================

function initMapExpand() {
  const btn = document.getElementById('mapExpandBtn');
  const section = document.getElementById('mapSection');
  if (!btn || !section) return;

  btn.addEventListener('click', () => {
    const isFullscreen = section.classList.toggle('map-fullscreen');
    document.body.classList.toggle('map-is-fullscreen', isFullscreen);
    btn.innerHTML = isFullscreen
      ? '<i class="fas fa-compress"></i>'
      : '<i class="fas fa-expand"></i>';
    if (map) setTimeout(() => map.resize(), 50);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && section.classList.contains('map-fullscreen')) {
      section.classList.remove('map-fullscreen');
      document.body.classList.remove('map-is-fullscreen');
      btn.innerHTML = '<i class="fas fa-expand"></i>';
      if (map) setTimeout(() => map.resize(), 50);
    }
  });
}

// ============================================================
// UTILIDADES
// ============================================================

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
