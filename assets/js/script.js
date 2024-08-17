document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
    
    if (header && mainContent) {
        const headerHeight = header.offsetHeight;
        mainContent.style.marginTop = `${headerHeight + 48}px`;
    }
});



