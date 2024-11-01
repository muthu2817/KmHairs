import './Category.scss';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { images } from '../../data/SwiperImg'; // Assuming your image data is here

const CategorySlider = () => {
  const sliderRef = useRef(null);
  const slideImgRef = useRef(null);
  const TitleRef = useRef(null);
  const SlidePreviewRef = useRef(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const totalSlides = images.length;

  // Function to animate the main image, preview image, and title
  const animateSlide = (nextImgIndex) => {
    const distance = nextImgIndex > currentImgIndex ? '100%' : '-100%';

    // Main image animation
    gsap.to(`.img-${currentImgIndex}`, {
      x: distance,
      opacity: 0,
      duration: 1,
      ease: 'power3.inOut',
      onComplete: () => {
        setCurrentImgIndex(nextImgIndex);
      },
    });
    gsap.fromTo(
      `.img-${nextImgIndex}`,
      { x: nextImgIndex > currentImgIndex ? '-100%' : '100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.inOut' }
    );

    // Title animation
    gsap.to(TitleRef.current, {
      y: -40 * nextImgIndex,
      duration: 1,
      ease: 'power3.inOut',
    });

    // Preview image animation
    gsap.to(SlidePreviewRef.current.children[currentImgIndex], {
      opacity: 0.5,
      scale: 0.9,
      duration: 0.5,
    });
    gsap.to(SlidePreviewRef.current.children[nextImgIndex], {
      opacity: 1,
      scale: 1.1,
      duration: 0.5,
    });
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    if (index !== currentImgIndex) {
      animateSlide(index);
    }
  };

  return (
    <div className='slider' ref={sliderRef}>
      <div className='slider_images' ref={slideImgRef}>
        {images.map((Img, index) => (
          <div
            className={`img img-${index} ${index === currentImgIndex ? 'active' : ''}`}
            key={Img.id}
            style={{ position: 'absolute', opacity: index === currentImgIndex ? 1 : 0 }}
          >
            <img src={Img.img_path} alt={Img.category} />
          </div>
        ))}
      </div>

      <div className='slider_title'>
        <div className='slider_title_wrapper' ref={TitleRef}>
          {images.map((Img, index) => (
            <p key={Img.id} className={index === currentImgIndex ? 'active' : ''}>
              {Img.text}
            </p>
          ))}
        </div>
      </div>

      <div className='slider_preview' ref={SlidePreviewRef}>
        {images.map((Img, index) => (
          <div
            className='preview'
            key={Img.id}
            onClick={() => handleThumbnailClick(index)} // Trigger animation on thumbnail click
            style={{ cursor: 'pointer' }}
          >
            <img
              src={Img.img_path}
              alt={Img.category}
              style={{ opacity: index === currentImgIndex ? 1 : 0.5 }}
            />
          </div>
        ))}
      </div>

      <div className='slider_indicators'>
        <p onClick={() => animateSlide((currentImgIndex - 1 + totalSlides) % totalSlides)}>+</p>
        <p onClick={() => animateSlide((currentImgIndex + 1) % totalSlides)}>+</p>
      </div>
    </div>
  );
};

export default CategorySlider;
