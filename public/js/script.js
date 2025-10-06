function ageSuffix(value) {
    value = parseInt(value);
    let mod10 = value % 10;
    let mod100 = value % 100;

    if (mod10 === 1 && mod100 !== 11) {
        return value + ' год';
    } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
        return value + ' года';
    } else {
        return value + ' лет';
    }
}

function createSlider(sliderId, fromId, toId, min, max, step, suffix = '', thousandSeparator = '', useCustomFormat = false) {
    var slider = document.getElementById(sliderId);

    var formatOptions = useCustomFormat ? {
        to: function (value) {
            return ageSuffix(value);
        },
        from: function (value) {
            return Number(value.replace(/[^0-9]/g, ''));
        }
    } : wNumb({
        decimals: 0,
        thousand: thousandSeparator,
        suffix: suffix
    });

    noUiSlider.create(slider, {
        start: [
            document.getElementById(fromId).getAttribute('data-value'),
            document.getElementById(toId).getAttribute('data-value')
        ],
        connect: true,
        step: step,
        format: formatOptions,
        range: {
            'min': min,
            'max': max
        }
    });

    slider.noUiSlider.on('update', function (values) {
        document.getElementById(fromId).value = values[0];
        document.getElementById(toId).value = values[1];
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Проверка наличия хотя бы одного блока слайдера
    const ids = ['age', 'ves', 'grud', 'price'];
    const hasSlider = ids.some(id => document.getElementById(id));

    if (!hasSlider) return;

    // Подключение CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/css/nouislider.min.css';
    document.head.prepend(css);

    // Функция динамического подключения скриптов
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.defer = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.prepend(script);
        });
    }

    // Загружаем оба скрипта и после инициализируем слайдеры
    Promise.all([
        loadScript('/js/nouislider.min.js'),
        loadScript('/js/wNumb.min.js')
    ]).then(() => {
        // Вызываем createSlider только после полной загрузки скриптов
        createSlider('age', 'age-from', 'age-to', 18, 80, 1, '', '', true);
        createSlider('ves', 'ves-from', 'ves-to', 40, 100, 1, ' кг');
        createSlider('grud', 'grud-from', 'grud-to', 0, 8, 1, ' размер');
        createSlider('price', 'price-from', 'price-to', 1500, 50000, 100, ' ₽', ' ');
    }).catch(err => {
        console.error('Ошибка при загрузке скриптов:', err);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiperBlock = document.querySelector(".mySwiper");
    if (!swiperBlock) return;

    // Подключаем CSS
    const swiperStyle = document.createElement("link");
    swiperStyle.rel = "stylesheet";
    swiperStyle.href = "/css/swiper-bundle.min.css";
    document.head.prepend(swiperStyle);

    // Подключаем JS
    const swiperScript = document.createElement("script");
    swiperScript.src = "/js/swiper-bundle.min.js";
    swiperScript.defer = true;

    swiperScript.onload = function () {
        new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    };

    document.head.prepend(swiperScript);
});

document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("map");

    // Если блока нет — ничего не делаем
    if (!mapElement) return;

    // Загружаем скрипт Яндекс.Карт
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.type = "text/javascript";
    script.onload = function () {
        const lng = parseFloat(mapElement.dataset.y);
        const lat = parseFloat(mapElement.dataset.x);

        if (isNaN(lat) || isNaN(lng)) return;

        ymaps.ready(function () {
            const myMap = new ymaps.Map("map", {
                center: [lat, lng],
                zoom: 12
            });

            const myPlacemark = new ymaps.Placemark([lat, lng], {
                hintContent: 'Продавец'
            });

            myMap.geoObjects.add(myPlacemark);
        });
    };

    document.head.appendChild(script);
});

const toggleButton = document.getElementById('filterToggle');
const closeButton = document.getElementById('filterClose');
const filterPanel = document.getElementById('filterPanel');

toggleButton.addEventListener('click', () => {
    filterPanel.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    filterPanel.classList.remove('open');
});


const catalogToggle = document.getElementById('burger-menu');
const catalogClose = document.getElementById('catalogClose');
const catalogPanel = document.getElementById('catalogPanel');
const overlay = document.getElementById('overlay');

// Открыть каталог
catalogToggle.addEventListener('click', () => {
    catalogPanel.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
});

// Закрыть каталог
function closeCatalog() {
    catalogPanel.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем прокрутку страницы
}

catalogClose.addEventListener('click', closeCatalog);
overlay.addEventListener('click', closeCatalog);

// Аккордеон
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }

        // Закрыть другие
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherHeader.nextElementSibling;
                otherItem.classList.remove('active');
                otherContent.style.maxHeight = 0;
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.star-rating').forEach(container => {
        const inputName = container.dataset.inputName;
        const hiddenInput = document.querySelector(`input[name="${inputName}"]`);
        let currentRating = 0;

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.dataset.index = i;

            star.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22
                    9.24l-7.19-.61L12 2 9.19 8.63
                    2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
            `;

            star.addEventListener('mousemove', (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const isLeft = (e.clientX - rect.left) < rect.width / 2;
                updateStars(container, i - 1 + (isLeft ? 0.5 : 1));
            });

            star.addEventListener('mouseleave', () => {
                updateStars(container, currentRating);
            });

            star.addEventListener('click', (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const isLeft = (e.clientX - rect.left) < rect.width / 2;
                currentRating = (i - 1 + (isLeft ? 0.5 : 1)) * 2;
                hiddenInput.value = currentRating;
            });

            container.appendChild(star);
        }

        function updateStars(container, value) {
            const stars = container.querySelectorAll('.star');
            stars.forEach((star, i) => {
                star.classList.remove('full', 'half');
                const starValue = i + 1;
                if (value >= starValue) {
                    star.classList.add('full');
                } else if (value >= starValue - 0.5) {
                    star.classList.add('half');
                }
            });
        }
    });
});

function getMorePosts(button) {
    const url = button.getAttribute('data-url');
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token
        },
        credentials: 'same-origin', // сохраняет куки
    })
        .then(response => response.text())
        .then(text => {
            let data;

            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error('Ошибка парсинга JSON:', e);
                return;
            }

            if (data) {
                window.history.pushState('', document.title, url);

                if (data.posts) {
                    document.querySelector('.content').insertAdjacentHTML('beforeend', data.posts);
                }

                if (data.next_page) {
                    button.setAttribute('data-url', data.next_page);
                } else {
                    button.remove();
                }
            }
        })
        .catch(error => {
            console.error('Ошибка при запросе:', error);
        });
}

let lastScrollTop = window.scrollY;
const header = document.querySelector('.bottom-header');

function handleScroll() {
    if (window.innerWidth >= 768) {
        header.classList.remove('fixed'); // сброс фиксированного состояния на десктопе
        return;
    }

    const currentScroll = window.scrollY;

    if (currentScroll < lastScrollTop - 10) {
        // Прокрутка вверх
        header.classList.add('fixed');
    } else if (currentScroll > lastScrollTop + 10) {
        // Прокрутка вниз
        header.classList.remove('fixed');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll); // обработка изменения ширины

const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 900);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

function selectSorting() {

    var select = document.getElementById('sort');

    if (select.value) {
        document.cookie = 'sort=' + select.value;
    }

    window.location.href = location.pathname + location.search;

}

// Открытие
document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-target');
        document.getElementById(id).style.display = 'block';
    });
});

// Закрытие
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Закрытие при клике вне окна
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".more-posts");
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // передаём сам элемент, как ты хотел
                getMorePosts(entry.target);
                // если нужно вызвать только один раз — снимаем наблюдение
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "150px 0px 150px 0px", // срабатывает за 150px до появления элемента
        threshold: 0
    });

    targets.forEach(el => observer.observe(el));
});
