@extends('new.layouts.main')
@section('title', $meta['title'])
@section('des', $meta['des'])

@if(isset($path) and $path)
    @section('can', $path)
@endif

@if(isset($webmaster) and $webmaster)
    @section('webmaster', $webmaster['tag'])
@endif

@section('filter')
    @include('new.include.filter')
@endsection


@section('location_metro')
    @include('new.include.location_metro')
@endsection

@section('content')

    @if(isset($productMicro))
        {!! $productMicro !!}
    @endif

    @if(isset($serviceMicro))
        {!! $serviceMicro !!}
    @endif

    @if(isset($webSiteMicro))
        {!! $webSiteMicro !!}
    @endif

    <h1>{{ $meta['h1'] }}</h1>

    <ul class="category-items">
        @foreach($data[$search] as $item)
            <li>
                <a href="/{{ $search }}/{{ $item->filter_url }}">{{ $item->value }}</a>
            </li>
        @endforeach
    </ul>

    @include('new.include.catalog-menu')

@endsection

@section('open-graph')
    @include('new.include.open-graph', ['title' => $meta['title'], 'des' => $meta['des'], 'image' => '/images/logo.svg'])
@endsection

