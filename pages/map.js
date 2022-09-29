//import * as React from "react";
import React, { useRef, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import dynamic from "next/dynamic";
import fetchData from "../lib/api";
import BrandKindA from "../components/BrandKindA";
import BrandKindB from "../components/BrandKindB";
import BrandKindC from "../components/BrandKindC";
import Link from "next/link";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

/*****************/
/*** map stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "#666",
  height: "100px",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
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
      {<Box p={0}>{children}</Box>}
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

export default function Map({ brand_kind_1, brand_kind_2, brand_kind_3 }) {
  /*****************/
  /*** tab state ***/
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* test click on map and scroll to element */
  const executeScroll = () => {
    console.log("click");
    const element = document.getElementById("tab1_id3");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* test click on map and switch tab */
  const executeTab = async (event) => {
    console.log("click executeTab");
    setValue(0);
    await delay(1000);
    console.log("click");
    const element = document.getElementById("tab1_id3");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/************/}
      {/*** list ***/}
      <Box
        sx={{
          position: "fixed",
          zIndex: 1,
          width: "50vw",
          height: "100vh",
          backgroundColor: "#fff",
          right: 0,
          overflowY: "auto",
        }}
      >
        <Box>
          <Box
            pt={"80px"}
            pb={0}
            ml={4}
            mr={4}
            sx={{
              position: "fixed",
              width: "calc(50vw - 64px)",
              borderBottom: "1px solid #000",
              backgroundColor: "#fff",
              zIndex: 99,
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
        </Box>
      </Box>

      {/***********/}
      {/*** map ***/}
      <Box
        //pt={50}
        // pl={"30vw"}
        pr={"50vw"}
        sx={{
          flexGrow: 1,
          width: "3371px",
          position: "absolute",
          bottom: "calc(50vh - 250px)",
          left: 0,
        }}
      >
        {/*** grid 1 row ***/}
        <Grid container spacing={2} columns={38}>
          <Grid item xs={2}>
            <Item>
              <Box
                id="1-1"
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                ml={2}
                mr={-2}
                onClick={executeScroll}
              >
                1-1
              </Box>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Box>1-2</Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "brown",
                  position: "relative",
                  height: 100,
                }}
                onClick={executeTab}
              >
                1-3
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                id="1-4"
                sx={{
                  backgroundColor: "#888",
                  position: "relative",
                  height: 100,
                }}
              >
                1-4
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box>1-5</Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "brown",
                  position: "relative",
                  height: 100,
                }}
              >
                1-6
              </Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              {/*** Link for go to tab and scroll to hash ***/}
              <Link
                scroll={false}
                href={{
                  pathname: "/map",
                  query: "tabOne=true",
                  hash: "tab1_id1",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "yellow",
                    position: "relative",
                    height: 100,
                  }}
                >
                  1-7
                </Box>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box>1-8</Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                1-9
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "brown",
                  position: "relative",
                  height: 100,
                }}
              >
                1-10
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box>1-11</Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "#888",
                  position: "relative",
                  height: 100,
                }}
              >
                1-12
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                id="1-13"
                sx={{
                  backgroundColor: "#888",
                  position: "relative",
                  height: 100,
                }}
              >
                1-13
              </Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                id="1-14"
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                mt={"-50px"}
                ml={2}
                mr={-2}
              >
                1-14
              </Box>
            </Item>
          </Grid>
          <Grid item xs={0.5}>
            <Item>
              <Box>1-15</Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                id="1-16"
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                ml={2}
                mr={-2}
              >
                1-16
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/*** grid 2 row ***/}
        <Grid container spacing={2} columns={38}>
          <Grid item xs={3}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                2-1
              </Box>
            </Item>
          </Grid>
          <Grid item xs={14}>
            <Item>
              <Box>2-2</Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                ml={-2}
                mr={2}
              >
                2-3
              </Box>
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <Box>2-4</Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                mt={"-50px"}
              >
                2-5
              </Box>
            </Item>
          </Grid>
          <Grid item xs={0.5}>
            <Item>
              <Box>2-5.5</Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                2-6
              </Box>
            </Item>
          </Grid>
          <Grid item xs={0.5}>
            <Item>
              <Box>2-6.5</Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                id="2-7"
                sx={{
                  backgroundColor: "#888",
                  position: "relative",
                  height: 100,
                }}
                mt={"-50px"}
                ml={2}
                mr={-2}
              >
                2-7
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                id="2-8"
                sx={{
                  backgroundColor: "#888",
                  position: "relative",
                  height: 100,
                }}
                mt={"-50px"}
              >
                2-8
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/*** grid 3 row ***/}
        <Grid container spacing={2} columns={38}>
          <Grid item xs={1}>
            <Item>
              <Box id="3-1">3-1</Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                ml={-2}
                mr={2}
              >
                3-2
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <div id="t">3-3</div>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              {/*** Link for go to tab and scroll to hash ***/}
              <Link
                scroll={false}
                href={{
                  pathname: "/map",
                  query: "tabOne=true",
                  hash: "tab1_id1",
                }}
              >
                <Box
                  id="3-4"
                  sx={{
                    backgroundColor: "yellow",
                    position: "relative",
                    height: 100,
                  }}
                >
                  3-4
                </Box>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <div>3-5</div>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                id="3-6"
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-6
              </Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-7
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <div>3-8</div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-9
              </Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <div>3-10</div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                ml={-4}
                mr={4}
              >
                3-11
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <div>3-12</div>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-13
              </Box>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <div>3-14</div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-15
              </Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <div>3-16</div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-17
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
              >
                3-18
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/*** grid 4 row ***/}
        <Grid container spacing={2} columns={38}>
          <Grid item xs={4}>
            <Item>4-1</Item>
          </Grid>

          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "#888",
                  position: "relative",
                  height: 100,
                }}
                ml={-2}
                mr={2}
              >
                4-2
              </Box>
            </Item>
          </Grid>

          <Grid item xs={7}>
            <Item>
              <Box>4-3</Box>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                mt={"-50px"}
              >
                4-4
              </Box>
            </Item>
          </Grid>
          <Grid item xs={20}>
            <Item>
              <Box>4-5</Box>
            </Item>
          </Grid>

          <Grid item xs={1}>
            <Item>
              <Box
                sx={{
                  backgroundColor: "yellow",
                  position: "relative",
                  height: 100,
                }}
                ml={-2}
                mr={2}
              >
                4-6
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [brand_kind_1, brand_kind_2, brand_kind_3] = await Promise.all([
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
    },
    //revalidate: 1,
  };
}
