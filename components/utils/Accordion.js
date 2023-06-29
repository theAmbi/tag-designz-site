import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group'
import '../../app/accordion.css'
// import { SHeadings } from "./SectionHeadings";

const Accordion = ({ title, content, id }) => {
    const [isActive, setActive] = useState(false);
    const accordionRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {

            if (accordionRef.current && !accordionRef.current.contains(e.target)) {
                setActive(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <div id="accordion" className={`font-clashDisplay container ${isActive ? ' shadow-2xl shadow-orange-900/10' : ''}`} key={id} >
            <div className="accordion-item" ref={accordionRef}>
                <div className={`accordion-title flex justify-between items-center font-medium bg-mainBG py-4 px-5 ${isActive ? 'bg-textOrange text-mainBG border-none' : 'bg-grayBG'}`} onClick={() => setActive(!isActive)}>
                    <h5 className="md:text-md md:text-lg">{title}</h5>
                    {/* <div onClick={() => setActive(!isActive)} className='cursor-pointer text-xl'>{isActive ? '-' : '+'}</div> */}
                    <div className="cursor-pointer">{isActive ? <IoIosArrowUp /> : <IoIosArrowUp className="rotate-180" />}</div>
                </div>

                <CSSTransition in={isActive} timeout={500} classNames={'accordion'}>
                    <div>
                        {isActive && <div>
                            <div className="accordion-content px-5 lg:pl-5 lg:pr-40 py-6 bg-mainBG md:text-lg"><p className="text-textGray">{content}</p> </div>
                        </div>
                        }
                    </div>
                </CSSTransition>
            </div>

        </div >
    );
};

export default Accordion;