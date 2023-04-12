import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../assets/images/logo.png"
import flage from "../assets/images/flag-uk.png"
import flageFranch from "../assets/images/flag-france.png"
import toggle from "../assets/images/toggle-icon.png"
import { Link } from 'react-router-dom';
import { headerArray } from './HeaderArray';

function Header() {
    const openNav = () => {
        document.getElementById('mySidenav').style.width = "250px"
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0"
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const array = headerArray;
    return (
        <React.Fragment>
            {/*  banner bg main start */}
            <div className="banner_bg_main">
                {/* header top section start */}
                <div className='container'>
                    <div className="header_section_top">
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className="custom_menu">
                                    <ul>
                                        <li><Link to="/">Best Sellers</Link></li>
                                        <li><Link to="/">Gift Ideas</Link></li>
                                        <li><Link to="/">New Releases</Link></li>
                                        <li><Link to="/">Today's Deals</Link></li>
                                        <li><Link to="/">Customer Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  header top section start  */}
                {/* logo section start  */}
                <div className="logo_section">
                    <div className='container'>
                        <div className="row">
                            <div className='col-sm-12'>
                                <div className="logo">
                                    <Link to='/'>
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* logo section end  */}

                {/*  header section start  */}
                <div className="header_section">
                    <div className='container'>
                        <div className="containt_main">
                            <div id="mySidenav" className="sidenav">
                                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                                <Link to="/"> Home</Link>
                                <Link to="fashion"> Fashion</Link>
                                <Link to="electronic"> Electronic</Link>
                                <Link to="jewellery"> Jewellery</Link>
                            </div>
                            <span className="toggle_icon" onClick={openNav}>

                                <img src={toggle} alt="toggle" /></span>

                            <div className="dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: '#30302e' }}>
                                        All Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="main">
                                {/*  Another variation with a button  */}
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search this blog" selec />
                                    <div className="input-group-append" >
                                        <button className="btn btn-secondary" type="button"
                                            style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="header_box">
                                <div className="lang_box">
                                    <Dropdown style={{ marginLeft: "0" }}>
                                        <Dropdown.Toggle id="dropdown-basic" className="lang_box dropdown-toggle" style={{ background: "#fff", color: '#30302e', border: "none" }}>
                                            <a href="#" title="Language" data-toggle="dropdown" aria-expanded="true" style={{ color: "#30302e" }}>
                                                <img src={flage} alt="flag" className="mr-2 " title="United Kingdom" /> English
                                            </a>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                <Link to="/" className="dropdown-item">
                                                    <img src={flageFranch} className="mr-2" alt="flag" />
                                                    French
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className="login_menu">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <i className="fas fa-shopping-bag"></i>                                                <span className="padding_10">Cart
                                                </span>
                                            </Link>
                                        </li>
                                        <li><Link to="/">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span className="padding_10">Cart</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header section end */}
                {/* <!-- banner section start --> */}
                <div className="banner_section layout_padding">
                    <div className="container">
                        <div id="my_slider" className="carousel slide" data-ride="carousel">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {
                                    array.map((item) => {
                                        return (
                                            <Carousel.Item interval={3000}>
                                                <h1 className="banner_taital">{item.heading1} <br />{item.heading2}</h1>
                                                <div className="buynow_bt">
                                                    <Link to="/">{item.buy}</Link></div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
                {/* <!-- banner section end --> */}
            </div >
        </React.Fragment >
    )
}

export default Header