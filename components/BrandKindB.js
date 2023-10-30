import React, { useRef, useState, useEffect, useCallback } from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";

import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useInView } from "framer-motion";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
      ig: b.instagram,
      fb: b.facebook,
    };

    return result;
  });
  //console.log(brand2[0].ref);

  /*************************/
  /*** useInview setting ***/
  const BK2ref1 = useRef(null);
  const BK2ref2 = useRef(null);
  const BK2ref3 = useRef(null);
  const BK2isInView1 = useInView(
    BK2ref1,
    { amount: 1 }
    // {
    //   margin: "0px 0px",
    // }
  );
  const BK2isInView2 = useInView(BK2ref2, { amount: 1 });
  const BK2isInView3 = useInView(BK2ref3, { amount: 1 });
  useEffect(() => {
    if (BK2isInView1 == true) {
      scrollIntoView(document.getElementById("Kb_ID1"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      // console.log("BK2isInView1 invew");
      scrollIntoView(document.getElementById("1-7"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK2isInView2 == true) {
      scrollIntoView(document.getElementById("Kb_ID2"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      // console.log("BK2isInView2 invew");
      scrollIntoView(document.getElementById("4-4-1"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK2isInView3 == true) {
      scrollIntoView(document.getElementById("Kb_ID3"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      // console.log("BK2isInView3 invew");
      scrollIntoView(document.getElementById("4-4-2"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [BK2isInView1, BK2isInView2, BK2isInView3]);

  return (
    <>
      <Box
        p={4}
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
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kb_ID1"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 1, md: 5 }}
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
                ref={BK2ref1}
              ></Box>
            </Item>
            <Item>
              {brand2[0].coverPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "30vh", md: "50vh" },
                    borderRadius: "20px",
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
                    height: { xs: "69px", md: "80px" },
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
            <Item>
              <Box>
                {brand2[0].ig && (
                  <Box component="span">
                    <a href={brand2[0].ig} target="_blank" rel="noreferrer">
                      <InstagramIcon sx={{color:"#D18D1F"}}/>
                    </a>
                  </Box>
                )}
                {brand2[0].fb && (
                  <Box component="span">
                    <a href={brand2[0].fb} target="_blank" rel="noreferrer">
                      <FacebookIcon sx={{color:"#D18D1F"}}/>
                    </a>
                </Box>
                )}
              </Box>
            </Item>
          </Stack>
        </Box>

        {/*** 2nd brand CiPU ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kb_ID2"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 1, md: 5 }}
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
                  __html: brand2[2].brandName,
                }}
                ref={BK2ref2}
              ></Box>
            </Item>
            <Item>
              {brand2[2].coverPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "30vh", md: "50vh" },
                    borderRadius: "20px",
                  }}
                  ml={"auto"}
                  mr={"auto"}
                  mt={-3}
                >
                  <Image
                    className="brandCover"
                    src={`${process.env.DIRECTUS_URL}/assets/${brand2[2].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand2[2].logoPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "69px", md: "80px" },
                  }}
                  ml={"auto"}
                  mr={"auto"}
                >
                  <Image
                    src={`${process.env.DIRECTUS_URL}/assets/${brand2[2].logoPhoto}`}
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
                  __html: brand2[2].introduction,
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
                  __html: brand2[2].contactUs,
                }}
              ></Box>
            </Item>
            <Item>
              <Box>
                {brand2[2].ig && (
                  <Box component="span">
                    <a href={brand2[2].ig} target="_blank" rel="noreferrer">
                      <InstagramIcon sx={{color:"#D18D1F"}}/>
                    </a>
                  </Box>
                )}
                {brand2[2].fb && (
                  <Box component="span">
                    <a href={brand2[2].fb} target="_blank" rel="noreferrer">
                      <FacebookIcon sx={{color:"#D18D1F"}}/>
                    </a>
                </Box>
                )}
              </Box>
            </Item>
          </Stack>
        </Box>

        {/*****************/}
        {/*** 3rd brand Mon Bonbon ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kb_ID3"
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 1, md: 5 }}
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
                ref={BK2ref3}
              ></Box>
            </Item>
            <Item>
              {brand2[1].coverPhoto && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "30vh", md: "50vh" },
                    borderRadius: "20px",
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
                    height: { xs: "69px", md: "80px" },
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
            <Item>
              <Box>
                {brand2[0].ig && (
                  <Box component="span">
                    <a href={brand2[1].ig} target="_blank" rel="noreferrer">
                      <InstagramIcon sx={{color:"#D18D1F"}}/>
                    </a>
                  </Box>
                )}
                {brand2[0].fb && (
                  <Box component="span">
                    <a href={brand2[1].fb} target="_blank" rel="noreferrer">
                      <FacebookIcon sx={{color:"#D18D1F"}}/>
                    </a>
                </Box>
                )}
              </Box>
            </Item>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
