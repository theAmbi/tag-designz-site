import React from 'react'
import Image from 'next/image';
import spinner from '@/public/spinner.svg';

const Preloader = () => {
    return (
        <div className='preloader flex justify-center items-center h-screen w-full'>
            <div className='spinner animate-pulse'>
                <Image src={spinner} alt='tag-designz-emblem' width={140} height={140} />
            </div>
        </div>
    )
}

export default Preloader