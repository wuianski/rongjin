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
/*** 綠沐廣場 Section ***/
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  useEffect(() => {
    console.log("Element is in view: ", isInView);
    if (isInView === true) {
      /*** CHANGE HERE 綠沐廣場 id ***/
      scrollIntoView(document.getElementById("1-2-1"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [isInView]);

  return (
    <section ref={ref}>
      <span>{children}</span>
    </section>
  );
}

export default function EK1LO1({ event }) {
  return (
    <>
      <Box
        sx={{
          color: "#000",
          backgroundColor: "none",
        }}
        ml={1}
        mr={1}
        pt={{ xs: 0, md: "calc(120px + 0px)" }}
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
            <Section>
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
            </Section>
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
                mt={2}
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
          </Item>
        </Stack>
      </Box>
    </>
  );
}