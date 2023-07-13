import React from 'react';

export default function Branches({ branches }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <h4 className="mb-4 site-footer-title">Our Branches</h4>
                </div>
                { branches.map((branch, k) => (
                    <div className="col-lg-4 col-md-6 col-11" key={ k }>
                        <div className="site-footer-thumb">
                            <strong className="mb-1">{ branch.name }</strong>
                            <p>{ branch.address }</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}
