import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SHeadings } from "@/components/utils/SectionHeadings";
import Link from "next/link";
import Image from "next/image";
import MainBtn from "@/components/utils/MainBtn";
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import EmailUs from "@/components/ReachUs";
import email from "@/public/email.png";
import designBanner from "@/public/design-banner.png"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='w-full h-[200px] bg-gray-100 bg-contactBanner bg-cover md:bg-center flex justify-center items-center lg:bg-center lg:h-[300px] mt-14 mb-20 lg:mb-32'>
                <div className='w-full h-full bg-black/50 flex justify-center items-center'>
                    <h1 className=' font-clashDisplay font-semibold text-mainBG text-3xl lg:text-5xl '>Contact Us</h1>
                </div>
            </div>
            <div className="container mt-20 lg:mt-28 font-clashDisplay ">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-full lg:col-span-9 p-5 lg:p-10">
                        <div className="h-fit mb-4 rounded-md">
                            <Image src={email} alt="tag-logo-full" className="rounded-md" width={1080} height={502} />
                        </div>
                        <p className="mt-10 md:text-lg lg:text-xl text-textGray">We would love to hear from you! If you have any questions, feedback, or inquiries, please don&apos;t hesitate to get in touch with us. Our dedicated team is here to assist you.</p>
                        <p className="mt-5 md:text-lg lg:mt-8 lg:text-xl text-textGray">Feel free to reach out to us via phone or email during our office hours, and we will respond to your message as soon as possible. If you contact us outside of office hours, we will get back to you on the next business day.</p>
                        <p className="mt-5 md:text-lg lg:mt-8 lg:text-xl text-textGray">Alternatively, you can fill out the contact form below with your details and message. We will make sure to review your inquiry and provide a prompt response.</p>
                        <p className="mt-5 md:text-lg lg:mt-8 lg:text-xl text-textGray">We value your input and strive to provide excellent customer service. Your satisfaction is our top priority. We appreciate your interest in our products/services and look forward to assisting you.</p>
                        <p className="font-medium mt-5 mb-10 lg:mb-20 md:text-lg lg:mt-8 lg:text-xl text-textGray">Thank you for choosing TAG Designz!</p>
                    </div>



                    <div className="col-span-full lg:col-span-3 mb-20 ">
                        <div className="col-span-full lg:col-span-4 lg:mt-10 bg-darkBlue md:max-h-[400px] lg:max-h-[650px] rounded-lg overflow-hidden relative mb-5">
                            <div className="pt-10 pb-10 lg:pt-16 px-6 lg:pb-0 flex flex-col justify-center ">
                                <h5 className="font-semibold text-mainBG text-2xl md:text-4xl md:max-w-md lg:text-4xl">Let us take care of your projects.</h5>
                                <Image src={designBanner} alt="tag-designz-banner" width={605} height={686} className="hidden lg:pt-10 lg:block lg:w-full z-20" />
                                <div className="w-[120px] h-[120px] bg-fadedBlue/80 blur-[100px] pb-20" />
                                {/* <Link href={"contact"} className="scale-75 lg:scale-90 lg:absolute bottom-4 lg:bottom-8 ">
                                    <MainBtn bg={"mainBG"} color={"darkBlue"} text={"Send a message"} />
                                </Link> */}
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

            <EmailUs />

            <Footer />
        </div>
    )
}

export default Contact;