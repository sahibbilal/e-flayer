import React from 'react'
import { jewelleryArray } from './jewelleryArray'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Jewellery() {
    const array = jewelleryArray;
    return (
        <React.Fragment>
            {/*  jewellery  section start  */}
            <div className="jewellery_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <div className="container">
                                <h1 className="fashion_taital">Jewellery Accessories</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        {
                                            array.map((item) => {
                                                return (
                                                    <div class="col-lg-4 col-sm-4">
                                                        <div class="box_main">
                                                            <h4 class="shirt_text">{item.heading}</h4>
                                                            <p class="price_text">Start Price <span style={{ color: "#262626" }}>$ {item.price}</span></p>
                                                            <div class="electronic_img">
                                                                <img src={item.img} /></div>
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
                                <h1 className="fashion_taital">Jewellery Accessories</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        {
                                            array.map((item) => {
                                                return (
                                                    <div class="col-lg-4 col-sm-4">
                                                        <div class="box_main">
                                                            <h4 class="shirt_text">{item.heading}</h4>
                                                            <p class="price_text">Start Price <span style={{ color: "#262626" }}>$ {item.price}</span></p>
                                                            <div class="jewellery_img">
                                                                <img src={item.img} /></div>
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
                    </Carousel>
                    <div className="loader_main">
                        <div className="loader"></div>
                    </div>
                </div>
            </div>
            {/*  jewellery  section end  */}

        </React.Fragment>
    )
}

export default Jewellery