// =============================================
// ...
// (contenido existente)
// =============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}

// =============================================
// ACCORDÉON “Mi Progreso de Viaje”
// - Click en el header (barra) => toggle open/close
// - Click en cualquier punto dentro de la tarjeta => se cierra
// =============================================
(function setupProgressAccordion() {
    const progressPanel = document.getElementById('progressPanel');
    const progressToggle = document.getElementById('progressToggle');
    const progressContent = document.getElementById('progressContent');

    if (!progressPanel || !progressToggle || !progressContent) return;

    const setOpen = (open) => {
        progressPanel.classList.toggle('open', open);
        progressContent.style.display = open ? 'block' : 'none';
        // compat: si el CSS ya gestiona alturas/transition, no rompemos
    };

    // inicial: si ya tiene la clase open, respetar; si no, cerrar
    if (progressPanel.classList.contains('open')) setOpen(true);
    else setOpen(false);

    // toggle al pulsar la barra
    progressToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = progressPanel.classList.contains('open');
        setOpen(!isOpen);
    });

    // click en cualquier otro lado de la tarjeta => cerrar
    progressPanel.addEventListener('click', (e) => {
        // si el click viene del toggle/header, ya lo gestiona el listener anterior
        if (progressToggle.contains(e.target)) return;
        if (progressPanel.classList.contains('open')) setOpen(false);
    });
})();
