//import * as React from "react";
import React, { useRef, useState, useEffect } from "react";

import { scrollIntoView } from "seamless-scroll-polyfill";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

import dynamic from "next/dynamic";
import fetchData from "../lib/api";

import Nav from "../components/nav";
import BrandKindA from "../components/BrandKindA";
import BrandKindB from "../components/BrandKindB";
import BrandKindC from "../components/BrandKindC";
import EventKindA from "../components/EventKindA";
import EventKindD from "../components/EventKindD";
import SpotModal from "../components/spotModal";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/imgs/logo.png";
import roadName1 from "../public/imgs/map/roadName1.png";
import roadName2 from "../public/imgs/map/roadName2.png";
import cloud from "../public/imgs/map/cloud.png";
import e1_1 from "../public/imgs/map/elements/1-1.png";
import e2_1 from "../public/imgs/map/elements/2-1n.png";
import e3_4 from "../public/imgs/map/elements/3-4.png";
import e4_2 from "../public/imgs/map/elements/4-2.png";
import e3_6_1 from "../public/imgs/map/elements/3-6-1.png";
import e3_6_2 from "../public/imgs/map/elements/3-6-2.png";
import e3_7 from "../public/imgs/map/elements/3-7.png";
import e1_3 from "../public/imgs/map/elements/1-3.png";
import e1_4 from "../public/imgs/map/elements/1-4.png";
import e3_9 from "../public/imgs/map/elements/3-9.png";
import e4_4_1 from "../public/imgs/map/elements/4-4-1.png";
import e4_4_2 from "../public/imgs/map/elements/4-4-2.png";
import e1_6 from "../public/imgs/map/elements/1-6.png";
import e1_7 from "../public/imgs/map/elements/1-7.png";
import e2_3 from "../public/imgs/map/elements/2-3.png";
import e3_11 from "../public/imgs/map/elements/3-11.png";
import e1_9 from "../public/imgs/map/elements/1-9.png";
import e3_13 from "../public/imgs/map/elements/3-13.png";
import e1_12 from "../public/imgs/map/elements/1-12.png";
import e1_13 from "../public/imgs/map/elements/1-13.png";
import e3_15 from "../public/imgs/map/elements/3-15.png";
import e2_5 from "../public/imgs/map/elements/2-5.png";
import e1_14_b from "../public/imgs/map/elements/1-14_b.png";
import e3_17 from "../public/imgs/map/elements/3-17.png";
import e3_18_1 from "../public/imgs/map/elements/3-18-1.png";
import e3_18_2 from "../public/imgs/map/elements/3-18-2.png";
import e2_7 from "../public/imgs/map/elements/2-7.png";
import e2_8 from "../public/imgs/map/elements/2-8.png";
import e3_16 from "../public/imgs/map/elements/3-16.png";
import e1_5 from "../public/imgs/map/elements/1-5.png";
import e1_2_1 from "../public/imgs/map/elements/1-2-1.png";
//import spot_img from "../public/imgs/spot.png";

/*****************/
/*** map stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  height: 100,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    //height: 100,
    //padding: 0,
  },
}));
/*******************/
/*** tab setting ***/
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#000",
  },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontFamily: "GenWanMin TW",
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "100%",
    letterSpacing: "0.025em",
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.5)",
    "&.Mui-selected": { color: "#000 " },
    "&.Mui-focusVisible": { backgroundColor: "#000" },

    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      marginRight: theme.spacing(0),
      minHeight: 24,
      //maxWidth: 100,
      minWidth: "auto",
      padding: "18px 6px 0px 6px",
    },
  })
);
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    /** !!important to not use default mui tab set up to avoid rerender **/
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {<Box mb={0}>{children}</Box>}
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*********************/
/*** main function ***/
export default function Map({
  brand_kind_1,
  brand_kind_2,
  brand_kind_3,
  menu,
  event_kind_1,
  event_kind_4,
  spot,
}) {
  /*****************/
  /*** tab state ***/
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /***********************************************************************/
  /*** use router.query to get value from router.push in nav component ***/
  const router = useRouter();
  const query = router.query;
  const tabState = query.cat;
  //console.log(tabState);
  useEffect(() => {
    if (tabState === "1") {
      //console.log("switch to tab1");
      /*** switch to tab1 ***/
      setValue(0);
    } else if (tabState === "2") {
      //console.log("switch to tab2");
      /*** switch to tab2 ***/
      setValue(1);
    } else if (tabState === "3") {
      //console.log("switch to tab3");
      /*** switch to tab3 ***/
      setValue(2);
    } else if (tabState === "4") {
      //console.log("switch to tab3");
      /*** switch to tab3 ***/
      setValue(3);
    } else if (tabState === "5") {
      //console.log("switch to tab3");
      /*** switch to tab3 ***/
      setValue(4);
    }
  }, [tabState]);

  /*********************************************************/
  /*** click on map and switch tab and scroll to element ***/

  /*** 享時光 BrandKindA ***/
  const executeKaID1 = async (event) => {
    setValue(0);
    /*** 九州鬆餅 BrandKindA id1 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID1"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID2 = async (event) => {
    setValue(0);
    /*** 金錦町 BrandKindA id2 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID2"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID3 = async (event) => {
    setValue(0);
    /*** JeeWoo 吉屋 BrandKindA id3 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID3"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID4 = async (event) => {
    setValue(0);
    /*** 臺虎居餃屋 BrandKindA id4 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID4"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID5 = async (event) => {
    setValue(0);
    /*** 日日禾日 BrandKindA id5 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID5"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID6 = async (event) => {
    setValue(0);
    /*** 老優雅 BrandKindA id6 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID6"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID7 = async (event) => {
    setValue(0);
    /*** 興波咖啡 BrandKindA id7 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID7"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKaID8 = async (event) => {
    setValue(0);
    /*** 興波咖啡 BrandKindA id8 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Ka_ID8"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };

  /*** 遇身心 BrandKindB ***/
  const executeKbID1 = async (event) => {
    setValue(1);
    /*** 寵物點子 BrandKindB id1 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Kb_ID1"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKbID2 = async (event) => {
    setValue(1);
    /*** CiPU BrandKindB id2 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Kb_ID2"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKbID3 = async (event) => {
    setValue(1);
    /*** Mon Bonbon BrandKindB id3 ***/
    await delay(1000);
    scrollIntoView(document.getElementById("Kb_ID3"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };

  /*** 蒔生活 BrandKindC ***/
  const executeKcID1 = async (event) => {
    setValue(2);
    await delay(1000);
    /*** 吉品養生 BrandKindC id1 ***/
    scrollIntoView(document.getElementById("Kc_ID1"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKcID2 = async (event) => {
    //console.log("click executeTab");
    setValue(2);
    await delay(1000);
    //console.log("click");
    /*** 花筏亭 BrandKindC id2 ***/
    scrollIntoView(document.getElementById("Kc_ID2"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKcID3 = async (event) => {
    setValue(2);
    await delay(1000);
    /*** 京町　山本屋 BrandKindC id3 ***/
    scrollIntoView(document.getElementById("Kc_ID3"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };
  const executeKcID4 = async (event) => {
    setValue(2);
    await delay(1000);
    /*** 好丘 BrandKindC id4 ***/
    scrollIntoView(document.getElementById("Kc_ID4"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  };

  /*****************************/
  /*** organize spot's data ***/
  const mySpot = spot.spot.map((s) => {
    const result = {
      id: s.id,
      name: s.name,
      image:
        s.image &&
        s.image.map((s_img, i) => {
          return s_img.directus_files_id.filename_disk;
        }),
    };

    return result;
  });
  //console.log(mySpot[0].image);

  return (
    <>
      <Box sx={{ backgroundColor: "#ff0000" }}>
        {/*** logo  ***/}
        <Link href="/">
          <Box
            sx={{
              position: "fixed",
              zIndex: 9,
              left: 30,
              top: { xs: 15, md: 30 },
              width: { xs: 147 * 0.7, md: 147 },
              height: 121.63,
              cursor: "pointer",
            }}
          >
            <Image src={logo} placeholder="blur" alt="bg" />
          </Box>
        </Link>
        {/*** menu  ***/}
        <Box>
          <Nav menu={menu.menu} />
        </Box>

        {/***********/}
        {/*** map ***/}
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#FFE8D8",
            zIndex: 0,
            color: "#000",
            width: { xs: "100vw", md: "50vw" },
            height: { xs: "50vh", md: "100vh" },
            overflowY: "hidden",
            // overflowX: "scroll",
            // scrollbarWidth: "none",
            // "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/*** map background ***/}
          <Box
            sx={{
              backgroundColor: "#FFE8D8",
              width: { xs: 3264 * 0.7, md: 3264 },
              height: "100%",
            }}
          >
            {/*** cloud element ***/}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "unset", md: "calc(50vh - 100px)" },
                top: { xs: "calc(0vh + 30px)", md: "unset" },
              }}
            >
              {/*** cloud right element ***/}
              <Box
                sx={{
                  position: "relative",
                  top: { xs: 0, md: -38 },
                  left: { xs: 1632 * 0.7, md: 1632 },
                  width: { xs: 1632 * 0.7, md: 1632 },
                  height: { xs: 194 * 0.6, md: 194 },
                }}
              >
                <Image
                  src={cloud}
                  placeholder="blur"
                  alt="bg"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              {/*** cloud left element ***/}
              <Box
                sx={{
                  position: "relative",
                  top: { xs: "calc(0vh - 90px)", md: -194 },
                  left: 0,
                  width: { xs: 1632 * 0.6, md: 1632 },
                  height: { xs: 194 * 0.6, md: 194 },
                }}
              >
                <Image
                  src={cloud}
                  placeholder="blur"
                  alt="bg"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
            {/*** road name1 element ***/}
            <Box
              sx={{
                position: "fixed",
                bottom: { xs: "calc(50vh + 0px)", md: "calc(50vh - 350px)" },
                left: { xs: "calc(50vw - 100px)", md: "calc(25vw - 150px)" },
                width: { xs: 605 * 0.15, md: 605 * 0.5 },
                height: { xs: 231 * 0.15, md: 231 * 0.5 },
                display: "block",
              }}
            >
              <Image
                src={roadName1}
                placeholder="blur"
                alt="bg"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            {/*** main map elements ***/}
            <Box
              pr={"0px"}
              pl={"100px"}
              sx={{
                flexGrow: 1,
                width: { xs: 3111 * 0.7, md: 3111 },
                position: "absolute",
                bottom: { xs: "unset", md: "calc(50vh - 210px)" },
                top: { xs: "calc(50vh - 260px)", md: "unset" },
              }}
            >
              {/*** grid 1 row ***/}
              <Grid container spacing={2} columns={38}>
                <Grid item xs={2}>
                  <Item>
                    <Box
                      id="1-1"
                      ml={2}
                      mr={-6}
                      mt={0}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        //height: 100,
                      }}
                    >
                      <Image
                        src={e1_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  {/*** 綠沐廣場 ***/}
                  <Item>
                    <Box
                      id="1-2-1"
                      mt={-3}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_2_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** spot_8 ***/}
                  <Item>
                    <Box
                      id="1-2-2"
                      mr={3}
                      mt={{ xs: "-20px", md: "-28px" }}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[7]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** spot_9 ***/}
                  <Item>
                    <Box
                      id="1-2-3"
                      mr={3}
                      mt={{ xs: "-20px", md: "-28px" }}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[8]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box
                      id="1-3"
                      ml={1}
                      mr={-8}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_3}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_10 ***/}
                    <Box id="1-4">
                      <Box
                        mr={-8}
                        mt={{ xs: "-20px", md: "-28px" }}
                        sx={{
                          position: "relative",
                          height: { xs: 28 * 0.7, md: 28 },
                        }}
                      >
                        <SpotModal mySpot={mySpot[9]} />
                      </Box>
                      <Box
                        mr={-8}
                        ml={0}
                        sx={{
                          position: "relative",
                          height: { xs: 100 * 0.7, md: 100 },
                        }}
                      >
                        <Image
                          src={e1_4}
                          alt="element"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  {/*** 時光巷弄 ***/}
                  <Item>
                    <Box
                      id="1-5"
                      mr={3}
                      mt={-6}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_5}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box
                      id="1-6"
                      ml={{ xs: 0, md: 1 }}
                      mr={{ xs: -6, md: -7 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_6}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 寵物點子 BrandKindB id1 ***/}
                  <Item>
                    <Box
                      onClick={executeKbID1}
                      id="1-7"
                      ml={0}
                      mr={-4}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e1_7}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_11 ***/}
                    <Box
                      mr={0}
                      mt={{ xs: "-20px", md: "-28px" }}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[10]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box
                      id="1-9"
                      ml={-6}
                      mr={-1}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_9}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box
                      id="1-10"
                      ml={-8}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_6}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 2F 香椿露臺 ***/}
                  <Item>
                    {/*** spot_12 ***/}
                    <Box id="1-12">
                      <Box
                        mr={0}
                        mt={{ xs: "-20px", md: "-28px" }}
                        sx={{
                          position: "relative",
                          height: { xs: 28 * 0.7, md: 28 },
                        }}
                      >
                        <SpotModal mySpot={mySpot[11]} />
                      </Box>
                      <Box
                        mr={{ xs: -2, md: -3 }}
                        ml={{ xs: -2.5, md: -2 }}
                        mt={-2}
                        sx={{
                          position: "relative",
                          height: { xs: 150 * 0.7, md: 150 },
                        }}
                      >
                        <Image
                          src={e1_12}
                          alt="element"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  {/*** 榕錦社區保健室 ***/}
                  <Item>
                    <Link href="/community_health_care">
                      <Box
                        id="1-13"
                        ml={{ xs: -5, md: -5 }}
                        mt={{ xs: -0.6, md: 0 }}
                        sx={{
                          position: "relative",
                          height: { xs: 100 * 0.7, md: 100 },
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={e1_13}
                          alt="element"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Link>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 2F 閱讀客廳 ***/}
                  <Item>
                    <Box
                      id="1-14"
                      mt={{ xs: "-75px", md: "-90px" }}
                      ml={{ xs: -7, md: -9 }}
                      sx={{
                        position: "relative",
                        height: { xs: 150 * 0.7, md: 150 },
                      }}
                    >
                      <Image
                        src={e1_14_b}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box
                      id="1-16"
                      ml={{ xs: -6, md: -4 }}
                      mr={-7}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_9}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    {/*** spot_13 ***/}
                    <Box
                      mr={-8}
                      mt={{ xs: "-20px", md: "-28px" }}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[12]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={7}>
                  <Item>
                    {/*** spot_14 ***/}
                    <Box
                      mr={-8}
                      mt={{ xs: "-20px", md: "-28px" }}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[13]} />
                    </Box>
                  </Item>
                </Grid>
              </Grid>
              {/*** grid 2 row ***/}
              <Grid
                container
                spacing={2}
                columns={38}
                mt={{ xs: -8, md: -5.2 }}
              >
                <Grid item xs={3}>
                  {/*** 吉品養生 BrandKindC id1 ***/}
                  <Item>
                    <Box
                      onClick={executeKcID1}
                      id="2-1"
                      ml={-2}
                      mr={-3}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e2_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_7 ***/}
                    <Box
                      mr={0}
                      mt={8}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[6]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={13}>
                  <Item>
                    <Box></Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box
                      id="2-3"
                      ml={-4.5}
                      mr={1.0}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e2_3}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Box></Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 服務中心 ***/}
                  <Item>
                    <Box
                      id="2-5"
                      mt={"-40px"}
                      ml={{ xs: -10, md: -13 }}
                      sx={{
                        position: "relative",
                        height: { xs: 103 * 0.7, md: 103 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e2_5}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box
                      id="2-6"
                      ml={-4}
                      mr={-2}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_9}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={0.5}>
                  <Item>
                    <Box></Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box
                      id="2-7"
                      mt={"-50px"}
                      //ml={-3}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e2_7}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  {/*** 2F 小曉露臺 ***/}
                  <Item>
                    <Box
                      id="2-8"
                      mt={"-50px"}
                      ml={-6}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e2_8}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
              </Grid>
              {/*** grid 3 row ***/}
              <Grid container spacing={2} columns={38} mt={{ xs: -8, md: -5 }}>
                <Grid item xs={1}>
                  <Item>
                    <Box></Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <Box
                      id="3-1"
                      ml={-7}
                      mr={-1}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e1_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <div></div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 九州鬆餅 BrandKindA id1 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID1}
                      id="3-4"
                      ml={-4}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_4}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <div></div>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  {/*** 金錦町 BrandKindA id2 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID2}
                      id="3-6-1"
                      ml={{ xs: -5, md: -4.2 }}
                      mr={{ xs: -1, md: -1.8 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_6_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  {/*** 花筏亭 BrandKindC id2 ***/}
                  <Item>
                    <Box
                      onClick={executeKcID2}
                      id="3-6-2"
                      ml={-7}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_6_2}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 京町山本屋 BrandKindC id3 ***/}
                  <Item>
                    <Box
                      onClick={executeKcID3}
                      id="3-7"
                      ml={-4}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_7}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <div></div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  {/*** 吉屋 BrandKindA id3 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID3}
                      id="3-9"
                      ml={-4}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_9}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <div></div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  {/*** 臺虎居餃屋 BrandKindA id4 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID4}
                      id="3-11"
                      ml={-6}
                      mr={{ xs: 3, md: 4 }}
                      mt={{ xs: 2, md: 3 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_11}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 日日禾日 BrandKindA id5 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID5}
                      id="3-13"
                      mt={3}
                      ml={-4}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_13}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    <div></div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  {/*** 好丘 BrandKindC id4 ***/}
                  <Item>
                    <Box
                      onClick={executeKcID4}
                      id="3-15"
                      mt={3}
                      ml={-8}
                      mr={4}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_15}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  {/*** 時光廣場 ***/}
                  <Item>
                    <Box
                      id="3-16"
                      mt={5}
                      ml={-6}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e3_16}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  {/*** 老優雅 BrandKindA id6 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID6}
                      id="3-17"
                      mt={3}
                      ml={-1}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_17}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 興波咖啡 BrandKindA id7 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID7}
                      id="3-18-1"
                      mt={3}
                      ml={{ xs: -5, md: -4.2 }}
                      mr={{ xs: -4.2, md: -4.2 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e3_18_2}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** 興波咖啡 BrandKindA id8 ***/}
                  <Item>
                    <Box
                      onClick={executeKaID8}
                      id="3-18-2"
                      mt={3}
                      ml={{ xs: -5, md: -4.2 }}
                      mr={{ xs: -1, md: 0 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                    >
                      <Image
                        src={e3_18_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
              </Grid>
              {/*** grid 4 row ***/}
              <Grid container spacing={2} columns={38} mt={{ xs: -8, md: -5 }}>
                <Grid item xs={4}>
                  <Item></Item>
                </Grid>
                <Grid item xs={2}>
                  <Item>
                    <Box
                      id="4-2"
                      ml={{ xs: -5, md: -6 }}
                      mr={{ xs: 2, md: 3 }}
                      mt={{ xs: 1, md: 1.5 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                      }}
                    >
                      <Image
                        src={e4_2}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_6 ***/}
                    <Box
                      mr={0}
                      mt={8}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[5]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1}>
                  {/*** CiPU BrandKindC id2 ***/}
                  <Item>
                    <Box
                      onClick={executeKbID2}
                      id="4-4-1"
                      mt={"-30px"}
                      ml={-2}
                      mr={-6}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e4_4_1}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  {/*** Mon Bonbon BrandKindB id3 ***/}
                  <Item>
                    <Box
                      onClick={executeKbID3}
                      id="4-4-2"
                      mt={"-30px"}
                      ml={{ xs: -1.2, md: -4 }}
                      mr={{ xs: -3, md: -4 }}
                      sx={{
                        position: "relative",
                        height: { xs: 100 * 0.7, md: 100 },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={e4_4_2}
                        alt="element"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_5 ***/}
                    <Box
                      mr={0}
                      mt={8}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[4]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_4 ***/}
                    <Box
                      mr={0}
                      mt={8}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[3]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_3 ***/}
                    <Box
                      mr={0}
                      mt={8}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[2]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}>
                  <Item>
                    {/*** spot_2 ***/}
                    <Box
                      mr={0}
                      mt={8}
                      sx={{
                        position: "relative",
                        height: { xs: 28 * 0.7, md: 28 },
                      }}
                    >
                      <SpotModal mySpot={mySpot[1]} />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1}>
                  <Item>
                    <Box id="4-6">
                      <Box
                        ml={{ xs: -4, md: -9 }}
                        mr={{ xs: 1.8, md: 2 }}
                        sx={{
                          position: "relative",
                          height: { xs: 100 * 0.7, md: 100 },
                        }}
                      >
                        <Image
                          src={e1_9}
                          alt="element"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                      {/*** spot_1 ***/}
                      <Box
                        mr={0}
                        t={{ xs: "-20px", md: "-28px" }}
                        sx={{
                          position: "relative",
                          height: { xs: 28 * 0.7, md: 28 },
                        }}
                      >
                        <SpotModal mySpot={mySpot[0]} />
                      </Box>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
              {/*** road 金山南路 element ***/}
              <Box
                id="rightest"
                sx={{
                  position: "absolute",
                  bottom: { xs: "calc(0vh + 13vh)", md: "calc(0vh + 0px)" },
                  right: 0,
                  width: { xs: 270 * 0.2, md: 270 * 0.5 },
                  height: { xs: 488 * 0.2, md: 488 * 0.5 },
                  // width: 270 * 0.5,
                  // height: 488 * 0.5,
                  display: "block",
                }}
              >
                <Image
                  src={roadName2}
                  placeholder="blur"
                  alt="bg"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/************/}
        {/*** list ***/}
        <Box
          sx={{
            position: "fixed",
            zIndex: 1,
            width: { xs: "100vw", md: "50vw" },
            height: { xs: "50vh", md: "100vh" },
            backgroundColor: "#fff",
            right: 0,
            top: { xs: "unset", md: 0 },
            bottom: { xs: 0, md: "unset" },
            overflowY: "auto",
            boxShadow: "19px 48px 88px #000000",
          }}
        >
          <Box>
            <Box
              pt={{ xs: 0, md: "80px" }}
              pb={0}
              ml={4}
              mr={4}
              sx={{
                position: "fixed",
                width: { xs: "calc(100vw - 64px)", md: "calc(50vw - 64px)" },
                borderBottom: "1px solid #000",
                backgroundColor: "#fff",
                zIndex: 9,
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <StyledTab label="享時光" {...a11yProps(0)} />
                <StyledTab label="蒔生活" {...a11yProps(1)} />
                <StyledTab label="遇身心" {...a11yProps(2)} />
                <StyledTab label="市集/展覽" {...a11yProps(3)} />
                <StyledTab label="講座/課程" {...a11yProps(4)} />
              </StyledTabs>
            </Box>

            <TabPanel value={value} index={0}>
              <BrandKindA brand_kind1={brand_kind_1.brand} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BrandKindB brand_kind2={brand_kind_2.brand} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <BrandKindC brand_kind3={brand_kind_3.brand} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <EventKindA event_kind_1={event_kind_1.event} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <EventKindD event_kind_4={event_kind_4.event} />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [
    brand_kind_1,
    brand_kind_2,
    brand_kind_3,
    menu,
    event_kind_1,
    event_kind_4,
    spot,
  ] = await Promise.all([
    await fetchData(
      `
      query {
        brand(filter:{kind:{_eq:"享時光"}}){
            id
            name
            introduction
            cover{
              id 
              filename_disk
              }
            logo{
              id
              filename_disk
            }
            contact_us
          }
      }
      `,
      {
        variables: {},
      }
    ),
    await fetchData(
      `
      query {
        brand(filter:{kind:{_eq:"蒔生活"}}){
            id
            name
            introduction
            cover{
              id 
              filename_disk
              }
            logo{
              id
              filename_disk
            }
            contact_us
          }
      }
      `,
      {
        variables: {},
      }
    ),
    await fetchData(
      `
      query {
        brand(filter:{kind:{_eq:"遇身心"}}){
            id
            name
            introduction
            cover{
              id 
              filename_disk
              }
            logo{
              id
              filename_disk
            }
            contact_us
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
    await fetchData(
      `
      query {
        event (
          filter:{
            status:{_eq:"published"},
            kind:{_eq:"市集"} ,
            # location_1:{_eq:"綠沐廣場"} ,
            # startDate: {_between:[ "2022-08-01", "2022-08-10"]},
            # startDate: {_between:[ "$NOW(-1 days)", "$NOW(+1 days)"]},
          },
          # limit:4,
          sort:["sort", "-startDate"]
        ) 
        {
            id
            title
            cover{
              id 
              filename_disk
            }
            main_content
            sub_content
            location_1
            location_2
            status 
            startDate
            endDate
            startTime
            endTime
            kind
        }
      }
      `,
      {
        variables: {},
      }
    ),
    await fetchData(
      `
      query {
        event (
          filter:{
            status:{_eq:"published"},
            kind:{_eq:"課程"} ,
            # location:{_eq:"1"} ,
            # startDate: {_between:[ "2022-08-01", "2022-08-10"]},
            # startDate: {_between:[ "$NOW(-1 days)", "$NOW(+1 days)"]},
          },
          # limit:4,
          sort:["sort", "-startDate"]
        ) 
        {
            id
            title
            cover{
              id 
              filename_disk
            }
            main_content
            sub_content
            location_1
            location_2
            status 
            startDate
            endDate
            startTime
            endTime
            kind
        }
      }
      `,
      {
        variables: {},
      }
    ),
    await fetchData(
      `
      query {
        spot {
          id
          name
          image {
            id
            directus_files_id {
                id
                filename_disk
            }
          }
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
      brand_kind_1: brand_kind_1.data,
      brand_kind_2: brand_kind_2.data,
      brand_kind_3: brand_kind_3.data,
      menu: menu.data,
      event_kind_1: event_kind_1.data,
      event_kind_4: event_kind_4.data,
      spot: spot.data,
    },
    //revalidate: 1,
  };
}
