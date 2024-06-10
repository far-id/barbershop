import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Breadcrumb, Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import { BiSolidDashboard } from 'react-icons/bi';


function Edit({ employee, branches }) {
    const { data, setData, put, reset, processing, errors } = useForm({
        name: employee.name,
        email: employee.email,
        address: employee.address,
        branch: employee.branch_id,
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
        put(route('employees.update', employee.id));
    };
    return (
        <>
            <Head title='Employees' />
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
                                <option selected={ branch.id === data.branch } key={ k } value={ branch.id }>
                                    { branch.name } ({ branch.address })
                                </option>
                            )) }
                        </Select>
                    </div>
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
            <Breadcrumb.Item href={ route('employees.index') }>
                Employees
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Edit
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Edit;
