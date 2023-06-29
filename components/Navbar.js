import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.svg'
import dropArrow from '@/app/icons/dropdown.svg'
import { useEffect, useRef, useState } from "react"
import { Divide as Hamburger } from "hamburger-react"
import { CSSTransition } from 'react-transition-group'
import '../app/globals.css'

const Navbar = () => {
    const [services, setServices] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [desktopServices, setDesktopServices] = useState(false);
    const mobileNavRef = useRef();
    const desktopServiceRef = useRef();


    // useEffect(() => {

    //     const outsideService = (e) => {
    //         if (desktopServiceRef.current && !desktopServiceRef.current.contains(e.target)) {
    //             setDesktopServices((prev) => !prev);
    //         }
    //     }

    //     document.addEventListener('click', outsideService);
    //     return () => { document.removeEventListener('click', outsideService) }
    // });


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);


        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    });

    return (
        <>
            <nav className="font-clashDisplay font-medium w-full lg:h-[10vh] bg-mainBG flex items-center z-[999] fixed top-0 left-0">
                <div className=" container flex justify-between items-center">
                    <Link href={'/'} className="outline-none">
                        <Image src={logo} alt="tag-logo" />
                    </Link>
                    <div className=" hidden lg:inline-block">
                        <div className=" flex gap-x-10 text-textGray relative">
                            <Link href={'/about'}>Who We Are</Link>
                            <Link href={''} className=" flex flex-col gap-x-3 " ref={desktopServiceRef}>
                                <div className="inline-flex gap-4" onClick={() => setDesktopServices(!desktopServices)}>
                                    What We Offer
                                    <Image src={dropArrow} alt="dropdown-arrow" width={13} height={64} className={`w-auto ${desktopServices ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-linear `} />
                                </div>
                                {desktopServices && <div className="bg-mainBG absolute top-[60px] left-0 w-[75%] flex flex-col rounded-b-lg shadow-2xl shadow-slate-300/20 divide-y" >
                                    <Link className=" py-6 px-6 hover:bg-textOrange hover:text-mainBG" href={'/services/web-development'}>Web Development</Link>
                                    <Link className=" py-6 px-6 hover:bg-textOrange hover:text-mainBG" href={'/services/graphic-design'}>Graphic Design</Link>
                                    <Link href={'/services/brand-identity'} className=" py-6 px-6 hover:bg-textOrange hover:text-mainBG ">Brand Identity</Link>
                                </div>}
                            </Link>


                            <Link href={'/projects'}>Projects</Link>
                            <Link href={'/contact'} className=" text-textOrange px-3">Send a Message</Link>
                        </div>
                    </div>

                    {/* mobile menu navigation */}
                    <div className=" lg:hidden" ref={mobileNavRef}>
                        <Hamburger toggle={setIsOpen} toggled={isOpen} size={27} color="#F06435" className="relative " onClick={() => setIsOpen(!isOpen)} />
                        <CSSTransition in={isOpen} timeout={2000} classNames={"mobileNav"}>
                            <div>
                                {isOpen && <article className={` bg-mainBG absolute right-0 top-[48px] w-full h-fit shadow-2xl shadow-slate-600/50 flex flex-col gap-y-3 pt-10 pb-6 tracking-wider uppercase lg:hidden`} >
                                    <Link href={'/about'} className=" py-6 pl-10  text-textGray border-b border-textGray/10 md:pl-20  hover:text-heroBG">Who We Are</Link>
                                    <Link href={''} className=" relative py-6 pl-10 border-b border-textGray/10 md:pl-20" onClick={() => setServices(!services)}>
                                        <div className=" flex gap-x-3">
                                            <p className=" text-textGray py-5 hover:text-heroBG" onClick={() => setServices(!services)}>What We Offer</p>
                                            <Image src={dropArrow} width={13} height={7} alt="dropdown-arrow" fetchPriority="high" className={`${services ? 'rotate-180 transition duration-300 ease-out text-heroBG' : 'rotate-0 transition duration-300 ease-out'}`} />
                                        </div>
                                        <CSSTransition in={services} timeout={1000} classNames={'service-dropdown'}>
                                            <div>
                                                {services && <article className="flex flex-col pt-4 pl-4 text-textGray font-normal text-md">
                                                    <Link className=" py-5 uppercase border-b border-b-textGray/10 hover:text-heroBG  " href={'/services/web-development'}>Web Development</Link>
                                                    <Link className=" py-5 uppercase border-b border-b-textGray/10 hover:text-heroBG  " href={'/services/graphic-design'}>Graphic Design</Link>
                                                    <Link href={'/services/brand-identity'} className="py-5 uppercase hover:text-heroBG  ">Brand Identity</Link>

                                                </article>}
                                            </div>
                                        </CSSTransition>
                                    </Link>
                                    <Link href={'/projects'} className="py-6 pl-10 text-textGray border-b border-textGray/10 md:pl-20 hover:text-heroBG">Projects</Link>
                                    <Link href={'/contact'} className="py-6 pl-10 text-textOrange font-semibold md:pl-20 ">Send Message</Link>

                                </article>}
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;