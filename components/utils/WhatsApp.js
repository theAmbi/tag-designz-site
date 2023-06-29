import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsApp = () => {
    return (
        <a className=' relative p-4' id='whatsapp' href={"https://wa.me/+2348077326165"} target={'_blank'}>
            <div className=' bg-orange-500 p-4 w-fit rounded-full shadow-lg fixed z-30 cursor-pointer right-4 md:left-14 lg:left-20 bottom-24 md:bottom-10 lg:bottom-10 hover:bg-black' title="Chat us up on WhatsApp">
                <BsWhatsapp className=' text-xl text-white' />
            </div>
        </a>
    )
}

export default WhatsApp;