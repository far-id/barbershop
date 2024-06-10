import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Breadcrumb, Card, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';


function Index({ bookkeeping }) {
    const [bookkeepings, setQueues] = useState(bookkeeping.data);

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const search = (query) => {
            if (!query) return setQueues(bookkeeping.data);
            return setQueues(
                [...bookkeeping.data].filter((queue) =>
                    Object.keys(queue).some((key) =>
                        key === 'booking_id' || key === 'name' || key === 'created_at' ?
                            queue[key].toString().toLowerCase().includes(query.toLowerCase())
                            : false
                    )
                )
            );
        };
        search(searchValue);
    }, [searchValue]);



    return (
        <>
            <Head title='Bookkeeping' />

            <div className="flex w-full p-3 my-6 bg-white rounded-lg shadow-md">
                <div className='items-center w-full'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={ (e) => setSearchValue(e.target.value) } type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Id or Name or Finished At" required />
                    </div>
                </div>
                <div className='flex items-center'>
                    <Link href={ route('bookkeeping.export') } title='Export to Excel'
                        className="inline p-2 mx-2 font-medium text-white bg-blue-700 rounded-full text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <HiPlus />
                    </Link>
                </div>
            </div>

            <div className='overflow-hidden overflow-x-auto rounded-lg shadow-md'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            Finished At
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Booking ID
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Email
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Arrival
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Branch
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Services
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Total Price
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { bookkeepings.map((data, k) => (
                            <Table.Row key={ k } className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { data.created_at }
                                </Table.Cell>
                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { data.booking_id }
                                </Table.Cell>
                                <Table.Cell>
                                    { data.name }
                                </Table.Cell>
                                <Table.Cell>
                                    { data.email }
                                </Table.Cell>
                                <Table.Cell>
                                    <span className='mr-2'>{ data.arrival_time }</span>
                                    { data.arrival_date }
                                </Table.Cell>
                                <Table.Cell>
                                    { data.branch_name }
                                </Table.Cell>
                                <Table.Cell>
                                    { data.services }
                                </Table.Cell>
                                <Table.Cell>
                                    { data.total_price }
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
            <Breadcrumb.Item href={ route('bookkeeping.index') }>
                Bookkeeping
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                List
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Index;
