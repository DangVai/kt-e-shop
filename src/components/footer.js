import React from "react";

function Footer() {
    return (
        
        <footer className="footer-section">
            <div className="partner-logo">
                <div className="container">
                    <div className="logo-carousel owl-carousel">
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-1.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-2.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-3.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-4.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello.colorlib@gmail.com</li>
                            </ul>
                            <div className="footer-social">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-pinterest" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1">
                        <div className="footer-widget">
                            <h5>Information</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Serivius</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-widget">
                            <h5>My Account</h5>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Shopping Cart</a></li>
                                <li><a href="#">Shop</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="newslatter-item">
                            <h5>Join Our Newsletter Now</h5>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#" className="subscribe-form">
                                <input type="text" placeholder="Enter Your Mail" />
                                <button type="button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-reserved">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-text">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://www.facebook.com/thuy.huynhvan" target="_blank">Huynh Van Thuy</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                            <div className="payment-pic">
                                <img src="img/payment-method.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;