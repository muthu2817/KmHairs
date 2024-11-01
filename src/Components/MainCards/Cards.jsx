import React from "react";
import './Cards.scss';
import img_1 from '../../assets/process.png';
import img_2 from '../../assets/quality.png';
import img_3 from '../../assets/warehouse.png';
import img_4 from '../../assets/categories.png';
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { IoCall } from "react-icons/io5";




const MainCard = () => {
    const CardRef = useRef();
    const MainRef = useRef();
    const subCardRef = useRef();

    useGSAP(() => {
        const elements = gsap.utils.toArray('.card');
        gsap.fromTo('#cardContainer',
            { opacity: 0, y: 100, position: 'relative' },
            {
                opacity: 1, y: 0, duration: 1, scrollTrigger: {
                    trigger: CardRef.current,
                    start: 'top bottom'
                }
            })

        gsap.fromTo(elements, { opacity: 0, y: 100, position: 'relative' },
            {
                opacity: 1, y: 0, duration: 1, stagger: 0.7, scrollTrigger: {
                    trigger: subCardRef.current,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            })

        gsap.fromTo('.sub_cnt_div',{opacity:0,x:-100,position:'relative'},{ opacity: 1, x: 0, duration: 1, stagger: 0.7, scrollTrigger: {
            trigger: subCardRef.current,
            start: 'bottom 50%',
            toggleActions: 'play none none reverse'
        }})
    })


    return (
        <>
            <div ref={MainRef}>
                <div className="MainCard_container" ref={CardRef} id="cardContainer">
                    <div className="text_div">
                        <h2>We provide a range of services, including</h2>
                    </div>
                    <div className="Card_div" ref={subCardRef}>
                        <div className="card" >
                            <h3>Purchase During Process</h3>
                            <p>Our policy allows you to enter the process and purchase at any stage that suits your business needs.</p>
                            <img src={img_1} alt="process_image" />
                            <button>Know More<MdArrowOutward /></button>
                        </div>
                        <div className="card" >
                            <h3>Our Quality Standards</h3>
                            <p>We strictly maintain our quality standards to build trust with our customers and business partners. read more to know more about quality</p>
                            <img src={img_2} alt="process_image" />
                            <button>Know More<MdArrowOutward /></button>
                        </div>

                        <div className="card">
                            <h3>Explore Categories</h3>
                            <p>We offer a curated selection of categories, each meeting our premium quality standards. Explore our categories to find the perfect match for your needs.</p>
                            <img src={img_4} alt="process_image" />
                            <button>Know More<MdArrowOutward /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_div">
                <div className='sub_cnt_div'>
                    <h4>for enquiries</h4>
                    <p>drop us a mail to know more, Happy mailing! <span><a href="mailto:sales@kmhairinternational.com">sales@kmhairinternational.com</a></span></p>

                    <p>we are just one call ahead!</p>
                    <button className="cnt_btn"><span><IoCall className="icon"/></span>Call us</button>
                </div>
            </div>
        </>
    )
}

export default MainCard;