import React from 'react';
import Image from 'next/image';
import js from '@/public/tech/js.svg'
import html from '@/public/tech/html.svg'
import css from '@/public/tech/css.svg'
import nextjs from '@/public/tech/nextjs.svg'
import tailwind from '@/public/tech/tailwind.svg'
import styledComponents from '@/public/tech/styled-components.jpg'
import reactIcon from '@/public/tech/react.svg'
import firebase from '@/public/tech/firebase.svg'
import wordpress from '@/public/tech/wordpress.svg'
import { SHeadings } from '../utils/SectionHeadings';


const WebDevServices = () => {
    const webServices = [
        {
            id: ((Math.random) * 3),
            icon: `/web-dev/web-design.svg`,
            service: 'Website Design',
            desc: 'Our expert designers create visually appealing and modern website layouts that align with your brand identity and user preferences.'
        },
        {
            id: ((Math.random) * 3),
            icon: `/web-dev/frontend-dev.svg`,
            service: 'Frontend Development',
            desc: 'Our front-end developers bring the website design to life using cutting-edge technologies to ensure seamless navigation, responsive design and optimized performance.'
        },
        {
            id: ((Math.random) * 3),
            icon: `/web-dev/web-maintenance.svg`,
            service: 'Website Maintenance',
            desc: 'We provide ongoing website maintenance and support to ensure your website remains secure, up-to-date, and free from issues.'
        },
        {
            id: ((Math.random) * 3),
            icon: `/web-dev/wordpress.svg`,
            service: 'CMS',
            desc: 'We specialize in developing websites on popular CMS platforms like WordPress, Wix, and more.'
        },
    ]

    return (
        <section className='mb-20'>
            <div className='lg:container'>
                <p className="container my-10 lg:max-w-full md:text-lg lg:text-xl"> In today&apos;s digital age, having an online presence is essential. A website serves as a virtual storefront that allows potential customers to find and learn about your business 24/7, regardless of their location. It acts as a central hub for your brand, products, and services.</p>
                <p className="container my-10 lg:max-w-full md:text-lg lg:text-xl">At TAG Designz, we provide professional web development services tailored to meet your unique business needs. Our team of skilled web developers specializes in crafting engaging, <span className='font-medium'>user-friendly websites</span> that <span className='font-medium'>enhance your online presence and drive results.</span> <br /><br /></p>
                <p className="container mt-5 mb-10 md:text-lg lg:text-xl lg:pb-10">Here is a summary of our web development services and what you can expect:</p>

                <section className='container'>
                    <div className='w-full h-fit rounded-md divide-y lg:flex  lg:divide-x lg:divide-y-0'>
                        {webServices.map(({ id, icon, service, desc }) => {
                            return <article key={id} className='flex flex-col px-5 bg-mainBG py-5 lg:px-10'>
                                <div className=''>
                                    <div className='flex gap-5 items-center mb-3'>
                                        <div className='p-4 bg-slate-200 text-mainBG rounded-md'>
                                            <Image src={icon} alt={service} width={24} height={24} className='text-white' />
                                        </div>
                                        <h6 className='font-medium text-lg text-darkBlue'>{service}</h6>
                                    </div>
                                    <p className='text-slate-400'>{desc}</p>
                                </div>
                            </article>
                        })}
                    </div>
                </section>

                <section className='container mt-20'>
                    <SHeadings heading={'technologies we currently use'} subheading={'our tech stack'} />
                    <div className='grid grid-cols-3 grid-rows-3  items-center justify-center mt-10 lg:mt-20'>
                        <Image src={reactIcon} alt='react-icon' title='react js' />
                        <Image src={styledComponents} alt='styled-components' title='styled components' />
                        <Image src={tailwind} alt='tailwind-css' title='tailwindcss' />
                        <Image src={html} alt='html' title='html' />
                        <Image src={js} alt='javascript' title='javascript' />
                        <Image src={nextjs} alt='next-js' title='next js' />
                        <Image src={wordpress} alt='wordpress' title='wordpress' />
                        <Image src={firebase} alt='firebase' title='firebase' />
                        <Image src={css} alt='css' title='css' />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default WebDevServices