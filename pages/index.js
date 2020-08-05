import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form className={styles.myDiv1}>
          {/* Imperative routing fails */}
          <button onClick={() => router.push(("/page-two"))}>Imperative</button>
          {/* Link works fine */}
          {/* <Link href="/page-two">
            <button>Link component</button>
          </Link> */}
        </form>
      </main>
    </div>
  )
}
