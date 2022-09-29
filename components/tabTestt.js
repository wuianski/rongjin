import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";

const Tab = ({ href, isSelected, title }) => (
  <Link href={href}>
    <a
      style={{
        padding: 5,
        margin: 5,
        backgroundColor: isSelected ? "blue" : "transparent",
      }}
    >
      {title}
    </a>
  </Link>
);

// const TabContent = () => (
//   <>
//     <Box sx={{ paddingBottom: "80vh" }} id="tab1_id1">
//       1kjsdfhfjhsk
//     </Box>
//     <Box sx={{ paddingBottom: "80vh" }}>2kjsdfhfjhsk</Box>
//     <Box sx={{ paddingBottom: "80vh" }} id="tab1_id3">
//       3kjsdfhfjhsk
//     </Box>
//   </>
// );

export default function tab_test() {
  const { query } = useRouter();
  console.log(query.tabOne);

  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;
  const isTabThreeSelected = !!query.tabThree;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title</h1>
        <Link href="/about">About</Link>

        <nav>
          <Tab
            href="map/?tabOne=true"
            title="Tab One"
            isSelected={isTabOneSelected}
          />
          <Tab
            href="map/?tabTwo=true"
            title="Tab Two"
            isSelected={isTabTwoSelected}
          />
          <Tab
            href="map/?tabThree=true"
            title="Tab Three"
            isSelected={isTabThreeSelected}
          />
        </nav>

        <section>
          <p>{JSON.stringify(query)}</p>
          {/* <Tab1 /> */}
          <Box sx={{ paddingBottom: "80vh" }} id="tab1_id1">
            1kjsdfhfjhsk
          </Box>
          <Box sx={{ paddingBottom: "80vh" }}>2kjsdfhfjhsk</Box>
          <Box sx={{ paddingBottom: "80vh" }} id="tab1_id3">
            3kjsdfhfjhsk
          </Box>
        </section>
      </main>
    </div>
  );
}
