import React from 'react'
import { Container } from 'react-bootstrap'
import footerImage from "../assets/images/footer-logo.png"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <React.Fragment>
            {/* footer section start  */}
            <div className="footer_section layout_padding">
                <Container>
                    <div className="footer_logo">
                        <Link to="/"><img src={footerImage} /></Link></div>
                    <div className="input_bt">
                        <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
                        <span className="subscribe_bt" id="basic-addon2">
                            <Link to="/">Subscribe</Link></span>
                    </div>
                    <div className="footer_menu">
                        <ul>
                            <li><Link to="/">Best Sellers</Link></li>
                            <li><Link to="/">Gift Ideas</Link></li>
                            <li><Link to="/">New Releases</Link></li>
                            <li><Link to="/">Today's Deals</Link></li>
                            <li><Link to="/">Customer Service</Link></li>
                        </ul>
                    </div>
                    <div className="location_main"><Link to="/">Help Line :(+92) 316 – 7013172</Link></div>
                </Container>
            </div>
            {/*  footer section end */}

            {/* copyright section start */}
            <div className="copyright_section">
                <Container>
                    <p className="copyright_text">© 2023 All Rights Reserved. Design by WEB TECH SOFTS</p>
                </Container>
            </div>
            {/* copyright section end */}
        </React.Fragment>
    )
}

export default Footer