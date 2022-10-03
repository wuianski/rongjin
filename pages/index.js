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

import { useRouter } from "next/router";

export default function Home({ about, menu }) {
  // console.log(data.about);

  /*** use router.query to get value from router.push in nav component ***/
  const router = useRouter();
  const query = router.query;
  const aboutState = query.about;
  //console.log(aboutState);

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
            <About about={about.about} aboutState={aboutState} />
          </Box>
          {/*** logo  ***/}
          <Link href="/">
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
          </Link>
          {/*** menu  ***/}
          <Box>
            <Nav menu={menu.menu} />
          </Box>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [about, menu] = await Promise.all([
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
    await fetchData(
      `
      query  {
          menu{
            id
            business_hours
            contact_us
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
      about: about.data,
      menu: menu.data,
    },
    //revalidate: 1,
  };
}
