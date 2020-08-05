import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Router from 'next/router';

export default function PageTwo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form className={styles.myDiv2}>
          {/* Imperative routing fails onClick if type submit */}
          <button onClick={() => Router.push(("/page-three"))}>onClick</button>
        </form>
      </main>
    </div>
  )
}
