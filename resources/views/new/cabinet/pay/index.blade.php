@extends('new.layouts.cabinet')

@section('title', 'Пополнить баланс')

@section('content')

    @include('new.cabinet.include.sidebar')

    <main class="main col-lg-9">

        <h1 class="ammount__title title">Кошелек</h1>
        <div class="ammount__info ammount__block">
            <div class="ammount__info-balance">
                <h2 class="ammount__info-balance-title">
                    Баланс
                </h2>
                <div class="ammount__info-balance-value">
                    {{ auth()->user()->cash }}
                </div>
                <div class="ammount__info-balance-descr">
                    Пополните счет любым удобным ддля вас споссбом
                </div>
            </div>
            <form class="ammount__info-balance-repl" method="post" action="/cabinet/pay">
                @csrf
                <label for="balanceReplCur">Введите сумму пополнения(минимум 2000)</label>
                <div class="ammount__info-balance-repl-input-wrap">
                        <span data-val="2000">
                            <input class="ammount__info-balance-repl-input" type="text" id="balanceReplCur"
                                   name="sum" value="2000"
                                   oninput="this.parentElement.setAttribute('data-val',  this.value)"
                            >
                        </span>

                </div>
                <div class="ammount__info-balance-repl-label">
                    Выберите способ оплаты:
                </div>
                <div class="ammount__info-balance-repl-radio-items">

                    @foreach($currencies as $item)

                        <div class="ammount__info-balance-repl-radio-item">
                            <input type="radio" name="currency"
                                   @if($currencies->first() == $item) checked @endif
                                   value="{{ $item->value }}" id="balanceRepl{{ $item->value }}"
                                   class="ammount__info-balance-repl-radio-input">
                            <label for="balanceRepl{{ $item->value }}">
                                {{ $item->name }}
                            </label>
                        </div>

                    @endforeach


                </div>

                <script defer src='https://www.google.com/recaptcha/api.js'></script>

                <div id="register_recapcha" class="g-recaptcha"
                     data-sitekey="6LfPdvArAAAAADLN4BE_MSMt6HoBZCUycc9gIV3w"></div>

                <button
                        id="payBtn"
                        class="ammount__info-balance-repl-btn btn-main">Оплатить
                </button>
            </form>
        </div>
    </main>

@endsection
