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
              'price' => 'Цена',
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
