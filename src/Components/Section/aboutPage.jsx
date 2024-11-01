import img from '../../assets/hairShowcase.jpg';
import './about.scss';
import img_1 from '../../assets/bg_none2.png';
import img_2 from '../../assets/bg_none3.png';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
const AboutPage = () => {
    const ParentRef = useRef();
    const containerRef = useRef();

    useGSAP(() => {
        gsap.fromTo('.container', { scale: 0, y: 100, position: 'relative' },
            {
                scale: 1, y: 0, duration: 1, scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 25%'
                   
                    
                }
            })
    }, { scope: ParentRef })
    return (
        <>
            <div className='Parent_container' ref={ParentRef}>
                <div className="container" ref={containerRef}>
                    <div className="background-circles">
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-3"></div>
                    </div>
                    <div className="circular-image">
                        <img src={img} alt="Circular Image" />
                    </div>
                </div>
                <div className='Text_container'>
                    <h2>Who We are</h2>
                    <p>we specialize in providing the finest quality human hair sourced from trusted origins. Our ethically sourced hair is renowned for its strength, natural shine, and long-lasting beauty, making it a top choice for salons, retailers, and beauty professionals worldwide 100% Virgin Human Hair  Pure, unprocessed hair that offers unmatched durability and versatility.Ethically Sourced:We take pride in our transparent supply chain, ensuring the ethical treatment of donors and sustainable practices.Global Shipping Delivering excellence to customers globe, with fast and reliable shipping options.Customizable Options Choose from a wide range of lengths, textures, and colors to meet your specific needs.
                    </p>
                    <button className='abt-btn'>About us</button>
                </div>
            </div>
        </>
    )
}

export default AboutPage;