import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Breadcrumb, Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { BiSolidDashboard } from 'react-icons/bi';


function Create() {
    const { data, setData, post, processing, progress, errors } = useForm({
        name: '',
        price: '',
        prime: false,
        image: null,
    });
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked
                    : e.target.type === 'file' ? e.target.files[0]
                        : e.target.value
        }
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('services.store'));
    };
    return (
        <>
            <Head title='Services' />
            <div className='p-4 m-1 bg-white rounded-lg md:w-1/2'>
                <form className="flex flex-col w-full gap-4" onSubmit={ submit }>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="name"
                                value="Name of Service"
                            />
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            placeholder="Hair Cut"
                            required
                            value={ data.name }
                            onChange={ (e) => changeHandler(e) }
                            shadow
                            type="text"
                        />
                        { errors.name && <p className="text-xs italic text-red-500">{ errors.name }</p> }
                    </div>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="price"
                                value="Price of the service"
                            />
                        </div>
                        <TextInput
                            id="price"
                            name="price"
                            placeholder="20000"
                            required
                            value={ data.price }
                            onChange={ (e) => changeHandler(e) }
                            shadow
                            type="number"
                        />
                    </div>
                    { errors.price && <p className="text-xs italic text-red-500">{ errors.price }</p> }
                    <div className="justify-between md:flex">
                        <div className='w-2/5'>
                            <div className="block mb-2">
                                <Label
                                    className='mr-4'
                                    htmlFor="prime"
                                    value="Prime of the service?"
                                />
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">No</span>
                                <input
                                    checked={ data.prime }
                                    onChange={ (e) => changeHandler(e) }
                                    type="checkbox"
                                    id="prime"
                                    name="prime"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[33px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                            </label>
                            { errors.prime && <p className="text-xs italic text-red-500">{ errors.prime }</p> }
                        </div>
                        <div className='w-3/5'>
                            <div className="block mb-2">
                                <Label
                                    htmlFor="image"
                                    value="Image of the Service"
                                />
                            </div>
                            <input
                                onChange={ (e) => changeHandler(e) }
                                type="file"
                                name="image"
                                id="image"
                                className="block w-full text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-blue-300 focus:ring file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
                            />
                            { errors.image && <p className="text-xs italic text-red-500">{ errors.image }</p> }
                        </div>
                    </div>
                    { progress && (
                        <progress value={ progress.percentage } max="100">
                            { progress.percentage }%
                        </progress>
                    ) }
                    <Button type="submit" disabled={ processing } className="bg-blue-600">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
};

Create.layout = (page) => <Authenticated
    children={ page }
    header={
        <Breadcrumb aria-label="breadcrumb">
            <Breadcrumb.Item
                href={ route('dashboard') }
                icon={ BiSolidDashboard }
            >
                <p>
                    Dashboard
                </p>
            </Breadcrumb.Item>
            <Breadcrumb.Item href={ route('services.index') }>
                Services
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Create
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Create;