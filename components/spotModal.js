import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";
import Image from "next/image";
import spot_img from "../public/imgs/spot.png";
import menuClose from "../public/imgs/menuClose.png";
import { motion } from "framer-motion";

/*********************/
/*** modal setting ***/
const style = {
  position: "absolute",
  //top: "50%",
  //left: "50%",
  //transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "#666",
};
const settings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SpotModal({ mySpot }) {
  /*********************/
  /*** modal state ***/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <Box
          onClick={handleOpen}
          sx={{
            cursor: "pointer",
            position: "relative",
            height: { xs: 28 * 0.7, md: 28 },
          }}
        >
          <Image
            src={spot_img}
            alt="element"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </Box>
      </motion.div>
      {/*** modal ***/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 30,
              top: 30,
              width: 80,
              height: 80,
              textAlign: "right",
              cursor: "pointer",
              zIndex: 99,
            }}
          >
            <Image
              src={menuClose}
              placeholder="blur"
              alt="icon of modal close"
              width={51}
              height={51}
            />
          </Box>
          <Slider {...settings}>
            {mySpot.image &&
              mySpot.image.map((img, i) => (
                <Box key={i}>
                  <Box
                    mt={"10vh"}
                    sx={{
                      position: "relative",
                      width: "80vw",
                      height: "80vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Image
                      src={`${process.env.DIRECTUS_URL}/assets/${img}`}
                      alt="bg"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      blurDataURL={`${process.env.DIRECTUS_URL}/assets/${img}`}
                    />
                  </Box>
                </Box>
              ))}
          </Slider>
        </Box>
      </Modal>
    </>
  );
}
