import React from 'react';
import './Testimonial.scss';
import { FaArrowRight } from 'react-icons/fa';
import img from '../../assets/CEO.jpg';

const OurPhiloshophy = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-content">
                <img
                    src={img}
                    alt="Author"
                    className="author-image"
                />
                <h5 className="title">Principles of working with KmhairInternational</h5>
                <p className="quote">
                    “Our goal is to make the process as transparent and seamless as possible, so our clients enjoy peace of mind with every purchase, knowing they’re partnering with a team that values integrity as much as they do.”
                </p>
                <div className="author-info">
                    <span className="author-name">Eknath kannan</span>
                    <span className="author-title">Co-founder and CEO, KmhairInternational</span>
                    <span className="learn-more">
                        Learn more <FaArrowRight />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OurPhiloshophy;
