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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: "100vh", transition: { duration: 0.2 } },
};

const bgVar = {
  open: {
    opacity: 1,
    x: "-50vw",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

// const screenSize = {
//   dynamicWidth: undefined,
//   dynamicHeight: undefined,
// };

export default function About({ about }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*** background svg  ***/}
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: 1,
          color: "#0000ff",
          // width: "100vw",
          // height: "100vh",
          // overflow: "hidden",
        }}
      >
        <AboutBG observer={isOpen} />
      </Box>

      {/*** about btn  ***/}
      <Box
        sx={{
          display: "block",
          position: "absolute",
          right: "18vw",
          bottom: "30vh",
          zIndex: 3,
          color: "#0000ff",
        }}
        onClick={() => setIsOpen(true)}
      >
        about 關於榕錦
      </Box>
      {/*** return btn  ***/}
      <Box
        sx={{
          display: "block",
          position: "absolute",
          right: "18vw",
          bottom: "20vh",
          zIndex: 3,
          color: "#0000ff",
        }}
        onClick={() => setIsOpen(false)}
      >
        return 返回
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
