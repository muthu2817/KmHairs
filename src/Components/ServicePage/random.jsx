import React from "react";
import './ServicePage.scss';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../assets/certified.png';

gsap.registerPlugin(ScrollTrigger);

const ServicePage = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const elements = gsap.utils.toArray('.service');
        gsap.fromTo(elements,
            { opacity: 0, y: 200, position: 'relative' },
            {
                opacity: 1, duration:1, y: 0, stagger: 0.9,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            });

    })

    return (
        <>
            <div className='service_main_container' ref={containerRef} id='serviceContainer'>
                <div className='service'>
                    <img src={img} alt="" />
                    <p>Ethically sourced</p>
                </div>

                <div className='service'>
                    <img src={img} alt="" />
                    <p>Chemical Free Treatment</p>
                </div>

                <div className='service'>
                    <img src={img} alt="" />
                    <p>product varieties</p>
                </div>
            </div>
        </>
    )
}

export default ServicePage;

