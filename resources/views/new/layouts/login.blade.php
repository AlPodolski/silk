<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="/fonts/ubuntu/ubuntu.css">
    <link rel="stylesheet" href="/css/bootstrap-grid.css">
    <link rel="stylesheet" href="/css/style.css?v=10">
    <link rel="stylesheet" href="/files/css/cabinet.css?v=12">
</head>

<body>
<div class="wrapper">
    <div class="content">
        <header class="header_auth">
            <a href="/" class="header__logo">
                <img class="header__logo-img" src="/img/logo.svg" alt="">
            </a>
        </header>
        <div class="container">
            <div class="row">
                <main class=" w-100">
                    @yield('content')
                </main>

            </div>
        </div>
    </div>

    <footer class="footer">

    </footer>


</div>
</body>

</html>
