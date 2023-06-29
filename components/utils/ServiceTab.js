import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../app/accordion.css'


import { IoIosArrowUp } from 'react-icons/io';


const ServiceTab = ({ title, id, description }) => {
    const [activeTab, setActiveTab] = useState(false);
    const activeRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (activeRef.current && !activeRef.current.contains(e.target)) {
                setActiveTab(false);
            };
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    })

    return (
        <article key={id} className={`last:border-none border-b border-darkBlue/20`} ref={activeRef}>
            <div className={`bg-gradient-to-r  ${activeTab ? 'bg-darkBlue' : 'bg-tabBlue'}`}>
                <div className='flex py-7 px-5 justify-between items-center md:px-10 md:text-md md:text-lg' onClick={() => setActiveTab(!activeTab)}>
                    <h5 className={`font-medium ${activeTab ? 'text-mainBG' : 'text-darkBlue'}`}>{title}</h5>
                    <div className='cursor-pointer'>
                        {activeTab ? <IoIosArrowUp className='rotate-0 text-mainBG transition duration-500 ease-in-out' /> : <IoIosArrowUp className='rotate-180 text-darkBlue transition duration-500 ease-in-out' />}
                    </div>
                </div>
                <CSSTransition in={activeTab} timeout={700} classNames='service-tab' unmountOnExit={true} >
                    <div>
                        {activeTab && <p className='py-8 px-5 bg-slate-50 md:px-10 md:text-lg'>{description}</p>}
                    </div>
                </CSSTransition>
            </div>
        </article>
    )
}

export default ServiceTab