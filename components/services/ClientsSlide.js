import Image from "next/image"
import Link from "next/link"
// import bytes from '@/public/clients/bytes_ahead_limited.png'
// import mediaLabs from '@/public/clients/media-labs.png'
// import tailorMartin from '@/public/clients/tailor_martin.png'
import { RiExternalLinkLine } from 'react-icons/ri'



const ClientsSlide = () => {
    const clients = [
        {
            id: 1,
            logo: "/clients/bytes_ahead_limited.png",
            name: 'bytes ahead limited',
            category: 'IT service professionals',
            link: "https://instagram.com/bytesltd",
        },
        {
            id: 2,
            logo: "/clients/tailor_martin.png",
            name: 'tailor martin',
            category: 'fashion design',
            link: "https://instagram.com/tailormartin",
        },
        {
            id: 3,
            logo: "/clients/media-labs.png",
            name: 'media lab digitals',
            category: 'social media',
            link: "https://medialabdigitals.com/",
        },
    ]

    return (
        <div className='mt-10 font-clashDisplay flex flex-col flex-wrap lg:flex-row gap-5 lg:justify-between'>
            {clients.map(({ id, logo, name, category, link }) => {
                return <Link href={link} target="_blank" className="flex flex-col pb-7 px-3 hover:shadow-2xl hover:shadow-slate-300/20 rounded-lg" key={id}>
                    <div className="min-w-[300px] h-[150px] bg-slate-100  rounded-md my-3 flex justify-center items-center">
                        <Image src={logo} alt={name} width={300} height={150} className="w-[50%]" />
                    </div>

                    <div className=" flex gap-5 items-center">
                        <h2 className='font-medium capitalize text-lg'>{name}</h2>
                        <RiExternalLinkLine className="text-slate-400" />
                    </div>
                    <p className="text-slate-500 capitalize">{category}</p>
                </Link>
            })}

        </div>
    )
}

export default ClientsSlide