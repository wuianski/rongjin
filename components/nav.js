import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import menuOpen from "../public/imgs/menuOpen.png";
import menuClose from "../public/imgs/menuClose.png";
import logo from "../public/imgs/logo.png";
import logoLight from "../public/imgs/logo_light.png";
import yt from "../public/imgs/nav/yt.png";
import ig from "../public/imgs/nav/ig.png";
import fb from "../public/imgs/nav/fb.png";
import map from "../public/imgs/nav/map.png";

import { useRouter } from "next/router";

/******************/
/*** nav stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  width: "max-content",
}));
/*******************/
/*** tab setting ***/
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  //width: "calc(50% + 30px)",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: 400,
    fontSize: 24,
    marginRight: theme.spacing(3),
    color: "#FFE8D8",
    opacity: 0.8,
    fontFamily: "GenWanMin TW",
    display: "block",
    textAlign: "left",
    padding: "12px 0",
    lineHeight: 1,
    alignItems: "flex-start",
    justifyContent: "left",

    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      marginRight: theme.spacing(2),
      minHeight: 24,
    },
    "&:hover": { color: "#fff", opacity: 1 },
    "&.Mui-selected": {
      color: "#fff",
      opacity: 1,
      //fontWeight: 600,
    },

    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: { xs: "50vw", md: "100%" } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Nav({ menu }) {
  //console.log(menu.business_hours);
  /** open and close modal setting **/
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /** tab change state **/
  const [value, setValue] = React.useState(5);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*************/
  /*** delay ***/
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /* test link to other page and close Nav first */
  const router = useRouter();
  const executeGoMapA = (event) => {
    console.log("click executeGoTab1");
    setOpen(false);
    router.push({ pathname: "/map", query: { cat: 1 } }, { shallow: true });
  };
  const executeGoMapB = (event) => {
    console.log("click executeGoTab2");
    setOpen(false);
    router.push({ pathname: "/map", query: { cat: 2 } }, { shallow: true });
  };
  const executeGoMapC = (event) => {
    console.log("click executeGoTab3");
    setOpen(false);
    router.push({ pathname: "/map", query: { cat: 3 } }, { shallow: true });
  };
  const executeAbout = (event) => {
    console.log("click go to about");
    setOpen(false);
    /*** use query to pass value to useRouter in index page ***/
    router.push({ pathname: "/", query: { about: "about" } });
  };
  const excuteHome = (event) => {
    console.log("click go to home");
    setOpen(false);
    router.push({ pathname: "/" });
  };
  const executeGoMapD = (event) => {
    console.log("click executeGoTab4");
    setOpen(false);
    router.push({ pathname: "/map", query: { cat: 4 } }, { shallow: true });
  };
  const executeGoMapE = (event) => {
    console.log("click executeGoTab5");
    setOpen(false);
    router.push({ pathname: "/map", query: { cat: 5 } }, { shallow: true });
  };

  return (
    <>
      {/*** nav open icon ***/}
      <Box
        onClick={handleOpen}
        sx={{
          position: "fixed",
          zIndex: 9,
          top: { xs: 15, md: 30 },
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
        <Fade in={open} mountOnEnter unmountOnExit timeout={300}>
          <Box
            sx={{
              backgroundColor: "#664612",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              overflow: { xs: "scroll", md: "hidden" },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              top: 0,
              left: 0,
              zIndex: { xs: 99, md: 0 },
            }}
          >
            {/*** logo and nav close icon ***/}
            <Box
              sx={{
                backgroundColor: "#664612",
                position: "fixed",
                width: "100vw",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            >
              <Stack
                direction={{ xs: "row", md: "row" }}
                spacing={{ xs: 6, md: 4 }}
                mt={{ xs: 0, md: 0 }}
                p={{ xs: "15px 30px", md: "30px 30px" }}
              >
                {/*** logo inside nav ***/}
                <Item sx={{ width: "50vw" }}>
                  <Box
                    sx={{
                      width: { xs: 147 * 0.7, md: 147 },
                      height: 121.63,
                      cursor: "pointer",
                    }}
                    onClick={excuteHome}
                  >
                    <Image src={logoLight} placeholder="blur" alt="bg" />
                  </Box>
                </Item>
                <Item sx={{ width: "50vw" }}>
                  {/*** nav close icon ***/}
                  <Box
                    onClick={handleClose}
                    sx={{ cursor: "pointer", textAlign: "right" }}
                  >
                    <Image
                      src={menuClose}
                      placeholder="blur"
                      alt="icon of menu close"
                      width={51}
                      height={51}
                    />
                  </Box>
                </Item>
              </Stack>
            </Box>

            {/*** nav elements ***/}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 30, md: 30 },
                top: { xs: 100, md: "45vh" },
                width: { xs: "calc(100vw - 60px)", md: "auto" },
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 6, md: 4 }}
                mt={{ xs: 0, md: 0 }}
              >
                {/*** social media ***/}
                <Item sx={{ width: { xs: "100%", md: "5vw" } }}>
                  <Box
                    sx={{
                      height: { xs: "auto", md: "40vh" },
                      borderRight: {
                        xs: "0px solid #fff",
                        md: "1px solid #fff",
                      },
                    }}
                  >
                    <Stack
                      direction={{ xs: "row", md: "column" }}
                      spacing={{ xs: 3, md: 2 }}
                      mt={{ xs: 13, md: 0 }}
                      ml={0}
                      mr={4}
                      pt={1}
                    >
                      <Item>
                        <a href={menu.youtube} target="_blank" rel="noreferrer">
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                            }}
                          >
                            <Image
                              src={yt}
                              alt="yt icon"
                              layout="intrinsic"
                              objectFit="cover"
                            />
                          </Box>
                        </a>
                      </Item>
                      <Item>
                        <a
                          href={menu.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Box>
                            <Image
                              src={ig}
                              alt="ig icon"
                              width={30}
                              height={30}
                            />
                          </Box>
                        </a>
                      </Item>
                      <Item>
                        <a
                          href={menu.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Box>
                            <Image
                              src={fb}
                              alt="fb icon"
                              width={30}
                              height={30}
                            />
                          </Box>
                        </a>
                      </Item>
                    </Stack>
                  </Box>
                </Item>
                {/*** vertical menu tab ***/}
                <Item sx={{ width: { xs: "100%", md: "60vw" } }}>
                  <Box
                    mt={{ xs: 0, md: 0 }}
                    pl={0}
                    pr={{ xs: 2, md: 5 }}
                    sx={{
                      height: { xs: "auto", md: "40vh" },
                      borderRight: {
                        xs: "0px solid #fff",
                        md: "1px solid #fff",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        height: { xs: "auto", md: "40vh" },
                      }}
                    >
                      <StyledTabs
                        orientation="vertical"
                        //variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{
                          borderRight: 1,
                          borderColor: "#FFE8D8",
                          width: { xs: "100%", md: "50%" },
                        }}
                        indicatorColor="none"
                      >
                        <StyledTab label="關於榕錦" onClick={executeAbout} />
                        <StyledTab label="最新消息" href="/news" />
                        <StyledTab label="活動訊息" {...a11yProps(2)} />
                        <StyledTab label="入駐品牌" {...a11yProps(3)} />
                        <StyledTab
                          label="社區健康照護"
                          href="/community_health_care"
                        />
                        <StyledTab label="服務申請" {...a11yProps(5)} />
                      </StyledTabs>
                      {/*** 活動訊息 ***/}
                      <TabPanel value={value} index={2}>
                        <Box
                          pl={{ xs: "30px", md: 4 }}
                          mt={{ xs: "8px", md: "5px" }}
                        >
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                            onClick={executeGoMapD}
                          >
                            市集／展覽
                          </Box>
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                            onClick={executeGoMapE}
                          >
                            講座／課程
                          </Box>
                        </Box>
                      </TabPanel>
                      {/*** 入駐品牌 ***/}
                      <TabPanel value={value} index={3}>
                        <Box
                          pl={{ xs: "30px", md: 4 }}
                          mt={{ xs: "8px", md: "5px" }}
                        >
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                            onClick={executeGoMapA}
                          >
                            享食光
                          </Box>
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                            onClick={executeGoMapB}
                          >
                            蒔生活
                          </Box>
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                            onClick={executeGoMapC}
                          >
                            遇身心
                          </Box>
                        </Box>
                      </TabPanel>
                      {/*** 服務申請 ***/}
                      <TabPanel value={value} index={5}>
                        <Box
                          pl={{ xs: "30px", md: 4 }}
                          mt={{ xs: "8px", md: "5px" }}
                        >
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                          >
                            <a
                              href="https://forms.gle/xZ99far5VB3hTqYh9"
                              target="blank"
                            >
                              場地使用申請
                            </a>
                          </Box>
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                          >
                            <a
                              href="https://forms.gle/W7SxKoZ5TSwRUppn9"
                              target="blank"
                            >
                              商業攝影申請
                            </a>
                          </Box>
                          <Box
                            sx={{
                              cursor: "pointer",
                              fontFamily: "GenWanMin TW",
                              fontSize: { xs: "20px", md: "24px" },
                              color: "#FFE8D8",
                              opacity: "0.8",
                              minHeight: { xs: "42px", md: "48px" },
                            }}
                          >
                            <a
                              href="https://forms.gle/9z3QectCN4b19oHK9"
                              target="blank"
                            >
                              非商業攝影申請
                            </a>
                          </Box>
                        </Box>
                      </TabPanel>
                    </Box>
                  </Box>
                </Item>
                {/*** infos ***/}
                <Item sx={{ width: "30vw" }}>
                  <Box
                    pt={2}
                    sx={{
                      width: "100%",
                      height: "40vh",
                      textAlign: "left",
                    }}
                  >
                    <Stack
                      direction={{ xs: "column", md: "column" }}
                      spacing={{ xs: 4, md: 2 }}
                      mt={{ xs: 2, md: 0 }}
                      ml={0}
                      mr={0}
                      pb={3}
                    >
                      <Item>
                        <Box
                          sx={{
                            width: { xs: 210, md: 210 },
                            height: { xs: "auto", md: 124 },
                          }}
                        >
                          <Image
                            src={map}
                            placeholder="blur"
                            alt="bg"
                            layout="intrinsic"
                            objectFit="cover"
                          />
                        </Box>
                      </Item>
                      <Item>
                        <Box>
                          <Box
                            sx={{
                              fontFamily: "GenWanMin TW, Noto Serif TC",
                              color: "#FFE8D8",
                              fontWeight: 400,
                              fontSize: "15px",
                              letterSpacing: "0.025em",
                              lineHeight: "13px",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: menu.business_hours,
                            }}
                          />
                        </Box>
                      </Item>
                      <Item>
                        <Box>
                          <Box
                            sx={{
                              fontFamily: "GenYoGothic TW",
                              color: "#FFE8D8",
                              fontSize: "16px",
                              lineHeight: "16px",
                            }}
                            mb={2}
                          >
                            聯絡我們
                          </Box>
                          <Box>
                            <Box
                              sx={{
                                fontFamily: "GenWanMin TW, Noto Serif TC",
                                color: "#FFE8D8",
                                fontWeight: 400,
                                fontSize: "13px",
                                letterSpacing: "0.025em",
                                lineHeight: "19px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: menu.contact_us,
                              }}
                            />
                          </Box>
                        </Box>
                      </Item>
                    </Stack>
                  </Box>
                </Item>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
