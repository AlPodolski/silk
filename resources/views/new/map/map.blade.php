@extends('new.layouts.main')
@section('title', $meta['title'])
@section('des', $meta['des'])

@if(isset($path) and $path)
    @section('can', $path)
@endif

@if(isset($webmaster) and $webmaster)
    @section('webmaster', $webmaster['tag'])
@endif
@section('content')
    @include('new.include.main-menu', compact('data'))
    <div class="catalog">

        <div class="catalog__body">
            <h1>{{ $meta['h1'] }}</h1>
            <div class="map-data d-none">
                {!! $posts !!}
            </div>
            <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
            <div id="yandex-map" style="height: 500px">

            </div>
            <script src="{{ asset('js/map.js') }}"></script>
        </div>
    </div>

    @include('new.include.catalog-menu')

@endsection

@section('open-graph')
    @include('new.include.open-graph', ['title' => $meta['title'], 'des' => $meta['des'], '/images/logo.svg'])
@endsection
