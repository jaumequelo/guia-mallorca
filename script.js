// =============================================
// DATOS DE RUTA - Coordenadas verificadas
// =============================================
const MAPBOX_TOKEN = window.MAPBOX_TOKEN;

const routeData = {
    // DÍA 1: Palma y alrededores (todo cercano)
    0: {
        title: "Día 1: Calvià - Palma - Castillo Bellver - Catedral",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Castillo de Bellver", lat: 39.5588, lng: 2.6147, type: "stop", description: "Único castillo circular de España — Vistas panorámicas de la bahía de Palma" },
            { name: "Catedral La Seu & Palau Almudaina", lat: 39.5698, lng: 2.6481, type: "stop", description: "Catedral gótica + Palacio Real + Plaza Mayor + Parque del Mar" },
            { name: "Ombu", lat: 39.5674, lng: 2.6517, type: "restaurant", description: "Tapas creativas en el Puerto de Palma — Terraza con vistas al mar" },
            { name: "Barrio Santa Catalina", lat: 39.5723, lng: 2.6340, type: "stop", description: "El barrio más trendy de Palma — Mercado, galerías y terrazas" },
            { name: "Naan Street Food", lat: 39.5726, lng: 2.6387, type: "restaurant", description: "Cocina asiática creativa — Barrio Santa Catalina" }
        ]
    },
    // DÍA 2: Tramontana (eje Ma-10 noroeste)
    1: {
        title: "Día 2: Calvià - Valldemossa - Deià - Sa Foradada - Sóller - Fornalutx",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Valldemossa", lat: 39.7127, lng: 2.6214, type: "stop", description: "Real Cartuja — Chopin & George Sand — Coca de patatas Ca'n Molinas" },
            { name: "Deià", lat: 39.7464, lng: 2.6497, type: "stop", description: "Pueblo de artistas entre montañas y mar — Robert Graves" },
            { name: "Mirador Sa Foradada", lat: 39.7295, lng: 2.5880, type: "stop", description: "Roca con agujero natural — Atardecer espectacular desde los acantilados" },
            { name: "Mirador de Ses Barques", lat: 39.7925, lng: 2.7531, type: "stop", description: "Vistas impresionantes del Puerto de Sóller y la Serra de Tramuntana" },
            { name: "Puerto de Sóller", lat: 39.7949, lng: 2.6958, type: "stop", description: "Puerto pintoresco — Excursión en barco a Sa Calobra — Tranvía vintage 1911" },
            { name: "Kingfisher / Sabarca / Es Passeig", lat: 39.7949, lng: 2.6958, type: "restaurant", description: "Pescado fresco con vistas al puerto de Sóller" },
            { name: "Fornalutx", lat: 39.7972, lng: 2.7295, type: "stop", description: "Uno de los pueblos más bonitos de España — Callejuelas adoquinadas" },
            { name: "Arume Restaurant", lat: 39.5705, lng: 2.6350, type: "restaurant", description: "Cocina japonesa en Palma — Plaza de la Navegación" }
        ]
    },
    // DÍA 3: Norte — Alcúdia, s'Albufera, Formentor, Pollença
    2: {
        title: "Día 3: Calvià - Alcúdia - s'Albufera - Cap de Formentor - Pollença",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Alcúdia (Casco Antiguo)", lat: 39.8540, lng: 3.1200, type: "stop", description: "Murallas medievales — Ciudad romana Pollentia — Calles empedradas medievales" },
            { name: "Parque Natural s'Albufera", lat: 39.7926, lng: 3.0856, type: "stop", description: "Humedal más importante de Baleares — +200 especies de aves — Entrada gratuita" },
            { name: "Cap de Formentor & Faro", lat: 39.9600, lng: 3.2007, type: "stop", description: "Acantilados +300m — Faro de Formentor — Vistas de 360° al Mediterráneo" },
            { name: "Los Patos / Figueret", lat: 39.8783, lng: 3.0126, type: "restaurant", description: "Pollença — Cocina mallorquina tradicional — Bacalao con sobrasada y miel" }
        ]
    },
    // DÍA 4: Sur y Este — Es Trenc, Interior Es Pla, Costa Este
    3: {
        title: "Día 4: Calvià - Es Trenc - Interior Es Pla - Costa Este",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Es Trenc", lat: 39.3280, lng: 3.0170, type: "stop", description: "Playa 2km de arena blanca virgen — Aguas turquesas — Llega temprano" },
            { name: "Caló des Moro", lat: 39.3185, lng: 3.2370, type: "stop", description: "Cala virgen de 40m escondida entre acantilados — Snorkel imprescindible" },
            { name: "Cuevas del Drach (Porto Cristo)", lat: 39.5254, lng: 3.3362, type: "stop", description: "4 cuevas gigantes + Lago Martel — Concierto en barca — Reserva entrada online" },
            { name: "Coves d'Artà (Canyamel)", lat: 39.6954, lng: 3.4369, type: "stop", description: "Arco de roca de 100m abierto al mar — Inspiró a Julio Verne" },
            { name: "Artà (Santuario Sant Salvador)", lat: 39.6975, lng: 3.3482, type: "stop", description: "Casco histórico coronado por el Santuari de Sant Salvador — Vistas del este" },
            { name: "Capdepera (Castillo Medieval)", lat: 39.7031, lng: 3.4411, type: "stop", description: "Fortaleza medieval del s.XIV — En días claros se ve Menorca desde lo alto" },
            { name: "Celler Son Toreó / Es Cós", lat: 39.6432, lng: 3.0130, type: "restaurant", description: "Sineu — Centro geográfico de Mallorca — Cocina kilómetro cero en bodega antigua" },
            { name: "Petra (Casa Natal Junípero Serra)", lat: 39.6010, lng: 3.1050, type: "stop", description: "El fundador de San Francisco nació aquí — Calles medievales intactas — Santuario de Bonany" },
            { name: "Celler Can Ripoll", lat: 39.7200, lng: 2.9105, type: "restaurant", description: "Inca — El celler más histórico y famoso de Mallorca — Cocina tradicional desde siempre" }
        ]
    }
};

// =============================================
// MAPA (Mapbox GL JS)
// =============================================
let map;
let activeMarkers = [];
let markerElements = {};
let currentDayIndex = 0;
let visitedStops = {};

function loadVisitedStops() {
    const saved = localStorage.getItem('mallorca_visited_stops');
    if (saved) visitedStops = JSON.parse(saved);
}

function saveVisitedStops() {
    localStorage.setItem('mallorca_visited_stops', JSON.stringify(visitedStops));
}

function updateCheckboxUI() {
    document.querySelectorAll('.stop-checkbox').forEach(checkbox => {
        const key = `${checkbox.dataset.day}-${checkbox.dataset.stop}`;
        checkbox.checked = visitedStops[key] || false;
        const item = checkbox.closest('.itinerary-item');
        item.classList.toggle('completed', checkbox.checked);
    });
    updateProgressPanel();
    renderMarkerStates();
}

function updateProgressPanel() {
    const progressContent = document.getElementById('progressContent');
    let html = '';

    for (let dayIdx = 0; dayIdx < 4; dayIdx++) {
        const day = routeData[dayIdx];
        let completedCount = 0;
        let stopsHTML = '';
        const nonRestaurantStops = day.stops.filter(s => s.type !== 'restaurant');

        day.stops.forEach((stop, stopIdx) => {
            if (stop.type === 'restaurant') return;
            const key = `${dayIdx}-${stopIdx}`;
            const isCompleted = visitedStops[key] || false;
            if (isCompleted) completedCount++;
            stopsHTML += `
                <div class="progress-stop ${isCompleted ? 'completed' : ''}">
                    <input type="checkbox" class="progress-checkbox"
                           data-day="${dayIdx}" data-stop="${stopIdx}"
                           ${isCompleted ? 'checked' : ''} />
                    <span>${stop.name}</span>
                </div>`;
        });

        html += `
            <div class="progress-day">
                <h4>📅 Día ${dayIdx + 1}
                    <span class="progress-counter">${completedCount}/${nonRestaurantStops.length}</span>
                </h4>
                ${stopsHTML}
            </div>`;
    }

    progressContent.innerHTML = html;

    document.querySelectorAll('.progress-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const key = `${e.target.dataset.day}-${e.target.dataset.stop}`;
            if (e.target.checked) visitedStops[key] = true;
            else delete visitedStops[key];
            saveVisitedStops();
            updateCheckboxUI();
        });
    });
}

// =============================================
// ROUTING (OSRM → Mapbox GL JS layer)
// =============================================
async function getRoutingPath(lngLatCoords) {
    try {
        const waypoints = lngLatCoords.map(c => `${c[0]},${c[1]}`).join(';');
        const res = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${waypoints}?geometries=geojson&overview=full`
        );
        if (!res.ok) throw new Error('OSRM error');
        const data = await res.json();
        if (data.routes && data.routes.length > 0) {
            return data.routes[0].geometry.coordinates;
        }
    } catch (err) {
        console.warn('Routing fallback a línea directa:', err);
    }
    return lngLatCoords;
}

// =============================================
// INICIALIZACIÓN MAPBOX
// =============================================
function initMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [2.9000, 39.6500],
        zoom: 9
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    map.on('load', () => {
        loadVisitedStops();
        updateCheckboxUI();
        displayDay(0);
    });
}

// =============================================
// MOSTRAR DÍA EN EL MAPA
// =============================================
async function displayDay(dayIndex) {
    currentDayIndex = dayIndex;
    markerElements = {};

    activeMarkers.forEach(m => m.remove());
    activeMarkers = [];

    if (map.getLayer('route-layer')) map.removeLayer('route-layer');
    if (map.getLayer('route-layer-outline')) map.removeLayer('route-layer-outline');
    if (map.getSource('route-source')) map.removeSource('route-source');

    const day = routeData[dayIndex];
    const routingCoords = []; // solo paradas reales, sin restaurantes
    const bounds = new mapboxgl.LngLatBounds();

    // --- Marcador de inicio (Calvià) ---
    const start = day.startCoord;
    routingCoords.push([start.lng, start.lat]);
    bounds.extend([start.lng, start.lat]);

    const startEl = document.createElement('div');
    startEl.className = 'custom-marker marker-start';
    startEl.innerHTML = '<div class="marker-number"><i class="fas fa-home"></i></div>';

    const startPopup = new mapboxgl.Popup({ offset: 28, closeButton: false })
        .setHTML(`<div class="popup-content"><h4>${start.name}</h4><p>Punto de salida del viaje</p></div>`);

    const startMarker = new mapboxgl.Marker({ element: startEl, anchor: 'bottom' })
        .setLngLat([start.lng, start.lat])
        .setPopup(startPopup)
        .addTo(map);
    activeMarkers.push(startMarker);

    // --- Marcadores para cada parada ---
    let stopCount = 0;
    day.stops.forEach((stop, index) => {
        bounds.extend([stop.lng, stop.lat]);
        const el = document.createElement('div');
        const key = `${dayIndex}-${index}`;
        const isVisited = visitedStops[key] || false;

        if (stop.type === 'restaurant') {
            // Marcador informativo — icono tenedor, no entra en la ruta
            el.className = 'custom-marker marker-restaurant';
            el.innerHTML = '<div class="marker-number"><i class="fas fa-utensils"></i></div>';
        } else {
            stopCount++;
            routingCoords.push([stop.lng, stop.lat]);
            if (isVisited) {
                el.className = 'custom-marker marker-visited';
                el.innerHTML = '<div class="marker-number"><i class="fas fa-check"></i></div>';
            } else {
                el.className = `custom-marker ${stop.type === 'end' ? 'marker-end' : 'marker-stop'}`;
                el.innerHTML = `<div class="marker-number">${stopCount}</div>`;
            }
            markerElements[index] = { el, isEnd: stop.type === 'end', number: stopCount };
        }

        const popup = new mapboxgl.Popup({ offset: 28, closeButton: false })
            .setHTML(`<div class="popup-content"><h4>${stop.name}</h4><p>${stop.description}</p></div>`);

        const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat([stop.lng, stop.lat])
            .setPopup(popup)
            .addTo(map);
        activeMarkers.push(marker);
    });

    map.fitBounds(bounds, { padding: { top: 60, bottom: 60, left: 40, right: 40 }, maxZoom: 13, duration: 800 });

    // --- Dibujar ruta — solo paradas reales, sin restaurantes ---
    const routeCoords = await getRoutingPath(routingCoords);
    if (routeCoords && routeCoords.length > 1) {
        map.addSource('route-source', {
            type: 'geojson',
            data: {
                type: 'Feature',
                properties: {},
                geometry: { type: 'LineString', coordinates: routeCoords }
            }
        });

        map.addLayer({
            id: 'route-layer-outline',
            type: 'line',
            source: 'route-source',
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': '#ffffff', 'line-width': 7, 'line-opacity': 1 }
        });

        map.addLayer({
            id: 'route-layer',
            type: 'line',
            source: 'route-source',
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': '#1db954', 'line-width': 5, 'line-opacity': 1 }
        });
    }
}

// =============================================
// ACTUALIZAR ICONO DE MARCADOR AL MARCAR VISITA
// =============================================
function renderMarkerStates() {
    Object.entries(markerElements).forEach(([indexStr, data]) => {
        const index = parseInt(indexStr);
        const key = `${currentDayIndex}-${index}`;
        const isVisited = visitedStops[key] || false;
        const { el, isEnd, number } = data;
        const numEl = el.querySelector('.marker-number');
        if (!numEl) return;
        if (isVisited) {
            el.className = 'custom-marker marker-visited';
            numEl.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            el.className = `custom-marker ${isEnd ? 'marker-end' : 'marker-stop'}`;
            numEl.innerHTML = number;
        }
    });
}

// =============================================
// EVENT LISTENERS
// =============================================
document.querySelectorAll('.day-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.day-content').forEach(c => c.style.display = 'none');
        document.getElementById(`day-${index}`).style.display = 'block';
        displayDay(index);
        document.querySelector('.content-wrapper').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('change', (e) => {
    if (e.target.classList.contains('stop-checkbox')) {
        const key = `${e.target.dataset.day}-${e.target.dataset.stop}`;
        if (e.target.checked) visitedStops[key] = true;
        else delete visitedStops[key];
        saveVisitedStops();
        updateCheckboxUI();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const clearBtn = document.getElementById('clearProgress');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('¿Reiniciar todo el progreso?')) {
                visitedStops = {};
                saveVisitedStops();
                updateCheckboxUI();
            }
        });
    }
});

// =============================================
// ESTILOS CSS PARA MARCADORES
// =============================================
const markerStyle = document.createElement('style');
markerStyle.textContent = `
    .custom-marker {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        color: white;
        cursor: pointer;
        transition: transform 0.2s ease, background 0.3s ease;
    }
    .custom-marker:hover { transform: scale(1.15); }
    .custom-marker.marker-start      { background: linear-gradient(135deg, #4CAF50, #2e7d32); }
    .custom-marker.marker-stop       { background: linear-gradient(135deg, #ff6b35, #e64a19); }
    .custom-marker.marker-end        { background: linear-gradient(135deg, #2196F3, #1565C0); }
    .custom-marker.marker-restaurant { background: linear-gradient(135deg, #ff8c00, #c85000); }
    .custom-marker.marker-visited    { background: linear-gradient(135deg, #28a745, #155724); }
    .marker-number { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
`;
document.head.appendChild(markerStyle);

// Arrancar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
