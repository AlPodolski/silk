<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\ThumbnailController;
use Illuminate\Support\Facades\Route;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';

Route::post('/phone', \App\Http\Controllers\PhoneController::class);

Route::post('/review/add', \App\Http\Controllers\ReviewController::class);

Route::post('/message/add', [\App\Http\Controllers\MessagesController::class, 'store']);

// Настраиваем лимит (опционально)
RateLimiter::for('phone-message', function ($request) {
    return Limit::perMinute(5)->by($request->ip()); // 5 запросов в минуту с одного IP
});

Route::post('/message/phone', [\App\Http\Controllers\MessagesController::class, 'phone'])
    ->middleware('throttle:phone-message');

Route::get('/thumbnail/{size}/{filename}', 'ThumbnailController@make')
    ->where('path', '.*');;

Route::get('/thumbnail/{size}/{path}', [ThumbnailController::class, 'make'])
    ->where('path', '.*'); // позволяет захватывать путь с подкаталогами

Route::get('/pay/{id}', [\App\Http\Controllers\PayController::class, 'index']);

Route::middleware('redirect')->group(function () {

    Route::domain('{city}.' . SITE)->group(function () {

        Route::post('/contact', [\App\Http\Controllers\ClaimController::class, 'index'])->name('contact.send');

        Route::get('/blog', [\App\Http\Controllers\BlogController::class, 'index']);
        Route::get('/blog/{url}', [\App\Http\Controllers\BlogController::class, 'post']);

        Route::get('/politika-konfidencialnosti', [\App\Http\Controllers\CustomController::class, 'politic']);
        Route::get('/', \App\Http\Controllers\IndexController::class);
        Route::post('/', [\App\Http\Controllers\IndexController::class, 'more']);
        Route::get('/{category}/{url}', \App\Http\Controllers\PostController::class);
        Route::post('/posts/more', [\App\Http\Controllers\PostController::class, 'more']);
        Route::get('/name', \App\Http\Controllers\SearchController::class);
        Route::get('/poisk', [\App\Http\Controllers\SearchController::class, 'filter']);
        Route::post('/poisk', [\App\Http\Controllers\SearchController::class, 'more']);

        Route::post('/city/search', [\App\Http\Controllers\SearchController::class, 'city']);

        Route::get('/sitemap.xml', \App\Http\Controllers\SiteMapController::class);
        Route::get('/sitemap_post.xml', [\App\Http\Controllers\SiteMapController::class, 'post']);
        Route::get('/sitemap_page.xml', [\App\Http\Controllers\SiteMapController::class, 'page']);

        Route::get('/robots.txt', \App\Http\Controllers\RobotController::class);
        Route::get('/intim-map', \App\Http\Controllers\MapController::class);

        Route::post('/favorite/add', [\App\Http\Controllers\FavoriteController::class, 'add']);
        Route::get('/favorite', [\App\Http\Controllers\FavoriteController::class, 'index']);

        Route::get('/{search}', \App\Http\Controllers\FilterController::class)
            ->where('search', '.*');

        Route::post('/{search}', [\App\Http\Controllers\FilterController::class, 'more'])
            ->where('search', '.*');
    });

});
