import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/bg-2.jpg');
var bgimg3 = require('./../../images/background/cross-line2.png');

class WhatWeDo1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" id='whatwedo' style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + bgimg2 + ')' }} />
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                    <h3 className="sep-line-one">What We do</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/pic1.jpg')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Interior Design</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/pic2.jpg')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Architectur</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/pic3.jpg')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Floor Plan</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="large-title-block full-content bg-gray">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="large-title">
                                            <h3 className="m-tb0">We present the idea with impressive details.</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12	col-sm-12">
                                        <div className="large-title-info">
                                            <p>Vivid colors and abstract patterns, combined with unique uses of light, textures, and space, create an outdoor space that magnifies...</p>
                                            {/* <div className="text-left">
                                                <NavLink to={"/about-1"} className="site-button-link">Read More</NavLink>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo1;