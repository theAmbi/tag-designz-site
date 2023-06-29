import { cardDetails } from "@/cardDetails";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

const Card = () => {

    return (
        cardDetails.map(({ id, backgroundImage, heading, heading2, paragraph, dest }) => {
            return <Link href={dest} key={id} className="group">
                <article className={` bg-mainBG mt-10 w-fit flex flex-col justify-center items-center pb-20 rounded-3xl relative overflow-hidden cursor-pointer transition duration-500 ease-linear lg:hover:scale-110 lg:hover:shadow-2xl lg:hover:shadow-slate-600/10 hover:bg-heroBG`}  >
                    <Image src={backgroundImage} alt="card-img" width={320} height={232} className="bg-gray-100 " />
                    <h4 className="text-3xl font-clashDisplay font-semibold mt-10 max-w-xs group-hover:text-mainBG">{heading}</h4>
                    <h4 className="text-3xl font-clashDisplay font-semibold max-w-xs group-hover:text-mainBG">{heading2}</h4>
                    <p className="font-clashDisplay text-textGray text-xl max-w-xs px-10 pt-10 text-center group-hover:text-grayBG ">{paragraph}</p>
                </article>
            </Link>
        })
    )
}



export default Card;