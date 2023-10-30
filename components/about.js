import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AboutContent from "./aboutContent";
import AboutBG from "./aboutBG";
import Image from "next/image";
import gotomap from "../public/imgs/goto_map.png";
import Return from "../public/imgs/return.png";
import bg_text_tw from "../public/imgs/bg_text_tw.png";
import bg_text_en from "../public/imgs/bg_text_en.png";
import { useRouter } from "next/router";

/*** about content and return button variant ***/
const itemAboutContent = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      duration: 1,
      delay: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: "100vh",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 24,
      duration: 1,
      delay: 0.2,
    },
  },
};
/*** about button and black line variant ***/
const blackLine = {
  open: {
    y: "-100vh",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      delay: 0.2,
      duration: 1,
    },
  },
  closed: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      duration: 1,
      delay: 0.2,
    },
  },
};
/*** bg text variant ***/
const bgText = {
  open: {
    x: "-100vw",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 24,
      //delay: 0.2,
      duration: 1,
    },
  },
  closed: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      duration: 1,
      delay: 0.2,
    },
  },
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

  /*** link to other page ***/
  const router = useRouter();
  const executeGoMapA = (event) => {
    //console.log("click executeGoTab1");
    //setOpen(false);
    router.push({ pathname: "/map" });
  };

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
      <Box
        sx={{
          position: "absolute",
          right: { xs: 24, md: "130px" },
          bottom: { xs: 32, md: "35vh" },
          zIndex: 3,
        }}
      >
        <motion.div
          variants={blackLine}
          initial={true}
          animate={isOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
        >
          <Box
            sx={{
              position: "relative",
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
      </Box>
      {/*** black line  ***/}
      <Box
        sx={{
          position: "absolute",
          display: { xs: "none", md: "block" },
          right: "100px",
          bottom: "10vh",
          zIndex: 3,
        }}
      >
        <motion.div
          variants={blackLine}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 3,
              width: "10px",
              height: "90vh",
              borderRight: "1px solid #000",
            }}
          ></Box>
        </motion.div>
      </Box>

      {/*** bg text image  ***/}
      <Box>
        <Box
          sx={{
            position: "absolute",
            left: { xs: "unset", md: 141 },
            right: { xs: 24, md: "unset" },
            bottom: { xs: "unset", md: 2 },
            top: { xs: "60vh", md: "unset" },
            zIndex: 2,
          }}
        >
          <motion.div
            variants={bgText}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "calc(100vw * 0.78)", md: "calc(890px * 0.78)" },
                height: "calc(356px * 0.78)",
              }}
            >
              <Image
                src={bg_text_en}
                alt="text image"
                layout="intrinsic"
                objectFit="cover"
              />
            </Box>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: { xs: "unset", md: 623 },
            right: { xs: 0, md: "unset" },
            top: { xs: "32vh", md: 32 },
            zIndex: 2,
          }}
        >
          <motion.div
            variants={bgText}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "calc(50vw * 0.78)", md: "calc(217px * 0.78)" },
                height: "calc(198px * 0.78)",
              }}
            >
              <Image
                src={bg_text_tw}
                alt="text image"
                layout="intrinsic"
                objectFit="cover"
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
      {/*** go to map icon  ***/}
      <Box
        sx={{
          position: "absolute",
          left: 12,
          bottom: 32,
          zIndex: 3,
        }}
      >
        <motion.div
          variants={bgText}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          // whileHover={{ scaleY: 1.1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 400,
          //   damping: 10,
          // }}
        >
          <Box
            sx={{
              position: "relative",
              width: "33px",
              height: "566px",
              cursor: "pointer",
            }}
            onClick={executeGoMapA}
          >
            <motion.div
              whileHover={{ scaleY: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Image
                src={gotomap}
                alt="yt icon"
                layout="intrinsic"
                objectFit="cover"
              />
            </motion.div>
          </Box>
        </motion.div>
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
          variants={itemAboutContent}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <AboutContent about={about} />
        </motion.div>
      </Box>
      {/*** return btn  ***/}
      <Box
        pb={3}
        pt={3}
        sx={{
          position: "absolute",
          right: { xs: "0px", md: "100px" },
          bottom: { xs: "30px", md: "20vh" },
          zIndex: 2,
          overflowY: "hidden",
        }}
      >
        <motion.div
          variants={itemAboutContent}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "calc(222px * 0.8)", md: "222px" },
              height: { xs: "calc(70px * 0.8)", md: "70px" },
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
      </Box>
    </>
  );
}
