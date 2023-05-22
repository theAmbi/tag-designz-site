import HeroBtn from "./utils/HeroBtn";
import gradient from '../public/bg-gradient.png'
import model from '../public/model.png'
import Image from "next/image";
import Link from "next/link";
import wave from '../app/wave.svg'

const Hero = () => {
    return (
        <section className="w-full h-[95vh] bg-heroBG relative overflow-hidden">
            <div className="container flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                <div id="text" className=" pt-40 lg:pt-48 z-30 w-[70%]">
                    <div>
                        <h2 className="font-clashDisplay font-semibold text-center text-4xl max-w-6xl mx-auto pb-10 lg:mx-0 lg:text-left lg:text-5xl text-mainBG lg:leading-[55px] lg:mb-14  ">Let us take your brand to the next level, <br />visually.</h2>
                    </div>
                    <Link href={'/contact'}>
                        <HeroBtn bg={'mainBG'} text={'Get started'} textColor={'darkBlue'} ></HeroBtn>
                    </Link>
                </div>

                <div id="model" className="relative">
                    <Image src={gradient} alt="bg-gradient" className="w-[360px] lg:w-full" />
                    <div className="absolute top-10 lg:top-32 right-0">
                        <Image src={model} alt="model" />
                        <div></div>
                    </div>

                </div>
            </div>

            <div id="wave" className="w-full absolute left-0 bottom-0">
                <Image src={wave} alt="wave" width={2000} />
            </div>

        </section>
    )
}

export default Hero;