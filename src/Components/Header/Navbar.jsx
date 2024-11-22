import React from "react";
import { useState, useRef } from "react";
import style from './Navbar.module.scss';
import { Routes } from "../../data/Routes";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { RiMenu3Fill } from "react-icons/ri";
import { LuPanelRightClose } from "react-icons/lu";
import close_icon from '../../assets/close.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import location_img from '../../assets/location.png';
import logo from '../../assets/logo.png';


const NavMain = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        setIsOpen(!isOpen);

        if (!isOpen) {
            gsap.to(navRef.current, { x: 0 , duration: 0.3, ease: "power1.out" });
        } else {
            gsap.to(navRef.current, { x: '100%', duration: 0.3, ease: "power1.out" });
        }
    };

    return (
        <>
            <div className={style.Main_container_nav}>
                <Link to="/">
                <img src={logo} alt="company logo" />
                </Link>
                 
                {/*Desktop navbar*/}
                <div className={style.desktop_nav_main}>
                    <ul className={style.containerMain}>
                        {Routes.map((route) => {
                            const { id, path, option } = route;
                            return (
                                <li key={id}>
                                    <Link
                                        to={path}
                                        className={style.Link}
                                    >
                                        {option}
                                    </Link>
                                </li>
                            );
                        })}
                        <Link to="/contactus">
                        <div className={style.Contact_btn}>
                            <span>Get in touch</span>
                            <MdOutlineArrowOutward />
                        </div>
                        </Link>
                    </ul>

                </div>

                {/* mobileNavbar */}
                <div className={style.mobile_nav_main}>

                    <div className={style.hamburger} onClick={() => toggleNav()}>
                        <RiMenu3Fill onClick={() => toggleNav()} />
                    </div>

                    <nav ref={navRef} className={style.nav}>
                        <div className={style.closeMenu}>
                            {/* <LuPanelRightClose onClick={() => toggleNav()}/> */}
                            <img src={close_icon} alt="close" onClick={() => toggleNav()} />
                        </div>
                        <ul className={style.ul_div}>
                            {Routes.map((route, idx) => {
                                return (

                                    <Link
                                        className={style.Link_div}
                                        to={route.path}
                                        key={idx}
                                    >
                                        <span className={style.span_div}>{route.option}</span>
                                    </Link>

                                );
                            })}
                        </ul>
                        <div className={style.links_mob_div}>
                            <div className={style.address_div_mob}>
                                <p>
                                    <IoLocationSharp />chennai<br/> Tamilnadu, India.
                                </p>
                                <p>
                                    <IoLocationSharp />Karaikkudi <br />Tamilnadu, India.
                                </p>

                            </div>
                            <div className={style.social_links_mob}>
                                <span><FaFacebookSquare /></span>
                                <span><FaInstagram /></span>
                                <span><FaYoutube /></span>
                            </div>
                            <div className={style.contact_div_mob}>
                                <p>email:</p>
                                <a href="mailto:sales@kmhairinternational.com">sales@kmhairinternational.com</a>
                                <br />
                                <p>phone:</p>
                                <a href="tel: +917200996170">91-72009 96170</a>
                                <a href="tel: +917904431199">91-79044 31199</a>
                                <a href="tel: +919360812093">91-93608 12093</a>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavMain;