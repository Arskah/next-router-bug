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
        <form className={styles.myDiv1} onSubmit={() => router.push(("/page-two"))}>
          {/* Imperative routing fails on type submit */}
          <button type="submit">onSubmit</button>
        </form>
      </main>
    </div>
  )
}
