import React from 'react';

export default function PriceList({ services }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="price-list-thumb-wrap">
                        <div className="mb-4">
                            <h2 className="mb-2">Price List</h2>
                            <strong>Starting at 10k</strong>
                        </div>

                        { services.map((service, k) => (
                            <div className="price-list-thumb" key={ k }>
                                <h6 className="d-flex"> { service.name } <span className="price-list-thumb-divider" />
                                    <strong>{ service.price.slice(0, -3) }k</strong>
                                </h6>
                            </div>
                        )) }

                    </div>
                </div>
                <div className="pt-3 mt-5 mb-5 col-lg-4 col-12 custom-block-bg-overlay-wrap mb-lg-0 mt-lg-0 pt-lg-0">
                    <img src="images/vintage-chair-barbershop.jpg" className="custom-block-bg-overlay-image img-fluid" />
                </div>
            </div>
        </div>
    );
}
