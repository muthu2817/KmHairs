import './random.scss';
import { useState } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const RandomElem = () => {
    const [isVisible, setIsVisible] = useState(false);
    const PopUpRef = useRef(null);
    const Mainref = useRef(null);
    const ClickHandler = () => {
        setIsVisible(!isVisible);
    }

    useGSAP(
        () => {
            if (isVisible) {
                gsap.fromTo(
                    PopUpRef.current,
                    { opacity: 0, y: -50, scale: 0.8 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
                );
            }
            else {
                gsap.to(PopUpRef.current, {
                    opacity: 0,
                    y: -50,
                    scale: 0.8,
                    duration: 0.3,
                    ease: "power3.in",
                  });
            }
        }, {dependencies: [isVisible], scope: Mainref})


    return (
        <>
            <div className="floating-card-container" ref={Mainref}>
                {/* Element that triggers the card */}
                <button
                    className="trigger-button"
                    //onMouseEnter={handleMouseEnter}
                    //onMouseLeave={handleMouseLeave}
                    onClick={ClickHandler} // Optional if you want to trigger on click as well
                >
                    Hover or Click Me
                </button>
                <button
                    className="trigger-button"
                    //onMouseEnter={handleMouseEnter}
                    //onMouseLeave={handleMouseLeave}
                    onClick={ClickHandler} // Optional if you want to trigger on click as well
                >
                    Hover or Click Me
                </button>
                <button
                    className="trigger-button"
                    //onMouseEnter={handleMouseEnter}
                    //onMouseLeave={handleMouseLeave}
                    onClick={ClickHandler} // Optional if you want to trigger on click as well
                >
                    Hover or Click Me
                </button>
                <button
                    className="trigger-button"
                    //onMouseEnter={handleMouseEnter}
                    //onMouseLeave={handleMouseLeave}
                    onClick={ClickHandler} // Optional if you want to trigger on click as well
                >
                    Hover or Click Me
                </button>
                <button
                    className="trigger-button"
                    onClick={ClickHandler} // Optional if you want to trigger on click as well
                >
                    Hover or Click Me
                </button>

                {/* The floating card */}
                {isVisible && (
                    <div className="floating-card" ref={PopUpRef}>
                        <button onClick={ClickHandler}>close</button>
                        <h3>Floating Card</h3>
                        <p>This is a pop-up card that appears on hover or click.</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default RandomElem;