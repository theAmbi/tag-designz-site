import { useEffect, useState } from "react";
import { SHeadings } from "./utils/SectionHeadings";
import { AiOutlineLoading } from 'react-icons/ai'
import { sendContactForm } from "@/lib/api";
import SuccessEmail from "./SuccessEmailMessage";


const EmailUs = () => {
    const [emailSent, setEmailSent] = useState(false);
    const initValues = { email: '', message: '', firstName: '' };
    const initState = { values: initValues }
    const [state, setState] = useState(initState);
    const { values, isLoading } = state;

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }))

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev, isLoading: true
        }));

        await sendContactForm(values);
        setState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                email: '',
                firstName: '',
                message: ''
            }
        }))
    };




    return (
        <section className="min-w-full min-h-screen bg-grayBG pb-14 relative ">
            <div className="container pt-20">
                <SHeadings
                    subheading={"need to reach us?"}
                    heading={"Send us an email"}
                    subColor={"textGray"}
                    headingColor={"textOrange"}
                />

                <form className="text-xl lg:text-2xl outline-none font-clashDisplay text-textGray w-full lg:max-w-[80%] lg:mx-auto pt-20"
                >
                    <div className=" flex flex-col gap-y-9 justify-between lg:flex-row">
                        <label htmlFor="email" className="bg-mainBG rounded-3xl">
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                placeholder="your email goes here"
                                className="bg-transparent w-full h-[79px] lg:w-[454px] lg:h-[79px] rounded-3xl px-10 placeholder:text-textPlaceholder outline-none focus:outline-none focus:ring focus:ring-orange-300 required:border-red-500"
                                // value={values.email}
                                onChange={handleChange}
                            />
                        </label>

                        <label htmlFor="firstName" className="bg-mainBG rounded-3xl">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full h-[79px] lg:w-[366px] capitalize lg:h-[79px] rounded-3xl px-10 placeholder:text-textPlaceholder outline-none focus:outline-none focus:ring focus:ring-orange-300 required:border-red-500"
                                value={values.firstName}
                                maxLength={15}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="message">
                            {/* <input type="text" name="message" className=" w-full h-[384px] mt-10 rounded-3xl px-10  placeholder:text-textPlaceholder outline-none" placeholder="email content goes here" /> */}
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                className=" w-full h-fit mt-10 rounded-3xl px-10 py-12 placeholder:text-textPlaceholder outline-none resize-none lg:h-[384px] focus:outline-none focus:ring focus:ring-orange-300 required:border-red-500"
                                placeholder="email content goes here"
                                value={values.message}
                                onChange={handleChange}
                            ></textarea>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={`disabled:opacity-50 ${values.firstName && !values.email && !values.message ? 'enabled:opacity-100' : 'disabled:opacity-50'} mt-10 mb-8 bg-heroBG text-mainBG px-14 rounded-lg py-4 font-clashDisplay font-medium text-xl transition duration-500 ease-in-out cursor-pointer hover:scale-95 lg:text-2xl lg:py-6 focus:outline-none active:brightness-105 hover:brightness-105 focus:ring focus:ring-orange-500`}
                        onClick={handleSubmit}
                        // isLoading={isLoading ? <AiOutlineLoading className="animate-spin" /> : ''}
                        disabled={!values.firstName || !values.email || !values.message}
                    >Send Email
                        {/* {"Send Email" ? <div className="flex items-center gap-8"><AiOutlineLoading className="animate-spin" /></div> : 'Send Email'} */}
                    </button>

                </form>
            </div>

        </section>
    );
};

export default EmailUs;
