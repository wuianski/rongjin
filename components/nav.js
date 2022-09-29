import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import menuOpen from "../public/IMGs/menuOpen.png";
import menuClose from "../public/IMGs/menuClose.png";
import logo from "../public/imgs/logo.png";
import logoLight from "../public/imgs/logo_light.png";

export default function Nav() {
  /** open and close modal setting **/
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/*** nav open icon ***/}
      <Box
        onClick={handleOpen}
        sx={{
          position: "fixed",
          zIndex: 9,
          top: 30,
          right: 30,
          cursor: "pointer",
        }}
      >
        <Image
          src={menuOpen}
          placeholder="blur"
          alt="icon of menu open"
          width={51}
          height={51}
        />
      </Box>

      {/*** nav open content ***/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Fade in={open} mountOnEnter unmountOnExit timeout={500}>
          <Box
            sx={{
              backgroundColor: "#664612",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: { xs: 99, md: 0 },
            }}
          >
            modal
            {/*** logo inside nav ***/}
            <Box
              sx={{
                position: "fixed",
                zIndex: 9,
                left: 30,
                top: 30,
                width: 147,
                height: 121.63,
              }}
            >
              <Image src={logoLight} placeholder="blur" alt="bg" />
            </Box>
            {/*** nav close icon ***/}
            <Box
              onClick={handleClose}
              sx={{ position: "fixed", top: 30, right: 30, cursor: "pointer" }}
            >
              <Image
                src={menuClose}
                placeholder="blur"
                alt="icon of menu close"
                width={51}
                height={51}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
