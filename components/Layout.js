import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'

const name = 'ins1d30ut'
export const siteTitle = 'PEG'

export default function Layout({ children, home }) {
  return (
    <div class="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pegging physical items to digital assets, NFT, on Bitcoin BSV"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <header class="container mx-auto">


        {home ? (
          <>
                    <img
          src="/images/abstractTEE.gif"
          alt="main background image"
          className="bg-contain"
        />
            {/* <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={120}
              alt={name}
            /> */}
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
          </>
        ) : (
          <>
            {/* <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link> */}
            {/* <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mx-2">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}
