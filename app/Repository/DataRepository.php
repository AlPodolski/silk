<?php

namespace App\Repository;

use App\Models\City;
use App\Models\HairColor;
use App\Models\IntimHair;
use App\Models\Metro;
use App\Models\National;
use App\Models\Place;
use App\Models\Price;
use App\Models\Rayon;
use App\Models\Service;
use App\Models\Time;
use Cache;
use Carbon\Carbon;

class DataRepository
{
    public function getData($cityId): array
    {
        Cache::flush();
        $expire = Carbon::now()->addHours(1200);

        $data = Cache::remember('data_menu_' . $cityId, $expire, function () use ($cityId) {

            $data['national'] = National::select('nationals.*', 'filters.url as filter_url')
                ->join('filters', 'nationals.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'nationals')
                ->orderBy('value')
                ->get();

            $data['place'] = Place::select('places.*', 'filters.url as filter_url')
                ->join('filters', 'places.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'post_places')
                ->orderBy('value')
                ->get();

            $data['time'] = Time::select('times.*', 'filters.url as filter_url')
                ->join('filters', 'times.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'post_times')
                ->orderBy('value')
                ->get();

            $data['hair'] = HairColor::select('hair_colors.*', 'filters.url as filter_url')
                ->join('filters', 'hair_colors.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'hair_color')
                ->orderBy('value')
                ->get();
            $data['intimHair'] = IntimHair::select('intim_hairs.*', 'filters.url as filter_url')
                ->join('filters', 'intim_hairs.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'intim_hair')
                ->orderBy('value')
                ->get();

            $data['service'] = Service::select('services.*', 'filters.url as filter_url')
                ->join('filters', 'services.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'post_services')
                ->orderBy('value')
                ->get();

            $data['metro'] = Metro::where(['city_id' => $cityId])
                ->select('metros.*', 'filters.url as filter_url')
                ->join('filters', 'metros.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'post_metros')
                ->orderBy('value')
                ->get();

            $data['rayon'] = Rayon::where(['city_id' => $cityId])
                ->select('rayons.*', 'filters.url as filter_url')
                ->join('filters', 'rayons.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'rayons')
                ->orderBy('value')
                ->get();

            $data['price'] = Price::select('prices.*', 'filters.url as filter_url')
                ->join('filters', 'prices.id', '=', 'filters.related_id')
                ->where('filters.related_table', 'prices')
                ->orderBy('value')
                ->get();

            $data['city_list'] = City::all();

            $data['current_city'] = City::where('id', $cityId)->first();

            return $data;

        });

        return $data;
    }
}
