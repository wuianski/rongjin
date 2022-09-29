import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Link from "next/link";
import About from "../components/about";
import Nav from "../components/nav";
import { motion } from "framer-motion";
import logo from "../public/imgs/logo.png";
import menu from "../public/imgs/menu.png";

// import useMediaQuery from "@mui/material/useMediaQuery";
import fetchData from "../lib/api";

export default function Home({ data }) {
  // console.log(data.about);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>榕錦時光</title>
        <meta name="description" content="榕錦時光" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#FFE8D8",
            }}
          >
            <About about={data.about} />
          </Box>
          {/*** logo  ***/}
          <Box
            sx={{
              position: "fixed",
              zIndex: 9,
              left: 30,
              top: 30,
              width: 147,
              height: 121.63,
            }}
          >
            <Image src={logo} placeholder="blur" alt="bg" />
          </Box>
          {/*** menu  ***/}
          <Box>
            <Nav />
          </Box>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [data] = await Promise.all([
    await fetchData(
      `
      query  {
          about{
            id
            park_introduction
            history
            prospects
            operations_team
            transportation
          }
      }
      `,
      {
        variables: {},
      }
    ),
  ]);

  return {
    props: {
      data: data.data,
    },
    //revalidate: 1,
  };
}
