import { SHeadings } from "./utils/SectionHeadings";
import Link from "next/link";
import Image from "next/image";
import MainBtn from "./utils/MainBtn";


const About = () => {
    return (
        <section className=" w-full h-fit lg:h-screen bg-mainBG pb-10">
            <div className=" container pt-20">
                <SHeadings subheading={'About tag designz'} heading={"Here's an overview of who we are"} subColor={'textGray'} headingColor={'textOrange'} />
                <div className="my-10 w-full h-[325px] bg-gray-100 bg-office bg-cover lg:bg-90% bg-center overflow-hidden "></div>
                <p className=" text-textGray font-clashDisplay text-lg lg:text-2xl md:max-w-2xl md:text-xl lg:max-w-4xl pb-5">We at TAG Designz are a team of web developers and graphic designers, with a keen interest in creating visually appealing designs and website projects for you to convert more visitors and viewers into repeat customers .</p>
                <Link href={'/about'}><MainBtn bg={'darkBlue'} color={'mainBG'} text={'Learn More'} ></MainBtn></Link>
            </div>
        </section>
    )
}

export default About;