import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function PageTwo() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form className={styles.myDiv2}>
          {/* Imperative routing fails */}
          <button onClick={() => router.push(("/"))}>Imperative</button>
          {/* Link works fine */}
          {/* <Link href="/">
            <button>Link component</button>
          </Link> */}
        </form>
      </main>
    </div>
  )
}
