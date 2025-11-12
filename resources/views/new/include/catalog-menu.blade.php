<!-- БОКОВОЕ МЕНЮ -->
<!-- ОВЕРЛЕЙ -->
<div class="menu-overlay" data-close></div>
<aside id="side-menu" class="side-menu" aria-hidden="true">
    <nav class="menu">

        <p class="catalog-heading">Каталог</p>

        <a class="menu__item" href="/na-vyezd">Выезд</a>
        <a class="menu__item" href="/novye">Новые</a>
        <a class="menu__item" href="/metro">Метро</a>
        <a class="menu__item" href="/rayon">Район</a>
        <a class="menu__item" href="/service">Услуги</a>
        <a class="menu__item" href="/national">Национальность</a>
        <a class="menu__item" href="/s-video">с видео</a>
        <a class="menu__item" href="/zrelye">Зрелые</a>
        <a class="menu__item" href="/elitnye">Элитные</a>
        <a class="menu__item" href="/molodye">Молодые</a>
        <a class="menu__item" href="/tolstye">Толстые</a>
        <a class="menu__item" href="/deshevye">Дешевые</a>
        <a class="menu__item" href="/proverennye">Проверенные</a>

        @php
            $categories = [
              'metro' => 'Метро',
              'rayon' => 'Район',
              'national' => 'Национальность',
              'place' => 'Место встречи',
              'time' => 'Время встречи',
              'hair' => 'Цвет волос',
              'intimHair' => 'Интимная стрижка',
              'service' => 'Услуги',
            ];
        @endphp

        @foreach($categories as $key => $title)
            @if(isset($data[$key]) && $data[$key]->first())
                <div class="menu__acc">
                    <button class="acc__btn" type="button" aria-expanded="false">
                        {{ $title }}
                        <span class="acc__icon"></span>
                    </button>
                    <div class="acc__panel" hidden>
                        <ul class="acc__list">
                            @foreach($data[$key] as $item)
                                <li><a class="menu__subitem" href="/{{ strtolower($key) }}/{{ $item->filter_url }}">{{ $item->value }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif
        @endforeach
    </nav>
</aside>

<div class="catalog " style="display: none" id="catalogPanel">
    <button class="close-btn" id="catalogClose">&times;</button>
    <p class="catalog-heading">Каталог</p>
    <div class="accordion">
        @php
            $categories = [
                'metro' => 'Метро',
                'rayon' => 'Район',
                'national' => 'Национальность', // Assuming a more appropriate title based on context
                'place' => 'Место встречи',
                'time' => 'Время встречи',
                'hair' => 'Цвет волос',
                'intimHair' => 'Интимная стрижка',
                'service' => 'Услуги',
            ];
        @endphp

        <a class="sidebar-link" href="/na-vyezd">Выезд</a>
        <a class="sidebar-link" href="/novye">Новые</a>
        <a class="sidebar-link" href="/s-video">с видео</a>
        <a class="sidebar-link" href="/zrelye">Зрелые</a>
        <a class="sidebar-link" href="/elitnye">Элитные</a>
        <a class="sidebar-link" href="/molodye">Молодые</a>
        <a class="sidebar-link" href="/tolstye">Толстые</a>
        <a class="sidebar-link" href="/deshevye">Дешевые</a>
        <a class="sidebar-link" href="/proverennye">Проверенные</a>

        @foreach($categories as $key => $title)
            @if(isset($data[$key]) && $data[$key]->first())
                <div class="accordion-item">
                    <div class="accordion-header">{{ $title }}</div>
                    <div class="accordion-content">
                        <ul>
                            @foreach($data[$key] as $item)
                                <li><a href="/{{ $item->filter_url }}">{{ $item->value }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif
        @endforeach
    </div>
</div>
