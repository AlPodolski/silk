<?php

namespace App\Actions;

use App\Models\Post;

class GenerateBreadcrumbMicro
{
    public function generate($request, $name): string
    {
        $host = $request->getHttpHost();
        $url = $request->path();

        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [array(
                '@type' => 'ListItem',
                'position' => 1,
                'item' => [
                    '@id' => 'https://' . $host,
                    'name' => 'Главная'
                ]),
                array(
                    '@type' => 'ListItem',
                    'position' => 2,
                    'item' => [
                        '@id' => 'https://' . $host . '/' . $url,
                        'name' => $name
                    ]),
            ]
        ];

        $data = '<script type="application/ld+json">' . json_encode($data) . '</script>';

        return $data;

    }

    public function generateForSingle($request, $name, Post $post): string
    {
        $host = $request->getHttpHost();
        $url = $request->path();

        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [array(
                '@type' => 'ListItem',
                'position' => 1,
                'item' => [
                    '@id' => 'https://' . $host,
                    'name' => 'Главная'
                ]),
                array(
                    '@type' => 'ListItem',
                    'position' => 2,
                    'item' => [
                        '@id' => 'https://' . $host . '/' . $post->national->filter_url,
                        'name' => $post->national->value2
                    ]),
                array(
                    '@type' => 'ListItem',
                    'position' => 3,
                    'item' => [
                        '@id' => 'https://' . $host . '/' . $url,
                        'name' => $name
                    ]),
            ]
        ];

        $data = '<script type="application/ld+json">' . json_encode($data) . '</script>';

        return $data;

    }
}

