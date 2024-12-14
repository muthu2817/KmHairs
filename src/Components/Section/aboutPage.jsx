import img from '../../assets/hairShowcase.jpg';
import './about.scss';
import img_1 from '../../assets/bg_none2.png';
import img_2 from '../../assets/bg_none3.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MdOutlineArrowOutward } from "react-icons/md";


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


const AboutPage = () => {
    const ParentRef = useRef();
    const containerRef = useRef();
    const svgRef = useRef();
    const svgrefscroll = useRef();
    const block1Ref = useRef(null);
    const parentBlockRef = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);
    const block4Ref = useRef(null);





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

    useGSAP(() => {
        gsap.to(".moving-element", {
            scrollTrigger: {
                trigger: parentBlockRef.current,
                start: "top 20%",
                end: "bottom 20%",
                scrub: 1,
                ease: "elastic"
            },
            motionPath: {
                path: "#motion-path",
                align: "#motion-path",
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
            },
            duration: 1,
            ease: "none",
            rotation: 360
        });
    }, []);

    useGSAP(() => {
        gsap.fromTo(block1Ref.current, { opacity: 0, y:50 }, {
            opacity: 1, duration: 2, y:0, scrollTrigger: {
                trigger: parentBlockRef.current,
                start: 'top 20%',
                end: 'bottom 25%',
                //toggleActions: 'play none none reverse'
            }
        })

        gsap.fromTo(block2Ref.current, { opacity: 0, y: 100 }, {
            opacity: 1, duration: 2, y:0, scrollTrigger: {
                trigger: block1Ref.current,
                start: 'bottom 0%',
                end: 'bottom 25%',
                //toggleActions: 'play none none reverse'
            }
        })

        gsap.fromTo(block3Ref.current, { opacity: 0, y: 100 }, {
            opacity: 1, duration: 2, y: 0, scrollTrigger: {
                trigger: block3Ref.current,
                start: 'top 50%',
                end: 'bottom 0%',
                //toggleActions: 'play none none reverse',
            }
        })

        gsap.fromTo(block4Ref.current, { opacity: 0, y: 100 }, {
            opacity: 1, duration: 2, y: 0, scrollTrigger: {
                trigger: block4Ref.current,
                start: 'top 50%',
                end: 'bottom 25%',
                //toggleActions: 'play none none reverse',

            }
        })
    }, { scope: parentBlockRef })

    return (
        <>
            <div className='grandpa-container'>
                <h2>Discover the Gold Standard of Hair Extensions: Remy Hair and Its Superior Quality</h2>
                <div className='remy-hair-container' ref={svgrefscroll}>
                    <div className="animation-container" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 1700"
                            preserveAspectRatio="xMidYMid meet">
                            <path id="motion-path" d="M1 0.5V1700.5" stroke="#fff" fill="none" strokeWidth="10" />
                        </svg>
                        <div
                            className="moving-element"
                            style={{
                                width: 30,
                                height: 30,
                                background: "#f6ff7e",
                                borderRadius: "2px",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 2,
                            }}
                        ></div>
                    </div>
                    <div className='parent-block' ref={parentBlockRef}>

                        <div className='block-1' ref={block1Ref}>
                            <h4> understanding Remy hair?</h4>
                            <p>
                                Remy hair is regarded as the highest quality standard for human hair extensions. It is natural, unprocessed hair ethically sourced from a single donor as part of a traditional offering to deities in Indian Hindu temples. The hair’s cuticle layer remains intact, with all strands aligned in the same direction. This precise alignment ensures hair that is softer, shinier, and far less prone to tangling, matting, or shedding compared to non-Remy hair.
                            </p>
                        </div>
                        <div className='block-2' ref={block2Ref}>
                            <span>How is Remy Hair Sourced?</span>
                            <p>
                                Remy hair is obtained through the centuries-old Indian tradition of Tonsuring, practiced in Hindu temples. Here’s an overview of the process:
                                <br />
                                <span>1.Devotees Visit Temples:</span> People visit temples as an act of devotion or to express gratitude for blessings received.<br /><br />
                                <span>2.Hair Donation:</span> As part of their offering, devotees voluntarily have their heads shaved by temple barbers. This act symbolizes humility and detachment from ego and material desires.<br /><br />
                                <span>3.Collection and Sorting:</span> The shaved hair is meticulously collected, cleaned, and sorted by skilled workers, preserving its natural texture and quality.<br /><br />
                                <span>4.Sale to Vendors:</span> Temples sell the sorted hair to vendors, who process it into extensions or wigs. Renowned for its purity and high quality, this hair is in high demand globally.<br /><br />
                                <span>5.Ethical Practices:</span> Ensuring ethical sourcing is crucial, including fair compensation, sustainability, and transparency throughout the process.

                                This tradition not only supports temples financially but also provides devotees with a meaningful way to express their spirituality and devotion.
                            </p>
                        </div>
                        <div className='block-3' ref={block3Ref}>
                            <span>Why is Remy Hair Preferred Over Non-Remy Hair?</span>
                            <p>
                                Remy hair is favored for its unmatched quality and ethical sourcing. Collected from a single donor, often through temple offerings, it retains the natural cuticle alignment, ensuring all strands run in the same direction. This alignment makes Remy hair:<br /><br />

                                <span>Soft and Shiny:</span> Its intact cuticles enhance smoothness and natural luster.<br /><br />
                                <span>Tangle-Free:</span> Proper alignment prevents tangling and matting.<br /><br />
                                <span>Durable:</span> Its high-quality structure ensures longevity and reduces shedding.<br /><br />

                                These qualities make Remy hair the premium choice for natural-looking, long-lasting hair extensions. 🌟
                            </p>
                        </div>
                        <div className='block-4' ref={block4Ref}>
                            <span>What We Do</span>
                            <p>
                                In India, temples organize auctions or tenders to grant licenses to bidders for collecting hair donated by devotees within their premises. At <span>KM Hair International</span>, we actively engage in these tenders and have secured contracts with multiple temples for specified durations.<br />
                                This enables us to serve as a direct and reliable source of premium-quality Remy hair, supplying to businesses both domestically and internationally.<br /><br />
                                <span>Our Core Products:</span><br />
                                <ul>
                                    <li>Premium Bulk Raw Human Hair</li>
                                    <li>High-Quality Remy Single Drawn Hair Extensions</li>
                                    <li>Ethically Sourced Virgin Hair</li>
                                </ul>
                                We pride ourselves on maintaining ethical sourcing practices and delivering the finest hair products to our clients worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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