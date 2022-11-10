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

/******************/
/*** list stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
}));

/******************/
function Section({ children }) {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false });
  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  return (
    <section>
      <Box sx={{ background: "none", height: 300 }}>{children}</Box>
    </section>
  );
}

/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function BrandKindC({ brand_kind3 }) {
  /*****************************/
  /*** organize brand's data ***/
  const brand3 = brand_kind3.map((b) => {
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
  //console.log(brand3[0].ref);

  /*************************/
  /*** useInview setting ***/
  const BK3ref1 = useRef(null);
  const BK3ref2 = useRef(null);
  const BK3ref3 = useRef(null);
  const BK3ref4 = useRef(null);
  const BK3isInView1 = useInView(BK3ref1, { amount: 1 });
  const BK3isInView2 = useInView(BK3ref2, { amount: 1 });
  const BK3isInView3 = useInView(BK3ref3, { amount: 1 });
  const BK3isInView4 = useInView(BK3ref4, { amount: 1 });

  useEffect(() => {
    const getInvew = async () => {
      if (BK3isInView1 == true) {
        await delay(100);
        scrollIntoView(document.getElementById("Kc_ID1"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        console.log("BK3isInView1 invew");
        // await delay(200);
        scrollIntoView(document.getElementById("2-1"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        //await delay(0);
      } else if (BK3isInView2 == true) {
        await delay(100);
        scrollIntoView(document.getElementById("Kc_ID2"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        console.log("BK3isInView2 invew");
        //await delay(200);
        scrollIntoView(document.getElementById("3-6-2"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      } else if (BK3isInView3 == true) {
        await delay(100);
        scrollIntoView(document.getElementById("Kc_ID3"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        console.log("BK3isInView3 invew");
        //await delay(200);
        scrollIntoView(document.getElementById("3-7"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      } else if (BK3isInView4 == true) {
        await delay(100);
        scrollIntoView(document.getElementById("Kc_ID4"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        console.log("BK3isInView4 invew");
        //await delay(200);
        scrollIntoView(document.getElementById("3-15"), {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    };
    getInvew();
  }, [BK3isInView1, BK3isInView2, BK3isInView3, BK3isInView4]);

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
        {/*** 1st brand 吉品養生 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kc_ID1"
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
                  //borderTop: "1px solid #000",
                }}
                dangerouslySetInnerHTML={{
                  __html: brand3[0].brandName,
                }}
                ref={BK3ref1}
              ></Box>
            </Item>
            <Item>
              {brand3[0].coverPhoto && (
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
                    //loader={myLoader}
                    className="brandCover"
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[0].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand3[0].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[0].logoPhoto}`}
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
                  __html: brand3[0].introduction,
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
                  __html: brand3[0].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/* <Section /> */}
        {/*****************/}
        {/*** 2nd brand 花筏亭 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kc_ID2"
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
                pt={3}
                sx={{
                  textAlign: "center",
                  fontSize: "43px",
                  lineHeight: "43px",
                  fontFamily: "GenWanMin TW",
                  fontWeight: 600,
                  borderTop: "1px solid #000",
                }}
                dangerouslySetInnerHTML={{
                  __html: brand3[1].brandName,
                }}
                ref={BK3ref2}
              ></Box>
            </Item>
            <Item>
              {brand3[1].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[1].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand3[1].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[1].logoPhoto}`}
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
                  __html: brand3[1].introduction,
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
                  __html: brand3[1].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/* <Section /> */}
        {/*****************/}
        {/*** 3rd brand 京町　山本屋 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kc_ID3"
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
                pt={3}
                sx={{
                  textAlign: "center",
                  fontSize: "43px",
                  lineHeight: "43px",
                  fontFamily: "GenWanMin TW",
                  fontWeight: 600,
                  borderTop: "1px solid #000",
                }}
                dangerouslySetInnerHTML={{
                  __html: brand3[2].brandName,
                }}
                ref={BK3ref3}
              ></Box>
            </Item>
            <Item>
              {brand3[2].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[2].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand3[2].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[2].logoPhoto}`}
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
                  __html: brand3[2].introduction,
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
                  __html: brand3[2].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/* <Section /> */}
        {/* <Box sx={{ backgroundColor: "red", height: 200 }}></Box> */}
        {/*****************/}
        {/*** 4th brand 好丘 ***/}
        <Box
          sx={{
            color: "#000",
            backgroundColor: "none",
          }}
          ml={1}
          mr={1}
          pt={{ xs: 2, md: "calc(120px + 24px)" }}
          pb={1}
          id="Kc_ID4"
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
                pt={3}
                sx={{
                  textAlign: "center",
                  fontSize: "43px",
                  lineHeight: "43px",
                  fontFamily: "GenWanMin TW",
                  fontWeight: 600,
                  borderTop: "1px solid #000",
                }}
                dangerouslySetInnerHTML={{
                  __html: brand3[3].brandName,
                }}
                ref={BK3ref4}
              ></Box>
            </Item>
            <Item>
              {brand3[3].coverPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[3].coverPhoto}`}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              )}
            </Item>
            <Item>
              {brand3[3].logoPhoto && (
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
                    src={`${process.env.DIRECTUS_URL}/assets/${brand3[3].logoPhoto}`}
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
                  __html: brand3[3].introduction,
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
                  __html: brand3[3].contactUs,
                }}
              ></Box>
            </Item>
          </Stack>
        </Box>
        {/* <Section /> */}
        {/* <Box sx={{ backgroundColor: "red", height: 200 }}></Box> */}
      </Box>
    </>
  );
}
