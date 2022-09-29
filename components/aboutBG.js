import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./aboutBG.module.css";

import bg1 from "../public/imgs/about_bg_1.jpg";
import bg2 from "../public/imgs/about_bg_2.jpg";

import Box from "@mui/material/Box";
import Image from "next/image";

export default function AboutBG({ observer }) {
  //console.log(observer);

  /*** setting of bg slider ***/
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  });

  /*** observe the click from about.js ***/
  useEffect(() => {
    if (observer == false) {
      instanceRef.current?.moveToIdx(0);
    } else if (observer == true) {
      instanceRef.current?.moveToIdx(1);
    }
  }, [observer]);

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ maxWidth: "100vw", maxHeight: "100vh" }}
      >
        {/*** auto width slider, change maxWidth and minWidth to change ***/}
        <Box
          className={`keen-slider__slide number-slide1 ${styles.slider_entity}`}
          style={{ maxWidth: 714 * 1, minWidth: 714 * 1 }}
        >
          <Image
            src={bg1}
            placeholder="blur"
            alt="bg"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Box
          className={`keen-slider__slide number-slide2 ${styles.slider_entity}`}
          style={{ maxWidth: 1427 * 1, minWidth: 1427 * 1 }}
        >
          <Image
            src={bg2}
            placeholder="blur"
            alt="bg"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </div>

      {/*** background svg  ***/}

      {/* <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <motion.svg
          viewBox={`0 0 100 100`}
          animate={controls_viewbox}
          //   variants={bgVar}
          //   initial={false}
          //   animate={isOpen ? "open" : "closed"}
        >
          <motion.image
            xlinkHref="/imgs/front_bg.jpg"
            // animate={controls_pattern}
            height={`78%`}
          />
        </motion.svg>
      </Box> */}

      {/*** about btn  ***/}
      {/* <Box
        sx={{
          position: "absolute",
          right: "18vw",
          bottom: "30vh",
          zIndex: 3,
          color: "#0000ff",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        about 關於榕錦
      </Box> */}

      {/*** about content  ***/}
      {/* <Box
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
          <AboutContent />
        </motion.div>
      </Box> */}
    </>
  );
}
