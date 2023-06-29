
const MainBtn = ({ bg, color, text }) => {
    return (
        <button className={`mt-10 bg-${bg} text-${color} px-14 rounded-lg py-4 font-clashDisplay font-medium text-xl transition duration-500 ease-in-out lg:text-2xl lg:py-6 hover:brightness-105 active:brightness-105 hover:scale-90 focus:outline-none focus:ring focus:ring-orange-300 `}>{text}</button>
    )
}

export default MainBtn;