import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Link from "next/link";
import '/app/globals.css';
import { SHeadings } from "@/components/utils/SectionHeadings";
import Image from "next/image";
import MainBtn from "@/components/utils/MainBtn";
import Accordion from '@/components/utils/Accordion';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import branding from '@/public/branding.png';


const BrandIdentity = () => {
    const accordionData = [

        {
            title: 'Why is brand identity important?',
            id: 1,
            content: `Brand identity is vital because it helps businesses differentiate themselves from competitors and creates a unique and recognizable presence in the market. It establishes a cohesive and consistent visual and conceptual representation of the brand, fostering brand recognition and recall. A strong brand identity builds trust, credibility, and loyalty among customers, ultimately leading to business growth and success.`,
        },

        {
            title: 'What elements are included in brand identity?',
            id: 2,
            content: `Brand identity consists of various elements that work together to create a cohesive brand image. These elements may include a logo, color palette, typography, visual style, imagery, voice and tone guidelines, tagline or slogan, and overall brand messaging. Each element is carefully designed to reflect the brand's values, personality, and target audience, ensuring a consistent and memorable brand experience across different channels and touchpoints.`,
        },

        {
            title: 'How can brand identity influence customer perception?',
            id: 3,
            content: `Brand identity plays a significant role in shaping how customers perceive a brand. The visual elements, such as the logo and design style, create an immediate impression and can convey qualities such as professionalism, creativity, or innovation. The tone of voice and messaging used in brand communication establish a brand's personality and values. When these elements are consistent and aligned with the target audience's preferences, they can evoke specific emotions, build trust, and resonate with customers, influencing their perception and forming lasting connections with the brand.`,
        },

        {
            title: 'How often should a brand identity be updated?',
            id: 4,
            content: `The frequency of updating a brand identity depends on various factors, such as market trends, business growth, and brand strategy. While some brands maintain their identity for several years, others choose to refresh or evolve their identity to stay relevant and adapt to changing consumer preferences. Major brand identity changes, such as a new logo or visual overhaul, are less frequent and typically occur after careful consideration and strategic rebranding efforts. Regular brand audits and evaluations can help determine if an update or refinement of the brand identity is necessary to align with the brand's goals and maintain relevance in the market.`,
        },
    ];
    return (
        <>
            <Navbar />
            <div className='w-full h-[200px] bg-gray-100 bg-identity bg-cover md:bg-center flex justify-center items-center lg:bg-center lg:h-[300px] mt-14 mb-20 lg:mb-32'>
                <div className='w-full h-full bg-black/50 flex justify-center items-center'>
                    <h1 className=' font-clashDisplay font-semibold text-mainBG text-3xl lg:text-5xl '>Brand Identity</h1>
                </div>
            </div>
            <div className="container mt-20 lg:mt-28 font-clashDisplay ">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-full lg:col-span-8 p-5 lg:p-10">
                        <div className="h-fit mb-10">
                            <Image src={branding} alt="brand-identity" width={1776} height={1183} className="rounded-md" />
                        </div>
                        <p className=" md:text-lg lg:text-xl text-textGray">
                            Brand identity is a crucial aspect of any business, encompassing the visual, verbal, and experiential elements that shape how a brand is perceived by its target audience. It goes beyond just a logo or color palette; <span className="font-medium">it is the essence and personality of a brand that distinguishes it from competitors and leaves a lasting impression on customers.</span> </p>
                        <p className=" md:text-lg mt-5 lg:mt-8 lg:text-xl text-textGray">A well-defined brand identity serves several purposes. First and foremost, it helps businesses differentiate themselves in a crowded marketplace.</p>
                        <div className="my-7 lg:my-14"><SHeadings heading={"Where we come in"} subheading={""} headingColor={"textOrange"} /></div>
                        <p className=" my-3 lg:my-7 md:text-lg  lg:text-xl text-textGray">We at TAG Designz understand the significance of brand identity and offer comprehensive branding and brand identity services. </p>
                        <p className=" md:text-lg  lg:text-xl text-textGray"> TAG Designz helps businesses craft compelling and memorable brand experiences through carefully designed logos, visual elements, and brand guidelines.  </p>
                        <p className=" my-3 lg:my-7 md:text-lg  lg:text-xl text-textGray">By collaborating with us, <span className="font-medium">your business can establish a strong brand identity that reflects their unique personality, sets them apart from competitors, and connects with customers on a deeper level.</span>  </p>

                    </div>

                    <div className="col-span-full lg:col-span-4 mb-20 ">
                        <div className="col-span-full lg:col-span-4 lg:mt-32 bg-textOrange md:max-h-[400px] lg:max-h-[650px] rounded-lg overflow-hidden relative mb-5">
                            <div className="pt-10 pb-10 lg:pt-16 px-6 lg:pb-0 ">
                                <h5 className="font-semibold text-mainBG text-2xl md:text-4xl md:max-w-md lg:text-4xl">Allow us take care of your brand.</h5>
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
            <Footer />
        </>

    )
}

export default BrandIdentity;