import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { Breadcrumb, Card, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';

function Index({ queues: data, serves }) {
    const [queues, setQueues] = useState(data);
    const [searchValue, setSearchValue] = useState("");

    const serveQueue = (e, id) => {
        e.preventDefault();
        router.put(route('queue.status', id), {
            'status': 'serving'
        });
        setQueues([...queues].filter((queue) => queue.id !== id));
    };

    const cancelQueue = (e, id) => {
        e.preventDefault();
        router.put(route('queue.status', id), {
            'status': 'canceled'
        });
        setQueues([...queues].filter((queue) => queue.id !== id));
    };
    const finishServe = (e, id) => {
        e.preventDefault();
        router.put(route('queue.status', id), {
            'status': 'finished'
        });
    };

    useEffect(() => {
        const search = (query) => {
            if (!query) return setQueues(data);
            return setQueues(
                [...data].filter((queue) =>
                    Object.keys(queue).some((key) =>
                        key === 'booking_id' || key === 'name' ?
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
            <Head title='Branches' />
            <div className='block md:flex justify-between w-full gap-x-4 md:overflow-x-auto scrollbar scrollbar-thumb-indigo-400 scrollbar-h-1 scrollbar-track-gray-200 scrollbar-track-rounded-full'>
                { serves.map((serve, k) => (
                    <Card className='mb-3 md:mb-0 min-w-fit' key={ k }>
                        <div className='flex justify-between items-center w-full gap-x-14'>
                            <span>
                                { serve.booking_id }
                            </span>
                            <p className='min-w-fit'>
                                { serve.name }
                            </p>
                            <button onClick={ (e) => finishServe(e, serve.id) } title='Finish The Serve' className="border hover:border-none inline-flex items-center justify-center transition-all ease-in duration-75 overflow-hidden text-lg font-medium text-gray-900 rounded-full group hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-400 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                    { BsCheck() }
                                </span>
                            </button>
                        </div>
                        <div>
                            <ul>
                                { serve.services.map((service, key) => (
                                    <li className='flex justify-between' key={ key }>
                                        <span className='min-w-fit'>
                                            { service.name }
                                        </span>
                                        <div className='w-full border-b-2 border-blue-200'></div>
                                        <span>
                                            { service.price.slice(0, -3) }k
                                        </span>
                                    </li>
                                )) }
                            </ul>
                            <div className='border-t-2 border-dashed mt-3 flex justify-between'>
                                <span>
                                    Total:
                                </span>
                                <div className='w-full border-b-2 border-gray-200'></div>
                                { serve.total_price.toString().slice(0, -3) }k
                            </div>
                        </div>
                    </Card>
                )) }
            </div>

            <div className="flex w-full p-3 my-6 bg-white rounded-lg shadow-md">
                <div className='items-center w-full'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={ (e) => setSearchValue(e.target.value) } type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Id or Name" required />
                    </div>
                </div>
            </div>

            <div className='overflow-x-auto shadow-md rounded-lg overflow-hidden'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Arrival
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">
                                Edit
                            </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { queues.map((queue, k) => (
                            <Table.Row key={ k } className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { queue.booking_id }
                                </Table.Cell>
                                <Table.Cell>
                                    { queue.name }
                                </Table.Cell>
                                <Table.Cell>
                                    <span className='mr-2'>{ queue.arrival_time }</span>
                                    { queue.arrival_date }
                                </Table.Cell>
                                <Table.Cell className='flex justify-center gap-x-2 -ml-6'>
                                    <button onClick={ (e) => serveQueue(e, queue.id) } className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" >
                                        Serve
                                    </button>
                                    <button onClick={ (e) => cancelQueue(e, queue.id) } className="font-medium text-pink-600 hover:underline dark:text-pink-500" >
                                        Cancel
                                    </button>
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
            <Breadcrumb.Item href={ route('queues.index') }>
                Queues
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                List
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Index;