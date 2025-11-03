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

    <div class="col-12 single-card">
        <div class="row">
            <div class="col-12 col-lg-5">
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
            <div class="col-12 col-lg-7 ">
                <div class="right-single-content">
                    <h1 class="big-red-text single-name">{{ $post->name }} от {{ $post->price }} руб/час</h1>
                    <a class="single-phone" href="tel:+{{ $post->phone }}">{{ formatPhone($post->phone) }}</a>
                    <div class="photo-count-wrap single-photo-count-wrap d-flex">
                        <div class="photo-icon d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 9 9"
                                 fill="none">
                                <g clip-path="url(#clip0_215_470)">
                                    <path
                                        d="M8.70057 2.06177C8.52091 1.87356 8.27281 1.76234 7.99049 1.76234H6.57034V1.74523C6.57034 1.53135 6.48479 1.32603 6.33935 1.18915C6.19392 1.04371 5.99715 0.95816 5.78327 0.95816H3.21673C2.9943 0.95816 2.79753 1.04371 2.65209 1.18915C2.50665 1.33459 2.4211 1.53135 2.4211 1.74523V1.76234H1.00951C0.727186 1.76234 0.479087 1.87356 0.29943 2.06177C0.119772 2.24143 0 2.49808 0 2.77185V7.0323C0 7.31462 0.111217 7.56272 0.29943 7.74238C0.479087 7.92204 0.735741 8.04181 1.00951 8.04181H7.99049C8.27281 8.04181 8.52091 7.93059 8.70057 7.74238C8.88023 7.56272 9 7.30607 9 7.0323V2.77185C9 2.48953 8.88878 2.24143 8.70057 2.06177ZM8.55513 7.0323H8.54658C8.54658 7.1863 8.48669 7.32318 8.38403 7.42584C8.28137 7.5285 8.14449 7.58839 7.99049 7.58839H1.00951C0.855513 7.58839 0.718631 7.5285 0.61597 7.42584C0.513308 7.32318 0.453422 7.1863 0.453422 7.0323V2.77185C0.453422 2.61786 0.513308 2.48097 0.61597 2.37831C0.718631 2.27565 0.855513 2.21576 1.00951 2.21576H2.66065C2.78897 2.21576 2.89164 2.1131 2.89164 1.98478V1.73668C2.89164 1.64257 2.92586 1.55702 2.98574 1.49713C3.04563 1.43725 3.13118 1.40303 3.22529 1.40303H5.78327C5.87738 1.40303 5.96293 1.43725 6.02281 1.49713C6.0827 1.55702 6.11692 1.64257 6.11692 1.73668V1.98478C6.11692 2.1131 6.21958 2.21576 6.34791 2.21576H7.99905C8.15304 2.21576 8.28992 2.27565 8.39259 2.37831C8.49525 2.48097 8.55513 2.61786 8.55513 2.77185V7.0323Z"
                                        fill="white"></path>
                                    <path
                                        d="M4.50007 2.79752C3.91832 2.79752 3.3879 3.03706 3.01148 3.41349C2.6265 3.79847 2.39551 4.32033 2.39551 4.90208C2.39551 5.48383 2.63505 6.01425 3.01148 6.39067C3.39646 6.77565 3.91832 7.00664 4.50007 7.00664C5.08182 7.00664 5.61224 6.7671 5.98867 6.39067C6.37365 6.00569 6.60464 5.48383 6.60464 4.90208C6.60464 4.32033 6.36509 3.78991 5.98867 3.41349C5.61224 3.03706 5.08182 2.79752 4.50007 2.79752ZM5.66357 6.07413C5.36414 6.36501 4.95349 6.55322 4.50007 6.55322C4.04665 6.55322 3.636 6.36501 3.33657 6.07413C3.03714 5.7747 2.85749 5.36406 2.85749 4.91063C2.85749 4.45721 3.0457 4.04657 3.33657 3.74714C3.636 3.44771 4.04665 3.26805 4.50007 3.26805C4.95349 3.26805 5.36414 3.45626 5.66357 3.74714C5.963 4.04657 6.14266 4.45721 6.14266 4.91063C6.15121 5.36406 5.963 5.7747 5.66357 6.07413Z"
                                        fill="white"></path>
                                    <path
                                        d="M7.54567 3.62741C7.77718 3.62741 7.96487 3.43972 7.96487 3.2082C7.96487 2.97668 7.77718 2.789 7.54567 2.789C7.31415 2.789 7.12646 2.97668 7.12646 3.2082C7.12646 3.43972 7.31415 3.62741 7.54567 3.62741Z"
                                        fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_215_470">
                                        <rect width="9" height="9" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <span class="photo-count single-photo-count"> Фото +{{ $post->photo->count() }}</span>
                    </div>
                    <div class="card-info card-white-text single-city-name">
                        <div class="city-location-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 8 9"
                                 fill="none">
                                <path
                                    d="M4.00017 0C2.52979 0 1.3335 1.34583 1.3335 3.00001C1.3335 3.49659 1.44386 3.98895 1.65365 4.42566L3.85434 8.90332C3.88364 8.96302 3.93947 9 4.00017 9C4.06087 9 4.1167 8.96302 4.146 8.90332L6.3475 4.42419C6.55648 3.98895 6.66684 3.49657 6.66684 2.99999C6.66684 1.34583 5.47054 0 4.00017 0ZM4.00017 4.5C3.26498 4.5 2.66684 3.82709 2.66684 3.00001C2.66684 2.17292 3.26498 1.50001 4.00017 1.50001C4.73536 1.50001 5.3335 2.17292 5.3335 3.00001C5.3335 3.82709 4.73536 4.5 4.00017 4.5Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                        <span class="single-photo-count">{{ $post->city->city }}</span>
                    </div>
                    <div class="card-info single-review-count">
                        <div class="review-count-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 8 8"
                                 fill="none">
                                <g clip-path="url(#clip0_215_442)">
                                    <path
                                        d="M7.9712 6.27882L7.50656 4.92658C7.73052 4.46874 7.84888 3.95955 7.84968 3.44722C7.85106 2.55639 7.5064 1.71409 6.87918 1.0755C6.25184 0.436777 5.41587 0.0772296 4.52524 0.0631202C3.60172 0.0485264 2.73366 0.399808 2.08105 1.0524C1.45177 1.68167 1.10274 2.51125 1.09169 3.39775C0.471471 3.86472 0.105393 4.59277 0.106596 5.37041C0.107174 5.73432 0.18908 6.09605 0.344284 6.42316L0.0242364 7.35454C-0.0307793 7.51465 0.00940825 7.68849 0.129127 7.80821C0.213377 7.89248 0.324455 7.93734 0.43869 7.93734C0.486752 7.93734 0.535377 7.9294 0.582799 7.9131L1.51419 7.59305C1.8413 7.74826 2.20303 7.83016 2.56694 7.83074C2.56825 7.83074 2.5695 7.83074 2.57082 7.83074C3.36004 7.83071 4.09363 7.45519 4.5589 6.81977C5.04307 6.80702 5.52212 6.68982 5.95519 6.47796L7.30745 6.94261C7.36379 6.96197 7.42157 6.97141 7.47868 6.97141C7.61443 6.97141 7.74643 6.9181 7.84657 6.81794C7.98882 6.67568 8.03657 6.4691 7.9712 6.27882ZM2.57079 7.35455C2.56977 7.35455 2.56869 7.35455 2.56768 7.35455C2.24558 7.35407 1.92572 7.27466 1.64274 7.12494C1.58455 7.09418 1.51624 7.08885 1.45402 7.11022L0.498971 7.4384L0.827143 6.48336C0.848518 6.42113 0.843206 6.35282 0.812424 6.29464C0.662706 6.01164 0.583299 5.6918 0.582799 5.36969C0.582002 4.85158 0.78355 4.3605 1.136 3.99278C1.25113 4.6946 1.58561 5.34132 2.10408 5.85057C2.61872 6.35605 3.26563 6.6779 3.96363 6.78311C3.59507 7.14638 3.09825 7.35455 2.57079 7.35455ZM7.50982 6.48122C7.49627 6.49477 7.48021 6.49846 7.46215 6.49224L6.01452 5.9948C5.98938 5.98616 5.96323 5.98188 5.93716 5.98188C5.89874 5.98188 5.86046 5.99118 5.82582 6.00952C5.41249 6.22818 4.94543 6.34415 4.47508 6.34486C4.47354 6.34486 4.47213 6.34486 4.47058 6.34486C2.8946 6.34486 1.59283 5.06464 1.56786 3.48903C1.55528 2.69551 1.85713 1.94975 2.41777 1.38911C2.97841 0.828465 3.7243 0.52673 4.51771 0.53923C6.09483 0.564246 7.37593 1.86842 7.37349 3.44647C7.37276 3.91681 7.2568 4.38389 7.03816 4.79719C7.00738 4.85536 7.00207 4.92367 7.02345 4.98591L7.52087 6.43354C7.52707 6.45166 7.52335 6.46771 7.50982 6.48122Z"
                                        fill="white"></path>
                                    <path
                                        d="M5.88894 2.17987H3.05206C2.92056 2.17987 2.81396 2.28648 2.81396 2.41797C2.81396 2.54947 2.92057 2.65606 3.05206 2.65606H5.88894C6.02044 2.65606 6.12703 2.54945 6.12703 2.41797C6.12703 2.28648 6.02044 2.17987 5.88894 2.17987Z"
                                        fill="white"></path>
                                    <path
                                        d="M5.88894 3.15912H3.05206C2.92056 3.15912 2.81396 3.26573 2.81396 3.39721C2.81396 3.5287 2.92057 3.63531 3.05206 3.63531H5.88894C6.02044 3.63531 6.12703 3.5287 6.12703 3.39721C6.12703 3.26573 6.02044 3.15912 5.88894 3.15912Z"
                                        fill="white"></path>
                                    <path
                                        d="M4.79696 4.13831H3.05206C2.92056 4.13831 2.81396 4.24492 2.81396 4.3764C2.81396 4.5079 2.92057 4.61449 3.05206 4.61449H4.79694C4.92844 4.61449 5.03504 4.50788 5.03504 4.3764C5.03504 4.24492 4.92846 4.13831 4.79696 4.13831Z"
                                        fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_215_442">
                                        <rect width="8" height="8" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <span class="review-count">{{ $post->reviews->count() }} отзывов</span>
                    </div>

                    <div class="message-btn-wrap" data-target="message-modal">
                        <div class="yellow-btn">
                            Написать сообщение
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor">
                                <path
                                    d="M22.5 2.5L2 11.2c-.5.2-.5.9 0 1.1l5.2 1.7 1.8 5.4c.2.6.9.6 1.2.1l2.5-4.1 4.7 3.5c.4.3 1 .1 1.1-.4L23.5 3.5c.1-.6-.5-1.1-1-.9z"/>
                            </svg>
                        </div>
                    </div>

                    <div id="message-modal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <form action="/message/phone" method="post" class="phone-message-form">
                                @csrf
                                <input type="hidden" name="posts_id" value="{{ $post->id }}">
                                <input type="text" class="review-input" name="name" placeholder="Ваше имя" required>
                                <input type="text" class="review-input" name="phone" placeholder="Ваш телефон" required>
                                <textarea placeholder="Комментарий" name="text"></textarea>
                                <button type="submit" class="red-btn">Отправить</button>
                            </form>
                        </div>
                    </div>

                    @if($post->metro->first())
                        <div class="metro-wrap d-flex">
                            <div class="metro-label">Метро:</div>
                            @foreach($post->metro as $item)
                                <div class="metro-name">
                                    <a href="/{{ $item->metro_url }}">{{ $item->metro_value }}</a>
                                    @if($item != $post->metro->last())
                                        ,
                                    @endif
                                </div>
                            @endforeach
                        </div>
                    @endif

                    @if($post->rayon)
                        <div class="metro-wrap d-flex">
                            <div class="metro-label">Район:</div>
                            <div class="metro-name"><a
                                    href="/{{ $post->rayon->filter->url}}">{{ $post->rayon->value }}</a></div>
                        </div>
                    @endif

                    <div class="metro-wrap d-flex">
                        <div class="metro-label">Национальность:</div>
                        <div class="metro-name">
                            <a href="/{{ $post->national->filter_url}}">{{ $post->national->value }}</a>
                        </div>
                    </div>


                    <div class="price-container">
                        <div class="price-block">
                            <div class="price-list">
                                <div class="price-title">Апартаменты:</div>
                                <div class="price-row">
                                    <div class="price-label">Час:</div>
                                    <div class="price-value">{{ $post->price }} ₽</div>
                                </div>
                                <div class="price-row">
                                    <div class="price-label">Два часа:</div>
                                    <div class="price-value">{{ $post->apartament_2_hour_price ?? '-' }} ₽</div>
                                </div>
                                <div class="price-row">
                                    <div class="price-label">Ночь:</div>
                                    <div class="price-value">{{ $post->apartament_night_price ?? '-' }} ₽</div>
                                </div>
                            </div>
                        </div>

                        <div class="price-block">
                            <div class="price-list">
                                <div class="price-title">Выезд:</div>
                                <div class="price-row">
                                    <div class="price-label">Час:</div>
                                    <div class="price-value">{{ $post->exit_1_hour_price ?? '-'}} ₽</div>
                                </div>
                                <div class="price-row">
                                    <div class="price-label">Два часа:</div>
                                    <div class="price-value">{{ $post->exit_2_hour_price ?? '-'}} ₽</div>
                                </div>
                                <div class="price-row">
                                    <div class="price-label">Ночь:</div>
                                    <div class="price-value">{{ $post->exit_night_price ?? '-'}} ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 single-other-info">
                <div class="profile-card">
                    <div class="profile-header d-flex">
                        <img src="/storage/{{$post->avatar}}" alt="{{ $post->name }}" class="profile-avatar">
                        <div class="name-info-wrap d-flex">
                            <div class="profile-name">{{ $post->name }}</div>
                            <div class="profile-info">
                                <div class="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                         fill="none">
                                        <path
                                            d="M4.50473 5.92084H3.14285C3.0272 5.92084 2.93359 6.01445 2.93359 6.1301V7.49197C2.93359 7.60748 3.0272 7.70123 3.14285 7.70123H4.50473C4.62038 7.70123 4.71399 7.60748 4.71399 7.49197V6.1301C4.71399 6.01459 4.62038 5.92084 4.50473 5.92084ZM4.29547 7.28271H3.35212V6.33936H4.29547V7.28271Z"
                                            fill="#F74952"/>
                                        <path
                                            d="M7.68051 5.92084H6.31864C6.20298 5.92084 6.10938 6.01445 6.10938 6.1301V7.49197C6.10938 7.60748 6.20298 7.70123 6.31864 7.70123H7.68051C7.79602 7.70123 7.88977 7.60748 7.88977 7.49197V6.1301C7.88977 6.01459 7.79602 5.92084 7.68051 5.92084ZM7.47125 7.28271H6.5279V6.33936H7.47125V7.28271Z"
                                            fill="#F74952"/>
                                        <path
                                            d="M10.7586 5.92084H9.39676C9.28125 5.92084 9.1875 6.01445 9.1875 6.1301V7.49197C9.1875 7.60748 9.28125 7.70123 9.39676 7.70123H10.7586C10.8741 7.70123 10.9679 7.60748 10.9679 7.49197V6.1301C10.9679 6.01459 10.8741 5.92084 10.7586 5.92084ZM10.5494 7.28271H9.60602V6.33936H10.5494V7.28271Z"
                                            fill="#F74952"/>
                                        <path
                                            d="M4.50473 9.02295H3.14285C3.0272 9.02295 2.93359 9.1167 2.93359 9.23221V10.5941C2.93359 10.7096 3.0272 10.8033 3.14285 10.8033H4.50473C4.62038 10.8033 4.71399 10.7096 4.71399 10.5941V9.23221C4.71399 9.1167 4.62038 9.02295 4.50473 9.02295ZM4.29547 10.3848H3.35212V9.44147H4.29547V10.3848Z"
                                            fill="#F74952"/>
                                        <path
                                            d="M7.68051 9.02295H6.31864C6.20298 9.02295 6.10938 9.1167 6.10938 9.23221V10.5941C6.10938 10.7096 6.20298 10.8033 6.31864 10.8033H7.68051C7.79602 10.8033 7.88977 10.7096 7.88977 10.5941V9.23221C7.88977 9.1167 7.79602 9.02295 7.68051 9.02295ZM7.47125 10.3848H6.5279V9.44147H7.47125V10.3848Z"
                                            fill="#F74952"/>
                                        <path
                                            d="M10.7586 9.02295H9.39676C9.28125 9.02295 9.1875 9.1167 9.1875 9.23221V10.5941C9.1875 10.7096 9.28125 10.8033 9.39676 10.8033H10.7586C10.8741 10.8033 10.9679 10.7096 10.9679 10.5941V9.23221C10.9679 9.1167 10.8741 9.02295 10.7586 9.02295ZM10.5494 10.3848H9.60602V9.44147H10.5494V10.3848Z"
                                            fill="#F74952"/>
                                        <path
                                            d="M12.4169 1.86857H11.0348C11.033 1.86857 11.0314 1.86899 11.0296 1.86913V1.59039C11.0296 1.13448 10.6588 0.763672 10.2029 0.763672C9.74699 0.763672 9.37618 1.13462 9.37618 1.59039V1.86857H7.81885V1.59039C7.81885 1.13448 7.44804 0.763672 6.99213 0.763672C6.53622 0.763672 6.16541 1.13462 6.16541 1.59039V1.86857H4.60795V1.59039C4.60795 1.13448 4.23714 0.763672 3.78123 0.763672C3.32532 0.763672 2.9545 1.13462 2.9545 1.59039V1.86871C2.95381 1.86871 2.95311 1.86857 2.95241 1.86857H1.57059C1.45494 1.86857 1.36133 1.96218 1.36133 2.07783V12.924C1.36133 13.0395 1.45494 13.1332 1.57059 13.1332H12.4169C12.5324 13.1332 12.6261 13.0395 12.6261 12.924V2.07783C12.6261 1.96218 12.5324 1.86857 12.4169 1.86857ZM9.7947 1.59039C9.7947 1.36523 9.97773 1.18219 10.2029 1.18219C10.4281 1.18219 10.6111 1.36523 10.6111 1.59039V2.7451C10.6111 2.97012 10.4281 3.1533 10.2029 3.1533C9.97773 3.1533 9.7947 2.97026 9.7947 2.7451V1.59039ZM6.99213 1.18219C7.21716 1.18219 7.40033 1.36523 7.40033 1.59039V2.7451C7.40033 2.97012 7.2173 3.1533 6.99213 3.1533C6.76697 3.1533 6.58393 2.97026 6.58393 2.7451V2.09736C6.58449 2.09081 6.58589 2.08453 6.58589 2.07769C6.58589 2.07086 6.58449 2.06458 6.58393 2.05802V1.59039C6.58393 1.36523 6.76697 1.18219 6.99213 1.18219ZM3.37303 1.59039C3.37303 1.36523 3.55606 1.18219 3.78123 1.18219C4.00625 1.18219 4.18942 1.36523 4.18942 1.59039V2.7451C4.18942 2.97012 4.00639 3.1533 3.78123 3.1533C3.55606 3.1533 3.37303 2.97026 3.37303 2.7451V1.59039ZM12.2076 12.7147H1.77985V2.28709H2.95241C2.95311 2.28709 2.95381 2.28695 2.9545 2.28695V2.74524C2.9545 3.20115 3.32545 3.57196 3.78123 3.57196C4.237 3.57196 4.60795 3.20115 4.60795 2.74524V2.28723H6.16541V2.74524C6.16541 3.20115 6.53636 3.57196 6.99213 3.57196C7.4479 3.57196 7.81885 3.20115 7.81885 2.74524V2.28723H9.37618V2.74524C9.37618 3.20115 9.74699 3.57196 10.2029 3.57196C10.6588 3.57196 11.0296 3.20115 11.0296 2.74524V2.28654C11.0314 2.28654 11.033 2.28709 11.0348 2.28709H12.2076V12.7147Z"
                                            fill="#F74952"/>
                                    </svg>
                                    <span>{{ $post->age }}</span>
                                </div>
                                <div class="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                         fill="none">
                                        <path
                                            d="M11.8225 0L0 11.8225L3.79752 15.62L15.62 3.79752L11.8225 0ZM3.79752 14.7751L0.844889 11.8225L1.68679 10.9776L2.73469 12.0315L3.15565 11.6105L2.10177 10.5536L2.94666 9.70876L4.4394 11.2015L4.85438 10.7656L3.36164 9.28781L4.22743 8.44292L5.2813 9.49978L5.70524 9.07584L4.64838 8.02197L5.49327 7.17708L6.98601 8.65489L7.40995 8.23095L5.93214 6.75314L6.77404 5.91124L7.81 6.96511L8.23095 6.54416L7.17708 5.4873L8.02197 4.64241L9.49978 6.12022L9.92073 5.69927L8.42799 4.22146L9.30274 3.37657L10.3596 4.43343L10.7805 4.00949L9.72369 2.95562L10.5686 2.11073L12.0613 3.58854L12.4853 3.1646L10.9925 1.67187L11.8374 0.829962L14.79 3.7826L3.79752 14.7751Z"
                                            fill="#F74952"/>
                                    </svg>
                                    <span>{{ $post->rost }} см</span>
                                </div>
                                <div class="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                         fill="none">
                                        <g clip-path="url(#clip0_220_356)">
                                            <path
                                                d="M15.5059 0H1.49414C0.670288 0 0 0.670288 0 1.49414V15.5059C0 16.3297 0.670288 17 1.49414 17H15.5059C16.3297 17 17 16.3297 17 15.5059V1.49414C17 0.670288 16.3297 0 15.5059 0ZM16.0039 15.5059C16.0039 15.7804 15.7804 16.0039 15.5059 16.0039H1.49414C1.21957 16.0039 0.996094 15.7804 0.996094 15.5059V1.49414C0.996094 1.21957 1.21957 0.996094 1.49414 0.996094H15.5059C15.7804 0.996094 16.0039 1.21957 16.0039 1.49414V15.5059Z"
                                                fill="#F74952"/>
                                            <path
                                                d="M14.2442 3.97283C12.5744 2.72058 10.588 2.05859 8.50001 2.05859C6.41198 2.05859 4.42563 2.72058 2.75587 3.97283C2.65017 4.05221 2.58026 4.17023 2.56158 4.3011C2.54303 4.43197 2.57715 4.56491 2.65652 4.67062L5.28566 8.16836C5.38359 8.29858 5.533 8.36719 5.68423 8.36719C5.78812 8.36719 5.89305 8.33476 5.98267 8.26758C6.71444 7.71882 7.58485 7.42868 8.50001 7.42868C9.41504 7.42868 10.2856 7.71882 11.0174 8.26758C11.2372 8.43256 11.5491 8.38807 11.7142 8.16836L14.3434 4.67062C14.4229 4.56491 14.457 4.43197 14.4383 4.3011C14.4198 4.17036 14.3499 4.05221 14.2442 3.97283ZM11.203 7.19081C10.5311 6.77966 9.78248 6.53064 8.99806 6.45645V4.93845C8.99806 4.66335 8.7751 4.4404 8.50001 4.4404C8.22492 4.4404 8.00196 4.66335 8.00196 4.93845V6.45645C7.21754 6.53064 6.46891 6.77966 5.79707 7.19081L3.76091 4.4819C5.16803 3.54664 6.79628 3.05469 8.50001 3.05469C10.2037 3.05469 11.832 3.54664 13.2391 4.4819L11.203 7.19081Z"
                                                fill="#F74952"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_220_356">
                                                <rect width="17" height="17" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{{ $post->ves }} кг</span>
                                </div>
                                <div class="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                         fill="none">
                                        <g clip-path="url(#clip0_220_339)">
                                            <path
                                                d="M20.508 11.2389C20.2402 10.8488 19.6216 10.029 18.9252 9.66413L20.5397 1.25151C20.5912 0.983325 20.4155 0.724234 20.1474 0.672746C19.8784 0.621389 19.62 0.796951 19.5686 1.06514L17.9571 9.46207C16.6069 9.47156 15.0071 10.3624 13.6725 11.8499C12.5973 13.0483 11.8773 14.4137 11.6516 15.6406H10.3486C10.1229 14.4137 9.40284 13.0483 8.32771 11.8499C6.99309 10.3624 5.39332 9.47149 4.04302 9.46207L2.43144 1.06507C2.37995 0.796885 2.1202 0.621323 1.85267 0.67268C1.58448 0.724168 1.40886 0.98326 1.46034 1.25145L3.07475 9.66406C2.37857 10.029 1.75985 10.8486 1.49212 11.2387C0.546603 12.617 -0.312748 14.7674 0.111159 16.6694C0.397016 17.9517 1.12155 18.8373 2.3044 19.34C2.32266 19.3727 3.00217 21.0316 3.00217 21.0316C3.07877 21.2161 3.25895 21.3363 3.45877 21.3363H18.5412C18.7409 21.3363 18.9211 21.2162 18.9978 21.0317L19.7052 19.3362C20.8824 18.8327 21.6038 17.9484 21.8889 16.6694C22.3128 14.7676 21.4534 12.6171 20.508 11.2389ZM17.9789 10.4504C17.983 10.4504 19.197 14.1604 17.6502 16.9433C17.0344 18.0509 16.1811 18.6245 15.8818 18.8129C13.8144 18.6278 12.5643 17.7509 12.5643 16.4314C12.5643 13.9161 15.7017 10.4504 17.9789 10.4504ZM10.4177 16.6295H11.5829C11.6106 17.0453 11.7269 17.4631 11.9489 17.8538H10.0482C10.2623 17.4808 10.3886 17.0681 10.4177 16.6295ZM4.02119 10.4504C6.29823 10.4504 9.43567 13.9161 9.43567 16.4314C9.43567 17.7513 8.18511 18.6283 6.1168 18.813C5.82349 18.6303 5.00119 18.0748 4.3766 16.9882C2.56165 13.8308 4.01691 10.4504 4.02119 10.4504ZM1.07639 16.4542C0.721111 14.8601 1.51763 12.9497 2.30763 11.7981C2.47515 11.554 2.63753 11.3491 2.79008 11.1776C2.10649 14.1818 2.77887 16.2454 3.52813 17.4965C3.85882 18.0485 4.22768 18.4878 4.5697 18.8273C1.92321 18.6541 1.30608 17.4843 1.07639 16.4542ZM18.2112 20.3475H3.7886L3.51705 19.6941C4.0411 19.7906 4.62442 19.8389 5.26846 19.8389C7.77788 19.8389 9.11217 18.8634 9.14058 18.8428H12.8476C13.6662 19.4391 14.9207 19.8389 16.7314 19.8389C17.3755 19.8389 17.9586 19.7906 18.4826 19.6941L18.2112 20.3475ZM20.9236 16.4542C20.694 17.4843 20.0767 18.6542 17.4302 18.8273C17.7723 18.4877 18.1411 18.0484 18.4718 17.4964C19.2212 16.2454 19.8935 14.1818 19.2099 11.1775C19.3626 11.3491 19.5249 11.554 19.6924 11.7982C20.4824 12.9498 21.279 14.8602 20.9236 16.4542Z"
                                                fill="#F74952"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_220_339">
                                                <rect width="22" height="22" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{{ $post->breast }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    @if($post->video)
                        <div class="video">
                            <div class="label">Видео:</div>
                            <video controls="controls" class="">
                                <source src="/storage{{ $post->video }}">
                            </video>
                        </div>
                    @endif

                    <div class="profile-details">
                        @if($post->place->first())
                            <div class="profile-row">
                                <span class="label">Место встречи:</span>
                                @foreach($post->place as $item)
                                    <span class="metro-name">
                                        <a href="/{{ $item->places_url }}">{{ $item->value }}</a>
                                        @if($item != $post->place->last())
                                            ,
                                        @endif
                                    </span>
                                @endforeach
                            </div>
                        @endif
                        @if($post->service->first())
                            <div class="profile-row">
                                <span class="label">Услуги:</span>
                                @foreach($post->service as $item)
                                    @if($item->not_available == 0)
                                        <span class="metro-name">
                                        <a href="/{{ $item->filter_url }}">{{ $item->value }}</a>
                                        @if($item != $post->service->last())
                                                ,
                                            @endif
                                    </span>
                                    @endif
                                @endforeach
                            </div>
                        @endif
                        <div class="profile-row">
                            <span class="label">Описание:</span> {{ $post->about }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div id="photo-with-comments">

                    @if($post->photo->first())

                        @foreach($post->photo as $item)

                            <div class="photo-with-comments-item d-flex">
                                <img src="/storage{{ $item->file }}"
                                     loading="lazy"
                                     alt="Индивидуалка {{ $post->name }}, доступна для личного знакомства от {{ $post->price }} руб">
                                <div class="comments-form-wrap">
                                    <form action="/review/photo" method="post" class="add-review">
                                        @csrf
                                        <input name="related_id" type="hidden" value="{{ $post->id }}">
                                        <p class="big-red-text">Оставь комментарий к этому фото</p>

                                        <input placeholder="Имя" type="text" name="name" class="review-input" required>
                                        <textarea placeholder="Напиши что думаешь..." name="text" required></textarea>

                                        <button class="red-btn">Отправить</button>
                                    </form>
                                </div>
                            </div>

                        @endforeach

                    @endif
                </div>
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
                <div class="col-12">
                    <div data-x="{{$x}}" data-y="{{ $y }}" id="map" style="width: 100%; height: 400px;"></div>
                </div>
            @endif

            <div class="col-12">
                <div class="review-wrap">
                    <p class="big-red-text">Отзывы</p>

                    @if($post->reviews->first())
                        @foreach($post->reviews as $item)
                            <div class="review-card">
                                <div class="review-header">
                                    <div class="avatar">{{ mb_strtoupper(mb_substr($item->name, 0, 2)) }}</div>
                                    <div class="user-info">
                                        <div class="username">{{ $item->name }} <span class="hidden-icon">🔒</span></div>
                                        <div class="rating">
                                            @php
                                                $stars = round($item->rating / 2 * 2) / 2; // округляем до 0.5 по 5-балльной шкале
                                                $full = floor($stars);
                                                $half = ($stars - $full) == 0.5 ? 1 : 0;
                                                $empty = 5 - $full - $half;
                                            @endphp

                                            <svg width="0" height="0">
                                                <defs>
                                                    <linearGradient id="half-grad">
                                                        <stop offset="50%" stop-color="#FFD700"/>
                                                        <stop offset="50%" stop-color="#ccc"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            {{-- Целые звезды --}}
                                            @for ($i = 0; $i < $full; $i++)
                                                <svg class="star" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
                    9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                                </svg>
                                            @endfor
                                            {{-- Половинка --}}
                                            @if ($half)
                                                <svg class="star star-half" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
                 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                                </svg>
                                            @endif
                                            {{-- Пустые звезды --}}
                                            @for ($i = 0; $i < $empty; $i++)
                                                <svg class="star star-empty" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
                 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                                </svg>
                                            @endfor
                                        </div>
                                    </div>
                                </div>
                                <div class="review-text">
                                    {{ $item->text }}
                                </div>
                            </div>
                        @endforeach
                    @endif

                    <form action="/review/add" method="post" class="add-review">
                        @csrf
                        <input name="posts_id" type="hidden" value="{{ $post->id }}">
                        <p class="big-red-text">Добавить отзыв</p>

                        <label>Оценка качества:</label>
                        <div class="star-rating" data-input-name="rating"></div>
                        <input type="hidden" name="rating">

                        <label>Чистота:</label>
                        <div class="star-rating" data-input-name="clean"></div>
                        <input type="hidden" name="clean">

                        <label>Вы остались довольны?</label>
                        <div class="review-radio-group">
                            <label><input type="radio" name="is_happy" value="1" checked required> Да</label>
                            <label><input type="radio" name="is_happy" value="0"> Нет</label>
                        </div>

                        <input placeholder="Имя" type="text" name="name" class="review-input" required>
                        <textarea placeholder="Комментарий" name="text" required></textarea>
                        <svg width="0" height="0">
                            <defs>
                                <linearGradient id="half-grad">
                                    <stop offset="50%" stop-color="#FFD700"/>
                                    <stop offset="50%" stop-color="#ccc"/>
                                </linearGradient>
                            </defs>
                        </svg>

                        <button class="red-btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row more-posts-wrap">
        <div class="col-12 big-red-text">
            Вам может понравится:
        </div>
        @foreach($morePosts as $post)
            @include('new.include.item')
        @endforeach
    </div>

    <div onclick="getMorePostsSingle(this)"
         class="more-posts-single">Показать еще
    </div>
@endsection
@section('catalog')
    @include('new.include.catalog-menu')
@endsection
