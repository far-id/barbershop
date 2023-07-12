import React from 'react';
import { Link as ReactScrollLink } from 'react-scroll';

export default function Nav({ navItems }) {
    return (
        <>
            <div>
                <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block sidebar collapse p-0">
                    <div className="position-sticky sidebar-sticky d-flex flex-column justify-content-center align-items-center">
                        <ReactScrollLink className="navbar-brand" to="section_1" spy={ true } smooth={ true } offset={ 0 } duration={ 500 }>
                            <img src="images/templatemo-barber-logo.png" className="logo-image img-fluid" />
                        </ReactScrollLink>
                        <ul className="nav flex-column">
                            { navItems.map((nav, k) => (
                                <li className="nav-item" key={ k }>
                                    <ReactScrollLink className="nav-link click-scroll" to={ nav.to } spy={ true } smooth={ true } offset={ nav.offset } duration={ 500 }>
                                        { nav.text }
                                    </ReactScrollLink>
                                </li>
                            )) }
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    );
}
