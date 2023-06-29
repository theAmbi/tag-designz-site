export const SHeadings = ({ subheading, heading, subColor, headingColor }) => {
    return (
        <>
            <p className={`text-${subColor} uppercase font-clashDisplay font-light tracking-widest mb-3 lg:mb-5 text-md lg:text-xl`}>{subheading}</p>
            <h3 className={`text-${headingColor} font-clashDisplay font-semibold mb-4 text-3xl md:text-4xl lg:text-5xl`}>{heading}</h3>
        </>
    )
}

// SHeadings.defaultProps = {
//     subheading: "lorem ipsum",
//     heading: "lorem ipsum dolor sit amit",
// }