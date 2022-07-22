import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ResponsiveAppBar from "../components/common/menu";
import React from "react";
import PaperCard from "../components/specific/PaperCard";
import ConferenceCard from "../components/specific/ConferenceCard";
import { paperData } from "../data/PaperData";
import { conferenceData } from "../data/ConferenceData";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Research</title>
        <meta name="description" content="Research." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <ResponsiveAppBar />

      <Box sx={{ pl: 20, pr: 20, pt: 2 }}>
        <h2>Discussion Paper</h2>
        <PaperCard paperData={paperData} />
      </Box>
      <Box sx={{ pl: 20, pr: 20, pt: 2 }}>
        <h2>Conference</h2>
        <ConferenceCard conferenceData={conferenceData} />
      </Box>
      <footer className={styles.footer}></footer>
    </div>
  );
}
