import { useState } from "react"
import ServiceTab from "../utils/ServiceTab";

const DesignServices = () => {


    const specificServices = [
        {
            title: 'Logo Design',
            description: "Your logo is the face of your brand, and we excel in creating striking and memorable logos that perfectly encapsulate your company's identity. Our talented team of designers will work closely with you to understand your brand values, target audience, and market positioning, resulting in a logo that truly stands out in the competitive business landscape.",
            id: 1,
        },
        {
            title: 'UI Design',
            description: "In the digital realm, user experience is paramount. Our UI design services are dedicated to creating intuitive and visually appealing interfaces that effortlessly guide users through your website or application. We ensure a seamless blend of aesthetics and functionality, enhancing user engagement and driving conversion rates.",
            id: 2,
        },
        {
            title: 'Image Editing',
            description: "Pictures can tell a thousand stories, and with our image editing expertise, we make sure those stories are captivating and impactful. Whether you need image retouching, background removal, color correction, or any other enhancement, our skilled professionals will transform your visuals into stunning works of art.",
            id: 3,
        },
        {
            title: 'Illustrations',
            description: "When words fall short, illustrations come to the rescue. Our team of talented illustrators can bring your ideas to life through bespoke illustrations that add a touch of uniqueness and creativity to your projects. From character designs to infographic illustrations, we create captivating visuals that communicate your message effectively.",
            id: 4,
        },
    ]


    return (
        <>
            <section className="mb-20">
                <div className=" lg:container">
                    <p className="container my-10 lg:max-w-full md:text-lg lg:text-xl">Graphic design is a crucial aspect of creating a visually appealing and engaging webpage. It involves the use of various elements like typography, colors, images, and layout to communicate messages effectively and enhance the user experience. <br /><br /></p>
                    {/* <div className=" bg-gray-100 bg-center w-full h-[300px] lg:my-0 bg-designFeatured bg-cover lg:bg-cover ">
                </div> */}
                </div>
                <p className="container my-10 md:text-lg lg:text-xl lg:pb-10">At TAG Designz, we understand the power of visually captivating designs in leaving a lasting impression. We take immense pride in offering a wide range of top-notch graphic design services tailored to meet your unique needs. From crafting unforgettable <span className="font-medium">logos</span> to creating captivating <span className="font-medium">user interfaces</span>, from <span className="font-medium">enhancing images</span> to designing <span className="font-medium">custom illustrations and icons</span>, we are here to bring your creative vision to life.</p>
                {/* <p className="container my-10 px-5 text-mainBG bg-heroBG md:text-lg lg:text-xl lg:py-10"><span className="font-medium">You have a print design? <span className="text-heroBG">We got you covered.</span> <br /> Have a merch design in mind to share with your fans? <span className="text-heroBG">We are ready to put that idea on a tshirt!</span></span></p> */}

                <div className='container flex flex-wrap gap-4 overflow-hidden text-mainBG lg:justify-between'>
                    <div className='w-[150px] h-[70px] bg-grayBG text-center flex justify-center items-center font-medium bg-logoDesign bg-cover bg-center transition duration-700 ease-in-out hover:scale-105 lg:w-[210px] lg:h-[100px]'>
                        <div className='w-full h-full bg-black/40 flex justify-center items-center'>
                            <p className='drop-shadow-md lg:text-xl'>Logo Design</p>
                        </div>
                    </div>
                    <div className='w-[150px] h-[70px] bg-grayBG text-center flex justify-center items-center font-medium bg-illustration bg-cover bg-center transition duration-700 ease-in-out hover:scale-105 lg:w-[210px] lg:h-[100px]'>
                        <div className='w-full h-full bg-black/30 flex justify-center items-center'>
                            <p className='drop-shadow-md lg:text-xl'>Illustration</p>
                        </div>
                    </div>
                    <div className='w-[150px] h-[70px] bg-grayBG text-center flex justify-center items-center font-medium bg-uiDesign bg-cover bg-center transition duration-700 ease-in-out hover:scale-105 lg:w-[210px] lg:h-[100px]'>
                        <div className='w-full h-full bg-black/30 flex justify-center items-center'>
                            <p className='drop-shadow-md lg:text-xl'>UI Design</p>
                        </div>
                    </div>
                    <div className='w-[150px] h-[70px] bg-grayBG text-center flex justify-center items-center font-medium bg-imageEdit bg-cover bg-center transition duration-700 ease-in-out hover:scale-105 lg:w-[210px] lg:h-[100px]'>
                        <div className='w-full h-full bg-black/30 flex justify-center items-center'>
                            <p className='drop-shadow-md lg:text-xl'>Image Editing</p>
                        </div>
                    </div>
                </div>
            </section >

            <div className="container h-fit mb-20">
                {specificServices.map(({ id, title, description }) => {
                    return <ServiceTab title={title} description={description} key={id} />
                })}
            </div>
        </>
    )
}

export default DesignServices