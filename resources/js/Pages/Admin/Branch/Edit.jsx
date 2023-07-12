import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Breadcrumb, Button, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import { BiSolidDashboard } from 'react-icons/bi';


function Edit({ branch }) {
    const { data, setData, put, processing, errors } = useForm({
        name: branch.name,
        address: branch.address,
    });
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        }
        );
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('branches.update', branch.id));
    };
    return (
        <>
            <Head title='Branches' />
            <div className='p-4 m-1 bg-white rounded-lg md:w-1/2'>
                <form className="flex flex-col w-full gap-4" onSubmit={ submit }>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="name"
                                value="Name of Branch"
                            />
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            placeholder="Condet"
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
                                htmlFor="address"
                                value="Address of Branch"
                            />
                        </div>
                        <Textarea
                            id="address"
                            name="address"
                            placeholder="Jl. Pengantin Ali No.12, Kec. Ciracas, Kota Jakarta Timur."
                            required
                            value={ data.address }
                            onChange={ (e) => changeHandler(e) }
                            shadow
                            rows={ 3 }
                        />
                    </div>
                    { errors.address && <p className="text-xs italic text-red-500">{ errors.address }</p> }

                    <Button type="submit" disabled={ processing } className="bg-blue-600">
                        Submit
                    </Button>
                </form>
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
            <Breadcrumb.Item href={ route('branches.index') }>
                Branches
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Edit
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Edit;