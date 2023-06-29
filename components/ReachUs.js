import { useState } from "react";
import { SHeadings } from "./utils/SectionHeadings";
import MainBtn from "./utils/MainBtn";


const EmailUs = () => {
    const [formValues, setFormValues] = useState({ email: '', firstName: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        // console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending');

        const data = [formValues.email, formValues.firstName, formValues.message]
        // let data = formValues;

        fetch('api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                setSubmitted(true)
                setFormValues(formValues)
                setBody('')
            } else {
                console.log('Response failed!');
            }
        })
    }

    return (
        <section className="min-w-full min-h-screen bg-grayBG pb-14 ">

            <div className="container pt-20">
                <SHeadings subheading={'need to reach us?'} heading={"Send us an email"} subColor={'textGray'} headingColor={'textOrange'} />

                <form action="" className="text-xl lg:text-2xl outline-none font-clashDisplay text-textGray w-full lg:max-w-[80%] lg:mx-auto pt-20">
                    <div className=" flex flex-col gap-y-9 justify-between lg:flex-row">
                        <label htmlFor="email" className="bg-mainBG rounded-3xl">
                            <input type="email" name="email" placeholder="your email goes here" className="w-full h-[79px] lg:w-[454px] lg:h-[79px] rounded-3xl px-10 placeholder:text-textPlaceholder outline-none focus:outline-none focus:ring focus:ring-orange-300" onChange={handleChange} />
                        </label>

                        <label htmlFor="firstName" className="bg-mainBG rounded-3xl">
                            <input type="text" name="firstName" placeholder="First Name" className="w-full h-[79px] lg:w-[366px] lg:h-[79px] rounded-3xl px-10 placeholder:text-textPlaceholder outline-none focus:outline-none focus:ring focus:ring-orange-300" maxLength={15} onChange={handleChange} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="message">
                            {/* <input type="text" name="message" className=" w-full h-[384px] mt-10 rounded-3xl px-10  placeholder:text-textPlaceholder outline-none" placeholder="email content goes here" /> */}
                            <textarea name="message" cols="30" rows="10" className=" w-full h-fit mt-10 rounded-3xl px-10 py-12 placeholder:text-textPlaceholder outline-none resize-none lg:h-[384px] focus:outline-none focus:ring focus:ring-orange-300" placeholder="email content goes here" onChange={handleChange}></textarea>
                        </label>
                    </div>

                    <button type="submit" className={`mt-10 mb-8 bg-heroBG text-mainBG px-14 rounded-lg py-4 font-clashDisplay font-medium text-xl transition duration-500 ease-in-out hover:scale-95 lg:text-2xl lg:py-6 focus:outline-none active:brightness-105 hover:brightness-105 focus:ring focus:ring-orange-500`} onClick={(e) => handleSubmit(e)}>Send Email</button>

                </form>
            </div>

        </section>
    )
}

export default EmailUs;