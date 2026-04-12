// =============================================
// DATOS DE RUTA - Coordenadas verificadas
// =============================================
const MAPBOX_TOKEN = window.MAPBOX_TOKEN;

const routeData = {
    // DÍA 1: Palma y alrededores (todo cercano)
    0: {
        title: "Día 1: Calvià - Palma - Miró - Bellver - La Seu - Sa Llotja - Es Baluard - Santa Catalina",
        zone: "Palma de Mallorca",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Fundació Pilar i Joan Miró", lat: 39.5618, lng: 2.6030, type: "stop", description: "Estudio original y museo del genio surrealista mallorquín — Esculturas al aire libre" },
            { name: "Castillo de Bellver", lat: 39.5588, lng: 2.6147, type: "stop", description: "Único castillo circular de España — Vistas panorámicas de la bahía de Palma" },
            { name: "Catedral La Seu & Palau Almudaina", lat: 39.5698, lng: 2.6481, type: "stop", description: "Catedral gótica + Palacio Real + Plaza Mayor + Parque del Mar" },
            { name: "Forn des Teatre", lat: 39.5725, lng: 2.6495, type: "restaurant", description: "Panadería/cafetería histórica junto a la Plaça Weyler — Desayuno mallorquín desde ~5€" },
            { name: "Ca'n Joan de S'Aigo", lat: 39.5697, lng: 2.6503, type: "restaurant", description: "La cafetería más antigua de Palma (1700) — Especialidad en ensaimadas y chocolate caliente — ~8€" },
            { name: "Ombu", lat: 39.5674, lng: 2.6517, type: "restaurant", description: "Tapas creativas en el Puerto de Palma — Terraza con vistas al mar" },
            { name: "Ca n'Eduardo", lat: 39.5680, lng: 2.6580, type: "restaurant", description: "Pescado de lonja y caldereta de langosta frente al paseo marítimo desde 1960 — ~35-50€" },
            { name: "Sa Llotja (La Lonja Gótica)", lat: 39.5680, lng: 2.6481, type: "stop", description: "Joya gótica del s.XV, antigua lonja de mercaderes — Fachada más bella de Palma" },
            { name: "Es Baluard (Museu d'Art Modern)", lat: 39.5693, lng: 2.6426, type: "stop", description: "Arte contemporáneo integrado en las murallas renacentistas de Palma — Vistas al mar" },
            { name: "La Parada del Mar", lat: 39.5690, lng: 2.6420, type: "restaurant", description: "Pescadería-restaurante: elige el producto fresco del mostrador y lo cocinan al momento — ~20-30€" },
            { name: "Barrio Santa Catalina", lat: 39.5723, lng: 2.6340, type: "stop", description: "El barrio más trendy de Palma — Mercado, galerías y terrazas" },
            { name: "Can Lluc", lat: 39.5745, lng: 2.6380, type: "restaurant", description: "Cocina mallorquina en el corazón de Santa Catalina — Menú del día ~10€" },
            { name: "Naan Street Food", lat: 39.5726, lng: 2.6387, type: "restaurant", description: "Cocina asiática creativa — Barrio Santa Catalina" },
            { name: "Casa Fernando", lat: 39.5590, lng: 2.7000, type: "restaurant", description: "Pescado y marisco a la plancha en Ciudad Jardín desde 1980 — Raons, llampuga, langosta de temporada — ~20-30€" },
            { name: "L'Àtic (Hotel Saratoga)", lat: 39.5700, lng: 2.6490, type: "restaurant", description: "Restaurante acristalado en azotea con vistas panorámicas a la Catedral, Almudaina y bahía de Palma — ~40-55€" },
            { name: "Es Princep Rooftop", lat: 39.5680, lng: 2.6470, type: "restaurant", description: "Rooftop del hotel 5 estrellas Es Princep — Vistas directas a la Catedral y Bahía de Palma — Atardecer de categoría — ~50-70€" },
            { name: "Seaside (Hotel Portitxol)", lat: 39.5590, lng: 2.6680, type: "restaurant", description: "Terraza marinera junto al puerto de El Portitxol — Vistas al mar bohemio-nórdico — Menú del día ~25€" },
            { name: "Gran Folies Beach Club", lat: 39.5370, lng: 2.3680, type: "restaurant", description: "Terraza panorámica sobre cala turquesa en Cala Llamp, Port d'Andratx — Arroces y marisco — Atardecer espectacular — ~35-55€" }
        ]
    },
    // DÍA 2: Tramontana (eje Ma-10 noroeste)
    1: {
        title: "Día 2: Calvià - Valldemossa - Deià - Sa Foradada - Sóller - Fornalutx",
        zone: "Serra de Tramontana",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Valldemossa", lat: 39.7127, lng: 2.6214, type: "stop", description: "Real Cartuja — Chopin & George Sand — Coca de patatas Ca'n Molinas" },
            { name: "Restaurant Miramar", lat: 39.7120, lng: 2.6250, type: "restaurant", description: "Pescado y arroces con vistas, junto a la Real Cartuja — Menú ~18€" },
            { name: "Deià", lat: 39.7464, lng: 2.6497, type: "stop", description: "Pueblo de artistas entre montañas y mar — Robert Graves" },
            { name: "Sebastian", lat: 39.7488, lng: 2.6470, type: "restaurant", description: "Cocina mediterránea-asiática de autor en Deià — Imprescindible reservar — ~35€" },
            { name: "Ca's Patró March", lat: 39.7488, lng: 2.6474, type: "restaurant", description: "Icónico sobre las rocas de Cala Deià — Pescado y marisco fresco diario — Famoso en The Night Manager — Reserva obligatoria — ~45-60€" },
            { name: "Mirador Sa Foradada", lat: 39.7295, lng: 2.5880, type: "stop", description: "Roca con agujero natural — Atardecer espectacular desde los acantilados" },
            { name: "Bens d'Avall", lat: 39.7640, lng: 2.6730, type: "restaurant", description: "Familiar frente al mar desde 1971 — Guía Michelin — Cocina balear de temporada con productores locales — ~50-70€" },
            { name: "Mirador de Ses Barques", lat: 39.7925, lng: 2.7531, type: "stop", description: "Vistas impresionantes del Puerto de Sóller y la Serra de Tramuntana" },
            { name: "Puerto de Sóller", lat: 39.7949, lng: 2.6958, type: "stop", description: "Puerto pintoresco — Excursión en barco a Sa Calobra — Tranvía vintage 1911" },
            { name: "Kingfisher / Sabarca / Es Passeig", lat: 39.7949, lng: 2.6958, type: "restaurant", description: "Pescado fresco con vistas al puerto de Sóller" },
            { name: "Ses Oliveres", lat: 39.7956, lng: 2.6963, type: "restaurant", description: "Gamba roja de Sóller y pescados del día — Recomendado por Maca de Castro (Michelin) — Terraza al puerto — ~25-35€" },
            { name: "Ca'n Toni", lat: 39.7638, lng: 2.7156, type: "restaurant", description: "Cocina casera mallorquina en el centro de Sóller — Ambiente familiar — ~15€" },
            { name: "Fornalutx", lat: 39.7972, lng: 2.7295, type: "stop", description: "Uno de los pueblos más bonitos de España — Callejuelas adoquinadas" },
            { name: "Arume Restaurant", lat: 39.5705, lng: 2.6350, type: "restaurant", description: "Cocina japonesa en Palma — Plaza de la Navegación" }
        ]
    },
    // DÍA 3: Norte — Alcúdia, s'Albufera, Formentor, Pollença
    2: {
        title: "Día 3: Calvià - Inca - Alcúdia - s'Albufera - Port de Pollença - Platja Formentor - Cap de Formentor",
        zone: "Cap de Formentor y Norte",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Inca (Mercado de Cueros & Cellar)", lat: 39.7200, lng: 2.9105, type: "stop", description: "Capital artesanal de Mallorca — Mercado de cueros llamats \"Dijous\" — Cellar histórico" },
            { name: "Pastisseria Pomar", lat: 39.7196, lng: 2.9133, type: "restaurant", description: "Pastelería artesanal de Inca — Especialidades mallorquinas: ensaimadas, coques y pasteles — ~5€" },
            { name: "Restaurant Puig de Santa Magdalena", lat: 39.7410, lng: 2.9210, type: "restaurant", description: "A 304m en lo alto del Puig de Santa Magdalena — Vistas de 360° a toda la llanura central y la Serra de Tramuntana — ~20-30€" },
            { name: "Sa Cuina De N'Aina", lat: 39.6520, lng: 2.8960, type: "restaurant", description: "Casa típica mallorquina en Sencelles — Cocina mediterránea con productos locales — Vinos mallorquines y postres artesanales — ~18-25€" },
            { name: "Restaurant Foc i Caliu", lat: 39.7440, lng: 2.9200, type: "restaurant", description: "Carnes premium y pescado al grill en Selva (entre Inca y Caimari) — Muy popular entre mallorquines del Raiguer — ~20-30€" },
            { name: "Alcúdia (Casco Antiguo)", lat: 39.8540, lng: 3.1200, type: "stop", description: "Murallas medievales — Ciudad romana Pollentia — Calles empedradas medievales" },
            { name: "Can Matevet", lat: 39.8536, lng: 3.1250, type: "restaurant", description: "Marisco y tapas en Port d'Alcúdia — Ambiente marinero — ~25€" },
            { name: "Parque Natural s'Albufera", lat: 39.7926, lng: 3.0856, type: "stop", description: "Humedal más importante de Baleares — +200 especies de aves — Entrada gratuita" },
            { name: "Port de Pollença", lat: 39.9020, lng: 3.0870, type: "stop", description: "Puerto marinero con paseo marítimo — Parada ideal antes del Cap de Formentor" },
            { name: "Bar des Peix", lat: 39.9033, lng: 3.0856, type: "restaurant", description: "Bar de pescadores en el Moll de Pescadors — Marisco fresquísimo sin pretensiones — Favorito de los locales del norte — ~20-30€" },
            { name: "AmázO", lat: 39.9020, lng: 3.0870, type: "restaurant", description: "Cocina sudamericana-mediterránea frente al puerto de Pollença — ~30€" },
            { name: "Platja de Formentor", lat: 39.9201, lng: 3.1380, type: "stop", description: "Una de las playas más bonitas de Mallorca — Aguas turquesas entre pinos y acantilados" },
            { name: "Cap de Formentor & Faro", lat: 39.9600, lng: 3.2007, type: "stop", description: "Acantilados +300m — Faro de Formentor — Vistas de 360° al Mediterráneo" },
            { name: "Los Patos / Figueret", lat: 39.8783, lng: 3.0126, type: "restaurant", description: "Pollença — Cocina mallorquina tradicional — Bacalao con sobrasada y miel" }
        ]
    },
    // DÍA 4: Sur y Este — Es Trenc, Interior Es Pla, Costa Este
    3: {
        title: "Día 4: Calvià - Es Trenc - Interior Es Pla - Costa Este",
        zone: "Costa Este",
        startCoord: { lat: 39.5617, lng: 2.5147, name: "Calvià (Hotel)" },
        stops: [
            { name: "Es Trenc", lat: 39.3280, lng: 3.0170, type: "stop", description: "Playa 2km de arena blanca virgen — Aguas turquesas — Llega temprano" },
            { name: "La Fortaleza (Cap Rocat)", lat: 39.4800, lng: 2.7150, type: "restaurant", description: "Restaurante en fortaleza militar s.XIX sobre acantilado — Vistas panorámicas de 180° al Mediterráneo — Uno de los entornos más dramáticos de Europa — ~80-120€" },
            { name: "Es Pinaret", lat: 39.3360, lng: 3.0480, type: "restaurant", description: "Arroces a la leña en Ses Salines — Producto local y ambiente rústico — ~20€" },
            { name: "S'Arrosseria", lat: 39.3318, lng: 3.0081, type: "restaurant", description: "Arroces y mariscos en el Puerto de Colònia Sant Jordi — Imprescindible reservar — ~25€" },
            { name: "Es Molí de Sal", lat: 39.3350, lng: 3.0020, type: "restaurant", description: "Pescados a la brasa con sal de Es Trenc y hierbas del jardín — Costa sur junto a Colònia de Sant Jordi — ~25-40€" },
            { name: "Caló des Moro", lat: 39.3185, lng: 3.2370, type: "stop", description: "Cala virgen de 40m escondida entre acantilados — Snorkel imprescindible" },
            { name: "Restaurant S'Amarador", lat: 39.3500, lng: 3.1870, type: "restaurant", description: "Dentro del Parque Natural de Mondragó — Lluç amb sobrassada i mel — Terraza frente al mar — ~25-35€" },
            { name: "Cuevas del Drach (Porto Cristo)", lat: 39.5254, lng: 3.3362, type: "stop", description: "4 cuevas gigantes + Lago Martel — Concierto en barca — Reserva entrada online" },
            { name: "Port Petit", lat: 39.3790, lng: 3.2290, type: "restaurant", description: "Terraza romántica sobre el pequeño puerto de Cala d'Or — Alta cocina mediterránea — Barcas amarradas a metros — ~55-80€" },
            { name: "El Cruce", lat: 39.5750, lng: 3.0890, type: "restaurant", description: "Cocina mallorquina auténtica en la carretera Palma-Manacor (Vilafranca) — ~15€" },
            { name: "Es 4 Vents", lat: 39.5650, lng: 2.8950, type: "restaurant", description: "Símbolo de la cocina payesa en Algaida (Km 21 Palma-Manacor) — Tumbet, sopa mallorquina y cerdo negro — ~20-30€" },
            { name: "Cal Dimoni", lat: 39.5645, lng: 2.8955, type: "restaurant", description: "Los mejores caracoles a la mallorquina — Recomendado por Maca de Castro — Callos y frit mallorquín — Algaida — ~15-22€" },
            { name: "S'Hostal d'Algaida", lat: 39.5650, lng: 2.8935, type: "restaurant", description: "Cocina mediterráneo-mallorquina de temporada en Algaida — Menú del día entre semana — Frecuentado por locales — ~15-20€" },
            { name: "Coves d'Artà (Canyamel)", lat: 39.6954, lng: 3.4369, type: "stop", description: "Arco de roca de 100m abierto al mar — Inspiró a Julio Verne" },
            { name: "Artà (Santuario Sant Salvador)", lat: 39.6975, lng: 3.3482, type: "stop", description: "Casco histórico coronado por el Santuari de Sant Salvador — Vistas del este" },
            { name: "Capdepera (Castillo Medieval)", lat: 39.7031, lng: 3.4411, type: "stop", description: "Fortaleza medieval del s.XIV — En días claros se ve Menorca desde lo alto" },
            { name: "Can Simoneta Gastrònomic", lat: 39.7120, lng: 3.4350, type: "restaurant", description: "Finca histórica sobre acantilado de la costa noreste (Guía Michelin) — Cocina mediterránea con toques mexicanos — ~55-80€" },
            { name: "Celler Son Toreó / Es Cós", lat: 39.6432, lng: 3.0130, type: "restaurant", description: "Sineu — Centro geográfico de Mallorca — Cocina kilómetro cero en bodega antigua" },
            { name: "Es Molí d'en Pau", lat: 39.6460, lng: 3.0160, type: "restaurant", description: "Antigua finca con molino en Sineu — Escaldums de pollastre, carnes a la brasa — Huerto propio y proveedores locales — ~22-35€" },
            { name: "Celler Can Font", lat: 39.6455, lng: 3.0155, type: "restaurant", description: "Celler familiar centenario en Sineu mercado — Sopes, frit, llom amb col y sobrasada artesana — ~15-22€" },
            { name: "Es Racó d'en Jaume", lat: 39.6390, lng: 2.7830, type: "restaurant", description: "Arroces, carnes y pescados en Santa Maria del Camí, zona vinatera D.O. Binissalem — ~20-28€" },
            { name: "Petra (Casa Natal Junípero Serra)", lat: 39.6010, lng: 3.1050, type: "stop", description: "El fundador de San Francisco nació aquí — Calles medievales intactas — Santuario de Bonany" },
            { name: "Es Celler de Petra", lat: 39.6070, lng: 3.1020, type: "restaurant", description: "Celler tradicional en el pueblo natal de Fray Junípero Serra — Arròs brut, conejo con cebolla, cordero al horno — ~18-25€" },
            { name: "Celler Can Ripoll", lat: 39.7200, lng: 2.9105, type: "restaurant", description: "Inca — El celler más histórico y famoso de Mallorca — Cocina tradicional desde siempre" }
        ]
    }
};

// =============================================
// DATOS DE PARKINGS POR ZONA
// =============================================
const parkingsData = {
    "Palma de Mallorca": {
        tip: "🅿️ Aparcar en el centro de Palma es complicado. Se recomienda los parkings de pago cerca de atractivos.",
        parkings: [
            { name: "Son Moix (Disuasorio)", tipo: "🟢 Gratis + bus", coste: "Gratis + bus urbano", coords: "39.5773, 2.6189" },
            { name: "Parking Bellver", tipo: "🔴 De pago", coste: "1,50€/hora", coords: "39.5598, 2.6155" },
            { name: "Parking Puerto de Palma", tipo: "🔴 De pago", coste: "2€/hora", coords: "39.5685, 2.6531" },
            { name: "Plaza Mayor", tipo: "🔴 De pago", coste: "1,50€/hora", coords: "39.5698, 2.6489" },
            { name: "Centro Cultural La Misericordia", tipo: "🔴 De pago", coste: "1,20€/hora", coords: "39.5720, 2.6480" },
            { name: "Santa Catalina (Mercado)", tipo: "🔴 De pago", coste: "1€/hora", coords: "39.5723, 2.6340" }
        ]
    },
    "Serra de Tramontana": {
        tip: "🅿️ En Valldemossa, Deià y Sóller hay parkings pequeños. Se recomienda ir temprano.",
        parkings: [
            { name: "Valldemossa (Centro)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7127, 2.6214" },
            { name: "Deià (Pueblo)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7464, 2.6497" },
            { name: "Sóller (Puerto)", tipo: "🔴 De pago", coste: "1,50€/hora", coords: "39.7949, 2.6958" },
            { name: "Fornalutx (Pueblo)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7972, 2.7295" },
            { name: "Sa Foradada (Mirador)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7295, 2.5880" }
        ]
    },
    "Cap de Formentor y Norte": {
        tip: "🅿️ Cap de Formentor tiene parking gratuito. Alcúdia y Pollença tienen opciones limitadas.",
        parkings: [
            { name: "Cap de Formentor (Faro)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.9600, 3.2007" },
            { name: "Alcúdia (Murallas)", tipo: "🟡 Limitado", coste: "Gratuito limitado", coords: "39.8540, 3.1200" },
            { name: "Parque s'Albufera (Centro)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7926, 3.0856" },
            { name: "Pollença (Pueblo)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.8783, 3.0126" },
            { name: "Ses Barques (Mirador)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7925, 2.7531" },
            { name: "Muro (Pueblo)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.7850, 3.0780" }
        ]
    },
    "Costa Este": {
        tip: "🅿️ Es Trenc tiene parking en primera línea (pequeño). Cuevas del Drach y Coves d'Artà tienen parkings específicos.",
        parkings: [
            { name: "Es Trenc (Playa)", tipo: "🟡 Limitado", coste: "Gratuito limitado", coords: "39.3280, 3.0170" },
            { name: "Cuevas del Drach (Porto Cristo)", tipo: "🔴 De pago", coste: "Parking + entrada", coords: "39.5254, 3.3362" },
            { name: "Coves d'Artà (Canyamel)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.6954, 3.4369" },
            { name: "Capdepera (Castillo)", tipo: "🔴 De pago", coste: "1€/hora", coords: "39.7031, 3.4411" },
            { name: "Artà (Municipio)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.6975, 3.3482" },
            { name: "Sineu (Es Pla)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.6432, 3.0130" },
            { name: "Petra (Centro)", tipo: "🟢 Gratis", coste: "Gratis", coords: "39.6010, 3.1050" }
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
let userLocation = null;
let userMarker = null;
let watchId = null;

function loadVisitedStops() {
    const saved = localStorage.getItem('mallorca_visited_stops');
    if (saved) visitedStops = JSON.parse(saved);
}

function saveVisitedStops() {
    localStorage.setItem('mallorca_visited_stops', JSON.stringify(visitedStops));
}

// =============================================
// CÁLCULO DE DISTANCIA Y GEOLOCALIZACIÓN
// =============================================
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(1);
}

function startLocationTracking() {
    if (!navigator.geolocation) {
        console.warn('Geolocalización no disponible en este navegador');
        return;
    }

    const permissionState = localStorage.getItem('geolocationPermission');

    if (permissionState === 'denied') {
        console.log('Permiso de geolocalización rechazado previamente');
        return;
    }

    if (permissionState === 'granted') {
        console.log('Usando permiso de geolocalización guardado');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                updateUserLocation(position.coords);
            },
            (error) => {
                console.warn('Error al obtener ubicación:', error);
            },
            { enableHighAccuracy: true, maximumAge: 10000 }
        );

        watchId = navigator.geolocation.watchPosition(
            (position) => {
                updateUserLocation(position.coords);
            },
            (error) => {
                console.warn('Error en watchPosition:', error);
            },
            { enableHighAccuracy: false, maximumAge: 5000 }
        );
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            localStorage.setItem('geolocationPermission', 'granted');
            updateUserLocation(position.coords);

            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    updateUserLocation(position.coords);
                },
                (error) => {
                    console.warn('Error en watchPosition:', error);
                },
                { enableHighAccuracy: false, maximumAge: 5000 }
            );
        },
        (error) => {
            if (error.code === error.PERMISSION_DENIED) {
                localStorage.setItem('geolocationPermission', 'denied');
                console.log('Permiso de geolocalización rechazado por el usuario');
            } else {
                console.warn('Error al obtener ubicación:', error);
            }
        },
        { enableHighAccuracy: true, maximumAge: 10000 }
    );
}

function updateUserLocation(coords) {
    userLocation = {
        lat: coords.latitude,
        lng: coords.longitude
    };

    if (!map) return;

    if (!userMarker) {
        const el = document.createElement('div');
        el.className = 'user-location-marker';
        el.innerHTML = '🚗';
        userMarker = new mapboxgl.Marker({ element: el, anchor: 'center' })
            .setLngLat([userLocation.lng, userLocation.lat])
            .addTo(map);
    } else {
        userMarker.setLngLat([userLocation.lng, userLocation.lat]);
    }

    updateDistancesInItinerary();
}

function stopLocationTracking() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function updateDistancesInItinerary() {
    if (!userLocation || currentDayIndex === undefined) return;

    const day = routeData[currentDayIndex];
    if (!day || !day.stops) return;

    day.stops.forEach((stop, stopIndex) => {
        const stopElement = document.querySelector(`[data-stop-id="${currentDayIndex + 1}-${stopIndex}"]`);
        if (!stopElement) return;

        const distance = calculateDistance(userLocation.lat, userLocation.lng, stop.lat, stop.lng);

        const stopInfo = stopElement.querySelector('.stop-info');
        if (!stopInfo) return;

        let distanceContainer = stopInfo.querySelector('.stop-distance-badge');
        if (!distanceContainer) {
            distanceContainer = document.createElement('div');
            distanceContainer.className = 'stop-distance-badge';
            const h3 = stopInfo.querySelector('h3');
            if (h3 && h3.nextSibling) {
                stopInfo.insertBefore(distanceContainer, h3.nextSibling);
            } else if (h3) {
                h3.insertAdjacentElement('afterend', distanceContainer);
            } else {
                stopInfo.prepend(distanceContainer);
            }
        }

        distanceContainer.innerHTML = `<i class="fas fa-location-arrow"></i><span class="distance-km">${distance} km</span><span class="distance-label">desde tu ubicación</span>`;
    });
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

    map.on('load', () => {
        loadVisitedStops();
        updateCheckboxUI();
        displayDay(0);
        if (localStorage.getItem('mallorca_show_parkings') === 'true') {
            const zone = routeData[0]?.zone;
            if (zone) addParkingsToMap(zone);
        }
        if (localStorage.getItem('mallorca_show_restaurants') === 'true') {
            addRestaurantsToMap();
        }
        startLocationTracking();
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

    const showParkingsCheckbox = document.getElementById('showParkingsCheckbox');
    const showParkingsCheckboxNav = document.getElementById('showParkingsCheckboxNav');
    const parkingsOn = localStorage.getItem('mallorca_show_parkings') === 'true';
    if (showParkingsCheckbox) showParkingsCheckbox.checked = parkingsOn;
    if (showParkingsCheckboxNav) showParkingsCheckboxNav.checked = parkingsOn;
    removeParkingsFromMap();

    const showRestaurantsCheckbox = document.getElementById('showRestaurantsCheckbox');
    const showRestaurantsCheckboxNav = document.getElementById('showRestaurantsCheckboxNav');
    const restaurantsOn = localStorage.getItem('mallorca_show_restaurants') === 'true';
    if (showRestaurantsCheckbox) showRestaurantsCheckbox.checked = restaurantsOn;
    if (showRestaurantsCheckboxNav) showRestaurantsCheckboxNav.checked = restaurantsOn;
    removeRestaurantsFromMap();

    if (map.getLayer('route-layer')) map.removeLayer('route-layer');
    if (map.getLayer('route-layer-outline')) map.removeLayer('route-layer-outline');
    if (map.getSource('route-source')) map.removeSource('route-source');

    const day = routeData[dayIndex];
    const routingCoords = [];
    const bounds = new mapboxgl.LngLatBounds();

    showParkingInfo(day.zone);

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

    let stopCount = 0;
    day.stops.forEach((stop, index) => {
        if (stop.type === 'restaurant') return;

        bounds.extend([stop.lng, stop.lat]);
        const el = document.createElement('div');
        const key = `${dayIndex}-${index}`;
        const isVisited = visitedStops[key] || false;

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

        let popupHTML = `<div class="popup-content"><h4>${stop.name}</h4><p>${stop.description}</p>`;
        if (userLocation) {
            const distance = calculateDistance(userLocation.lat, userLocation.lng, stop.lat, stop.lng);
            popupHTML += `<p class="popup-distance"><span style="color: #0066cc; font-weight: 600;">📍 ${distance} km</span></p>`;
        }
        popupHTML += '</div>';
        const popup = new mapboxgl.Popup({ offset: 28, closeButton: false })
            .setHTML(popupHTML);

        const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat([stop.lng, stop.lat])
            .setPopup(popup)
            .addTo(map);
        activeMarkers.push(marker);
    });

    map.fitBounds(bounds, { padding: { top: 60, bottom: 60, left: 40, right: 40 }, maxZoom: 13, duration: 800 });

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

    updateDistancesInItinerary();

    const showRestaurantsCheckboxNav = document.getElementById('showRestaurantsCheckboxNav');
    const shouldShowRestaurants = showRestaurantsCheckboxNav && showRestaurantsCheckboxNav.checked;
    if (shouldShowRestaurants) addRestaurantsToMap();
}

// ... (resto del fichero sin cambios) ...

// Arrancar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
