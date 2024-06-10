import React from 'react';

export default function Services({ services }) {
    return (
        <section className="services-section section-padding" id="services_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <h2 className="mb-5">Services</h2>
                    </div>
                    { services.filter((service) => service.prime == true).map((service, k) => (
                        <div className="mb-4 col-lg-6 col-12" key={ k }>
                            <div className="services-thumb">
                                <img src={ `https://storage.googleapis.com/barbershop-raplontos/${service.image}` } className="services-image img-fluid" />
                                <div className="services-info d-flex align-items-end">
                                    <h4 className="mb-0">{ service.name }</h4>
                                    <strong className="services-thumb-price">{ service.price.slice(0, -3) }k</strong>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
}
