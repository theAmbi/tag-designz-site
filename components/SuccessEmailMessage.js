import { AiFillCheckCircle } from 'react-icons/ai'

const SuccessEmail = () => {
    return (
        <div className='flex gap-6 p-5 items-center bg-green-600 rounded-lg shadow-lg shadow-slate-700/20 absolute right-20 bottom-10 max-w-[300px]'>
            <AiFillCheckCircle className='text-green-100 text-2xl' />
            <p className='font-clashDisplay font-medium text-mainBG'>Email sent successfully!</p>
        </div>
    )
}

export default SuccessEmail;