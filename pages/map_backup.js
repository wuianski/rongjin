import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

import fetchData from "../lib/api";
import List from "../components/list_backup";
//import List2 from "../components/BrandKindA";
import TabTestt from "../components/tabTestt";

import NonSSRWrapper from "../components/NonSSRWrapper";

import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  background: "#666",
  height: "100px",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Map({ brand_kind_1, brand_kind_2, brand_kind_3 }) {
  // console.log(brand_kind_2.brand);
  // console.log(brand_kind_1.brand);
  return (
    // <NonSSRWrapper>
    <>
      {/*** list  ***/}
      <Box
        sx={{
          position: "fixed",
          zIndex: 1,
          width: "50vw",
          height: "100vh",
          backgroundColor: "#FFE8D8",
          right: 0,
          overflowY: "auto",
        }}
      >
        <List
          brand_kind1={brand_kind_1.brand}
          brand_kind2={brand_kind_2.brand}
          brand_kind3={brand_kind_3.brand}
        />
        {/* <TabTestt></TabTestt> */}
      </Box>

      <a href="#t">
        <div>btn1</div>
      </a>
      <Box
        pt={50}
        // pl={"30vw"}
        pr={"50vw"}
        sx={{ flexGrow: 1, width: "3371px" }}
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
            <Item>3-1</Item>
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
    // </NonSSRWrapper>
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
