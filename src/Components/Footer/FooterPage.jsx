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
                {/* <img src={logo} alt="" /> */}
                <div className='abt_div'>
                    <p>company</p>
                    <p>about us</p>
                    <p>gallery</p>
                    <p>our philosophy</p>
                    <p>quality standards</p>
                    <p>categories</p>
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
                    <p>Support</p>
                    <p>FAQ</p>
                    <p>contact us</p>
                    <p>factory location</p>
                </div>
            </div>

           

            <div className='social_media_links'>
                <hr className='line' />
                <div className='social_icons'>
                    <a href='https://www.facebook.com/kmhairinternational' target='_blank'><FaFacebookSquare /></a>
                    <a href='https://www.instagram.com/kmhairinternational' target='_blank' ><FaInstagram /></a>
                    <a href='https://www.youtube.com/@kmhairinternational' target='_blank'><FaYoutube /></a>
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