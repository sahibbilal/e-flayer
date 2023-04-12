import React, { useState } from 'react';
import { fashionArray } from './FashionArray'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Fashion() {
    let newFashion = fashionArray;
    return (
        <React.Fragment>
            <div className="fashion_section">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <div className="container">
                                <h1 className="fashion_taital">Man & Woman Fashion</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        {
                                            newFashion.map((item) => {
                                                return (
                                                    <div class="col-lg-4 col-sm-4">
                                                        <div class="box_main">
                                                            <h4 class="shirt_text">{item.heading}</h4>
                                                            <p class="price_text">Price <span style={{ color: "#262626" }}>$ {item.price}</span></p>
                                                            <div class="tshirt_img">
                                                                <img src={item.img} />
                                                            </div>
                                                            <div class="btn_main">
                                                                <div class="buy_bt">
                                                                    <Link to="/">Buy Now</Link></div>
                                                                <div class="seemore_bt">
                                                                    <Link to="/">See More</Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div className="container">
                                <h1 className="fashion_taital">Man & Woman Fashion</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        {
                                            newFashion.map((item) => {
                                                return (
                                                    <div class="col-lg-4 col-sm-4">
                                                        <div class="box_main">
                                                            <h4 class="shirt_text">{item.heading}</h4>
                                                            <p class="price_text">Price <span style={{ color: "#262626" }}>$ {item.price}</span></p>
                                                            <div class="tshirt_img">
                                                                <img src={item.img} />
                                                            </div>
                                                            <div class="btn_main">
                                                                <div class="buy_bt"><a href="#">{item.buy}</a></div>
                                                                <div class="seemore_bt"><a href="#">{item.see}</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            {/*  fashion section end  */}
        </React.Fragment >
    )
}

export default Fashion