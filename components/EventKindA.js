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

import EK1LO1 from "./EK1LO1";
import EK1LO2 from "./EK1LO2";

/******************/
/*** list stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
}));

export default function EventKindA({ event_kind_1 }) {
  /*************************************/
  /*** organize event's data 市集 ***/
  const event1 = event_kind_1.map((e) => {
    const result = {
      id: e.id,
      kind: e.kind,
      title: e.title,
      coverPhoto:
        !!e.cover && !!e.cover.filename_disk ? e.cover.filename_disk : "",
      main_content: e.main_content,
      sub_content: e.sub_content,
      location_1: e.location_1,
      location_2: e.location_2,
      startDate: e.startDate,
      endDate: e.endDate,
      startTime: e.startTime,
      endTime: e.endTime,
    };

    return result;
  });
  //console.log(event1[0].location_1);

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
              {event.location_1 == "綠沐廣場" && (
                <>
                  <EK1LO1 event={event} />
                </>
              )}
              {event.location_1 == "時光巷弄" && (
                <>
                  <EK1LO2 event={event} />
                </>
              )}
            </Box>
          ))}
      </Box>
    </>
  );
}
