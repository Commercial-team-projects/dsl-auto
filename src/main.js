import './scss/styles.scss';
import './js/mobile-menu';

// testimonials for mobile

const mediaQuery = window.matchMedia('(max-width: 1279px)');
let mobileScriptInitialized = false;

function initMobileTestimonials() {
    if (mobileScriptInitialized) return;

    const items = document.querySelectorAll('.testimonials-list-item');
    const btn = document.querySelector('.show-more-btn');
    let visibleCount = 0;
    const step = 3;
    const delay = 250;

    function showNextBatch() {
        const nextCount = visibleCount + step;
        for (let i = visibleCount; i < nextCount && i < items.length; i++) {
            setTimeout(() => {
                items[i].classList.add('visible');
            }, (i - visibleCount) * delay);
        }
        visibleCount = nextCount;

        if (visibleCount >= items.length) {
            btn.textContent = 'Сховати';
        }
    }

    function hideAll() {
        items.forEach(item => item.classList.remove('visible'));
        visibleCount = 0;
        btn.textContent = 'Показати ще';
        window.scrollTo({
            top: document.querySelector('.testimonials').offsetTop,
            behavior: 'smooth'
        });
    }

    btn.addEventListener('click', () => {
        if (visibleCount >= items.length) {
            hideAll();
        } else {
            showNextBatch();
        }
    });

    showNextBatch();
    mobileScriptInitialized = true;
}

if (mediaQuery.matches) {
    initMobileTestimonials();
}

mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        initMobileTestimonials();
    } else {
        location.reload();
    }
});