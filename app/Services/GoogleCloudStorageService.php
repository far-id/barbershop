<?php

namespace App\Services;

use Exception;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class GoogleCloudStorageService
{
    public function uploadImage(UploadedFile $file)
    {
        try {
            $googleConfigFile = file_get_contents(base_path('barbershop-raplontos-2ac6f1948e87.json'));
            $storage = new StorageClient([
                'keyFile' => json_decode($googleConfigFile, true)
            ]);

            $bucketName = "barbershop-raplontos";
            $bucket = $storage->bucket($bucketName);

            //get filename with extension
            $filenamewithextension = $file->getClientOriginalName();
            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
            //get file extension
            $extension = $file->getClientOriginalExtension();

            //filename to store
            $filenametostore = $filename . '_' . uniqid() . '.' . $extension;
            Storage::put('public/uploads/' . $filenametostore, fopen($file, 'r+'));
            $filepath = storage_path('app/public/uploads/' . $filenametostore);
            $googleCloudStoragePath = 'services/' . $file->getClientOriginalName();

            $bucket->upload(
                fopen($filepath, 'r'),
                [
                    'predefinedAcl' => 'publicRead',
                    'name' => $googleCloudStoragePath
                ]
            );
            Storage::delete('public/uploads/' . $filenametostore);

            return $googleCloudStoragePath;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteImage($imagePath)
    {
        $googleConfigFile = file_get_contents(base_path('barbershop-raplontos-2ac6f1948e87.json'));
        $storage = new StorageClient([
            'keyFile' => json_decode($googleConfigFile, true)
        ]);

        $bucketName = "barbershop-raplontos";
        $bucket = $storage->bucket($bucketName);

        $bucket->object($imagePath)->delete();
    }
}
