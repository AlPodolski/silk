<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="@yield('des')">

    @if(View::hasSection('can'))
        <link rel="canonical" href="@yield('can')">
        <meta name="robots" content="index, follow">
    @endif

    @if(View::hasSection('webmaster'))
        <meta name="yandex-verification" content="@yield('webmaster')">
    @endif

    @if(View::hasSection('open-graph'))
        @yield('open-graph')
    @endif

    <link rel="stylesheet" href="/fonts/ubuntu/ubuntu.css">
    <link rel="stylesheet" href="/css/bootstrap-grid.css">
    <link rel="stylesheet" href="/css/style.css?v=13">


    <meta property="og:title" content="@yield('title')" />
    <meta property="og:description" content="@yield('des')" />
    <meta property="og:url" content="{{ $_SERVER['REQUEST_URI'] }}" />

    @hasSection('open_img')
        <meta property="og:image" content="@yield('open_img') " />
    @else
        <meta property="og:image" content="/img/logo.svg" />
    @endif

    @hasSection('preload_img')
        @yield('preload_img')
    @endif

    <meta property="og:site_name" content="sex-teamo.com" />
    <meta property="og:locale" content="ru_RU" />



    <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/img/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/img/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png">
    <link rel="manifest" href="/img/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/img/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5YMQCDMXJC"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5YMQCDMXJC');
    </script>
    <link rel="preconnect" href="https://mc.yandex.ru">
</head>
<body>
<header>
    <div class="top-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="header-top-menu">
                        <nav itemscope itemtype="https://schema.org/SiteNavigationElement">
                            <ul class="d-flex">
                                <li itemprop="name">
                                    <a href="/zrelye-prostitutki" itemprop="url">Зрелые</a>
                                </li>
                                <li itemprop="name">
                                    <a href="/elitnye-prostitutki" itemprop="url">Элитные</a>
                                </li>
                                <li itemprop="name">
                                    <a href="/deshevye-prostitutki" itemprop="url">Дешевые</a>
                                </li>
                                <li itemprop="name">
                                    <a href="/proverennye-prostitutki" itemprop="url">Проверенные</a>
                                </li>
                                <li >
                                    <a href="#" data-target="contactModal">Обратная связь</a>
                                </li>
                            </ul>
                        </nav>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-header">
        <div class="container">
            <div class="row bottom-header-items-wrap">
                <div class="col-4 col-sm-5 col-md-4 col-lg-5 location d-flex">
                    @yield('location_metro')
                </div>
                <div class="col-5  col-sm-5 col-md-3 col-lg-2">
                    <a href="/" class="logo">
                        <svg width="165" height="24" viewBox="0 0 165 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <path d="M7.532 14.324C6.476 13.964 5.516 13.604 4.652 13.244C3.788 12.86 3.044 12.404 2.42 11.876C1.796 11.348 1.304 10.724 0.944 10.004C0.608 9.26 0.44 8.36 0.44 7.304C0.44 5.264 1.22 3.632 2.78 2.408C4.364 1.184 6.572 0.571999 9.404 0.571999C10.436 0.571999 11.396 0.643999 12.284 0.787998C13.172 0.931999 13.928 1.16 14.552 1.472C15.2 1.76 15.704 2.144 16.064 2.624C16.424 3.08 16.604 3.62 16.604 4.244C16.604 4.868 16.46 5.408 16.172 5.864C15.884 6.296 15.536 6.668 15.128 6.98C14.6 6.644 13.892 6.356 13.004 6.116C12.116 5.852 11.144 5.72 10.088 5.72C9.008 5.72 8.216 5.876 7.712 6.188C7.208 6.476 6.956 6.848 6.956 7.304C6.956 7.664 7.112 7.964 7.424 8.204C7.736 8.42 8.204 8.624 8.828 8.816L10.736 9.428C12.992 10.148 14.72 11.072 15.92 12.2C17.144 13.304 17.756 14.816 17.756 16.736C17.756 18.776 16.952 20.432 15.344 21.704C13.736 22.952 11.372 23.576 8.252 23.576C7.148 23.576 6.116 23.48 5.156 23.288C4.22 23.12 3.392 22.868 2.672 22.532C1.976 22.172 1.424 21.74 1.016 21.236C0.632 20.708 0.44 20.108 0.44 19.436C0.44 18.74 0.644 18.152 1.052 17.672C1.46 17.168 1.904 16.784 2.384 16.52C3.056 17.048 3.872 17.504 4.832 17.888C5.816 18.272 6.884 18.464 8.036 18.464C9.212 18.464 10.04 18.284 10.52 17.924C11 17.564 11.24 17.144 11.24 16.664C11.24 16.184 11.048 15.824 10.664 15.584C10.28 15.32 9.74 15.068 9.044 14.828L7.532 14.324ZM30.0224 23.576C28.6064 23.576 27.2864 23.384 26.0624 23C24.8624 22.592 23.8064 21.992 22.8944 21.2C22.0064 20.408 21.2984 19.412 20.7704 18.212C20.2664 17.012 20.0144 15.608 20.0144 14C20.0144 12.416 20.2664 11.06 20.7704 9.932C21.2984 8.78 21.9824 7.844 22.8224 7.124C23.6624 6.38 24.6224 5.84 25.7024 5.504C26.7824 5.144 27.8864 4.964 29.0144 4.964C30.2864 4.964 31.4384 5.156 32.4704 5.54C33.5264 5.924 34.4264 6.452 35.1704 7.124C35.9384 7.796 36.5264 8.6 36.9344 9.536C37.3664 10.472 37.5824 11.492 37.5824 12.596C37.5824 13.412 37.3544 14.036 36.8984 14.468C36.4424 14.9 35.8064 15.176 34.9904 15.296L26.0984 16.628C26.3624 17.42 26.9024 18.02 27.7184 18.428C28.5344 18.812 29.4704 19.004 30.5264 19.004C31.5104 19.004 32.4344 18.884 33.2984 18.644C34.1864 18.38 34.9064 18.08 35.4584 17.744C35.8424 17.984 36.1664 18.32 36.4304 18.752C36.6944 19.184 36.8264 19.64 36.8264 20.12C36.8264 21.2 36.3224 22.004 35.3144 22.532C34.5464 22.94 33.6824 23.216 32.7224 23.36C31.7624 23.504 30.8624 23.576 30.0224 23.576ZM29.0144 9.428C28.4384 9.428 27.9344 9.524 27.5024 9.716C27.0944 9.908 26.7584 10.16 26.4944 10.472C26.2304 10.76 26.0264 11.096 25.8824 11.48C25.7624 11.84 25.6904 12.212 25.6664 12.596L31.8224 11.588C31.7504 11.108 31.4864 10.628 31.0304 10.148C30.5744 9.668 29.9024 9.428 29.0144 9.428ZM39.3805 8.348C39.5725 7.436 39.9445 6.692 40.4965 6.116C41.0725 5.54 41.7805 5.252 42.6205 5.252C43.4125 5.252 44.0245 5.444 44.4565 5.828C44.8885 6.212 45.3685 6.752 45.8965 7.448L48.2005 10.472L52.0525 5.252C53.3725 5.252 54.4165 5.492 55.1845 5.972C55.9525 6.428 56.3365 7.052 56.3365 7.844C56.3365 8.156 56.2885 8.444 56.1925 8.708C56.1205 8.948 56.0005 9.2 55.8325 9.464C55.6645 9.728 55.4485 10.028 55.1845 10.364C54.9205 10.7 54.6085 11.096 54.2485 11.552L51.8725 14.216L56.5885 20.444C56.4685 21.356 56.1085 22.076 55.5085 22.604C54.9085 23.132 54.1885 23.396 53.3485 23.396C52.4365 23.372 51.7045 23.108 51.1525 22.604C50.6245 22.1 50.1085 21.488 49.6045 20.768L47.6605 17.996L43.9885 23.288C43.8685 23.288 43.7365 23.288 43.5925 23.288C43.4485 23.312 43.3285 23.324 43.2325 23.324C42.0085 23.324 41.0725 23.072 40.4245 22.568C39.8005 22.064 39.4885 21.44 39.4885 20.696C39.4885 20.12 39.6205 19.616 39.8845 19.184C40.1725 18.728 40.6525 18.116 41.3245 17.348L44.2045 14L39.3805 8.348Z" fill="#F74952"/>
                            <path d="M58.3047 6.224C58.1367 5.96 57.9807 5.6 57.8367 5.144C57.6927 4.688 57.6207 4.208 57.6207 3.704C57.6207 2.768 57.8247 2.096 58.2327 1.688C58.6647 1.28 59.2167 1.076 59.8887 1.076H75.5847C75.7527 1.34 75.9087 1.7 76.0527 2.156C76.1967 2.612 76.2687 3.092 76.2687 3.596C76.2687 4.532 76.0527 5.204 75.6207 5.612C75.2127 6.02 74.6727 6.224 74.0007 6.224H70.0047V22.856C69.7407 22.928 69.3207 23 68.7447 23.072C68.1927 23.144 67.6407 23.18 67.0887 23.18C66.5367 23.18 66.0447 23.132 65.6127 23.036C65.2047 22.964 64.8567 22.82 64.5687 22.604C64.2807 22.388 64.0647 22.088 63.9207 21.704C63.7767 21.32 63.7047 20.816 63.7047 20.192V6.224H58.3047ZM85.956 23.576C84.54 23.576 83.22 23.384 81.996 23C80.796 22.592 79.74 21.992 78.828 21.2C77.94 20.408 77.232 19.412 76.704 18.212C76.2 17.012 75.948 15.608 75.948 14C75.948 12.416 76.2 11.06 76.704 9.932C77.232 8.78 77.916 7.844 78.756 7.124C79.596 6.38 80.556 5.84 81.636 5.504C82.716 5.144 83.82 4.964 84.948 4.964C86.22 4.964 87.372 5.156 88.404 5.54C89.46 5.924 90.36 6.452 91.104 7.124C91.872 7.796 92.46 8.6 92.868 9.536C93.3 10.472 93.516 11.492 93.516 12.596C93.516 13.412 93.288 14.036 92.832 14.468C92.376 14.9 91.74 15.176 90.924 15.296L82.032 16.628C82.296 17.42 82.836 18.02 83.652 18.428C84.468 18.812 85.404 19.004 86.46 19.004C87.444 19.004 88.368 18.884 89.232 18.644C90.12 18.38 90.84 18.08 91.392 17.744C91.776 17.984 92.1 18.32 92.364 18.752C92.628 19.184 92.76 19.64 92.76 20.12C92.76 21.2 92.256 22.004 91.248 22.532C90.48 22.94 89.616 23.216 88.656 23.36C87.696 23.504 86.796 23.576 85.956 23.576ZM84.948 9.428C84.372 9.428 83.868 9.524 83.436 9.716C83.028 9.908 82.692 10.16 82.428 10.472C82.164 10.76 81.96 11.096 81.816 11.48C81.696 11.84 81.624 12.212 81.6 12.596L87.756 11.588C87.684 11.108 87.42 10.628 86.964 10.148C86.508 9.668 85.836 9.428 84.948 9.428ZM103.95 19.112C104.358 19.112 104.802 19.076 105.282 19.004C105.786 18.908 106.158 18.788 106.398 18.644V15.764L103.806 15.98C103.134 16.028 102.582 16.172 102.15 16.412C101.718 16.652 101.502 17.012 101.502 17.492C101.502 17.972 101.682 18.368 102.042 18.68C102.426 18.968 103.062 19.112 103.95 19.112ZM103.662 4.964C104.958 4.964 106.134 5.096 107.19 5.36C108.27 5.624 109.182 6.032 109.926 6.584C110.694 7.112 111.282 7.796 111.69 8.636C112.098 9.452 112.302 10.424 112.302 11.552V19.616C112.302 20.24 112.122 20.756 111.762 21.164C111.426 21.548 111.018 21.884 110.538 22.172C108.978 23.108 106.782 23.576 103.95 23.576C102.678 23.576 101.526 23.456 100.494 23.216C99.4858 22.976 98.6098 22.616 97.8658 22.136C97.1458 21.656 96.5818 21.044 96.1738 20.3C95.7898 19.556 95.5978 18.692 95.5978 17.708C95.5978 16.052 96.0898 14.78 97.0738 13.892C98.0578 13.004 99.5818 12.452 101.646 12.236L106.362 11.732V11.48C106.362 10.784 106.05 10.292 105.426 10.004C104.826 9.692 103.95 9.536 102.798 9.536C101.886 9.536 100.998 9.632 100.134 9.824C99.2698 10.016 98.4898 10.256 97.7938 10.544C97.4818 10.328 97.2178 10.004 97.0018 9.572C96.7858 9.116 96.6778 8.648 96.6778 8.168C96.6778 7.544 96.8218 7.052 97.1098 6.692C97.4218 6.308 97.8898 5.984 98.5138 5.72C99.2098 5.456 100.026 5.264 100.962 5.144C101.922 5.024 102.822 4.964 103.662 4.964ZM124.432 4.964C125.416 4.964 126.376 5.108 127.312 5.396C128.272 5.66 129.1 6.068 129.796 6.62C130.516 6.14 131.32 5.744 132.208 5.432C133.12 5.12 134.212 4.964 135.484 4.964C136.396 4.964 137.284 5.084 138.148 5.324C139.036 5.564 139.816 5.948 140.488 6.476C141.184 6.98 141.736 7.664 142.144 8.528C142.552 9.368 142.756 10.4 142.756 11.624V22.964C142.516 23.036 142.132 23.108 141.604 23.18C141.1 23.252 140.572 23.288 140.02 23.288C139.492 23.288 139.012 23.252 138.58 23.18C138.172 23.108 137.824 22.964 137.536 22.748C137.248 22.532 137.02 22.244 136.852 21.884C136.708 21.5 136.636 21.008 136.636 20.408V11.804C136.636 11.084 136.432 10.568 136.024 10.256C135.616 9.92 135.064 9.752 134.368 9.752C134.032 9.752 133.672 9.836 133.288 10.004C132.904 10.148 132.616 10.304 132.424 10.472C132.448 10.568 132.46 10.664 132.46 10.76C132.46 10.832 132.46 10.904 132.46 10.976V22.964C132.196 23.036 131.8 23.108 131.272 23.18C130.768 23.252 130.252 23.288 129.724 23.288C129.196 23.288 128.716 23.252 128.284 23.18C127.876 23.108 127.528 22.964 127.24 22.748C126.952 22.532 126.724 22.244 126.556 21.884C126.412 21.5 126.34 21.008 126.34 20.408V11.804C126.34 11.084 126.112 10.568 125.656 10.256C125.224 9.92 124.696 9.752 124.072 9.752C123.64 9.752 123.268 9.824 122.956 9.968C122.644 10.088 122.38 10.208 122.164 10.328V22.964C121.924 23.036 121.54 23.108 121.012 23.18C120.508 23.252 119.98 23.288 119.428 23.288C118.9 23.288 118.42 23.252 117.988 23.18C117.58 23.108 117.232 22.964 116.944 22.748C116.656 22.532 116.428 22.244 116.26 21.884C116.116 21.5 116.044 21.008 116.044 20.408V9.536C116.044 8.888 116.176 8.372 116.44 7.988C116.728 7.604 117.112 7.244 117.592 6.908C118.408 6.332 119.416 5.864 120.616 5.504C121.84 5.144 123.112 4.964 124.432 4.964ZM164.597 14.252C164.597 15.74 164.369 17.072 163.913 18.248C163.457 19.4 162.809 20.372 161.969 21.164C161.153 21.956 160.169 22.556 159.017 22.964C157.865 23.372 156.581 23.576 155.165 23.576C153.749 23.576 152.465 23.36 151.313 22.928C150.161 22.496 149.165 21.884 148.325 21.092C147.509 20.276 146.873 19.292 146.417 18.14C145.961 16.988 145.733 15.692 145.733 14.252C145.733 12.836 145.961 11.552 146.417 10.4C146.873 9.248 147.509 8.276 148.325 7.484C149.165 6.668 150.161 6.044 151.313 5.612C152.465 5.18 153.749 4.964 155.165 4.964C156.581 4.964 157.865 5.192 159.017 5.648C160.169 6.08 161.153 6.704 161.969 7.52C162.809 8.312 163.457 9.284 163.913 10.436C164.369 11.588 164.597 12.86 164.597 14.252ZM151.997 14.252C151.997 15.716 152.273 16.844 152.825 17.636C153.401 18.404 154.193 18.788 155.201 18.788C156.209 18.788 156.977 18.392 157.505 17.6C158.057 16.808 158.333 15.692 158.333 14.252C158.333 12.812 158.057 11.708 157.505 10.94C156.953 10.148 156.173 9.752 155.165 9.752C154.157 9.752 153.377 10.148 152.825 10.94C152.273 11.708 151.997 12.812 151.997 14.252Z" fill="black"/>
                        </svg>
                    </a>
                </div>
                <div class="col-3 col-sm-2 col-md-5 col-lg-5 d-flex" itemscope itemtype="https://schema.org/WebSite">
                    <meta itemprop="url" content="{{ str_replace('http:', 'https:', url('/')) }}"/>

                    <form class="search-name-form position-relative"
                          itemprop="potentialAction"
                          itemscope
                          itemtype="https://schema.org/SearchAction"
                          action="/name"
                          method="GET">

                        <meta itemprop="target" content="{{ str_replace('http:', 'https:', url('/name')) }}?name={name}"/>

                        @csrf
                        <input placeholder="Найти..." type="text" class="text-input" name="name" itemprop="query-input" required>
                        <button type="submit">
                            <svg xmlns="https://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <g clip-path="url(#clip0_212_148)">
                                    <path
                                        d="M16.8962 15.8946L11.9579 10.9563C12.8945 9.79989 13.4583 8.32978 13.4583 6.72919C13.4583 3.01873 10.4396 0 6.72916 0C3.0187 0 0 3.01873 0 6.72919C0 10.4396 3.01873 13.4584 6.72919 13.4584C8.32978 13.4584 9.79989 12.8945 10.9563 11.9579L15.8946 16.8963C16.033 17.0346 16.2572 17.0346 16.3955 16.8963L16.8963 16.3955C17.0346 16.2572 17.0346 16.0329 16.8962 15.8946ZM6.72919 12.0417C3.79971 12.0417 1.41668 9.65868 1.41668 6.72919C1.41668 3.79971 3.79971 1.41668 6.72919 1.41668C9.65868 1.41668 12.0417 3.79971 12.0417 6.72919C12.0417 9.65868 9.65868 12.0417 6.72919 12.0417Z"
                                        fill="#F74952"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_212_148">
                                        <rect width="17" height="17" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </form>
                    <a rel=”nofollow” href="/cabinet" class="login-btn">
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
                            <g clip-path="url(#clip0_580_68)">
                                <path
                                    d="M9.00015 10.1387C3.59182 10.1387 0.613281 12.6972 0.613281 17.3431C0.613281 17.7059 0.907363 18 1.27021 18H16.7301C17.0929 18 17.387 17.7059 17.387 17.3431C17.387 12.6974 14.4085 10.1387 9.00015 10.1387ZM1.95105 16.6861C2.20944 13.2125 4.57767 11.4526 9.00015 11.4526C13.4226 11.4526 15.7909 13.2125 16.0495 16.6861H1.95105Z"
                                    fill="#5C5C5C"/>
                                <path
                                    d="M9.00023 0C6.51591 0 4.64258 1.91102 4.64258 4.44505C4.64258 7.05329 6.59741 9.17497 9.00023 9.17497C11.4031 9.17497 13.3579 7.05329 13.3579 4.44526C13.3579 1.91102 11.4845 0 9.00023 0ZM9.00023 7.86132C7.32177 7.86132 5.95644 6.3289 5.95644 4.44526C5.95644 2.63081 7.23658 1.31386 9.00023 1.31386C10.7356 1.31386 12.044 2.65992 12.044 4.44526C12.044 6.3289 10.6787 7.86132 9.00023 7.86132Z"
                                    fill="#5C5C5C"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_580_68">
                                    <rect width="18" height="18" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <div id="burger-menu">
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                            <path d="M20 14.4448H0V16.6671H20V14.4448Z" fill="#F74952"/>
                            <path d="M20 8.88916H0V11.1114H20V8.88916Z" fill="#F74952"/>
                            <path d="M20 3.3335H0V5.55574H20V3.3335Z" fill="#F74952"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<main>
    <div class="container">

        <div class="row">

            @yield('filter')

            @yield('links')

            <div class="col-12">
                @yield('h1')
                @if(isset($sort))
                    <div class="set-sort-wrap custom-select">
                        Сортировать:
                        <select class="custom-select" name="limit" id="sort" onchange="selectSorting()">
                            <option @if($sort == 'default') selected @endif value="default">По умолчанию</option>
                            <option @if($sort == 'price_asc') selected @endif value="price_asc">От дешевых к дорогим</option>
                            <option @if($sort == 'price_desc') selected @endif value="price_desc">От дорогих к дешевым</option>
                        </select>
                    </div>
                @endif
            </div>
        </div>

        @yield('content')

        <div class="overlay" id="overlay"></div>

        @yield('catalog')

    </div>
    <button id="scrollToTop" class="scroll-to-top" aria-label="Наверх">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</main>

<div class="modal" id="contactModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p class="big-red-text">Обратная связь</p>
        <form class="contact-form phone-message-form" action="/contact" method="post">
            @csrf
            <input type="text" class="review-input" name="name" placeholder="Ваше имя" required />
            <input type="email" class="review-input" name="email" placeholder="Ваш email" required />
            <textarea name="text" placeholder="Ваше сообщение" required></textarea>
            <button type="submit" class="red-btn" >Отправить</button>
        </form>
    </div>
</div>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103669452', 'ym');

    ym(103669452, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/103669452" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script defer src="/js/script.js?v=8"></script>
</body>
</html>
