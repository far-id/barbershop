import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { Breadcrumb, Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { BiSolidDashboard } from 'react-icons/bi';


function Edit({ service }) {
    const { data, setData, put, processing, progress, errors } = useForm({
        name: service.name,
        price: service.price,
        prime: service.prime === 0 ? false : true,
        image: ''
    });

    const changeHandler = (e) => {
        console.log(e.target.name, "changed");
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
        console.log(data);
        router.post(
            route('services.update', service.id),
            {
                _method: 'put',
                ...data
            }
        );
        // put(route('services.update', service.id), data);
    };
    return (
        <>
            <Head title='Services' />
            <div className="block md:flex">
                <div className='p-4 m-1 bg-white rounded-lg h-fit md:w-1/2'>
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
                                onChange={ changeHandler }
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
                                onChange={ changeHandler }
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
                                        onChange={ changeHandler }
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
                                    onChange={ changeHandler }
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
                <div className='p-4 m-1 bg-white rounded-lg md:w-1/2'>
                    <p className='mb-2 font-semibold'>Previous Image</p>
                    { service.image ?
                        (<img src={ `https://storage.googleapis.com/barbershop-raplontos/${service.image}` } className='w-fit rounded-3xl' alt={ service.name + " Image" } />)
                        : (<div className='top-0 w-full -my-36 rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="freepik--404--inject-4"><path d="M147.68,287.64H86.83V260.17l60.85-72.34H176.8v73.9h15.09v25.91H176.8v22.48H147.68Zm0-25.91V223.89l-32.16,37.84Z" style={ { fill: '#407BFF' } } /><path d="M202.3,249.51q0-34.29,12.34-48t37.61-13.7q12.13,0,19.93,3a36.79,36.79,0,0,1,12.71,7.79,41.59,41.59,0,0,1,7.75,10.09,52.38,52.38,0,0,1,4.55,12.34,115.36,115.36,0,0,1,3.36,28q0,32.72-11.07,47.89t-38.13,15.18q-15.18,0-24.53-4.84a39.76,39.76,0,0,1-15.33-14.19q-4.35-6.64-6.77-18.17A124.33,124.33,0,0,1,202.3,249.51Zm33.14.08q0,23,4.05,31.37t11.77,8.41a12.34,12.34,0,0,0,8.82-3.57q3.74-3.57,5.5-11.28t1.76-24q0-23.94-4.06-32.19t-12.18-8.24q-8.28,0-12,8.41T235.44,249.59Z" style={ { fill: '#407BFF' } } /><path d="M371.74,287.64H310.89V260.17l60.85-72.34h29.12v73.9H416v25.91H400.86v22.48H371.74Zm0-25.91V223.89l-32.15,37.84Z" style={ { fill: '#407BFF' } } /></g></svg></div>)
                    }
                </div>
            </div>
        </>
    );
};

Edit.layout = (page) => <Authenticated
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
                Edit
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Edit;
