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
    </>
  );
}
