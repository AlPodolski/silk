<?php

namespace App\Http\Controllers;

use App\Actions\GenerateBreadcrumbMicro;
use App\Actions\GenerateMicroDataForCatalog;
use App\Repository\MetaRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    private GenerateBreadcrumbMicro $breadMicro;
    private GenerateMicroDataForCatalog $microData;

    public function __construct()
    {
        $this->breadMicro = new GenerateBreadcrumbMicro();
        $this->microData = new GenerateMicroDataForCatalog();

        parent::__construct();
    }
    public function index($city, $search, MetaRepository $metaRepository, Request $request)
    {
        $cityInfo = $this->cityRepository->getCity($city);

        $data = $this->dataRepository->getData($cityInfo['id']);

        $meta = $metaRepository->getForMain($search, $cityInfo, $request);

        $breadMicro = $this->breadMicro->generate($request, $meta['h1']);

        return view('new.category.index', compact('cityInfo', 'data', 'meta', 'breadMicro', 'search'));
    }
}
