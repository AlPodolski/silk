@if(isset($breadMicro))
    {!! $breadMicro !!}
@endif

<nav class="breadcrumbs">
    <ul class="d-flex">
        <li>
            <a href="/">
                Главная
            </a>
        </li>
        <li class="breadcrumb-item">
            {{ mb_ucfirst(trim($meta['h1'])) }}
        </li>
    </ul>
</nav>


