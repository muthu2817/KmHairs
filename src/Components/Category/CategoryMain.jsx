import './CategoryMain.scss';
import { rawHair } from '../../data/hairCategory';
import { useState, useRef } from 'react';
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CategorySection = () => {
    const [toggle, setToggle] = useState(false);
    const [index, setIndex] = useState(null); 
    const popupRef = useRef(null);
    const CategoryRef = useRef(null);

    const handleClick = (index) => {
        setIndex(index);
        setToggle(true);  
    };

    const closePopup = () => {   
        gsap.to(".popup_sub", {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setToggle(false)  
        });
    };

    useGSAP(() => {
        if (toggle) {
            gsap.fromTo(
                ".popup_sub",
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [toggle]);

    useGSAP(()=>{
        gsap.fromTo('.category_div',
            {opacity:0,x:-100,position:'relative'},
            { opacity: 1, x: 0, duration: 1, stagger: 0.7, scrollTrigger: {
            trigger: CategoryRef.current,
            start: 'bottom 50%',
            toggleActions: 'play none none reverse',
        
        }})
    })
    
    return (
        <>
            <div className='parent_div'>
                <div className='cat_parent_div' ref={CategoryRef}>
                <h3 className='cat_h3'>Find your perfect match</h3>
                <p className='cat_text'>Explore our premium hair products, from Remy Single Drawn to Wefted Hair, with textures like Natural Wavy, Curly, and Straight.  Explore our main categories and subcategories below to discover the ideal option for your needs—find exceptional quality and variety with us!</p>
                </div>
                <div className='wrapper_div'>
                    {
                        rawHair.map((cat, index) => (
                            <div key={index} className='category_div' style={{ filter: toggle ? "blur(8px)" : "blur(0px)" }}>
                                <p>{cat.Category}</p>
                                <img className='category_img' src={cat.img_path} alt="" />
                                <button onClick={()=> handleClick(index)} className='cat_btn' style={{ visibility: !cat.sub ? "hidden" : "visible" }}>
                                    sub categories
                                </button>
                            </div>
                        ))
                    }
                </div>
                {
                    toggle &&
                    <div>
                        <div ref={popupRef} className='popup_sub'>
                            <button className='close_btn' onClick={closePopup}><RxCross2 /></button>
                            <div className='subCat_div'>
                                {
                                    rawHair[index]?.sub.map((subCat, subindex) => (
                                        <div key={subindex}>
                                            <img src={subCat.img_path} alt="" />
                                            <p>{subCat.Category}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default CategorySection;

