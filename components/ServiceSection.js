import { SHeadings } from "./utils/SectionHeadings";
import Card from "./utils/Card";

const ServiceSection = () => {
    return (
        <section className="w-full min-h-screen bg-grayBG pb-28">
            <div className="container pt-40">
                <SHeadings subheading={'what we offer'} heading={"Our services"} subColor={'textGray'} headingColor={'textOrange'} />
                <div className="flex flex-col justify-center gap-y-10 md:flex-row md:gap-x-10 md:justify-between lg:flex-row lg:gap-x-10 lg:justify-between">
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;