@extends('new.layouts.main')

@section('title', $meta['title'])
@section('des', $meta['des'])

@php
    /* @var $post \App\Models\Post */
@endphp

@section('location_metro')
    @include('new.include.location_metro')
@endsection

@section('filter')
    @include('new.include.filter')
@endsection

@section('open_img')
    /storage{{$post->avatar}}
@endsection

@section('content')

    @if (session('success'))
        <div class="col-12">
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        </div>
    @endif

    @include('new.include.breadcrumb')

    <h1>{{ $meta['h1'] }}</h1>

    <div class="single">
        <div class="main-photo">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="/storage/{{$post->avatar}}"
                             alt="{{ $post->name }} привлекальеная девушка из {{ $post->city->city2 }} цена от {{ $post->price }} руб">
                    </div>

                    @if($post->photo->first())

                        @foreach($post->photo as $item)
                            <div class="swiper-slide"><img src="/storage/{{ $item->file }}" loading="lazy"
                                                           alt="Индивидуалка {{ $post->name }}, доступна для личного знакомства от {{ $post->price }} руб">
                            </div>
                        @endforeach

                    @endif
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="params">
            <div class="phone" data-id="{{ $post->id }}" data-city="{{ $post->city_id }}" onclick="call(this)">
                Показать номер
            </div>
            <div class="single-price d-flex">
                <div class="apart-price d-flex">
                    <div class="price-heading">
                        Цена в апартаментах:
                    </div>
                    <div class="price-item-wrap">
                        <div class="price-item"><span>1 час </span> <span>{{ $post->price }} руб</span></div>
                        <div class="price-item"><span>2 часа</span> <span>{{ $post->two_hour_price }} руб</span></div>
                        <div class="price-item"><span>Ночь  </span> <span>{{ $post->apartament_night_price }} руб</span>
                        </div>
                    </div>
                </div>
                <div class="journey-price d-flex">
                    <div class="price-heading">
                        Цена на выезд:
                    </div>
                    <div class="price-item-wrap">
                        <div class="price-item"><span>1 час </span> <span>{{ $post->exit_1_hour_price }} руб</span>
                        </div>
                        <div class="price-item"><span>2 часа</span> <span>{{ $post->exit_2_hour_price }} руб</span>
                        </div>
                        <div class="price-item"><span>Ночь  </span> <span>{{ $post->exit_night_price }} руб</span></div>
                    </div>

                </div>
            </div>
            <div class="about-post">
                <div class="about-heading">
                    О себе
                </div>
                <div class="about-text">
                    {{ $post->about }}
                </div>
            </div>
            <div class="service-wrap">
                <div class="about-heading">
                    Услуги
                </div>
                <ul class="list">

                    @foreach($post->service as $item)

                        @php

                         $class = '';

                         if ($item->not_available == 0) $class = 'done';

                        @endphp

                        <li class="item {{ $class }} ">
                            <div class="check">
                                <div class="check-icon"></div>
                            </div>
                            <a href="/{{ $item->filter_url }}" class="label">{{ $item->value }}</a>
                        </li>

                    @endforeach

                </ul>
            </div>

            @php

                $x = '';
                $y = '';

                if ($metro = $post->metro->first()){
                    $x = $metro->x;
                    $y = $metro->y;
                }

            @endphp

            @if($x)

                <div class="map-wrap">
                    <div class="about-heading">
                        Мое местонахождения
                    </div>

                    <div data-x="{{$x}}" data-y="{{ $y }}" id="map" style="width: 100%; height: 400px;"></div>

                </div>
            @endif

        </div>
    </div>

    <div class="about-heading">
        Вам может понравится:
    </div>

    <div class="more-posts-wrap">
        @foreach($morePosts as $post)
            @include('new.include.item')
        @endforeach
    </div>

@endsection
@section('catalog')
    @include('new.include.catalog-menu')
@endsection
