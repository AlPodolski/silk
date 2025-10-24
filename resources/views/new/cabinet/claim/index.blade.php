@extends('new.layouts.cabinet')

@section('title', 'Обратная связь')

@section('content')

    @include('new.cabinet.include.sidebar')

    <main class="main chat col-lg-9">
        @include('new.cabinet.include.message')
        <div class="chat__dialog">


            <div class="chat__dialog-name">
                Служба поддержки
            </div>

            <div class="chat__dialog-list-wrap">


                <div class="chat__dialog-list">

                    @if($chat and $chat->message->count())

                        @foreach($chat->message as $item)

                            <div class="chat__dialog-list-item @if($item->from == auth()->user()->id) chat__dialog-list-item--qst @else chat__dialog-list-item--ans @endif
                                ">
                                <div class="chat__dialog-list-item-text">
                                    @if($item->related_class == \App\Models\File::class)
                                        <img src="/thumbnail/400-500/{{ $item->file->path }}" alt="">
                                    @else
                                        {{ $item->message }}
                                    @endif
                                </div>
                                <div
                                        class="chat__dialog-list-item-date">{{ \Carbon\Carbon::parse($item->created_at)->format('H:i:s') }}</div>
                            </div>

                        @endforeach

                    @else

                        <div class="chat__dialog-list-item chat__dialog-list-item--ans">
                            <div class="chat__dialog-list-item-text">
                                Опишите проблему и мы ответим
                            </div>
                        </div>

                    @endif


                </div>

            </div>

            <div action="#" class="chat__dialog-panel">
                <textarea name="chatMessage" class="chatMessage" placeholder="Напишите сообщение..."></textarea>
                <form action="" id="send-message-photo-form" enctype="multipart/form-data">
                    <label for="chatFile">
                        <svg>
                            <use xlink:href='/svg/dest/stack/cabinet.svg#addFile'></use>
                        </svg>
                    </label>
                    <input onchange="send_photo()" type="file" name="chatFile" id="chatFile" accept=".jpg, .jpeg">
                </form>

                <div onclick="sendMessage(this)"
                     class="btn-main">Отправить
                </div>
            </div>
        </div>
    </main>

@endsection
