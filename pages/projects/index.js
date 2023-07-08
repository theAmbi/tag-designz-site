import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SHeadings } from '@/components/utils/SectionHeadings';
import Link from 'next/link';
import Image from 'next/image';
import { CgWebsite } from 'react-icons/cg';
import MainBtn from '@/components/utils/MainBtn';


const ProjectPage = () => {

    const imageDetails = [
        {
            id: 1,
            image: "/projects-instagram/1.jpg",
            link: "https://instagram.com/byteslimited",
            brandName: "bytes-limited"
        },
        {
            id: 2,
            image: "/projects-instagram/2.jpg",
            link: "https://instagram.com/byteslimited",
            brandName: "bytes-limited"
        },
        {
            id: 3,
            image: "/projects-instagram/3.jpg",
            link: "https://instagram.com/byteslimited",
            brandName: "bytes-limited"
        },
        {
            id: 4,
            image: "/projects-instagram/4.jpg",
            link: "https://instagram.com/medialabdigitals",
            brandName: "media-lab-digitals"
        },

        {
            id: 5,
            image: "/projects-instagram/5.jpg",
            link: "https://instagram.com/byteslimited",
            brandName: "bytes-limited"
        },
        {
            id: 6,
            image: "/projects-instagram/6.jpg",
            link: "https://instagram.com/byteslimited",
            brandName: "bytes-limited"
        },
        {
            id: 7,
            image: "/projects-instagram/7.jpg",
            link: "https://instagram.com/tag_designz",
            brandName: "tag-designz"
        },
        {
            id: 8,
            image: "/projects-instagram/8.jpg",
            link: "https://instagram.com/byteslimited",
            brandName: "bytes-limited"
        },
    ];

    const websiteDetails = [
        {
            id: 1,
            image: "/projects-website/1.png",
            link: "https://tailormartin.com/",
            brandName: "Tailor Martin",
            desc: "Tailor Martin is a fashion website to showcase portfolio and get leads."
        },
    ]


    return (
        <>
            <Navbar />
            <div className='w-full h-[200px] bg-gray-100 bg-design bg-cover md:bg-center flex justify-center items-center lg:bg-center lg:h-[300px] mt-14 mb-20 lg:mb-32'>
                <div className='w-full h-full bg-black/50 flex justify-center items-center'>
                    <h3 className=' font-clashDisplay font-semibold text-mainBG text-3xl lg:text-5xl '>Projects</h3>
                </div>
            </div>

            <section className='container font-clashDisplay text-textGray'>
                <div className=" lg:container">
                    <p className="container my-10 lg:max-w-full md:text-lg lg:text-xl">Here are some of the projects we&apos;ve been opportuned to handle. <br /> These include banner designs, website development and more.</p>
                </div>

                <section className='container h-fit my-5'>
                    <div>
                        <SHeadings heading={"Social media banner design"} headingColor={'heroBG'} />
                        <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-9 my-10'>
                            {imageDetails.map(({ id, image, link, brandName }) => {
                                return <Link href={link} key={id} target='_blank'>
                                    <Image src={image} alt={brandName} width={1080} height={1080} className='bg-grayBG' />
                                </Link>
                            })}
                        </div>
                    </div>
                </section>

                <section className='container h-fit my-20'>
                    <div>
                        <SHeadings heading={"Website design & development"} headingColor={'heroBG'} />
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-9 my-10'>
                            {websiteDetails.map(({ id, image, link, brandName, desc }) => {
                                return <Link href={link} key={id} target='_blank' className='bg-grayBG rounded-md'>
                                    <Image src={image} alt={brandName} width={1440} height={874} className='bg-grayBG' />
                                    <div className='flex gap-5 items-center pl-5 py-3'>
                                        <CgWebsite className='text-3xl text-heroBG' />
                                        <h2 className='font-semibold text-xl lg:text-2xl py-4 text-black'>{brandName}</h2>
                                    </div>
                                    <p className=' pl-4 lg:text-lg'>{desc}</p>
                                    <div className='pl-4 scale-90 pb-5'>
                                        <MainBtn bg={'darkBlue'} color={'mainBG'} text={'Visit website'}></MainBtn>
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default ProjectPage;