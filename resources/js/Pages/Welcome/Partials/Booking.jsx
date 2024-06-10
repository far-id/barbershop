import { router, useForm, usePage } from '@inertiajs/react';
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Booking({ branches, services }) {
    const { errors } = usePage().props;
    let currentDate = new Date(Date.now());
    const { data, setData, processing } = useForm({
        name: '',
        email: '',
        services: [],
        arrival_time: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
        arrival_date: currentDate.toISOString().substring(0, 10),
        branch: branches[0].id,
        comment: '',
    });
    const changeMultiSelectHandler = (newValue) => {
        setData('services', newValue);
    };
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        router.post(route('booking'), {
            ...data,
            services: data.services.map(service => service.value)
        });
    };
    const options = services.map((service) => ({ value: service.id, label: service.name }));

    return (
        <div className="container">
            <div className="row">
                <div className="mx-auto col-lg-10 col-12">
                    <form className="custom-form booking-form" onSubmit={ submit }>
                        <div className="mb-5 text-center">
                            <h2 className="mb-1">Book a seat</h2>
                            <p>Please fill out the form and we get back to you</p>
                        </div>
                        <div className="booking-form-body">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    { errors.name && <span >{ errors.name }</span> }
                                    <input
                                        id="name"
                                        name="name"
                                        required
                                        value={ data.name }
                                        onChange={ (e) => changeHandler(e) }
                                        type="text"
                                        className="form-control"
                                        placeholder="Full name" />

                                </div>
                                <div className="col-lg-6 col-12">
                                    { errors.services && <span >{ errors.services }</span> }
                                    <Select
                                        id="services"
                                        name="services"
                                        value={ data.services }
                                        onChange={ changeMultiSelectHandler }
                                        placeholder="Services You Want"
                                        closeMenuOnSelect={ false }
                                        components={ makeAnimated() }
                                        isMulti
                                        options={ options }
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </div>
                                <div className="col-lg-6 col-12">
                                    { errors.email && <span >{ errors.email }</span> }
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder='email'
                                        required
                                        value={ data.email }
                                        onChange={ (e) => changeHandler(e) }
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-lg-6 col-12">
                                    { errors.arrival_time && <span >{ errors.arrival_time }</span> }
                                    <input
                                        id="arrival_time"
                                        name="arrival_time"
                                        required
                                        value={ data.arrival_time }
                                        onChange={ (e) => changeHandler(e) }
                                        className="form-control"
                                        type="time"
                                    />
                                </div>
                                <div className="col-lg-6 col-12">
                                    { errors.branch && <span >{ errors.branch }</span> }
                                    <select className="form-select form-control"
                                        id="branch"
                                        required
                                        name="branch"
                                        onChange={ (e) => setData('branch', e.target.value) }
                                    >
                                        { branches.map((branch, k) => (
                                            <option key={ k } value={ branch.id }>
                                                { branch.name }
                                            </option>
                                        )) }
                                    </select>
                                </div>
                                <div className="col-lg-6 col-12">
                                    { errors.arrival_date && <span >{ errors.arrival_date }</span> }
                                    <input
                                        id="arrival_date"
                                        name="arrival_date"
                                        required
                                        value={ data.arrival_date }
                                        onChange={ (e) => changeHandler(e) }
                                        type="date"
                                        className="form-control"
                                        placeholder="Date"
                                    />
                                </div>
                            </div>
                            { errors.comment && <span >{ errors.comment }</span> }
                            <textarea
                                id="comment"
                                name="comment"
                                value={ data.comment }
                                onChange={ (e) => changeHandler(e) }
                                rows={ 3 }
                                className="form-control"
                                placeholder="Comment (Optionals)"
                            />
                            <div className="mx-auto col-lg-4 col-md-10 col-8">
                                <button type="submit" disabled={ processing } className="form-control">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}
