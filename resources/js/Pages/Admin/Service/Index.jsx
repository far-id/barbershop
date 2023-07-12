import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumb, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';


function Index({ services: data }) {
    const [services, setServices] = useState(data);
    const [searchValue, setSearchValue] = useState("");
    const order = (by) => {
        let ordered = [...services].sort((a, b) => a[by].localeCompare(b[by]));
        // belum selesai
        //order masih 1 arah
        setServices(ordered);
    };

    const successDelete = (id) => setServices([...services].filter((service) => service.id !== id));

    useEffect(() => {
        const search = (query) => {
            if (!query) return setServices(data);
            return setServices(
                [...data].filter((service) =>
                    Object.keys(service).some((key) =>
                        key === 'name' || key === 'price' ?
                            service[key].toString().toLowerCase().includes(query.toLowerCase())
                            : false
                    )
                )
            );
        };
        search(searchValue);
    }, [searchValue]);

    return (
        <>
            <Head title='Services' />

            <div className="flex w-full p-3 mb-6 bg-white rounded-lg">
                <div className='items-center w-full'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={ (e) => setSearchValue(e.target.value) } type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>
                </div>
                <div className='flex items-center'>
                    <Link href={ route('services.create') } title='Add New Service'
                        className="inline p-2 mx-2 font-medium text-white bg-blue-700 rounded-full text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <HiPlus />
                    </Link>
                </div>
            </div>

            <div className='overflow-x-auto'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Image
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
                                Price
                                <button onClick={ () => order("price") }>
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
                        { services.map((service, k) => (
                            <Table.Row key={ k } className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    { k + 1 }
                                </Table.Cell>
                                <Table.Cell>
                                    { service.image ? (<img src={ `/storage/${service.image}` } className='w-32 rounded-3xl' alt={ service.name + " Image" } />)
                                        : (<div className='w-32 rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="freepik--404--inject-4"><path d="M147.68,287.64H86.83V260.17l60.85-72.34H176.8v73.9h15.09v25.91H176.8v22.48H147.68Zm0-25.91V223.89l-32.16,37.84Z" style={ { fill: '#407BFF' } } /><path d="M202.3,249.51q0-34.29,12.34-48t37.61-13.7q12.13,0,19.93,3a36.79,36.79,0,0,1,12.71,7.79,41.59,41.59,0,0,1,7.75,10.09,52.38,52.38,0,0,1,4.55,12.34,115.36,115.36,0,0,1,3.36,28q0,32.72-11.07,47.89t-38.13,15.18q-15.18,0-24.53-4.84a39.76,39.76,0,0,1-15.33-14.19q-4.35-6.64-6.77-18.17A124.33,124.33,0,0,1,202.3,249.51Zm33.14.08q0,23,4.05,31.37t11.77,8.41a12.34,12.34,0,0,0,8.82-3.57q3.74-3.57,5.5-11.28t1.76-24q0-23.94-4.06-32.19t-12.18-8.24q-8.28,0-12,8.41T235.44,249.59Z" style={ { fill: '#407BFF' } } /><path d="M371.74,287.64H310.89V260.17l60.85-72.34h29.12v73.9H416v25.91H400.86v22.48H371.74Zm0-25.91V223.89l-32.15,37.84Z" style={ { fill: '#407BFF' } } /></g></svg></div>)

                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    { service.name }
                                </Table.Cell>
                                <Table.Cell>
                                    { service.price }
                                </Table.Cell>
                                <Table.Cell className='flex justify-center gap-x-2 -ml-6'>
                                    <Link
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href={ route('services.edit', service.id) }
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className="font-medium text-pink-600 hover:underline dark:text-pink-500"
                                        href={ route('services.destroy', service.id) } method='delete' onSuccess={ () => successDelete(service.id) }
                                    >
                                        Delete
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
            <Breadcrumb.Item href={ route('services.index') }>
                Services
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                List
            </Breadcrumb.Item>
        </Breadcrumb> }
/>;
export default Index;