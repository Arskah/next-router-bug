import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
      <title>Page 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form className={styles.myDiv3}>
          {/* Link works fine */}
          <Link href="/">
            <button>Link component</button>
          </Link>
        </form>
        {/* Also button not inside a form works */}
        {/*
          Return to page-two and try again.
          Previously visited pages work fine, so now the button in page-two works
        */}
        <div className={styles.myDiv1}>
          <button onClick={() => router.push(("/page-two"))}>Not a Form</button>
        </div>
      </main>
    </div>
  )
}
