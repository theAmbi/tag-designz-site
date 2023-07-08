import { SHeadings } from "./utils/SectionHeadings";
import { reviewers } from "@/reviewers";
import divider from '../public/divider.svg'
import Image from "next/image";
import { Pagination, Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { useEffect, useRef } from "react";


const Review = () => {
    const reviewSectionRef = useRef(null);
    const reviewSectionContainer = useRef(null);


    return (
        <section className="w-full min-h-screen bg-heroBG pb-14" ref={reviewSectionRef}>
            <div className="container pt-20" ref={reviewSectionContainer}>
                <SHeadings subheading={'reviews'} heading={"What our clients have to say"} subColor={'mainBG'} headingColor={'mainBG'} />
                <div className="pt-10 lg:pt-28">
                    <Swiper modules={[Pagination, Autoplay, Navigation]} navigation={true} pagination={{ clickable: true }} autoplay={true} loop={true} style={{
                        "--swiper-pagination-color": "#FFBA08",
                        "--swiper-pagination-bullet-inactive-color": "#f9f9f9",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                    }}>
                        {reviewers.map(({ id, review, name, img }) => {
                            return <SwiperSlide key={id} className="py-5" >
                                <article className="font-clashDisplay bg-mainBG my-6 py-20 px-10 flex flex-col justify-center items-center rounded-3xl w-[100%] lg:w-[85%] h-[470px] max-w-5xl mx-auto relative">
                                    <Image src={img} alt="review-image" width={92} height={92} className=" absolute -top-10" />
                                    <p className="text-textGray text-xl lg:text-2xl max-w-lg mx-auto text-center py-10">{review}</p>
                                    <Image src={divider} alt="review-divider" />
                                    <h6 className="font-semibold text-subTitle pt-10 text-2xl">{name}</h6>
                                </article>
                            </SwiperSlide>
                        })}
                    </Swiper>

                </div>

            </div>
        </section>
    )
}

export default Review;