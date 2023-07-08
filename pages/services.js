import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
    const serviceDetails = [
        {
            id: 1,
            text: 'Graphic Design',
            link: 'services/graphic-design',
            img: '/design.jpg',
        },
        {
            id: 2,
            text: 'Web Development',
            link: 'services/web-development',
            img: '/development.jpg',
        },
        {
            id: 3,
            text: 'Brand Identity',
            link: 'services/brand-identity',
            img: '/branding.png',
        },
    ]

    return (
        <>
            <Navbar />
            <section className=" font-clashDisplay text-textGray container w-full h-fit my-20 lg:mt-40 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {serviceDetails.map(({ id, text, link, img }) => {
                        return <Link key={id} href={link} className="relative group transition duration-500 ease-in-out rounded-md">
                            <Image src={img} alt={text} width={640} height={640} className="bg-blend-darken rounded-md" />
                            <div className="bg-black/40 lg:bg-black/20 group-hover:bg-black/40 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition duration-500 ease-in-out rounded-md" >
                                <h5 className="font-semibold text-mainBG shadow-sm text-xl group-hover:text-2xl text-center lg:text-3xl lg:group-hover:text-4xl transition duration-500 ease-in-out">{text}</h5>
                                <button className="bg-mainBG text-textGray py-2 px-4 rounded-md mt-3 opacity-100 group-hover:opacity-100 lg:opacity-0 lg:text-lg transition duration-500 ease-in-out">Go to page</button>
                            </div>
                        </Link>
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services;