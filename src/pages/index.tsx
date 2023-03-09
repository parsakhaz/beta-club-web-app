import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '../style';
import { Navbar, Content, Footer } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Beta Club Web App</title>
        <meta
          name='description'
          content='Gen Z VCs beta club web app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main>
        <div className='bg-[#f9fdff] overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY} `}>
            <div className={`${styles.boxWidth}`}>
              {/* Navbar */}
              <Navbar />
            </div>
          </div>

          <div className={`${styles.paddingX} ${styles.paddingY} flex justify-center bg-gradient-to-b from-[#f9fdff] to-[#dcf6fc] h-screen`}>
            <div className={`${styles.boxWidth}`}>
              <Content />
            </div>
          </div>

          <div className={` bg-[#dcf6fc] ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY} `}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
