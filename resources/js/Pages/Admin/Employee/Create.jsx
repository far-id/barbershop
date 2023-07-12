import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Breadcrumb, Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useEffect } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';


function Create({ branches }) {
    const { data, setData, post, reset, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        address: '',
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
        post(route('employees.store'));
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
    return (
        <>
            <Head title='employees' />
            <div className='p-4 m-1 bg-white rounded-lg md:w-1/2'>
                <form className="flex flex-col w-full gap-4" onSubmit={ submit }>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="name"
                                value="Employee Name"
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
                                htmlFor="email"
                                value="Employee Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            name="email"
                            placeholder="@mail.com"
                            required
                            value={ data.email }
                            onChange={ (e) => changeHandler(e) }
                            shadow
                            type="email"
                        />
                        { errors.email && <p className="text-xs italic text-red-500">{ errors.email }</p> }
                    </div>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="address"
                                value="Employee Address"
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
                        { errors.address && <p className="text-xs italic text-red-500">{ errors.address }</p> }
                    </div>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="Branch"
                                value="Branch"
                            />
                        </div>
                        <Select
                            id="branch"
                            required
                            name="branch"
                            onChange={ (e) => changeHandler(e) }
                            shadow
                        >
                            { branches.map((branch, k) => (
                                <option key={ k } value={ branch.id }>
                                    { branch.name } ({ branch.address })
                                </option>
                            )) }
                        </Select>
                        { errors.branch && <p className="text-xs italic text-red-500">{ errors.branch }</p> }
                    </div>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="password"
                                value="Employee Account Password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={ data.password }
                            onChange={ (e) => changeHandler(e) }
                            shadow
                            type="password"
                        />
                        { errors.password && <p className="text-xs italic text-red-500">{ errors.password }</p> }
                    </div>
                    <div>
                        <div className="block mb-2">
                            <Label
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />
                        </div>
                        <TextInput
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            required
                            value={ data.password_confirmation }
                            onChange={ (e) => changeHandler(e) }
                            shadow
                            type="password"
                        />
                        { errors.password_confirmation && <p className="text-xs italic text-red-500">{ errors.password_confirmation }</p> }
                    </div>

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
            <Breadcrumb.Item href={ route('employees.index') }>
                employees
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Create
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Create;