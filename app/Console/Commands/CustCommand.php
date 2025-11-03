<?php

namespace App\Console\Commands;

use App\Models\ActualCityInfo;
use App\Models\City;
use App\Models\Metro;
use App\Models\MetroNear;
use App\Models\Photo;
use App\Models\Post;
use App\Models\PostMetro;
use App\Repository\DataRepository;
use Illuminate\Console\Command;
use League\Csv\Reader;
use League\Csv\Statement;

class CustCommand extends Command
{
    protected $signature = 'cust';

    protected $description = 'Command descripti on';

    public function handle()
    {
        $images = [
            '2jfy7rx9yE5-2_9n.jpg',
            'lDSTWecRINpQju4w.jpg',
            'n4vmO7eefIVqCdSk.jpg',
            'q0fnNTDj_nUUETFa.jpg',
            'VvaKLQAy8kYebfNX.jpg',
            'Y4SlAzhM8QnITLpE.jpg',
            'yE_eUWWla77WQQ-W.jpg',
        ];

        $posts = Post::all();

        foreach ($posts as $post) {

            shuffle($images);

            foreach ($images as $image) {

                $photo = new Photo();
                $photo->posts_id = $post->id;
                $photo->file = '/aaa/'.$image;
                $photo->type = Photo::GALLERY_TYPE;
                $photo->save();

            }

        }

    }

    private function prepareData($data, $host)
    {

        $result = array();

        if ($data['metro']) {

            foreach ($data['metro'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['rayon']) {

            foreach ($data['rayon'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['national']) {

            foreach ($data['national'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['place']) {

            foreach ($data['place'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['time']) {

            foreach ($data['time'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['hair']) {

            foreach ($data['hair'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['intimHair']) {

            foreach ($data['intimHair'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        if ($data['service']) {

            foreach ($data['service'] as $item) {

                $result[] = $host . $item->filter_url;

            }

        }

        return $result;

    }
}
