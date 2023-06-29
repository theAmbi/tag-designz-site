import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '/app/globals.css'
import WebDevServices from '@/components/services/WebDevServices';
import Accordion from '@/components/utils/Accordion';
import { SHeadings } from '@/components/utils/SectionHeadings';
import ServicePromo from '@/components/utils/ServicePromo';


const WebDev = () => {
    const accordionData = [

        {
            title: 'I currently have a website I want to rebrand, can you help me with this?',
            id: 1,
            content: `Sure, we can help give your website a new look and feel. We have professionals ready to take on the job.`,
        },

        {
            title: 'What is the standard duration to undertake a web project?',
            id: 2,
            content: `A website project can span from 2 weeks to a month (or two). It depends largely on the scale of the project.`,
        },

        {
            title: 'How do you send the files?',
            id: 3,
            content: `The method of sending files depends on what method we build the website with. If it's a no-code site (like WordPress), all you need will be the admin login credentials. For projects that use code, e.g a NextJS site, you will get the files in 2 ways: (i). via your hosting file manager or (ii). via email. It could also be pushed to your Github repo.`,
        },

        {
            title: 'What are your rates for a website?',
            id: 4,
            content: `Our prices start from $300 going upwards. The price increases the larger and more advanced the project gets.We pride ourselves on making professional, responsive websites`,
        },

    ];

    return (
        <>
            <Navbar />
            <div className='w-full h-[200px] bg-gray-100 bg-development bg-cover md:bg-center flex justify-center items-center lg:bg-center lg:h-[300px] mt-14 mb-20 lg:mb-32'>
                <div className='w-full h-full bg-black/50 flex justify-center items-center'>
                    <h3 className=' font-clashDisplay font-semibold text-mainBG text-3xl lg:text-5xl '>Web Development</h3>
                </div>
            </div>

            <section className=' font-clashDisplay text-textGray'>
                <WebDevServices />
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
                <div className='mt-20'>
                    <ServicePromo />

                </div>
            </section>

            <Footer />
        </>
    )
}

export default WebDev;