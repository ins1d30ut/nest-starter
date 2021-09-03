import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export const siteTitle = 'First Post'


export default function FirstPost() {
  return (
    <Layout post>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>First Post Page</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  )
}
