import React, { useRef, useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useInView } from "framer-motion";

/******************/
/*** list stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
}));

export default function BrandKindA({ brand_kind1 }) {
  /*****************************/
  /*** organize brand's data ***/
  const brand1 = brand_kind1.map((b) => {
    const result = {
      id: b.id,
      brandName: b.name,
      introduction: b.introduction,
      coverPhoto:
        !!b.cover && !!b.cover.filename_disk ? b.cover.filename_disk : "",
      contactUs: b.contact_us,
    };

    return result;
  });
  //console.log(brand1[0].ref);

  /*************************/
  /*** useInview setting ***/
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  useEffect(() => {
    if (isInView1 == true) {
      console.log("isInView1 invew");
      const element = document.getElementById("2-1");
      element.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    } else if (isInView2 == true) {
      console.log("isInView2 invew");
      const element = document.getElementById("3-6");
      element.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    } else if (isInView3 == true) {
      console.log("isInView3 invew");
      const element = document.getElementById("rightest");
      element.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [isInView1, isInView2, isInView3]);

  return (
    <>
      <Box
        p={3}
        sx={{
          position: "absolute",
          width: { xs: "100vw", md: "50vw" },
          height: "calc(100vh - 120px)",
          bottom: 0,
          backgroundColor: "#fff",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/*****************/}
        {/*** 1st brand ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
            borderBottom: "1px solid #000",
          }}
          ml={1}
          mr={1}
          pt={2} //15
          pb={10}
          ref={ref1}
          id="tab1_id1"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 6, md: 3 }}
            mt={{ xs: 13, md: 0 }}
            ml={0}
            mr={0}
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
            <Item>
              <Box
                pt={1}
                sx={{
                  textAlign: "left",
                  fontFamily: "GenYoGothic TW",
                  fontWeight: 400,
                }}
                dangerouslySetInnerHTML={{
                  __html: brand1[0].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 2nd brand ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
            borderBottom: "1px solid #000",
          }}
          ml={1}
          mr={1}
          pt={2}
          pb={10}
          ref={ref2}
          id="tab1_id2"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 6, md: 3 }}
            mt={{ xs: 13, md: 0 }}
            ml={0}
            mr={0}
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
        {/*****************/}
        {/*** 3rd brand ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
            borderBottom: "1px solid #000",
          }}
          ml={1}
          mr={1}
          pt={2}
          pb={10}
          ref={ref3}
          id="tab1_id3"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 6, md: 3 }}
            mt={{ xs: 13, md: 0 }}
            ml={0}
            mr={0}
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
      </Box>
    </>
  );
}
