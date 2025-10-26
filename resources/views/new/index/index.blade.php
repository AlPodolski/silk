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

@section('h1')
    <h1 class="big-red-text page-h1">{{ $meta['h1'] }}</h1>
@endsection

@php
    $post = $posts->first();
@endphp

@if(isset($post->avatar))
    @section('preload_img')
        <link rel="preload" as="image" href="/thumbnail/600-800/{{ $post->avatar }}" type="image/jpeg">
    @endsection
@endif

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

    <div class="row content">
        @php
        $i = 0;
        @endphp
        @foreach($posts as $post)
            @include('new.include.item')
            @php
                $i++;
            @endphp
        @endforeach
    </div>

    @if($posts and $posts->total() > $posts->count())

        <div data-url="{{ str_replace('http', 'https', $posts->nextPageUrl()) }}" onclick="getMorePosts(this)"
             class="more-posts">Показать еще
        </div>

        {!! str_replace('http', 'https', $posts->links('vendor.pagination.bootstrap-4')) !!}
    @endif

@endsection

@section('open-graph')
    @include('new.include.open-graph', ['title' => $meta['title'], 'des' => $meta['des'], 'image' => '/images/logo.svg'])
@endsection
@section('catalog')
    @include('new.include.catalog-menu')
@endsection
