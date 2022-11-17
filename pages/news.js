import React, { useRef, useEffect, useState } from "react";
import fetchData from "../lib/api";
import Image from "next/image";
import Box from "@mui/material/Box";
import Nav from "../components/nav";
import logo from "../public/imgs/logo.png";
import Link from "next/link";

import Slider from "react-slick";
import { scrollIntoView } from "seamless-scroll-polyfill";

/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function news({ news, menu }) {
  /*****************************/
  /*** organize brand's data ***/
  // const myNews = news.news.map((nn) => {
  //   const result = {
  //     id: nn.id,
  //     title: nn.title,
  //     image: nn.image.map((img) => {
  //       return img.directus_files_id.filename_disk;
  //     }),
  //   };
  //   return result;
  // });
  // console.log(myNews[1].title);
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    //slidesToShow: 1,
    //slidesToScroll: 1,
    //swipeToSlide: false,
    rows: 3,
    slidesPerRow: 1,
    fade: true,
    //focusOnSelect: true,
    adaptiveHeight: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
      scrollIntoView(document.getElementById("newsTop"), {
        behavior: "auto",
        block: "start",
        inline: "start",
      });
    },
    // afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    //   scrollIntoView(document.getElementById("newsTop"), {
    //     behavior: "auto",
    //     block: "start",
    //     inline: "start",
    //   });
    // },
    // vertical: true,
    appendDots: (dots) => (
      <div
        style={{
          background: "none",
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul>
          <Box
            sx={{
              // position: "absolute",
              // right: 30,
              // bottom: 30,
              marginBottom: "30px",
              marginLeft: { xs: "-48px", md: "-16px" },
            }}
          >
            {dots}
          </Box>
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          color: "#000",
          border: "0.5px #000 solid",
          borderRadius: "30px",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <>
      {/*** logo  ***/}
      <Link href="/">
        <Box
          sx={{
            position: "fixed",
            zIndex: 9,
            left: 30,
            top: 30,
            width: 147,
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
      {/*** news  ***/}

      <Box
        mt={{ xs: 0, md: 0 }}
        ml="auto"
        mr="auto"
        pr={{ xs: 4, md: "unset" }}
        pl={{ xs: 4, md: "unset" }}
        sx={{
          width: { xs: "100%", md: "60vw" },
          maxWidth: { xs: "100%", md: "980px" },
          position: "relative",
          display: "block",
          height: "90vh",
          // backgroundColor: "blue",
          // overflow: "scroll",
        }}
        id="newsTop"
      >
        <Slider {...settings}>
          {news.news.map((n) => (
            <Box key={n.id}>
              <Box>
                <Box
                  mt={{ xs: 23, md: 26 }}
                  pb={4}
                  className="newsTitle"
                  sx={{
                    fontFamily: "GenWanMin TW",
                    fontSize: 19,
                    fontWeight: 600,
                    textAlign: "center",
                    borderBottom: "1px solid #000",
                  }}
                >
                  園區消息
                </Box>
                {/*** news title  ***/}
                <Box
                  pt={9}
                  pb={9}
                  className="newsTitle"
                  sx={{
                    fontFamily: "GenWanMin TW",
                    fontSize: 64,
                    lineHeight: 1,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: n.title,
                  }}
                />
                {/*** news image  ***/}
                <Box>
                  {n.image &&
                    n.image.map((img) => (
                      <Box key={img.id} pb={6}>
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
                            src={`${process.env.DIRECTUS_URL}/assets/${img.directus_files_id.filename_disk}`}
                            alt="bg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Box>
                      </Box>
                    ))}
                </Box>
                {/*** news date  ***/}
                <Box
                  pb={4}
                  sx={{
                    fontFamily: "Garamond-Regular",
                    fontSize: 27,
                    fontWeight: 400,
                    textAlign: "center",
                    borderBottom: "1px solid #000",
                  }}
                >
                  {n.date}
                </Box>
                {/*** news content  ***/}
                <Box
                  pt={2}
                  pb={9}
                  dangerouslySetInnerHTML={{
                    __html: n.content,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [news, menu] = await Promise.all([
    await fetchData(
      `
        query {
            news (
              filter:{
                status:{_eq:"published"},
              },
              sort:["sort", "-date"],
              # offset: 2
            )
            {
              id
              title
              date
              content
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
    await fetchData(
      `
        query {
            menu {
              id
              business_hours
              contact_us
              facebook
              instagram
              youtube
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
      news: news.data,
      menu: menu.data,
    },
    //revalidate: 1,
  };
}
