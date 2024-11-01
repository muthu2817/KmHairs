import './section.scss';
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { images } from '../../data/Category';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";



const Section = () => {
    //const [currentImage, setImage] = useState(0);
    const Ref = useRef();
    const imgRef = useRef();

    useGSAP(() => {
        gsap.fromTo(".Child_div", { opacity: 0 }, { opacity: 1, ease: 'power1.out', duration: 2, stagger: 0.4 });
    }, { dependencies: [images.length], scope: Ref })

    return (
        <>
            <div ref={Ref} className='parent_container'>
                <div className='main_container' id='container-main'>
                    <div className='introText'>
                        <div className='headers'>
                            <p className='comName'><span>Km</span>HairInternational</p>
                            <h1>Building</h1>
                            <h1>Trust</h1>
                            <h1>with customers</h1>
                        </div>
                        <p className='subtext'>
                            We provide premium bulk raw human hair, ethically sourced straight from temples. Our range includes a wide variety of products to suit different needs.
                        </p>

                        <button className='productBtn'>
                            Contact Us
                            <MdOutlineArrowOutward />
                        </button>
                        <button className='productBtn1'>
                            Explore products
                            <HiOutlineArrowSmallRight />
                        </button>

                    </div>
                    <div className='imgContainer'>
                        <div className='Child_div'>
                            <img src={images[1].img_path} alt={images[1].category} />
                        </div>
                        <div className='Child_div'>
                            <img src={images[2].img_path} alt={images[2].category} />
                        </div>
                        <div className='Child_div'>
                            <img src={images[3].img_path} alt={images[3].category} />
                        </div>
                        <div className='Child_div'>
                            <img src={images[5].img_path} alt={images[5].category} />
                        </div>
                    </div>
                    
                </div>


                <svg xmlns="http://www.w3.org/2000/svg" className='waveSVG' viewBox="0 0 1440 320"><path fill="#CFE189" d="M0,128L48,149.3C96,171,192,213,288,234.7C384,256,480,256,576,256C672,256,768,256,864,245.3C960,235,1056,213,1152,176C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

        </>
    )
}
export default Section;