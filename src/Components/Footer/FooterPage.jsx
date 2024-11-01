import './FooterPage.scss';
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import location_img from '../../assets/location.png';
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import logo from '../../assets/logo.png';


const Footer = () => {
    const [togglemenu1, setToggleMenu1] = useState(false);
    const [togglemenu2, setToggleMenu2] = useState(false);
    const [togglemenu3, setToggleMenu3] = useState(false);
    return (
        <>  <div className='footer_wrapper'>
            <div className='Footer_main'>
                <img src={logo} alt="" />
                <div className='abt_div'>
                    <p>About</p>
                    <p>who we are</p>
                    <p>our Experience</p>
                    <p>our philosophy</p>
                    <p>quality standard</p>
                </div>
                <div className='product_div'>
                    <p>products</p>
                    <p>categories</p>
                    <p>raw black hair</p>
                    <p>raw natural gray hair</p>
                    <p>raw dyed hair</p>
                    <p>natural straight</p>
                    <p>natural wavy</p>
                    <p>natural curly</p>
                </div>
                <div>
                    <p>Factory location</p>
                    <p>Chennai, Tamilnadu</p>
                    <p>Karaikudi, Tamilnadu</p>
                </div>
            </div>

            <div className='mobile_footer'>
            <img src={logo} alt="" />
                <div className='abt_div'>
                    <h3 onClick={() => setToggleMenu1(!togglemenu1)}>
                        About <span><IoMdArrowDropdown /></span>
                    </h3>
                    <div className={`collapsible ${togglemenu1 ? 'open' : ''}`}>
                        <p>Who we are</p>
                        <p>Our Experience</p>
                        <p>Our Philosophy</p>
                        <p>Quality Standard</p>
                    </div>
                </div>
                <div className='product_div'>
                    <h3 onClick={() => setToggleMenu2(!togglemenu2)}>
                        Products <span><IoMdArrowDropdown /></span>
                    </h3>
                    <div className={`collapsible ${togglemenu2 ? 'open' : ''}`}>
                        <p>Categories</p>
                        <p>Raw Black Hair</p>
                        <p>Raw Natural Gray Hair</p>
                        <p>Raw Dyed Hair</p>
                        <p>Natural Straight</p>
                        <p>Natural Wavy</p>
                        <p>Natural Curly</p>
                    </div>
                </div>
                <div>
                    <h3 onClick={() => setToggleMenu3(!togglemenu3)}>
                        Factory Location <span><IoMdArrowDropdown /></span>
                    </h3>
                    <div className={`collapsible ${togglemenu3 ? 'open' : ''}`}>
                        <p>Chennai, Tamilnadu</p>
                        <p>Karaikudi, Tamilnadu</p>
                    </div>
                </div>
            </div>

            <div className='social_media_links'>
                <hr className='line' />
                <div className='social_icons'>
                    <a href='#'><FaFacebookSquare /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaYoutube /></a>
                    <div>
                        <FaRegCopyright />
                        2024 KM Hair International
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}
export default Footer;