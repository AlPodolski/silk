<?php

namespace App\Console\Commands;

use App\Models\Post;
use App\Models\Review;
use DB;
use Illuminate\Console\Command;
use League\Csv\Reader;
use League\Csv\Statement;

class commentCommand extends Command
{
    protected $signature = 'comment';

    protected $description = 'Command description';

    public function handle(): void
    {
        $stream = \fopen(storage_path('import_comments/import_19_08_25_p1.csv'), 'r');

        $csv = Reader::createFromStream($stream);
        $csv->setDelimiter(';');
        $csv->setHeaderOffset(0);
        //build a statement
        $stmt = (new Statement());

        $records = $stmt->process($csv);

        foreach ($records as $record) {

            $comments[] = $record['text'];

        }

        $reviewedPostIds = DB::table('reviews')->pluck('posts_id');

        $posts = Post::where('fake', Post::POST_FAKE)
            ->whereNotIn('id', $reviewedPostIds)
            ->get();

        $names = [
            // 90 русских имён (полные и сокращённые)
            'Александр', 'Саша',
            'Алексей', 'Лёша',
            'Дмитрий', 'Дима',
            'Сергей', 'Серёжа',
            'Андрей', 'Андрюша',
            'Иван', 'Ваня',
            'Николай', 'Коля',
            'Михаил', 'Миша',
            'Евгений', 'Женя',
            'Владимир', 'Вова',
            'Виктор', 'Витя',
            'Юрий', 'Юра',
            'Василий', 'Вася',
            'Павел', 'Паша',
            'Олег', 'Олежка',
            'Игорь', 'Гоша',
            'Анатолий', 'Толя',
            'Валерий', 'Валера',
            'Георгий', 'Жора',
            'Борис', 'Боря',
            'Леонид', 'Лёня',
            'Константин', 'Костя',
            'Станислав', 'Слава',
            'Аркадий', 'Аркаша',
            'Григорий', 'Гриша',
            'Максим', 'Макс',
            'Роман', 'Рома',
            'Тимофей', 'Тёма',
            'Фёдор', 'Федя',
            'Ярослав', 'Ярик',
            'Всеволод', 'Сева',
            'Валентин', 'Валик',
            'Антон', 'Тоха',
            'Руслан', 'Русик',
            'Владислав', 'Слава',
            'Кирилл', 'Кирюша',
            'Арсений', 'Арсик',
            'Никита', 'Ник',
            'Степан', 'Стёпа',
            'Тарас', 'Тарасик',
            'Егор', 'Горик',
            'Лев', 'Лёва',
            'Захар', 'Захарка',
            'Прохор', 'Профа',

            // 40 мусульманских имён
            'Али', 'Хасан', 'Хусейн', 'Омар', 'Самир', 'Мурад', 'Ислам', 'Фарид', 'Рамиль', 'Амир',
            'Ильдар', 'Ринат', 'Тимур', 'Руслан', 'Айдар', 'Камиль', 'Магомед', 'Шамиль', 'Зияд', 'Ибрагим',
            'Ахмед', 'Аслан', 'Абдулла', 'Наиль', 'Раиль', 'Ильяс', 'Азамат', 'Булат', 'Марат', 'Мансур',
            'Рамазан', 'Азам', 'Хабиб', 'Фуад', 'Фарух', 'Саид', 'Яхья', 'Аюб', 'Хайдар', 'Зариф',

            // 30 ников для сайта
            'DarkWolf', 'SilverFox', 'RedDragon', 'NightOwl', 'ShadowMan',
            'EagleEye', 'IronFist', 'GhostRider', 'FireStorm', 'SilentHunter',
            'Neo', 'MatrixX', 'SkyBreaker', 'BlackStar', 'DeepZone',
            'Vortex', 'CyberFox', 'UrbanNinja', 'WildCard', 'PixelBoy',
            'CodeMaster', 'GameOver', 'MrRobot', 'MadMax', 'ZeroCool',
            'OverDrive', 'ToxicRain', 'IceHeart', 'NovaBlast', 'QuantumX'
        ];

        foreach ($posts as $post) {

            if (rand(0, 1)) {

                $comment = $comments[array_rand($comments)];
                $name = $names[array_rand($names)];

                $review = new Review();

                $review->text = $comment;
                $review->posts_id = $post->id;
                $review->rating = rand(3, 5);
                $review->name = $name;
                $review->status = Review::PUBLICATION_STATUS;

                $review->save();

            }

        }

    }
}
