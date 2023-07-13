import ErrorImage from '@/public/404.svg';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import errorBotGIF from '@/public/error-bot.gif'

const Custom404 = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100" style={{ background: '#FFFFFF' }}>
            <Head>
                <Link href={'https://api.fontshare.com/v2/css?f[]=clash-display@600&display=swap'} />
            </Head>
            <Navbar />
            <div className="text-center font-clashDisplay" style={{ fontFamily: 'Clash Display', textAlign: 'center', marginTop: '60px' }}>
                {/* <Image alt='error-image' src={ErrorImage} width={400} height={400} style={{ marginBottom: '40px' }} fetchPriority='high' /> */}
                <Image alt='error-image' src={errorBotGIF} width={400} height={400} style={{ marginBottom: '40px' }} fetchPriority='high' />
                <h1 className="text-6xl font-bold mb-2" style={{ fontSize: '4rem', color: '#151421', marginBottom: '30px' }}>Oops!</h1>
                <p className="text-2xl text-gray-600 mb-8" style={{ color: '#606671', fontSize: '1.5rem' }}>Something went wrong. <br />Please try again.</p>
                <Link href={'/'}>
                    <button style={
                        {
                            padding: '18px 26px',
                            color: 'white',
                            background: '#F06435',
                            fontFamily: 'Clash Display',
                            fontWeight: '500',
                            fontSize: '1.4rem',
                            borderRadius: '8px',
                            outline: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Custom404;