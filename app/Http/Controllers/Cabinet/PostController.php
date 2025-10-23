<?php

namespace App\Http\Controllers\Cabinet;

use App\Actions\Publication;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Photo;
use App\Models\PostMetro;
use App\Models\PostPlace;
use App\Models\PostService;
use App\Models\Tarif;
use App\Models\UserChat;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {

    }

    public function updateTarif(Request $request)
    {

        $postId = $request->post('id');
        $tarifId = $request->post('tarif_id');

        $post = Post::where('id', $postId)->where('user_id', auth()->user()->id)->first();

        $tarif = Tarif::where('id', $tarifId)->first();

        if ($post and $tarif){

            $post->tarif_id = $tarif->id;

            $post->save();

        }

    }

    public function create($city)
    {
        $cityInfo = $this->cityRepository->getCity($city);
        $data = $this->dataRepository->getData($cityInfo['id']);

        $notReadMessage = UserChat::where('user_id', auth()->user()->id)->with('notRead')->first();

        $tarifList = Tarif::all();

        return view( 'new.cabinet.post.add', compact('data', 'tarifList', 'notReadMessage'));
    }

    public function store(Request $request)
    {

        $post = new Post();

        $post->user_id = auth()->id();
        $post->fake = Post::POST_REAL;
        $post->sorting = time();
        $post->publication_status = Post::POST_ON_MODERATION;

        $post->fill($request->post());

        if ($post->save()) {

            $post->url = \Str::slug($post->name . '-') . $post->id;

            $dir = \substr(\md5($post->url), 0, 3);

            $photo = array();

            if ($request->file('anketPhotos')) foreach ($request->file('anketPhotos') as $item) {

                $photo[] = [
                    'posts_id' => $post->id,
                    'file' => '/' . $item->store('/uploads/' . $dir, 'public'),
                    'type' => Photo::GALLERY_TYPE
                ];

            }


            if ($request->file('anketSelfie')) foreach ($request->file('anketSelfie') as $item) {

                $photo[] = [
                    'posts_id' => $post->id,
                    'file' => '/' . $item->store('/uploads/' . $dir, 'public'),
                    'type' => Photo::SELPHI_TYPE
                ];

            }


            if ($request->file('anketCheckPhoto')) {

                $photo[] = [
                    'posts_id' => $post->id,
                    'file' => '/' . $request->file('anketCheckPhoto')->store('/uploads/' . $dir, 'public'),
                    'type' => Photo::CHECK_PHOTO_TYPE
                ];

            }

            if ($place = $request->post('place')) {

                foreach ($place as $placeItem) {

                    PostPlace::create([
                        'place_id' => $placeItem,
                        'posts_id' => $post->id,
                        'city_id' => $post->city_id
                    ]);

                }

            }

            if ($metroId = $request->post('metro')) {

                PostMetro::create([
                    'metros_id' => $metroId,
                    'posts_id' => $post->id,
                    'city_id' => $post->city_id
                ]);

            }

            foreach ($request->post() as $postServiceId => $postServiceValue) {

                if (strpos($postServiceId, 'service-') !== false) {

                    $serviceId = str_replace('service-', '', $postServiceId);

                    $serviceData = [
                        'posts_id' => $post->id,
                        'service_id' => $serviceId,
                        'city_id' => $post->city_id
                    ];

                    if ($postServiceValue == 2) {

                        $serviceData['sympathy'] = 1;

                    }

                    if ($postServiceValue == 3) {

                        $serviceData['pay'] = 1;

                    }

                    if ($postServiceValue == 4) {

                        $serviceData['not_available'] = 1;

                    }

                    PostService::create($serviceData);

                }

            }

            $avatar = $request->file('photo')->store('/uploads/' . $dir, 'public');

            $post->avatar = $avatar;

            if ($video = $request->file('anketVideo')) {

                $video = $video->store('/uploads/' . $dir, 'public');

                $post->video = $video;

            }

            if ($photo) foreach ($photo as $item) {
                Photo::create($item);
            }

            $post->save();

        }

        if ($request->post('add_more')) return redirect('/cabinet/post/create');

        return redirect('/cabinet');

    }

    public function show($id)
    {
    }

    public function edit($city, $id)
    {

        $notReadMessage = UserChat::where('user_id', auth()->user()->id)->with('notRead')->first();

        $post = Post::where('id', $id)
            ->with('metro', 'service', 'place', 'photo')->first();

        if (!$post) abort(404);

        $cityInfo = $this->cityRepository->getCity($city);
        $data = $this->dataRepository->getData($cityInfo['id']);

        $tarifList = Tarif::all();

        return view(PATH . '.cabinet.post.edit', compact('data', 'post', 'tarifList', 'notReadMessage'));
    }

    public function update(Request $request,$city, $id)
    {

        $post = Post::where(['id' => $id, 'user_id' => auth()->id()])->first();

        if (!$post) abort(404);

        $post->fill($request->post());

        $dir = \substr(\md5($post->url), 0, 3);

        $photo = array();

        \DB::table('post_services')->where('posts_id', $post->id)->delete();

        \Cache::delete('post_' . $post->url );

        foreach ($request->post() as $postServiceId => $postServiceValue) {

            if (strpos($postServiceId, 'service-') !== false) {

                $serviceId = str_replace('service-', '', $postServiceId);

                $serviceData = [
                    'posts_id' => $post->id,
                    'service_id' => $serviceId,
                    'city_id' => $post->city_id
                ];

                if ($postServiceValue == 2) {

                    $serviceData['sympathy'] = 1;

                }

                if ($postServiceValue == 3) {

                    $serviceData['pay'] = 1;

                }

                if ($postServiceValue == 4) {

                    $serviceData['not_available'] = 1;

                }

                PostService::create($serviceData);

            }

        }

        if ($place = $request->post('place')) {

            \DB::table('post_places')->where('posts_id', $post->id)->delete();

            foreach ($place as $placeItem) {

                PostPlace::create([
                    'place_id' => $placeItem,
                    'posts_id' => $post->id,
                    'city_id' => $post->city_id
                ]);

            }

        }

        if ($metroId = $request->post('metro')) {

            \DB::table('post_metros')->where('posts_id', $post->id)->delete();

            PostMetro::create([
                'metros_id' => $metroId,
                'posts_id' => $post->id,
                'city_id' => $post->city_id
            ]);

        }

        if ($request->file('anketPhotos')) foreach ($request->file('anketPhotos') as $item) {

            $photo[] = [
                'posts_id' => $post->id,
                'file' => '/' . $item->store('/uploads/' . $dir, 'public'),
                'type' => Photo::GALLERY_TYPE
            ];

        }

        if ($request->file('anketSelfie')) foreach ($request->file('anketSelfie') as $item) {

            $photo[] = [
                'posts_id' => $post->id,
                'file' => '/' . $item->store('/uploads/' . $dir, 'public'),
                'type' => Photo::SELPHI_TYPE
            ];

        }

        if ($request->file('anketCheckPhoto')) {

            $file = Photo::where(['posts_id' => $post->id, 'type' => Photo::CHECK_PHOTO_TYPE])->first();

            if ($file) {

                $path = (storage_path('app/public' . $file->file));

                if (file_exists($path)) {

                    unlink($path);

                }

                $file->delete();

            }

            $photo[] = [
                'posts_id' => $post->id,
                'file' => '/' . $request->file('anketCheckPhoto')->store('/uploads/' . $dir, 'public'),
                'type' => Photo::CHECK_PHOTO_TYPE
            ];

        }

        $avatar = $request->file('photo');

        if ($avatar) {

            $avatar = $avatar->store('/uploads/' . $dir, 'public');

            $path = (storage_path('app/public/' . $post->avatar));

            if (file_exists($path)) {

                unlink($path);

            }

            $post->avatar = $avatar;

        }

        if ($video = $request->file('anketVideo')) {

            if ($post->video){

                $path = (storage_path('app/public/' . $post->video));

                if (file_exists($path)) {

                    unlink($path);

                }

            }

            $video = $video->store('/uploads/' . $dir, 'public');

            $post->video = $video;

        }

        if ($photo) foreach ($photo as $item) {
            Photo::create($item);
        }

        $post->save();

        return redirect('/cabinet');

    }

    public function destroy($city, $id)
    {

        $post = Post::where(['user_id' => auth()->id(), 'id' => $id])->with('photo')->first();

        if (!$post) abort(403);

        foreach ($post->photo as $item){

            $path = (storage_path('app/public'.$item->file));

            if (file_exists($path)) unlink($path);

        }

        if (file_exists('app/public/'.$post->avatar)) unlink(storage_path('app/public/'.$post->avatar));

        if ($post->video) unlink(storage_path('app/public/'.$post->video));

        \DB::table('post_metros')->where('posts_id', $post->id)->delete();

        \DB::table('post_places')->where('posts_id', $post->id)->delete();

        \DB::table('post_services')->where('posts_id', $post->id)->delete();

        $post->delete();

        return ($id);
    }

    public function publication($city, Request $request)
    {

        $id = $request->post('id');

        $post = Post::find($id);

        if ($post->user_id != auth()->user()->id) abort(403);

        if ($post->tarif->sum > auth()->user()->cash) return 'Недостаточно средств';

        $result = (new Publication())->publication($post);

        return $result;

    }

    public function all()
    {
        $posts = Post::where('user_id', auth()->user()->id )
            ->where('publication_status', Post::POST_DONT_PUBLICATION)
            ->with('tarif', 'user')->get();

        if (!$posts->count()) abort(403);

        foreach ($posts as $post){

            if ($post->user->cash >= $post->tarif->sum){

                if ($post->pay_time <= time()) {

                    $post->pay_time = time() + 3600;

                    $post->user->cash = $post->user->cash - $post->tarif->sum;

                    $post->user->save();

                }

                $post->publication_status = Post::POST_ON_PUBLICATION;

                $post->save();

                //$payType = History::PAY_FOR_POST_PUBLICATION_TYPE;

                //event(new PayEvent($post->tarif->price, $post->user->id,$payType,$post->user->cash));

            }

        }
    }
    public function stop()
    {
        $posts = Post::where('user_id', auth()->user()->id )
            ->where('publication_status', Post::POST_ON_PUBLICATION)->get();

        if (!$posts->count()) abort(403);

        foreach ($posts as $post){

            $post->publication_status = Post::POST_DONT_PUBLICATION;

            $post->save();

        }
    }

    public function up(Request $request)
    {

        $upCost = 70;

        $id = $request->post('id');

        $post = Post::where('id',$id)
            ->where('user_id', auth()->user()->id)
            ->with('user')->first();

        if (!$post) abort(404);

        if ($post->user->cash < $upCost) return 'Недостаточно средств';

        $post->user->cash = $post->user->cash - $upCost;

        $post->user->save();

        $post->sorting = time();

        $post->save();

        return 'Анкета поднята';

    }

}
