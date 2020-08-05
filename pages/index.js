import Head from 'next/head'
import Link from "next/link";
import styled from "styled-components";
import styles from '../styles/Home.module.css'
import CompWithProp from "../components/CompWithProp";
import { useRouter } from 'next/router';

const StyledComp = styled(CompWithProp)`
  height: 400px;
  width: 400px;
  border: 1px solid red;
`;

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StyledComp elementType="form">
          {/* Imperative routing fails */}
          <button onClick={() => router.push(("/page-two"))}>Imperative</button>
          {/* Link works fine */}
          {/* <Link href="/page-two">
            <button>Link component</button>
          </Link> */}
        </StyledComp>
      </main>
    </div>
  )
}
