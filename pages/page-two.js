import Head from 'next/head'
import Link from "next/link";
import styled from "styled-components";
import styles from '../styles/Home.module.css'
import CompWithProp from "../components/CompWithProp";
import Router from 'next/router';

const StyledComp = styled(CompWithProp)`
  height: 400px;
  width: 400px;
  border: 5px yellow solid;
`;

export default function PageTwo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StyledComp elementType="form">
          {/* Imperative routing fails */}
          <button onClick={() => Router.push(("/"))}>Imperative</button>
          {/* Link works fine */}
          {/* <Link href="/">
            <button>Link component</button>
          </Link> */}
        </StyledComp>
      </main>
    </div>
  )
}
