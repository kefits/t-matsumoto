import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from "../components/common/menu";
import ProfileBox from "../components/common/profile"
import { SiTwitter } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="google-site-verification"
          content="2ZQxdUdWgtDnmujNEWuOzW6iI_CY4sWXbh1Ub7zyRW8"
        />
        <title>Tomoki Matsumoto&apos;s site</title>
        <meta name="description" content="Tomoki Matsumoto's webpage." />
        <link rel="icon" href="/favicon.ico" />
        {/* <base href="https://kefits.github.io/t-matsumoto/" /> */}
      </Head>

      <ResponsiveAppBar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tomoki Matsumoto&apos;s site
        </h1>

        <ProfileBox />

        <div className={styles.grid}>
          <a href="https://twitter.com/kefism" className={styles.card}>
            <h2>Twitter</h2>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <SiTwitter size={30} />
            </Box>
          </a>

          <a href="https://github.com/kefits" className={styles.card}>
            <h2>GitHub</h2>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <GrGithub size={30} />
            </Box>
          </a>

          <a
            href="https://www.linkedin.com/in/tomoki514/?locale=en_US"
            className={styles.card}
          >
            <h2>LinkedIn</h2>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IoLogoLinkedin size={30} />
            </Box>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}

export default Home
