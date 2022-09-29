import React, { useRef, useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import {
  motion,
  useInView,
  useAnimationControls,
  useTime,
  useTransform,
} from "framer-motion";
import styles from "./list.module.css";
import zIndex from "@mui/material/styles/zIndex";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:8055/assets/${src}?w=${width}&q=${quality || 85}`;
};

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //...theme.typography.body2,
  //padding: theme.spacing(1),
  //textAlign: "center",
  //color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
}));

const Tab = ({ href, isSelected, title }) => (
  <Link href={href}>
    {/* <a
      style={{
        padding: 5,
        margin: 5,
      }}
    > */}
    <Box
      component={"span"}
      sx={{
        fontSize: "19px",
        fontFamily: "GenWanMin TW",
        fontWeight: 600,
        lineHeight: "100%",
        letterSpacing: "0.025em",
        color: isSelected ? "#000" : "rgba(0, 0, 0, 0.5)",
      }}
    >
      {title}
    </Box>
    {/* </a> */}
  </Link>
);

export default function List({ brand_kind1, brand_kind2, brand_kind3 }) {
  /** organize all books data **/
  const brand1 = brand_kind1.map((b) => {
    const result = {
      id: b.id,
      brandName: b.name,
      introduction: b.introduction,
      coverPhoto:
        !!b.cover && !!b.cover.filename_disk ? b.cover.filename_disk : "",

      // isInview: "isInview" + b.id,
      // ref: "ref" + b.id,
    };

    return result;
  });
  //console.log(brand1[0].ref);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  useEffect(() => {
    if (isInView1 == true) {
      console.log("isInView1 invew");
      const element = document.getElementById("3-4");
      element.scrollIntoView();
      // element.scrollIntoView({
      //   behavior: "smooth",
      // });
    } else if (isInView2 == true) {
      console.log("isInView2 invew");
      const element = document.getElementById("3-6");
      element.scrollIntoView();
      // element.scrollIntoView({
      //   behavior: "smooth",
      // });
    } else if (isInView3 == true) {
      console.log("isInView3 invew");
      const element = document.getElementById("2-8");
      element.scrollIntoView();
      // element.scrollIntoView({
      //   behavior: "smooth",
      // });
      // element.scrollLeft = 850;
    }
  }, [isInView1, isInView2, isInView3]);

  const { query } = useRouter();
  // console.log(query.tabOne);
  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;
  const isTabThreeSelected = !!query.tabThree;

  // const addTorRefs = (el) => {
  //   //console.log(el);
  //   if (el && !revealRefs.current.includes(el)) {
  //     revealRefs.current.push(el);
  //   }
  // };

  return (
    <>
      <Box
        pt={"100px"}
        // mr={5}
        // ml={5}
        pb={2}
        sx={{
          textAlign: "center",
          borderBottom: "1px solid #000",
          position: "fixed",
          width: "50vw",
          backgroundColor: "#fff",
          zIndex: 99,
        }}
      >
        <Tab
          // href={{
          //   pathname: "/map",
          //   query: "tabOne=true",
          //   hash: "tab1_id1",
          // }}
          href="map/?tabOne=true"
          title="享時光"
          isSelected={isTabOneSelected}
        />
        <Tab
          href="map/?tabTwo=true"
          title="蒔生活"
          isSelected={isTabTwoSelected}
        />
        <Tab
          href="map/?tabThree=true"
          title="遇身心"
          isSelected={isTabThreeSelected}
        />
      </Box>

      <>
        {isTabOneSelected && (
          <>
            <Box
              sx={{
                color: "#000",
                backgroundColor: "none",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              }}
              ml={1}
              mr={1}
              pt={"150px"}
              pb={"10vh"}
              ref={ref1}
              id="tab1_id1"
            >
              <Stack
                direction={{ xs: "column", md: "column" }}
                spacing={{ xs: 6, md: 3 }}
                mt={{ xs: 13, md: 0 }}
                ml={5}
                mr={5}
              >
                <Item>
                  <Box
                    sx={{
                      textAlign: "center",
                      fontSize: "43px",
                      lineHeight: "43px",
                      fontFamily: "GenWanMin TW",
                      fontWeight: 600,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: brand1[0].brandName,
                    }}
                  ></Box>
                </Item>
                <Item>
                  {brand1[0].coverPhoto && (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "50vh",
                        borderRadius: "200px",
                      }}
                      ml={"auto"}
                      mr={"auto"}
                      mb={6}
                    >
                      <Image
                        //loader={myLoader}
                        className="brandCover"
                        src={`http://localhost:8055/assets/${brand1[0].coverPhoto}`}
                        alt="bg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  )}
                </Item>
                <Item>
                  <Box
                    pt={1}
                    sx={{
                      textAlign: "left",
                      fontFamily: "GenYoGothic TW",
                      fontWeight: 400,
                      borderTop: "1px solid #000",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: brand1[0].introduction,
                    }}
                  ></Box>
                </Item>
              </Stack>
            </Box>

            <Box
              sx={{
                color: "#000",
                backgroundColor: "none",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              }}
              ml={1}
              mr={1}
              pb={"10vh"}
              ref={ref2}
            >
              <Stack
                direction={{ xs: "column", md: "column" }}
                spacing={{ xs: 6, md: 3 }}
                mt={{ xs: 13, md: 0 }}
                ml={5}
                mr={5}
              >
                <Item>
                  <Box
                    sx={{
                      textAlign: "center",
                      fontSize: "43px",
                      lineHeight: "43px",
                      fontFamily: "GenWanMin TW",
                      fontWeight: 600,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: brand1[1].brandName,
                    }}
                  ></Box>
                </Item>
                <Item>
                  {brand1[1].coverPhoto && (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "50vh",
                        borderRadius: "200px",
                      }}
                      ml={"auto"}
                      mr={"auto"}
                      mb={6}
                    >
                      <Image
                        //loader={myLoader}
                        className="brandCover"
                        src={`http://localhost:8055/assets/${brand1[0].coverPhoto}`}
                        alt="bg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  )}
                </Item>
                <Item>
                  <Box
                    pt={1}
                    sx={{
                      textAlign: "left",
                      fontFamily: "GenYoGothic TW",
                      fontWeight: 400,
                      borderTop: "1px solid #000",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: brand1[1].introduction,
                    }}
                  ></Box>
                </Item>
              </Stack>
            </Box>

            <Box
              sx={{
                color: "#000",
                backgroundColor: "none",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              }}
              ml={1}
              mr={1}
              pb={"10vh"}
              ref={ref3}
            >
              <Stack
                direction={{ xs: "column", md: "column" }}
                spacing={{ xs: 6, md: 3 }}
                mt={{ xs: 13, md: 0 }}
                ml={5}
                mr={5}
              >
                <Item>
                  <Box
                    sx={{
                      textAlign: "center",
                      fontSize: "43px",
                      lineHeight: "43px",
                      fontFamily: "GenWanMin TW",
                      fontWeight: 600,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: brand1[0].brandName,
                    }}
                  ></Box>
                </Item>
                <Item>
                  {brand1[0].coverPhoto && (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "50vh",
                        borderRadius: "200px",
                      }}
                      ml={"auto"}
                      mr={"auto"}
                      mb={6}
                    >
                      <Image
                        //loader={myLoader}
                        className="brandCover"
                        src={`http://localhost:8055/assets/${brand1[0].coverPhoto}`}
                        alt="bg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  )}
                </Item>
                <Item>
                  <Box
                    pt={1}
                    sx={{
                      textAlign: "left",
                      fontFamily: "GenYoGothic TW",
                      fontWeight: 400,
                      borderTop: "1px solid #000",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: brand1[0].introduction,
                    }}
                  ></Box>
                </Item>
              </Stack>
            </Box>
          </>
        )}
        {isTabTwoSelected && (
          <>
            <Box>tab two la</Box>
            <Box>
              {brand_kind2.map((brand, id) => (
                <Box key={id} sx={{ color: "#000" }} pb={"100vh"} id={brand.id}>
                  <Box>{brand.id}</Box>
                  <Box>{brand.name}</Box>
                  <Box>{brand.introduction}</Box>
                </Box>
              ))}
            </Box>
          </>
        )}

        {/* <Box sx={{ color: "#000" }}>{JSON.stringify(query)}</Box> */}

        {/* <Box sx={{ color: "#ff0000" }}>
          {query.tabOne && (
            <Box>
              <TabOne brand={brand} />
            </Box>
          )}
        </Box> */}
        {/* {query.tabOne && childData && <TabOne childData={childData} />} */}
        {/* <div>
          <div>
            {brand.map((b) => (
              <div>{b.name}</div>
            ))}
          </div>
        </div> */}

        {/* <Tab1 /> */}
        {/* <Box sx={{ paddingBottom: "80vh", color: "#000" }} id="tab1_id1">
          1kjsdfhfjhsk
        </Box>
        <Box sx={{ paddingBottom: "80vh", color: "#000" }}>2kjsdfhfjhsk</Box>
        <Box sx={{ paddingBottom: "80vh", color: "#000" }} id="tab1_id3">
          3kjsdfhfjhsk
        </Box> */}
      </>
    </>
  );
}
