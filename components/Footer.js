import Image from "next/image";
import Link from "next/link";
// import logowhite from '../public/logowhite.svg'
import hStacked from '@/public/h-stacked-dark_fit.png'

const Footer = () => {
    return (
        <section className="w-full h-fit bg-darkBlue relative">
            <div className="container pt-32 flex flex-col md:flex-row md:items-start lg:flex-row justify-center items-center lg:justify-evenly gap-y-20 lg:gap-x-20 lg:items-start text-center lg:text-left">
                <div className="">
                    <Image src={hStacked} alt="white-logo" width={135} height={68} className="opacity-50" />
                </div>
                <div className="menu-items flex flex-col gap-y-28 md:flex-wrap md:flex-row md:justify-end md:text-right md:items-start lg:text-left lg:flex-nowrap lg:gap-x-36 justify-evenly w-[76%] lg:flex-row">
                    <div className="quick-links text-mainBG font-clashDisplay max-w-[90%] mx-auto lg:mx-0 text-xl lg:text-2xl">
                        <h5 className="font-semibold pb-5 text-xl lg:text-2xl">QUICK LINKS</h5>
                        <div className="font-light flex flex-col gap-y-6">
                            <Link href={'/pages/about'} className="hover:text-fadedBlue focus:text-fadedBlue">Who We Are</Link>
                            <Link href={'/pages/services/index'} className="hover:text-fadedBlue focus:text-fadedBlue">What We Offer</Link>
                            <Link href={'/pages/projects'} className="hover:text-fadedBlue focus:text-fadedBlue">Projects</Link>
                        </div>
                    </div>

                    <div className="quick-links text-mainBG font-clashDisplay text-xl lg:text-2xl">
                        <h5 className="font-semibold pb-5">SOCIALS</h5>
                        <div className="font-light flex flex-col gap-y-6 ">
                            <Link href={'https://www.instagram.com/tag_designz'} target="_blank" className="hover:text-fadedBlue focus:text-fadedBlue">Instagram</Link>
                            <Link href={'https://www.facebook.com/tagdesignzz/'} target="_blank" className="hover:text-fadedBlue focus:text-fadedBlue">Facebook</Link>
                            <Link href={'https://www.linkedin.com/company/tag-designz'} target="_blank" className="hover:text-fadedBlue focus:text-fadedBlue">Linkedin</Link>
                            <Link href={'https://www.twitter.com/tag_designz'} target="_blank" className="hover:text-fadedBlue focus:text-fadedBlue">Twitter</Link>
                        </div>
                    </div>

                    <div className="quick-links text-mainBG font-clashDisplay text-xl lg:text-2xl">
                        <h5 className="font-semibold pb-5">ENQUIRIES</h5>
                        <div className="font-light flex flex-col gap-y-6">
                            <p className="max-w-xs">For business consultation, please email us, and let’s get started.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="bg-footerRights text-mainBG font-clashDisplay text-lg lg:text-xl py-7 text-center  w-full mt-20 lg:mt-32">2023, TAG Designz. All rights reserved</p>
            <div className="w-full h-full  top-0 left-0 bg-pattern "></div>

        </section>
    )
}

export default Footer;