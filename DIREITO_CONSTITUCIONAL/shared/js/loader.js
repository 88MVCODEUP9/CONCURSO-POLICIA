/**
 * CSS Loader - Carrega o arquivo CSS correto conforme o dispositivo
 * Desktop: > 1024px
 * Tablet: 768px - 1024px  
 * Mobile: < 768px
 */
(function() {
    const width = window.innerWidth;
    let cssFile = 'desktop.css';
    
    if (width < 768) {
        cssFile = 'mobile.css';
    } else if (width >= 768 && width <= 1024) {
        cssFile = 'tablet.css';
    }
    
    // Carrega o CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL(cssFile, document.currentScript.src).href;
    document.head.appendChild(link);
    
    // Recarrega ao redimensionar (debounce)
    let timeout;
    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            const newWidth = window.innerWidth;
            let newCssFile = 'desktop.css';
            
            if (newWidth < 768) {
                newCssFile = 'mobile.css';
            } else if (newWidth >= 768 && newWidth <= 1024) {
                newCssFile = 'tablet.css';
            }
            
            // Só recarrega se mudou de categoria
            if (newCssFile !== cssFile) {
                window.location.reload();
            }
        }, 250);
    });
})();
