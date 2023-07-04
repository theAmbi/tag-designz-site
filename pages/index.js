import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import '../app/globals.css'
import About from '@/components/About';
import ServiceSection from '@/components/ServiceSection';
import Review from '@/components/Review';
import EmailUs from '@/components/ReachUs';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/utils/ScrollToTop';
import WhatsApp from '@/components/utils/WhatsApp';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <ServiceSection />
            <Review />
            <EmailUs />
            <Footer />
        </>
        // <main className=' selection:bg-darkBlue selection:text-mainBG'>
        // </main>
    )
}

export default Home;

