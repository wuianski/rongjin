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
/***********************/
/*** 時光巷弄 Section ***/
function Section2({ children }) {
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { amount: 1 });
  useEffect(() => {
    console.log("Event1 ref2 is in view: ", isInView2);
    if (isInView2 === true) {
      /*** CHANGE HERE 時光巷弄 id ***/
      scrollIntoView(document.getElementById("1-5"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [isInView2]);

  return (
    <section ref={ref2}>
      <span>{children}</span>
    </section>
  );
}

export default function EK1LO2({ event }) {
  return (
    <>
      <Box
        sx={{
          color: "#000",
          backgroundColor: "none",
        }}
        ml={1}
        mr={1}
        pt={{ xs: 0, md: "calc(100px + 0px)" }}
        pb={1}
        id={`EK${event.kind}LO${event.location_1}ID${event.id}`}
        //id="EK1LO1ID1"
      >
        <Stack
          direction={{ xs: "column", md: "column" }}
          spacing={{ xs: 1, md: 5 }}
          mt={{ xs: 2, md: -2 }}
          ml={0}
          mr={0}
        >
          {/*** title  ***/}
          <Item>
            <Section2>
              <Box
                pt={3}
                className="eventTitle"
                sx={{
                  textAlign: "center",
                  fontSize: "43px",
                  lineHeight: 1,
                  fontFamily: "GenWanMin TW",
                  fontWeight: 600,
                  borderTop: "1px solid #000",
                }}
                dangerouslySetInnerHTML={{
                  __html: event.title,
                }}
              ></Box>
            </Section2>
          </Item>
          {/*** cover image  ***/}
          <Item>
            {event.coverPhoto && (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "30vh", md: "50vh" },
                  borderRadius: "20px",
                }}
                ml={"auto"}
                mr={"auto"}
                mt={0}
                //ref={ref1}
              >
                <Image
                  className="brandCover"
                  src={`${process.env.DIRECTUS_URL}/assets/${event.coverPhoto}`}
                  alt="bg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            )}
          </Item>
          {/*** date and time ***/}
          <Item>
            {/*** date  ***/}
            {event.startDate && (
              <>
                <Box
                  pt={0}
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
                  pt={0}
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
              pt={1}
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
            {event.sub_content && (
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
              ></Box>
            )}
          </Item>
        </Stack>
      </Box>
    </>
  );
}
