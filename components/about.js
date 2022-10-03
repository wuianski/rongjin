import {
  motion,
  Variants,
  AnimateSharedLayout,
  AnimatePresence,
  useInView,
  useAnimationControls,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AboutContent from "./aboutContent";
import AboutBG from "./aboutBG";
import Image from "next/image";
import goToMap from "../public/imgs/goToMap.png";
import Return from "../public/imgs/return.png";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: "100vh", transition: { duration: 0.2 } },
};

const aboutBtn = {
  open: {
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 1, transition: { duration: 0.2 } },
};

const returnBtn = {
  open: {
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

export default function About({ about, aboutState }) {
  /*** state of display about content ***/
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    //console.log(aboutState);
    if (aboutState === "about") {
      /*** set to display about content ***/
      setIsOpen(true);
    }
  }, [aboutState]);

  return (
    <>
      {/*** background slider  ***/}
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: 1,
          color: "#0000ff",
        }}
      >
        <AboutBG observer={isOpen} />
      </Box>

      {/*** about btn  ***/}
      <motion.div
        variants={aboutBtn}
        initial={true}
        animate={isOpen ? "open" : "closed"}
      >
        <Box
          sx={{
            display: "block",
            position: "absolute",
            right: "130px",
            bottom: "30vh",
            zIndex: 3,
            color: "#0000ff",
            fontFamily: "GenWanMin TW",
            color: "#000",
            letterSpacing: "0.11em",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(true)}
        >
          <Box component="span" sx={{ fontSize: "15px" }}>
            about
          </Box>
          <Box component="span" sx={{ fontSize: "25px" }} pl={2}>
            關於榕錦
          </Box>
        </Box>
      </motion.div>
      {/*** return btn  ***/}
      <motion.div
        variants={returnBtn}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <Box
          sx={{
            position: "absolute",
            right: "100px",
            bottom: "20vh",
            zIndex: 3,
            width: "222px",
            height: "70px",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={Return}
            alt="return icon"
            layout="intrinsic"
            objectFit="cover"
          />
        </Box>
      </motion.div>
      {/*** go to map icon  ***/}
      <Box
        sx={{
          position: "absolute",
          left: 12,
          bottom: 24,
          width: "33px",
          height: "566px",
          zIndex: 2,
        }}
      >
        <Image
          src={goToMap}
          alt="yt icon"
          layout="intrinsic"
          objectFit="cover"
        />
      </Box>
      {/*** about content  ***/}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          color: "#000",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <motion.div
          variants={itemVariants}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <AboutContent about={about} />
        </motion.div>
      </Box>
    </>
  );
}
