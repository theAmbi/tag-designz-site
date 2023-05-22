import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.svg'
import dropArrow from '../app/icons/dropdown.svg'
import { useState } from "react"
import { Divide as Hamburger } from "hamburger-react"

const Navbar = () => {
    const [services, setServices] = useState(false);
    const [isOpen, setOpen] = useState(false);
    // const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="font-clashDisplay font-medium w-full h-[8vh] lg:h-[10vh] bg-mainBG flex items-center z-[999] sticky top-0">
                <div className=" container flex justify-between items-center">
                    <Link href={'/'}>
                        <Image src={logo} alt="tag-logo" priority />
                    </Link>
                    <div className=" hidden lg:block">
                        <div className=" flex gap-x-10 text-textGray">
                            <Link href={'/about'}>Who We Are</Link>
                            <Link href={''} className=" flex gap-x-3 relative px-10" onClick={() => setServices(!services)}>
                                What We Offer
                                <Image src={dropArrow} alt="dropdown-arrow" />
                                {services && <article className=" bg-mainBG absolute top-[60px] w-full flex flex-col rounded-b-lg ">
                                    <Link className=" py-4 px-3 hover:bg-textOrange hover:text-mainBG" href={'/services/web-development'}>Web Development</Link>
                                    <Link className=" py-4 px-3 hover:bg-textOrange hover:text-mainBG" href={'/services/graphic-design'}>Graphic Design</Link>
                                    <Link href={'/services/brand-identity'} className=" py-4 px-3 hover:bg-textOrange hover:text-mainBG hover:rounded-b-md">Brand Identity</Link>
                                </article>}
                            </Link>
                            <Link href={'/projects'}>Projects</Link>
                            <Link href={'/contact'} className=" text-textOrange px-3">Send a Message</Link>
                        </div>
                    </div>

                    {/* mobile menu navigation */}
                    <div className="  lg:hidden">
                        <Hamburger toggle={setOpen} toggled={isOpen} size={27} color="#F06435" className="relative" />
                        {isOpen && <article className=" bg-mainBG absolute right-0 top-[66px] w-full h-[94vh] flex flex-col gap-y-3 pt-10 tracking-wider uppercase lg:hidden">
                            <Link href={'/about'} className=" py-6 pl-10 font-semibold text-textGray border-b-2 border-textGray/20 md:pl-20 ">Who We Are</Link>
                            <Link href={''} className=" relative py-6 pl-10 border-b-2 border-textGray/20 md:pl-20" onClick={() => setServices(!services)}>
                                <div className=" flex gap-x-3">
                                    <p className=" text-textGray font-semibold py-5">What We Offer</p>
                                    <Image src={dropArrow} alt="dropdown-arrow" fetchPriority="high" />
                                </div>
                                {services && <article className="flex flex-col pt-4 pl-8 text-textGray">
                                    <Link className=" py-5 capitalize border-b-2 border-b-textGray/20 " href={'/services/web-development'}>Web Development</Link>
                                    <Link className=" py-5 capitalize border-b-2 border-b-textGray/20 " href={'/services/graphic-design'}>Graphic Design</Link>
                                    <Link href={'/services/brand-identity'} className="py-5 capitalize  ">Brand Identity</Link>
                                </article>}
                            </Link>
                            <Link href={'/projects'} className="py-6 pl-10 text-textGray font-semibold border-b-2 border-textGray/20 md:pl-20">Projects</Link>
                            <Link href={'/contact'} className="py-6 pl-10 text-textOrange font-semibold md:pl-20 ">Send Message</Link>
                        </article>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;