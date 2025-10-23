@extends('new.layouts.cabinet')

@section('title', 'Создать анкету')

@section('content')

    @include('new.cabinet.include.sidebar')

    <main class="main col-lg-9">

        <form class="anket" action="/cabinet/post" method="post" enctype="multipart/form-data">
            @csrf
            <h1 class="anket__title title">Создать анкету</h1>
            <h2 class="anket__subtitle subtitle">
                Главное фото
            </h2>
            <div class="anket__main anket__block">
                <div class="anket__main-photo">
                    <button class="anket__main-photo-delete" tabindex>
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#cross'></use>
                        </svg>
                    </button>
                    <img class="anket__main-photo-img" data-placeholder="/images/user-placeholder.png"
                         alt="">
                    <div class="anket__main-photo-input">
                        <label for="anketPhoto" tabindex="0">+</label>
                        <input type="file" name="photo" id="anketPhoto" required accept=".jpg, .jpeg">
                    </div>
                </div>
                <div class="anket__main-info">
                    <div class="anket__main-info-item input-wrap">
                        <label for="anketName">Имя</label>
                        <input type="text" name="name" class="anket__main-info-input input" id="name" required>
                    </div>
                    <div class="anket__main-info-item input-wrap">
                        <label for="anketAge">Возраст</label>
                        <input type="text" name="age" class="anket__main-info-input input" id="age" required>
                    </div>
                    <div class="anket__main-info-item input-wrap">
                        <label for="anketPhone">Телефон</label>
                        <input type="text" name="phone" class="anket__main-info-input input" id="phone" required>
                    </div>
                    <div class="anket__main-info-item input-wrap">
                        <label for="anketTelegram">Telegram</label>
                        <input type="text" name="telegram" class="anket__main-info-input input" id="anketTelegram">
                    </div>
                    <div class="anket__main-info-item input-wrap">
                        <label for="anketWhats">WhatsApp</label>
                        <input type="text" name="whats_ap" class="anket__main-info-input input" id="anketWhats">
                    </div>
                </div>
            </div>
            <div class="anket__info">
                <div class="anket__info-main">

                    <h2 class="anket__subtitle subtitle">
                        Тариф
                    </h2>

                    <div class="anket__info-location-select" id="anketRegionWrap">
                        <label for="anketRegion">Тариф:</label>
                        <div class="anket__info-location-select-input">
                            <select name="tarif_id" class="n-select" id="anketRegion">
                                @foreach($tarifList as $item)
                                    <option value="{{ $item->id }}">{{ $item->name }} {{ $item->sum }} р\час</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <br>

                    <h2 class="anket__subtitle subtitle">
                        Параметры
                    </h2>
                    <div class="anket__info-params">
                        <div class="anket__info-params-col">
                            <div class="anket__info-params-item">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#weight'></use>
                                </svg>
                                <div class="anket__info-params-input">
                                    <label for="anketWeight">Вес: </label>
                                    <input type="text" name="ves" id="anketWeight" required>
                                </div>
                            </div>
                            <div class="anket__info-params-item">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#bust'></use>
                                </svg>
                                <div class="anket__info-params-input">
                                    <label for="anketBust">Грудь: </label>
                                    <input type="text" name="breast" id="anketBust" required>
                                </div>
                            </div>
                            <div class="anket__info-params-item">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#sm'></use>
                                </svg>
                                <div class="anket__info-params-input">
                                    <label for="anketHeight">Рост:</label>
                                    <input type="text" name="rost" id="anketHeight" required>
                                </div>
                            </div>
                        </div>
                        <div class="anket__info-params-col--select">
                            <div class="anket__info-params-item">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#hair'></use>
                                </svg>
                                <div class="anket__info-params-input">
                                    <label for="anketHair">Волосы:</label>
                                    <select type="text" class="n-select" name="hair_color_id" id="anketHair">
                                        @foreach($data['hair'] as $item)
                                            <option value="{{ $item->id }}">{{ $item->value }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="anket__info-params-item">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#national'></use>
                                </svg>
                                <div class="anket__info-params-input">
                                    <label for="anketNational">Национальсность:</label>
                                    <select type="text" class="n-select" name="national_id" id="anketNational">
                                        @foreach($data['national'] as $item)
                                            <option value="{{ $item->id }}">{{ $item->value }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="anket__info-params-item">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#phair'></use>
                                </svg>
                                <div class="anket__info-params-input">
                                    <label for="anketPhair">Интим. стрижка:</label>
                                    <select type="text" class="n-select" name="intim_hair_id" id="anketPhair">
                                        @foreach($data['intimHair'] as $item)
                                            <option value="{{ $item->id }}">{{ $item->value }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="anket__sidebar-adapt anket__sidebar-adapt--1"></div>
                    <h2 class="anket__subtitle subtitle">
                        Цены:
                    </h2>
                    <div class="anket__info-price">
                        <div class="anket__info-pricelist">
                            <div class="anket__info-pricellist-name">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#apparts'></use>
                                </svg>
                                <span>Апартаменты:</span>
                            </div>
                            <div class="anket__info-pricelist-cur">
                                <ul>
                                    <li>
                                        <label for="appsHour">Час:</label>
                                        <input type="text" name="price" id="appsHour" required>
                                    </li>
                                    <li>
                                        <label for="apps2Hour">Два часа:</label>
                                        <input type="text" name="apartament_2_hour_price" id="apps2Hour">
                                    </li>
                                    <li>
                                        <label for="appsNight">Ночь:</label>
                                        <input type="text" name="apartament_night_price" id="appsNight">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="anket__info-pricelist">
                            <div class="anket__info-pricellist-name">
                                <svg>
                                    <use xlink:href='/svg/dest/stack/sprite.svg#car'></use>
                                </svg>
                                <span>Выезд:</span>
                            </div>
                            <div class="anket__info-pricelist-cur">
                                <ul>
                                    <li>
                                        <label for="carHour">Час:</label>
                                        <input type="text" name="exit_1_hour_price" id="carHour">
                                    </li>
                                    <li>
                                        <label for="car2Hour">Два часа:</label>
                                        <input type="text" name="exit_2_hour_price" id="car2Hour">
                                    </li>
                                    <li>
                                        <label for="dayCarNight">Ночь:</label>
                                        <input type="text" name="exit_night_price" id="carNight">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="anket__sidebar-adapt anket__sidebar-adapt--2"></div>
                    <h2 class="anket__subtitle subtitle">О себе:</h2>
                    <div class="anket__info-about">
                        <textarea required name="about" placeholder="Расскажите о себе..."></textarea>
                    </div>
                    <h2 class="anket__subtitle subtitle">Местоположение:</h2>
                    <div class="anket__info-location">
                        <div class="anket__info-location-header">
                            <div class="anket__info-location-select" id="anketCityWrap">
                                <label for="anketCity">Город:</label>
                                <div class="anket__info-location-select-input">
                                    <select name="city_id" class="n-select" id="anketCity">
                                        @foreach($data['city_list'] as $item)
                                            <option value="{{ $item->id }}">{{ $item->city }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="anket__info-location-select" id="anketMetroWrap">
                                <label for="anketMetro">Метро:</label>
                                <div class="anket__info-location-select-input">
                                    <select name="metro" class="n-select" id="anketMetro">
                                        @foreach($data['metro'] as $item)
                                            <option value="{{ $item->id }}">{{ $item->value }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="anket__info-location-select" id="anketRegionWrap">
                                <label for="anketRegion">Район:</label>
                                <div class="anket__info-location-select-input">
                                    <select name="rayon_id" class="n-select" id="anketRegion">
                                        @foreach($data['rayon'] as $item)
                                            <option value="{{ $item->id }}">{{ $item->value }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="anket__info-sidebar">
                    <div class="anket__info-sidebar-additom">
                        <div class="anket__info-sidebar-title anket__info-sidebar-addition-title">
                            Дополнительно:
                        </div>
                        <div class="anket__info-sidebar-radio">
                            <div class="anket__info-sidebar-radio-name">
                                Тату:
                            </div>
                            <div class="anket__info-sidebar-radio-cur">

                                <div class="anket__info-sidebar-radio-item">
                                    <input type="radio" name="tatu" id="tatu2" value="0">
                                    <label for="tatu2">Нет</label>
                                </div>

                                <div class="anket__info-sidebar-radio-item">
                                    <input type="radio" name="tatu" id="tatu1" checked value="1">
                                    <label for="tatu1">Есть</label>
                                </div>

                            </div>
                        </div>
                        <div class="anket__info-sidebar-radio">
                            <div class="anket__info-sidebar-radio-name">
                                Пирсинг:
                            </div>
                            <div class="anket__info-sidebar-radio-cur">

                                <div class="anket__info-sidebar-radio-item">
                                    <input type="radio" name="pircing" id="pirs2" value="0">
                                    <label for="pirs2">Нет</label>
                                </div>

                                <div class="anket__info-sidebar-radio-item">
                                    <input type="radio" name="pircing" id="pirs1" checked value="1">
                                    <label for="pirs1">Есть</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="anket__info-sidebar-exit">
                        <div class="anket__info-sidebar-title anket__info-sidebar-exit-title">Место встречи:</div>
                        <div class="anket__info-sidebar-exit-checkboxes anket__info-sidebar-checkboxes">

                            @foreach($data['place'] as $item)

                                <div class="anket__info-sidebar-checkbox">
                                    <input type="checkbox" name="place[]" id="anketAppart-{{ $item->id }}"
                                           value="{{ $item->id }}">
                                    <label for="anketAppart-{{ $item->id }}">{{ $item->value }}</label>
                                </div>

                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
            <h2 class="anket__subtitle subtitle">Услуги:</h2>
            <ul class="anket__services-list">
                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services1'></use>
                        </svg>
                        <span>Секс</span>
                    </h2>
                    <ul class="anket__services-item-list">

                        @foreach($data['service'] as $item)

                            @if($item->type == 'sex')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach

                    </ul>
                </li>
                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services2'></use>
                        </svg>
                        <span>Минет</span>
                    </h2>

                    <ul class="anket__services-item-list">
                        @foreach($data['service'] as $item)

                            @if($item->type == 'minet')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach
                    </ul>
                </li>
                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services3'></use>
                        </svg>
                        <span>Окончание</span>
                    </h2>
                    <ul class="anket__services-item-list">
                        @foreach($data['service'] as $item)

                            @if($item->type == 'cum')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach
                    </ul>
                </li>
                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services4'></use>
                        </svg>
                        <span>Массаж</span>
                    </h2>
                    <ul class="anket__services-item-list">
                        @foreach($data['service'] as $item)

                            @if($item->type == 'mass')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach
                    </ul>
                </li>

                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services4'></use>
                        </svg>
                        <span>Окончание</span>
                    </h2>
                    <ul class="anket__services-item-list">
                        @foreach($data['service'] as $item)

                            @if($item->type == 'cum')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach
                    </ul>
                </li>

                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services6'></use>
                        </svg>
                        <span>Садо-мазо</span>
                    </h2>
                    <ul class="anket__services-item-list">
                        @foreach($data['service'] as $item)

                            @if($item->type == 'bdsm')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach
                    </ul>
                </li>
                <li class="anket__services-item">
                    <h2 class="anket__services-item-title">
                        <svg>
                            <use xlink:href='/svg/dest/stack/sprite.svg#services7'></use>
                        </svg>
                        <span>Разное</span>
                    </h2>

                    <ul class="anket__services-item-list">
                        @foreach($data['service'] as $item)

                            @if($item->type == 'other')

                                <li class="anket__services-item-item">

                                    <select class="n-select anket__services-item-select custom-select"
                                            data-label="{{ $item->value }}"
                                            name="service-{{ $item->id }}" id="">
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--1"
                                                value="1">
                                            включено в стоимость
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--2"
                                                value="2">
                                            по симпатии
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--3"
                                                value="3">
                                            за доп плату
                                        </option>
                                        <option data-display="{{ $item->value }}"
                                                class="anket__services-item-option anket__services-item-option--4"
                                                value="4">
                                            выключено
                                        </option>
                                    </select>

                                </li>

                            @endif

                        @endforeach
                    </ul>
                </li>
            </ul>
            <div class="anket__photos">
                <ul class="anket__photos-titles">
                    <li class="anket__photos-titles-item active">
                        Фотографии
                    </li>
                    <li class="anket__photos-titles-item">
                        Селфи
                    </li>
                    <li class="anket__photos-titles-item">
                        Видео
                    </li>
                    <li class="anket__photos-titles-item">
                        Проверочное фото
                    </li>
                </ul>
                <div class="anket__photos-content">
                    <div class="anket__photos-content-item active">
                        <div class="anket__photos-content-input anket__photos-content-item-item">
                            <label for="anketPhotos">
                                <img src="images/cam.png" alt="">
                                Загрузить фото
                            </label>
                            <input type="file" multiple name="anketPhotos[]" id="anketPhotos"
                                   accept=".png, .jpg, .jpeg">
                        </div>
                    </div>
                    <div class="anket__photos-content-item">
                        <div class="anket__photos-content-input anket__photos-content-item-item">
                            <label for="anketSelfie">
                                <img src="images/cam.png" alt="">
                                Загрузить фото
                            </label>
                            <input type="file" multiple name="anketSelfie[]" id="anketSelfie" accept=".jpg, .jpeg">
                        </div>
                    </div>
                    <div class="anket__photos-content-item">
                        <div class="anket__photos-content-input anket__photos-content-item-item">
                            <label for="anketVideo">
                                <img src="images/cam.png" alt="">
                                Загрузить фото
                            </label>
                            <input type="file" multiple name="anketVideo" id="anketVideo" accept=".mp4">
                        </div>
                    </div>
                    <div class="anket__photos-content-item">
                        <div class="anket__photos-content-input anket__photos-content-item-item">
                            <label for="anketCheckPhoto">
                                <img src="images/cam.png" alt="">
                                Загрузить фото
                            </label>
                            <input type="file" multiple name="anketCheckPhoto" id="anketCheckPhoto"
                                   accept=".jpg, .jpeg">
                        </div>
                    </div>
                </div>
            </div>

            <div class="anket__info-sidebar-exit add-more-post">
                <div class="anket__info-sidebar-title anket__info-sidebar-exit-title">Создать еще анкету</div>
                <div class="anket__info-sidebar-exit-checkboxes anket__info-sidebar-checkboxes">

                    <div class="anket__info-sidebar-checkbox">
                        <input type="checkbox" name="add_more" id="add_more">
                        <label for="add_more">Создать еще анкету</label>
                    </div>

                </div>
            </div>

            <div class="anket__btns">
                <button type="submit" class="anket__btns-btn anket__btns-save btn-main">
                    Сохранить
                </button>
            </div>
        </form>

    </main>

@endsection
