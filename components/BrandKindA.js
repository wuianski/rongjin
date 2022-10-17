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

/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
      logoPhoto: !!b.logo && !!b.logo.filename_disk ? b.logo.filename_disk : "",
      contactUs: b.contact_us,
    };

    return result;
  });
  //console.log(brand1[0].brandName);

  /*************************/
  /*** useInview setting ***/
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);
  const isInView6 = useInView(ref6);
  const isInView7 = useInView(ref7);
  useEffect(() => {
    const getInvew = async () => {
      if (isInView1 == true) {
        console.log("isInView1 invew");
        await delay(200);
        const element = document.getElementById("2-1");
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      } else if (isInView2 == true) {
        console.log("isInView2 invew");
        const element = document.getElementById("1-3");
        await delay(200);
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      } else if (isInView3 == true) {
        console.log("isInView3 invew");
        const element = document.getElementById("1-7");
        await delay(200);
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      } else if (isInView4 == true) {
        console.log("isInView4 invew");
        const element = document.getElementById("1-12");
        await delay(200);
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      } else if (isInView5 == true) {
        console.log("isInView5 invew");
        const element = document.getElementById("1-7");
        await delay(200);
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      } else if (isInView6 == true) {
        console.log("isInView6 invew");
        const element = document.getElementById("2-7");
        await delay(200);
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      } else if (isInView7 == true) {
        console.log("isInView7 invew");
        const element = document.getElementById("rightest");
        await delay(200);
        element.scrollIntoView({
          behavior: "smooth",
          //inline: "start",
        });
      }
    };
    getInvew();
  }, [
    isInView1,
    isInView2,
    isInView3,
    isInView4,
    isInView5,
    isInView6,
    isInView7,
  ]);

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
        {/*** 1st brand 九州鬆餅瓦芙 ***/}
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
          id="Ka_ID1"
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
                  //borderTop: "1px solid #000",
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
                    height: { xs: "30vh", md: "50vh" },
                    borderRadius: "200px",
                  }}
                  ml={"auto"}
                  mr={"auto"}
                  mt={-3}
                >
                  <Image
                    //loader={myLoader}
                    className="brandCover"
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[0].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[0].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[0].logoPhoto}`}
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
                  __html: brand1[0].introduction,
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
                  __html: brand1[0].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 2nd brand 金錦町 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref2}
          id="Ka_ID2"
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
                  mt={-3}
                >
                  <Image
                    className="brandCover"
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[1].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[1].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[1].logoPhoto}`}
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
                  __html: brand1[1].introduction,
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
                  __html: brand1[1].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 3rd brand JeeWoo 吉屋 ***/}
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
          id="Ka_ID3"
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
                  __html: brand1[2].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand1[2].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[2].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[2].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[2].logoPhoto}`}
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
                  __html: brand1[2].introduction,
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
                  __html: brand1[2].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 4th brand 臺虎居餃屋 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref4}
          id="Ka_ID4"
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
                  __html: brand1[3].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand1[3].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[3].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[3].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[3].logoPhoto}`}
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
                  __html: brand1[3].introduction,
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
                  __html: brand1[3].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 5th brand 日日禾日 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref5}
          id="Ka_ID5"
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
                  __html: brand1[4].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand1[4].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[4].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[4].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[4].logoPhoto}`}
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
                  __html: brand1[4].introduction,
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
                  __html: brand1[4].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 6th brand 老優雅 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref6}
          id="Ka_ID6"
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
                  __html: brand1[5].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand1[5].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[5].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[5].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[5].logoPhoto}`}
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
                  __html: brand1[5].introduction,
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
                  __html: brand1[5].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/*****************/}
        {/*** 7th brand 興波咖啡 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 0, md: "calc(120px + 24px)" }}
          pb={1}
          ref={ref7}
          id="Ka_ID7"
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
                  __html: brand1[6].brandName,
                }}
              ></Box>
            </Item>
            <Item>
              {brand1[6].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[6].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand1[6].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand1[6].logoPhoto}`}
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
                  __html: brand1[6].introduction,
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
                  __html: brand1[6].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
