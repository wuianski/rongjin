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

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    console.log("Element is in view: ", isInView);
    if (isInView === true) {
      scrollIntoView(document.getElementById("1-2-1"), {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [isInView]);

  return (
    <section ref={ref}>
      <span
      // style={{
      //   transform: isInView ? "translateX(3vw)" : "translateX(0px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      // }}
      >
        {children}
      </span>
    </section>
  );
}

export default function EventKindA({ event_kind1 }) {
  /*****************************/
  /*** organize brand's data ***/
  const event1 = event_kind1.map((e) => {
    const result = {
      id: e.id,
      kind: e.kind,
      title: e.title,
      coverPhoto:
        !!e.cover && !!e.cover.filename_disk ? e.cover.filename_disk : "",
      main_content: e.main_content,
      sub_content: e.sub_content,
      location4Id: e.location_1 && e.location_1 ? e.location_1 : "",
      location_1: e.location_1,
      location_2: e.location_2,
      // location: e.location.map((l, i) => {
      //   if (l == 1) {
      //     return "綠沐廣場";
      //   } else if (l == 2) {
      //     return "時光巷弄";
      //   } else if (l == 3) {
      //     return "香椿露台";
      //   } else if (l == 4) {
      //     return "閱讀客廳";
      //   } else if (l == 5) {
      //     return "時光廣場";
      //   } else if (l == 6) {
      //     return "小曉露台";
      //   } else if (l == 7) {
      //     return "木棧道";
      //   }
      // }),
      startDate: e.startDate,
      endDate: e.endDate,
      startTime: e.startTime,
      endTime: e.endTime,
    };

    return result;
  });
  //console.log(event1[0].location4Id);

  /*************************/
  /*** useInview setting ***/
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  // useEffect(() => {
  //   if (isInView1 == true) {
  //     console.log("isInView1 invew");
  //     scrollIntoView(document.getElementById("1-2-1"), {
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "start",
  //     });
  //   } else if (isInView2 == true) {
  //     console.log("isInView2 invew");
  //     scrollIntoView(document.getElementById("3-16"), {
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "start",
  //     });
  //   } else if (isInView3 == true) {
  //     console.log("isInView3 invew");
  //     scrollIntoView(document.getElementById("2-1"), {
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "start",
  //     });
  //   }
  // }, [isInView1, isInView2, isInView3]);

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
          backgroundColor: "#fff",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {event1 &&
          event1.map((event) => (
            <Box key={event.id}>
              {/*****************/}
              {/*** 1st event 市集 ***/}
              {event.location4Id == "綠沐廣場" && (
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
                    id={`EK${event.kind}LO${event.location4Id}ID${event.id}`}
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
                        <Box
                          pt={3}
                          className="eventTitle"
                          sx={{
                            textAlign: "center",
                            fontSize: "43px",
                            lineHeight: "43px",
                            fontFamily: "GenWanMin TW",
                            fontWeight: 600,
                            borderTop: "1px solid #000",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: event.title,
                          }}
                        ></Box>
                      </Item>
                      {/*** cover image  ***/}
                      <Item>
                        <Section>
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
                        </Section>
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
              )}
            </Box>
          ))}
      </Box>
    </>
  );
}
