import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import fetchData from "../../../lib/api";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/imgs/logo.png";
import Nav from "../../../components/nav";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import event34_icon from "../../../public/imgs/event34_icon.png";

/******************/
/*** list stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  marginTop: 0,
}));

export default function Event({ event, menu }) {
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
      {/*** menu ***/}
      <Box>
        <Nav menu={menu.menu} />
      </Box>
      {/*** event ***/}
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
      >
        {event.event.map((event, idx) => (
          <Box key={event.id}>
            <Stack
              direction={{ xs: "column", md: "column" }}
              spacing={{ xs: 1, md: 5 }}
              mt={{ xs: 12, md: 2 }}
              ml={0}
              mr={0}
              mb={{ xs: 3, md: 6 }}
            >
              {/*** event title  ***/}
              <Item>
                <Box
                  mt={{ xs: 23, md: 13 }}
                  mb={4}
                  sx={{
                    width: 97,
                    height: 112,
                    textAlign: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <Image
                    src={event34_icon}
                    alt="yt icon"
                    layout="intrinsic"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  pt={4}
                  pb={4}
                  className="newsTitle"
                  sx={{
                    fontFamily: "GenWanMin TW",
                    fontSize: 64,
                    lineHeight: 1,
                    fontWeight: 600,
                    textAlign: "center",
                    borderTop: "1px solid #000",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: event.title,
                  }}
                />
              </Item>
              {/*** event image  ***/}
              <Item>
                <Box>
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
                      src={`${process.env.DIRECTUS_URL}/assets/${event.cover.filename_disk}`}
                      alt="bg"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                </Box>
              </Item>
              {/*** date  ***/}
              <Item>
                {event.startDate && (
                  <>
                    <Box
                      pt={{ xs: 2, md: 0 }}
                      sx={{
                        textAlign: "center",
                        fontFamily: "Garamond",
                        fontWeight: 400,
                      }}
                    >
                      <Box component="span">{event.startDate}</Box>
                      <Box component="span">~</Box>
                      <Box component="span">{event.endDate}</Box>
                    </Box>
                  </>
                )}
                {/*** time  ***/}
                {event.startTime && (
                  <>
                    <Box
                      pt={1}
                      sx={{
                        textAlign: "center",
                        fontFamily: "Garamond",
                        fontWeight: 400,
                      }}
                    >
                      <Box component="span">{event.startTime}</Box>
                      <Box component="span">~</Box>
                      <Box component="span">{event.endTime}</Box>
                    </Box>
                  </>
                )}

                {/*** location  ***/}
                <Box
                  pt={2}
                  pb={{ xs: 2, md: 0 }}
                  sx={{
                    textAlign: "center",
                    fontFamily: "GenYoGothic TW",
                    fontWeight: 700,
                    letterSpacing: "0.025em",
                  }}
                >
                  <Box component="span">@</Box>
                  <Box
                    component="span"
                    dangerouslySetInnerHTML={{
                      __html: event.location_1,
                    }}
                  />
                  {event.location_2 && (
                    <>
                      <Box component="span">及</Box>
                      <Box
                        component="span"
                        dangerouslySetInnerHTML={{
                          __html: event.location_2,
                        }}
                      />
                    </>
                  )}
                </Box>
              </Item>
              {/*** main_content  ***/}
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
                    __html: event.main_content,
                  }}
                ></Box>
              </Item>
              {/*** sub_content  ***/}
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
                    __html: event.sub_content,
                  }}
                  className="sub_content"
                ></Box>
              </Item>
            </Stack>
          </Box>
        ))}
      </Box>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params); // { id: '2', sort: '2' }
  // Run API calls in parallel
  const [event, menu] = await Promise.all([
    await fetchData(
      `
        query  {
            event  (filter: { id: { _eq: "${params.id}"},status:{_eq:"published"},  }, ){
            id
            title 
            cover{
                id 
                filename_disk
              }
            main_content
            sub_content
            location_1
            location_2
            status 
            startDate
            endDate
            startTime
            endTime
            kind         
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
      event: event?.data || {},
      menu: menu.data,
    },
    //revalidate: 1,
  };
}
