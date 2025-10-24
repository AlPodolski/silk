<?php

namespace App\Http\Controllers\Cabinet;

use App\Actions\SendMessageAction;
use App\Http\Controllers\Controller;
use App\Models\File;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function __invoke(Request $request)
    {
        $text = $request->post('message');

        return (new SendMessageAction())->send($text, auth()->user()->id);

    }

    public function file(Request $request)
    {

        $fileInfo = $request->file('chatFile');

        $dir = \substr(\md5($fileInfo->getFilename()), 0, 3);

        $fileOnDisk = $fileInfo->store('/uploads/' . $dir, 'public');

        if ($fileOnDisk){

            $file = new File();

            $file->path = $fileOnDisk;

            $file->save();

            (new SendMessageAction())->send(null, auth()->user()->id, File::class, $file->id);

            return view('new.cabinet.message.photo', ['file' => $file->path]);

        }

    }

}
