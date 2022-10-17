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

export default function BrandKindB({ brand_kind2 }) {
  /*****************************/
  /*** organize brand's data ***/
  const brand2 = brand_kind2.map((b) => {
    const result = {
      id: b.id,
      brandName: b.name,
      introduction: b.introduction,
      coverPhoto:
        !!b.cover && !!b.cover.filename_disk ? b.cover.filename_disk : "",
      logoPhoto: !!b.logo && !!b.logo.filename_disk ? b.logo.filename_disk : "",
      contactUs: b.contact_us,
    };

    return result;
  });
  //console.log(brand2[0].ref);

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
      const element = document.getElementById("1-12");
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else if (isInView2 == true) {
      console.log("isInView2 invew");
      const element = document.getElementById("rightest");
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else if (isInView3 == true) {
      console.log("isInView3 invew");
      const element = document.getElementById("1-4");
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isInView1, isInView2, isInView3]);

  return (
    <>
      <Box
        p={3}
        mt={{ xs: "-80px", md: "-80px" }}
        sx={{
          position: "absolute",
          width: { xs: "100vw", md: "50vw" },
          height: "calc(100vh - 0px)",
          top: { xs: 78, md: 78 },
          //bottom: { xs: 78, md: "unset" },
          backgroundColor: "#fff",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/*****************/}
        {/*** 1st brand 寵物點子 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref1}
          id="Kb_ID1"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 1, md: 3 }}
            mt={{ xs: 2, md: -2 }}
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
                  __html: brand2[0].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand2[0].coverPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "30vh", md: "50vh" },
                    borderRadius: "200px",
                  }}
                  ml={"auto"}
                  mr={"auto"}
                  mt={-3}
                >
                  <Image
                    className="brandCover"
                    src={`${process.env.DIRECTUS_URL}/assets/${brand2[0].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand2[0].logoPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "69px", md: "69px" },
                  }}
                  ml={"auto"}
                  mr={"auto"}
                >
                  <Image
                    src={`${process.env.DIRECTUS_URL}/assets/${brand2[0].logoPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="contain"
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
                  __html: brand2[0].introduction,
                }}
              ></Box>
            </Item>
            <Item>
              <Box
                pt={0}
                sx={{
                  textAlign: "left",
                  fontFamily: "GenYoGothic TW",
                  fontWeight: 400,
                }}
                dangerouslySetInnerHTML={{
                  __html: brand2[0].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>

        {/*** 2nd brand CiPU ***/}

        {/*****************/}
        {/*** 3rd brand Mon Bonbon ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref3}
          id="Kb_ID3"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 1, md: 3 }}
            mt={{ xs: 2, md: -2 }}
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
                  borderTop: "1px solid #000",
                }}
                dangerouslySetInnerHTML={{
                  __html: brand2[1].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand2[1].coverPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "50vh",
                    borderRadius: "200px",
                  }}
                  ml={"auto"}
                  mr={"auto"}
                  mt={-3}
                >
                  <Image
                    className="brandCover"
                    src={`${process.env.DIRECTUS_URL}/assets/${brand2[1].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand2[1].logoPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "69px", md: "69px" },
                  }}
                  ml={"auto"}
                  mr={"auto"}
                >
                  <Image
                    src={`${process.env.DIRECTUS_URL}/assets/${brand2[1].logoPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="contain"
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
                  __html: brand2[1].introduction,
                }}
              ></Box>
            </Item>
            <Item>
              <Box
                pt={0}
                sx={{
                  textAlign: "left",
                  fontFamily: "GenYoGothic TW",
                  fontWeight: 400,
                }}
                dangerouslySetInnerHTML={{
                  __html: brand2[1].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
