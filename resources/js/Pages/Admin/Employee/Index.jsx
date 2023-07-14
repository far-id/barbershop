import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumb, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';


function Index({ employees: data }) {
    const [employees, setEmployees] = useState(data);
    const [searchValue, setSearchValue] = useState("");
    const order = (by) => {
        let ordered = [...employees].sort((a, b) => a[by].localeCompare(b[by]));
        // belum selesai
        //order masih 1 arah
        setEmployees(ordered);
    };

    const successDelete = (id) => setEmployees([...employees].filter((employee) => employee.id !== id));

    useEffect(() => {
        const search = (query) => {
            if (!query) return setEmployees(data);
            return setEmployees(
                [...data].filter((employee) =>
                    Object.keys(employee).some((key) =>
                        key === 'name' || key === 'email' || key === 'address' || 'branch' ?
                            employee[key].toString().toLowerCase().includes(query.toLowerCase())
                            : false
                    )
                )
            );
        };
        search(searchValue);
    }, [searchValue]);

    return (
        <>
            <Head title='Employees' />

            <div className="flex w-full p-3 mb-6 bg-white rounded-lg shadow-md">
                <div className='items-center w-full'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={ (e) => setSearchValue(e.target.value) } type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Branch, Name, Email or Address" required />
                    </div>
                </div>
                <div className='flex items-center'>
                    <Link href={ route('employees.create') } title='Add New employee'
                        className="inline p-2 mx-2 font-medium text-white bg-blue-700 rounded-full text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <HiPlus />
                    </Link>
                </div>
            </div>

            <div className='overflow-x-auto shadow-md rounded-lg overflow-hidden'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex">
                                Branch
                                <button onClick={ () => order("branch") }>
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex">
                                Name
                                <button onClick={ () => order("name") }>
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex">
                                Email
                                <button onClick={ () => order("email") }>
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </button></div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex">
                                Address
                                <button onClick={ () => order("address") }>
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">
                                Edit
                            </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { employees.map((employee, k) => (
                            <Table.Row key={ k } className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { k + 1 }
                                </Table.Cell>
                                <Table.Cell>
                                    { employee.branch_name }
                                </Table.Cell>
                                <Table.Cell>
                                    { employee.name }
                                </Table.Cell>
                                <Table.Cell>
                                    { employee.email }
                                </Table.Cell>
                                <Table.Cell>
                                    { employee.address }
                                </Table.Cell>
                                <Table.Cell className='flex justify-center gap-x-2 -ml-6'>
                                    <Link
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href={ route('employees.edit', employee.id) }
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className="font-medium text-pink-600 hover:underline dark:text-pink-500"
                                        href={ route('employees.destroy', employee.id) } as='button' method='delete' onSuccess={ () => successDelete(employee.id) }
                                    >
                                        Delete Account
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )) }
                    </Table.Body>
                </Table>
            </div>
        </>
    );
};

Index.layout = (page) => <Authenticated
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
                List
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Index;