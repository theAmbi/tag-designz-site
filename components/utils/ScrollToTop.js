import React, { useEffect, useState } from 'react';
import { RiArrowDropUpLine } from 'react-icons/ri';


export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > 300) {
                setVisible(true)
            }

            else if (scrolled <= 300) {
                setVisible(false)
            }
        };



        window.addEventListener('scroll', toggleVisible);
    })
    return (
        <div className=' transiton ease-out duration-500 fixed right-5 md:bottom-12 lg:right-28 bottom-10 lg:bottom-12 bg-gray-700 p-3 rounded-md cursor-pointer text-white z-40 shadow-2xl shadow-slate-600-800 hover:bg-gray-100 hover:text-gray-700 message-btn opacity-80' style={{ display: visible ? 'inline' : 'none' }} onClick={scrolltoTop}>
            <RiArrowDropUpLine />
            {/* {window.removeEventListener('scroll', toggleVisible)} */}
        </div>
    )
}
