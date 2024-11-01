import React from 'react';
import style from './productpage.module.scss';
import { IoIosArrowRoundForward } from "react-icons/io";
import { images } from '../../data/Category';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);



const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const Mainref = useRef();
  const PopUpRef = useRef();
  const[imgPath, setimgPath] = useState(0);

  //gsap loading animation
  useGSAP(() => {
    gsap.fromTo('#loadRef', { opacity: 0, y: 100 }, {
      opacity: 1, duration: 2, y: 0, scrollTrigger: {
        trigger: Mainref.current,
        start: 'top bottom',
      }
    }
    )
  })

 const clickHandler = (img) =>{
  setIsVisible(!isVisible);
 setimgPath(img);
 console.log(img);
 }
 const clickHandler1 = () =>{
  setIsVisible(!isVisible);
 }

  return (
    <>
      <div ref={Mainref} id='loadRef'>
        <div className={style.Main_containter} id='Main-container'>
          <div className={style.display_text}>
            <p>Explore Our Collection</p>
            <p>we offer wide variety of collections in our product like raw black, Grey, dyed hair which are procured directly from temples and remy single drawn bulk hair extensions.<br />
              <span><button className={style.span}>Find your product <IoIosArrowRoundForward /> </button></span>
            </p>
          </div>
          <div className={style.slider_container}>
            <div className={`${style.wrapper} ${style.scroll_x}`}>
              <ul className={style.items}>
                {
                  images.map((img,index) => (
                    <li key={index}>
                      <img key={index} src={img.img_path} alt="" onClick={()=>clickHandler(index)}/>
                    </li>
                  ))
                  
                }
              </ul>
            </div>

          </div>
          {isVisible && (
                    <div className={style.floating_card}ref={PopUpRef}>
                        <button onClick={clickHandler1}>close</button>
                        <img src={images[imgPath].img_path} alt="" />
                    </div>
                )}

        </div>
      </div>
    </>
  )
}
export default ProductSection;



