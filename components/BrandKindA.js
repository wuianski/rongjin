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
  const BK1ref1 = useRef(null);
  const BK1ref2 = useRef(null);
  const BK1ref3 = useRef(null);
  const BK1ref4 = useRef(null);
  const BK1ref5 = useRef(null);
  const BK1ref6 = useRef(null);
  const BK1ref7 = useRef(null);
  const BK1isInView1 = useInView(BK1ref1);
  const BK1isInView2 = useInView(BK1ref2);
  const BK1isInView3 = useInView(BK1ref3);
  const BK1isInView4 = useInView(BK1ref4);
  const BK1isInView5 = useInView(BK1ref5);
  const BK1isInView6 = useInView(BK1ref6);
  const BK1isInView7 = useInView(BK1ref7);
  useEffect(() => {
    // const getInvew = async () => {
    if (BK1isInView1 == true) {
      // scrollIntoView(document.getElementById("Ka_ID1"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView1 invew");
      scrollIntoView(document.getElementById("3-4"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK1isInView2 == true) {
      // scrollIntoView(document.getElementById("Ka_ID2"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView2 invew");
      scrollIntoView(document.getElementById("3-6-1"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK1isInView3 == true) {
      // scrollIntoView(document.getElementById("Ka_ID3"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView3 invew");
      scrollIntoView(document.getElementById("3-9"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK1isInView4 == true) {
      // scrollIntoView(document.getElementById("Ka_ID4"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView4 invew");
      scrollIntoView(document.getElementById("3-11"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK1isInView5 == true) {
      // scrollIntoView(document.getElementById("Ka_ID5"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView5 invew");
      scrollIntoView(document.getElementById("3-13"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK1isInView6 == true) {
      // scrollIntoView(document.getElementById("Ka_ID6"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView6 invew");
      scrollIntoView(document.getElementById("3-17"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (BK1isInView7 == true) {
      // scrollIntoView(document.getElementById("Ka_ID7"), {
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "start",
      // });
      console.log("BK1isInView7 invew");
      scrollIntoView(document.getElementById("3-18"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
    // };
    // getInvew();
  }, [
    BK1isInView1,
    BK1isInView2,
    BK1isInView3,
    BK1isInView4,
    BK1isInView5,
    BK1isInView6,
    BK1isInView7,
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
                  ref={BK1ref1}
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
                  ref={BK1ref2}
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
                  ref={BK1ref3}
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
                  ref={BK1ref4}
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
                  ref={BK1ref5}
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
                  ref={BK1ref6}
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
                  ref={BK1ref7}
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
