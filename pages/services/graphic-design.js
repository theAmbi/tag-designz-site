import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '/app/globals.css'
import Accordion from '@/components/utils/Accordion';
import DesignServices from '@/components/services/DesignServices';
import { SHeadings } from '@/components/utils/SectionHeadings';
import ServicePromo from '@/components/utils/ServicePromo';
import ClientsSlide from '@/components/services/ClientsSlide';
import Link from 'next/link';
// import { useState } from 'react';


const GraphicDesign = () => {

    const accordionData = [

        {
            title: 'What kind of graphic design services do you offer?',
            id: 1,
            content: `We offer design services such as logo design, user interface (UI) design, custom iconography and illustrations, image editing, merch design, among others.`,
        },

        {
            title: 'How does the design process work?',
            id: 2,
            content: `First, we send some concepts to the clients to choose from. When the best has been chosen, we begin the design phase. After the design, we forward to the client for review. If the client approves of it, we finalize the payment and send the files and design to the client.`,
        },

        {
            title: 'How do you send final projects?',
            id: 3,
            content: `We send final projects primarily via email, so the files are still in the highest resolution. But if requested, we also send via social media (preferrably Telegram for maintaining a high resolution, but we also use WhatsApp, Instagram and Facebook).`,
        },

        {
            title: 'Why do I need a graphic designer for my business?',
            id: 4,
            content: `L
            Hiring a graphic designer for your business is crucial because they possess the expertise to visually communicate your brand's message effectively. They can create a professional and cohesive visual identity, including logos, marketing materials, and website design to ensure your brand stands out and resonates with your target audience, enhance your brand's credibility, attract customers, and differentiate yourself from competitors.`,
        },

        {
            title: 'Can you create my website too?',
            id: 5,
            content: `Yes, we also create and maintain websites. For more information, please visit our web development page`,
        },
    ];


    return (
        <>
            <Navbar />
            <div className='w-full h-[200px] bg-gray-100 bg-design bg-cover md:bg-center flex justify-center items-center lg:bg-center lg:h-[300px] mt-14 mb-20 lg:mb-32'>
                <div className='w-full h-full bg-black/50 flex justify-center items-center'>
                    <h1 className=' font-clashDisplay font-semibold text-mainBG text-3xl lg:text-5xl '>Graphic Design</h1>
                </div>
            </div>
            <section className=' font-clashDisplay text-textGray'>
                <DesignServices />
            </section>

            <section className='container h-fit my-36'>
                <div>
                    <SHeadings heading={"Who we've worked with"} headingColor={'heroBG'} subheading={'our clients'} />
                    <ClientsSlide />
                </div>
            </section>
            <section className=" py-20  w-full bg-grayBG">
                <div className='container'>
                    <SHeadings subheading={'commonly asked questions'} heading={'FAQs'} subColor={'subTitle'} headingColor={'darkBlue'} />
                    <div className="accordion mt-10 divide-y">
                        {accordionData.map(({ title, content, id }) => {
                            return <Accordion title={title} content={content} key={id}
                            />
                        })}
                    </div>
                </div>
            </section>
            <ServicePromo />
            <Footer />
        </>
    )
}

export default GraphicDesign;