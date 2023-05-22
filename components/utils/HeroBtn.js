const HeroBtn = ({ text, bg, textColor }) => {
    return (
        <button className={`bg-${bg} text-${textColor} px-14 rounded-lg py-4 font-clashDisplay font-medium text-xl lg:text-2xl lg:py-6 hover:bg-gray-50`}>{text}</button>
    )
}

export default HeroBtn;