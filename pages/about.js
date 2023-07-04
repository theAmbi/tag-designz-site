import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Link from "next/link";
import '../app/globals.css'
import { SHeadings } from "@/components/utils/SectionHeadings";
import Image from "next/image";
import MainBtn from "@/components/utils/MainBtn";
import Accordion from '@/components/utils/Accordion';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';



const About = () => {
    const accordionData = [

        {
            title: 'What kind of graphic design services do you offer?',
            id: 1,
            content: `We offer design services such as logo design, user interface (UI) design, custom iconography and illustrations, image editing, merch design, among others.`,
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

        {
            title: 'What is the standard duration to undertake a web project?',
            id: 6,
            content: `A website project can span from 2 weeks to a month (or two). It depends largely on the scale of the project.`,
        },
    ];
    return (
        <div>
            <Navbar />
            <div className='w-full h-[200px] bg-gray-100 bg-about bg-cover md:bg-center flex justify-center items-center lg:bg-center lg:h-[300px] mt-14 mb-20 lg:mb-32'>
                <div className='w-full h-full bg-black/50 flex justify-center items-center'>
                    <h3 className=' font-clashDisplay font-semibold text-mainBG text-3xl lg:text-5xl '>Who We Are</h3>
                </div>
            </div>
            <div className="container mt-20 lg:mt-28 font-clashDisplay ">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-full lg:col-span-8 p-5 lg:p-10">
                        <div className="mb-7 lg:mb-14"><SHeadings heading={"Our story"} subheading={"how we got here"} headingColor={"textOrange"} /></div>
                        <div className="h-fit mb-4">
                            <Image src={"/tag-logo-full.jpg"} alt="tag-logo-full" width={1080} height={502} />
                        </div>
                        <p className=" md:text-lg lg:text-xl text-textGray">In 2020, <Link href={"https://twitter.com/TheeAmbi"} className="text-textOrange font-medium" target="_blank">Golden Ekpendu</Link> created TAG Designz for a school project. The original plan was to just offer graphic design services. But as Golden improved his skills in frontend web development, he realized he could do a lot more by offering his frontend design skills and experience to clients.</p>
                        <p className=" md:text-lg mt-5 lg:mt-8 lg:text-xl text-textGray">In 2023, TAG Designz got a sleek logo and a total rebranding.</p>
                        <div className="my-7 lg:my-14"><SHeadings heading={"What we do"} subheading={""} headingColor={"textOrange"} /></div>
                        <p className=" md:text-lg  lg:text-xl text-textGray">We at TAG Designz are a team of web developers and graphic designers, with a keen interest in creating visually appealing designs and website projects for you to convert more visitors and viewers into repeat clients.</p>


                        <p className="mt-5 lg:mt-8 md:text-lg  lg:text-xl text-textGray"><span className="font-medium">Our services include:</span></p>
                        <ul className="list-disc text-textGray md:text-lg lg:text-xl">
                            <li className="ml-5 hover:underline hover:text-textOrange active:text-textOrange"><Link href={"/services/graphic-design"}>Graphic Design</Link></li>
                            <li className="ml-5 hover:underline hover:text-textOrange active:text-textOrange"><Link href={"/services/web-development"}>Web Development</Link></li>
                            <li className="ml-5 hover:underline hover:text-textOrange active:text-textOrange"><Link href={"/services/brand-identity"}>Brand Identity</Link></li>
                        </ul>
                        <p className="mt-5 md:text-lg lg:mt-8 lg:text-xl text-textGray">All our services are delivered promptly and we also maintain a high level of communication with the client.</p>
                    </div>

                    <div className="col-span-full lg:col-span-4 mb-20 ">
                        <div className="col-span-full lg:col-span-4 lg:mt-32 bg-textOrange md:max-h-[400px] lg:max-h-[650px] rounded-lg overflow-hidden relative mb-5">
                            <div className="pt-10 pb-10 lg:pt-16 px-6 lg:pb-0 ">
                                <h5 className="font-semibold text-mainBG text-2xl md:text-4xl md:max-w-md lg:text-4xl">Have a web or design project in mind?</h5>
                                <Image src={"/model.png"} alt="tag-model" width={605} height={686} className="hidden lg:pt-10 lg:block lg:w-full" />
                                <Link href={"contact"} className="scale-75 lg:scale-90 lg:absolute bottom-4 lg:bottom-8 ">
                                    <MainBtn bg={"mainBG"} color={"darkBlue"} text={"Send a message"} />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-mainBG rounded-lg border py-5 px-5 mt-20">
                            <p className="font-medium md:text-lg">Follow us on your favourite socials</p>
                            <div className="flex gap-4 text-lg mt-4">
                                <Link href={"https://www.instagram.com/tag_designz"} target="_blank" className="p-3 bg-slate-100 rounded-md cursor-pointer transition duration-300 ease-in-out hover:text-mainBG hover:bg-textOrange active:bg-textOrange active:text-mainBG"><FiInstagram /></Link>
                                <Link href={"https://www.facebook.com/tagdesignzz/"} target="_blank" className="p-3 bg-slate-100 rounded-md cursor-pointer transition duration-300 ease-in-out hover:text-mainBG hover:bg-textOrange active:bg-textOrange active:text-mainBG"><ImFacebook /></Link>
                                <Link href={"https://www.linkedin.com/company/tag-designz"} target="_blank" className="p-3 bg-slate-100 rounded-md cursor-pointer transition duration-300 ease-in-out hover:text-mainBG hover:bg-textOrange active:bg-textOrange active:text-mainBG"><FaLinkedinIn /></Link>
                                <Link href={"https://www.twitter.com/tag_designz"} target="_blank" className="p-3 bg-slate-100 rounded-md cursor-pointer transition duration-300 ease-in-out hover:text-mainBG hover:bg-textOrange active:bg-textOrange active:text-mainBG"><AiOutlineTwitter /></Link>
                            </div>

                        </div>
                    </div>




                </div>
            </div>

            <section className="bg-grayBG py-20">
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
            <Footer />
        </div>
    )
}

export default About;