@if($links)

    <div class="links d-flex">
        @foreach($links as $item)
            @if($item['text'])
                <a class="fast-link" href="/{{ $item['to'] }}">
                    #{{ $item['text'] }}
                </a>
                <a href="/{{ $item['to'] }}" class="link">{{ $item['text'] }}</a>
            @endif
        @endforeach
    </div>

@endif
