import Nav from './Partials/Nav';
import Services from './Partials/Services';

import '../../bootstrap.min.js';
import '../../../css/bootstrap.min.css';
import '../../../css/bootstrap-icons.css';
import '../../../css/barbershop.css';
import Booking from './Partials/Booking';
import PriceList from './Partials/PriceList';
import Branches from './Partials/Branches';

export default function Welcome({ services, branches }) {
    const navItems = [
        {
            to: 'home_section',
            text: 'Home',
            offset: 0,
        },
        {
            to: 'about_us_section',
            text: 'Our Story',
            offset: 60,
        },
        {
            to: 'services_section',
            text: 'Services',
            offset: 60,
        },
        {
            to: 'booking_section',
            text: 'Book a Seat',
            offset: 60,
        },
        {
            to: 'price_section',
            text: 'Price List',
            offset: 60,
        },
        {
            to: 'contact_section',
            text: 'Contact',
            offset: 60,
        },
    ];
    return (
        <div className="container-fluid">
            <div className="row">
                <Nav { ...{ navItems } } />
                <div className="p-0 col-md-8 ms-sm-auto col-lg-9">
                    <section className="hero-section d-flex justify-content-center align-items-center" id="home_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <h1 className="mb-4 text-white mb-lg-3"><strong>Barber <em>Shop</em></strong></h1>
                                    <p className="text-black">Get the most professional haircut for you</p>
                                    <br />
                                    <a className="mb-2 btn custom-btn custom-border-btn custom-btn-bg-white smoothscroll me-2" href="#about_us_section">About Us</a>
                                    <a className="mb-2 btn custom-btn smoothscroll" href="#services_section">What we do</a>
                                </div>
                            </div>
                        </div>
                        <div className="custom-block d-lg-flex flex-column justify-content-center align-items-center">
                            <img src="images/vintage-chair-barbershop.jpg" className="custom-block-image img-fluid" />
                            <h4><strong className="text-white">Hurry Up! Get good haircut.</strong></h4>
                            <a href="#booking_section" className="mt-3 smoothscroll btn custom-btn custom-btn-italic">Book a
                                seat</a>
                        </div>
                    </section>
                    {/* Our Story */ }
                    <section className="about-section section-padding" id="about_us_section">
                        <div className="container">
                            <div className="row">
                                <div className="mx-auto col-lg-12 col-12">
                                    <h2 className="mb-4">Best hairdressers</h2>
                                    <div className="pb-3 mb-5 border-bottom">
                                        <p>Di mana Kualitas Bertemu dengan Kenyamanan. Lihat Mengapa Barbershop kami adalah
                                            Pilihan Utama bagi Pria yang Cerdas.</p>
                                    </div>
                                </div>
                                <h6 className="mb-5">Meet Babers</h6>
                                <div className="mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-lg-0">
                                    <img src="images/barber/portrait-male-hairdresser-with-scissors.jpg" className="custom-block-bg-overlay-image img-fluid" />
                                    <div className="flex-wrap team-info d-flex align-items-center">
                                        <p className="mb-0">Jordan</p>
                                        <ul className="social-icon ms-auto">
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-facebook">
                                                </a>
                                            </li>
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-instagram">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap mt-lg-0 mb-lg-0">
                                    <img src="images/barber/portrait-mid-adult-bearded-male-barber-with-folded-arms.jpg" className="custom-block-bg-overlay-image img-fluid" />
                                    <div className="flex-wrap team-info d-flex align-items-center">
                                        <p className="mb-0">Mike</p>
                                        <ul className="social-icon ms-auto">
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-facebook">
                                                </a>
                                            </li>
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-instagram">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h6 className="mt-5 mb-3">Result</h6>
                                <div className="mt-5 mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-lg-0">
                                    <video controls src="images/1.mp4" type="video/mp4" className="custom-block-bg-overlay-image img-fluid" />
                                </div>
                                <div className="mt-5 mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-lg-0">
                                    <video controls src="images/2.mp4" type="video/mp4" className="custom-block-bg-overlay-image img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="featured-section section-padding">
                        <div className="section-overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="mx-auto col-lg-10 col-12">
                                    <h2 className="mb-3">Get 20% Discount</h2>
                                    <p>on every second week of the month</p>
                                    <strong>Promo Code: CukurGanteng</strong>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Services */ }
                    <Services { ...{ services } } />
                    {/* Booking */ }
                    <section className="booking-section section-padding" id="booking_section">
                        <Booking { ...{ branches, services } } />
                    </section>
                    {/* Prices */ }
                    <section className="price-list-section section-padding" id="price_section">
                        <PriceList { ...{ services } } />
                    </section>
                    {/* Contact */ }
                    <section className="contact-section" id="contact_section">
                        <div className="section-padding">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <h5 className="mb-3"><strong>Contact</strong> Information</h5>
                                        <p className="mb-1 text-white d-flex">
                                            <a href="tel: 120-240-3600" className="site-footer-link"> (+62) 777-666-555 </a>
                                        </p>
                                        <p className="text-white d-flex">
                                            <a href="mailto:info@yourgmail.com" className="site-footer-link">
                                                Gentlemen@gmail.com </a>
                                        </p>
                                        <ul className="social-icon">
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link">
                                                    <svg width={ '30px' } fill="#ffffff" viewBox="-2.4 -1.2 28.80 28.80" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)" strokeWidth="0.00024000000000000003">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth={ 0 } />
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192" />
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link">
                                                    <svg width={ '30px' } viewBox="-5.3 -5.3 28.80 28.80" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth={ 0 } />
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>twitter [#154]</title>
                                                            <defs> </defs>
                                                            <g id="Page-1" stroke="none" strokeWidth={ 1 } fill="none" fillRule="evenodd">
                                                                <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#ffffff">
                                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                        <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link">
                                                    <svg width={ '30px' } viewBox="-4.3 -3.4 28.80 28.80" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={ 0 } /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>instagram [#167]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={ 1 } fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"> </path> </g> </g> </g> </g></svg>

                                                </a>
                                            </li>
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link">
                                                    <svg width={ '30px' } viewBox="-5 -6.4 28.80 28.80" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={ 0 } /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={ 1 } fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>

                                                </a>
                                            </li>
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link">
                                                    <svg width={ '30px' } viewBox="-2.6 -0.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={ 0 } /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#ffffff" /> </g></svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pt-4 mx-auto mt-5 col-lg-5 col-12 contact-block-wrap mt-lg-0 pt-lg-0">
                                        <div className="contact-block">
                                            <h6 className="mb-0">
                                                <i className="custom-icon me-3">
                                                    <svg width={ '30px' } viewBox="0 0 64 64" version={ 1.0 } id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 64 64" space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={ 0 } /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path fill="#000000" d="M59,0H5C2.789,0,1,1.789,1,4v20c0,2.22,1.208,4.152,3,5.19V60c0,2.211,1.789,4,4,4h48c2.211,0,4-1.789,4-4 V29.19c1.792-1.038,3-2.971,3-5.19V4C63,1.789,61.211,0,59,0z M51,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H51z M41,2v22 c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H41z M31,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H31z M21,2v22c0,2.209-1.791,4-4,4 s-4-1.791-4-4V2H21z M3,4c0-1.104,0.896-2,2-2h6v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V4z M12,62V38h12v10h-1c-0.553,0-1,0.447-1,1 s0.447,1,1,1h1v12H12z M58,60c0,1.104-0.896,2-2,2H26V37c0-0.516-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v25H8c-1.104,0-2-0.896-2-2 V29.91C6.326,29.965,6.658,30,7,30c2.088,0,3.926-1.068,5-2.687C13.074,28.932,14.912,30,17,30s3.926-1.068,5-2.687 C23.074,28.932,24.912,30,27,30s3.926-1.068,5-2.687C33.074,28.932,34.912,30,37,30s3.926-1.068,5-2.687 C43.074,28.932,44.912,30,47,30s3.926-1.068,5-2.687C53.074,28.932,54.912,30,57,30c0.342,0,0.674-0.035,1-0.09V60z M57,28 c-2.209,0-4-1.791-4-4V2h6c1.104,0,2,0.896,2,2v20C61,26.209,59.209,28,57,28z" /> <path fill="#000000" d="M53,36H29c-0.553,0-1,0.447-1,1v20c0,0.553,0.447,1,1,1h24c0.553,0,1-0.447,1-1V37 C54,36.447,53.553,36,53,36z M52,56H30V38h22V56z" /> <path fill="#000000" d="M48.293,42.707C48.488,42.902,48.744,43,49,43s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 l-1-1c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,42.707z" /> <path fill="#000000" d="M48.293,47.707C48.488,47.902,48.744,48,49,48s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 l-6-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,47.707z" /> </g> </g></svg>
                                                </i>
                                                <strong className='text-black'>Open Daily</strong>
                                                <span className="text-white ms-auto">10:00 AM - 8:00 PM</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="pt-5 mx-auto mt-5 col-lg-12 col-12">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7748191292394!2d106.8557246!3d-6.293297499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3205ba0194b%3A0x3efcb2ee07a02a00!2sCaptain%20Barbershop%20Condet!5e0!3m2!1sid!2sid!4v1687399973544!5m2!1sid!2sid" width="100%" height={ 300 } style={ { border: 0 } } allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="site-footer">
                        <Branches { ...{ branches } } />
                        {/* footer */ }
                        <div className="site-footer-bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="mt-4 col-lg-8 col-12">
                                        <p className="mb-0 copyright-text">Destinasi Perawatan Terbaik Anda</p>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-3 mt-lg-4 ms-auto">
                                        <a href="#home_section" className="back-top-icon smoothscroll" title="Back Top">
                                            <i className="bi-arrow-up-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
