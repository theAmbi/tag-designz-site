import Link from "next/link";
import Image from "next/image";
import MainBtn from "./MainBtn";
import model from '@/public/model.png';

const ServicePromo = () => {
    return (
        <section className=" bg-grayBG pb-20">
            <div className=" w-full h-fit bg-gradient-to-tr from-heroBG via-red-400 to-orange-300 overflow-hidden font-clashDisplay flex flex-col justify-center items-center text-left md:container">
                <div className="container py-10 px-5 md:px-10 lg:px-20 flex relative">
                    <div>
                        <h5 className="text-mainBG capitalize font-semibold drop-shadow-md text-left text-2xl md:text-3xl md:ml-0 lg:text-3xl container md:max-w-sm lg:max-w-md">Want to check out other services we offer?</h5>
                        <Link href={'/services'}>
                            <MainBtn bg={'mainBG'} color={'heroBG'} text={'To service page'} />
                        </Link>
                    </div>
                    <div>
                        <Image src={model} alt="tag-designz-model" className="hidden md:block md:w-[40%] md:absolute md:-bottom-20 md:right-7 lg:w-[25%]" />
                    </div>
                </div>
                <div >

                </div>
            </div>
        </section>
    )
}

export default ServicePromo;