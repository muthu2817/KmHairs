// import React, { useState, useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import './InstaStyle.scss';
// import { rawHair } from '../../data/hairCategory2';
// import { useGSAP } from '@gsap/react';
// import { HiOutlineArrowSmRight } from "react-icons/hi";
// import { IoMdArrowDropdown } from "react-icons/io";
// import {images} from '../../data/SwiperImg';


// const Moodboard = () => {
//   const [activeCategory, setActiveCategory] = useState(rawHair[0].id);
//   const [isOpen, setIsOpen] = useState(false);
//   const [intSub, IntSubMain] = useState([]);
//   const gridRef = useRef(null);
//   const detailRef = useRef(null);
//   const imgRef = useRef();
//   const Ref = useRef();
//   const [currentImage, setImage] = useState(0);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.grid-item',
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.2,
//           ease: 'power2.out',
//         }
//       );
//     }, gridRef);
//   }, [activeCategory]);

//   useGSAP(() => {
//     const cont = gsap.context(() => {
//       gsap.fromTo(
//         '.detail',
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.2,
//           ease: 'power2.out',
//         })
//     })
//   }, [activeCategory])

//   useGSAP(() => {
//     gsap.fromTo(
//       ".image_view_container",
//       { x: "-100%", opacity: 0 },
//       { x: "0%", opacity: 1, duration: 2, ease: "power2.out" } 
//     );
    
//     const intervalId = setInterval(() => {
//         gsap.to(
//             imgRef.current,
//             {
//                 ease: "power1.out",
//                 onComplete: () => {
//                     setImage((prevIndex) =>
//                         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//                     );
//                 }
//             }
//         )

//     }, 3000);
//     return () => clearInterval(intervalId);
// },{ dependencies: [images.length], scope: Ref })

//   const HandleVariantClick = (subCat) => {
//     const random = subCat.int_sub;
//     IntSubMain(random);
//     setIsOpen(!isOpen);
//   }

//   const HandleCategory = (catId) =>{
//     setIsOpen(false);
//     setActiveCategory(catId);
//   }

//   return (
//     <div className="moodboard-container" ref={Ref}>
//       <div className='image_view_container'>
//       <img src={images[currentImage].img_path} ref={imgRef} />
//       </div>
//       {/* Main Navbar */}
//       <div className='nav_container'>
//         <nav className="navbar">
//           {rawHair.map((category) => (
//             <button
//               key={category.id}
//               className={`nav-item ${activeCategory === category.id ? 'active' : ''}`}
//               onClick={() => HandleCategory(category.id) }
//             >
//               {category.Category}
//             </button>
//           ))}
//         </nav>
//         {
//           <p className='detail' ref={detailRef}>
//             {
//               rawHair[activeCategory - 1].detail
//             }
//           </p>
//         }
//         <div ref={gridRef} className="grid">
//           {rawHair[activeCategory - 1].sub.map((subCat, idx) => (
//             <div key={idx} className="grid-item">
//               <img src={subCat.img_path} alt={subCat.Category} />
//               <p>{subCat.Category}<HiOutlineArrowSmRight/></p>
//               {
//                 subCat.int_sub && <button className='variant-btn'onClick={() => HandleVariantClick(subCat)}>Variants<IoMdArrowDropdown/></button>
//               }
//             </div>
//           ))}
//         </div>
//         {
//           isOpen && (
//             <div className='intSubDiv'>
//               {
//                 intSub.map((intSub, indx) => (
//                   <div key={indx} className='intSubDiv-branch'>
//                     <img src={intSub.img_path} alt="" />
//                     <p>{intSub.Category}</p>
//                   </div>

//                 ))
//               }
//             </div>)
//         }
//       </div>
//     </div>
//   );
// };

// export default Moodboard;


import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './InstaStyle.scss';
import { rawHair } from '../../data/hairCategory2';
import { useGSAP } from '@gsap/react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { images } from '../../data/SwiperImg';

const Moodboard = () => {
  const [activeCategory, setActiveCategory] = useState(rawHair[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const [intSub, IntSubMain] = useState([]);
  const gridRef = useRef(null);
  const detailRef = useRef(null);
  const imgRef = useRef();
  const Ref = useRef();
  const [currentImage, setCurrentImage] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.grid-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }, gridRef);
  }, [activeCategory]);

  useGSAP(() => {
    const cont = gsap.context(() => {
      gsap.fromTo(
        '.detail',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        })
    })
  }, [activeCategory]);

  useEffect(() => {
    const slideImage = () => {
      gsap.fromTo(
        imgRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(imgRef.current, {
              x: "100%",
              opacity: 0,
              duration: 2,
              ease: "power2.out",
              onComplete: () => {
                setCurrentImage((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
              },
            });
          },
        }
      );
    };

    const intervalId = setInterval(slideImage, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const HandleVariantClick = (subCat) => {
    const random = subCat.int_sub;
    IntSubMain(random);
    setIsOpen(!isOpen);
  };

  const HandleCategory = (catId) => {
    setIsOpen(false);
    setActiveCategory(catId);
  };

  return (
    <div className="moodboard-container" ref={Ref}>
      <div className="image_view_container">
        <img src={images[currentImage].img_path} ref={imgRef} alt="Sliding Image" />
      </div>
      {/* Main Navbar */}
      <div className="nav_container">
        <nav className="navbar">
          {rawHair.map((category) => (
            <button
              key={category.id}
              className={`nav-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => HandleCategory(category.id)}
            >
              {category.Category}
            </button>
          ))}
        </nav>
        {
          <p className="detail" ref={detailRef}>
            {rawHair[activeCategory - 1].detail}
          </p>
        }
        <div ref={gridRef} className="grid">
          {rawHair[activeCategory - 1].sub.map((subCat, idx) => (
            <div key={idx} className="grid-item">
              <img src={subCat.img_path} alt={subCat.Category} />
              <p>{subCat.Category}<HiOutlineArrowSmRight /></p>
              {subCat.int_sub && (
                <button className="variant-btn" onClick={() => HandleVariantClick(subCat)}>
                  Variants<IoMdArrowDropdown />
                </button>
              )}
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="intSubDiv">
            {intSub.map((intSub, indx) => (
              <div key={indx} className="intSubDiv-branch">
                <img src={intSub.img_path} alt="" />
                <p>{intSub.Category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Moodboard;

