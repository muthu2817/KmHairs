import React from "react";
import MapComponent from "./Map";
import './contactus.scss';
import NavMain from "../Components/Header/Navbar";

const ContactPage = () => {
    return (
        <>
            <NavMain />
            <div className="contact_parent_container">
                <div className="text_container">
                    <h3>Let's Talk</h3>
                    <p>we're ready to listen</p>
                </div>
                <div className="contact_form">
                    <form action="">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" /><br />
                        <input type="tel" placeholder="Mobile Number" /><br />
                        <input type="text" placeholder="Details of enquiry" /><br />
                        <button className="submit_btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <h2>Our Office Locations</h2>
            <div className="map_component">
                <div>
                    <MapComponent lat='10.08445' long='78.73069' className="map" />
                </div>
                <div className="address_component">
                    <hr className="address-line" />
                    <h4>Karaikkudi</h4>
                    <p>No.408, <br />ragavendra nagar, patharakudi,<br />sivgangai district, <br />karaikkudi,<br /> tamilnadu -630307.</p>
                    <div className="cntct_div">
                        <p>email:</p>
                        <a href="mailto:sales@kmhairinternational.com">sales@kmhairinternational.com</a>
                        <br />
                        <p>phone:</p>
                        <a href="tel: +917200996170">91-72009 96170</a><br />
                        <a href="tel: +917904431199">91-79044 31199</a><br />
                        <a href="tel: +919360812093">91-93608 12093</a><br />
                    </div>
                </div>
                <div>
                    <MapComponent lat='12.80286' long='80.02983' />
                </div>
                <div className="address_component">
                    <hr className="address-line" />
                    <h4>chennai</h4>
                    <p>No.2/24,<br /> MIG 2, town center,<br /> gandhi nagar main road, kattankulathur, <br />chennai, <br />tamilnadu-603203.</p>
                    <div className="cntct_div">
                        <p>email:</p>
                        <a href="mailto:sales@kmhairinternational.com">sales@kmhairinternational.com</a>
                        <br />
                        <p>phone:</p>
                        <a href="tel: +917200996170">91-72009 96170</a><br />
                        <a href="tel: +917904431199">91-79044 31199</a><br />
                        <a href="tel: +919360812093">91-93608 12093</a><br />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactPage;


