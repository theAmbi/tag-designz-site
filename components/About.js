import { SHeadings } from "./utils/SectionHeadings";
import Link from "next/link";
import MainBtn from "./utils/MainBtn";

const About = () => {
    return (
        <section className=" w-full h-fit lg:h-screen bg-mainBG pb-10">
            <div className=" container pt-20">
                <SHeadings subheading={'About tag designz'} heading={"Here's an overview of who we are"} subColor={'textGray'} headingColor={'textOrange'} />
                <div className="my-10 w-full h-[325px] bg-gray-100 bg-office bg-cover bg-no-repeat " />
                <p className="text-textGray font-clashDisplay text-lg lg:text-2xl md:max-w-2xl md:text-xl lg:max-w-4xl pb-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href={'#'}><MainBtn bg={'darkBlue'} color={'mainBG'} text={'Learn More'} ></MainBtn></Link>
            </div>
        </section>
    )
}

export default About;