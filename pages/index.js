import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import '../app/globals.css'
import About from '@/components/About';
import ServiceSection from '@/components/ServiceSection';
import Review from '@/components/Review';
import EmailUs from '@/components/ReachUs';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    return (
        <>


            {isLoading ? <Preloader /> : <div>
                <Navbar />
                <Hero />
                <About />
                <ServiceSection />
                <Review />
                <EmailUs />
                <Footer />
                <Analytics />
            </div>}


        </>
        // <main className=' selection:bg-darkBlue selection:text-mainBG'>
        // </main>
    )
}

export default Home;

