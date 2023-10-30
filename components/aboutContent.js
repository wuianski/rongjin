import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import en_btn from "../public/imgs/en_btn.png";
import ch_btn from "../public/imgs/ch_btn.png";
import jp_btn from "../public/imgs/jp_btn.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
  [theme.breakpoints.down("md")]: {
    //padding: theme.spacing(1),
  },
}));

const ItemSub = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "left",
  // filter: "drop-shadow(20px 20px 40px rgba(0, 0, 0, 0.5))",
  boxShadow:
    "20px 20px 30px -1px rgba(0,0,0,0.2),10px 10px 40px 0px rgba(0,0,0,0.14),10px 10px 40px 0px rgba(0,0,0,0.12)",
  borderRadius: 0,
  [theme.breakpoints.down("md")]: {
    //padding: theme.spacing(2),
    boxShadow:
      "8px 8px 10px -1px rgba(0,0,0,0.2),8px 8px 10px 0px rgba(0,0,0,0.14),8px 8px 10px 0px rgba(0,0,0,0.12)",
  },
}));

/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function AboutContent({ about }) {
  /*** changeToEN ***/
  const changeToEN = async (event) => {
    const nodeList_ch = document.querySelectorAll(".ch");
    for (let i = 0; i < nodeList_ch.length; i++) {
      nodeList_ch[i].style.display = "none";
    }
    const nodeList_en = document.querySelectorAll(".en");
    for (let i = 0; i < nodeList_en.length; i++) {
      nodeList_en[i].style.display = "block";
    }
    const nodeList_jp = document.querySelectorAll(".jp");
    for (let i = 0; i < nodeList_jp.length; i++) {
      nodeList_jp[i].style.display = "none";
    }
  };
  /*** changeToCH ***/
  const changeToCH = async (event) => {
    const nodeList_ch = document.querySelectorAll(".ch");
    for (let i = 0; i < nodeList_ch.length; i++) {
      nodeList_ch[i].style.display = "block";
    }
    const nodeList_en = document.querySelectorAll(".en");
    for (let i = 0; i < nodeList_en.length; i++) {
      nodeList_en[i].style.display = "none";
    }
    const nodeList_jp = document.querySelectorAll(".jp");
    for (let i = 0; i < nodeList_jp.length; i++) {
      nodeList_jp[i].style.display = "none";
    }
  };
  /*** changeToJP ***/
  const changeToJP = async (event) => {
    const nodeList_ch = document.querySelectorAll(".ch");
    for (let i = 0; i < nodeList_ch.length; i++) {
      nodeList_ch[i].style.display = "none";
    }
    const nodeList_en = document.querySelectorAll(".en");
    for (let i = 0; i < nodeList_en.length; i++) {
      nodeList_en[i].style.display = "none";
    }
    const nodeList_jp = document.querySelectorAll(".jp");
    for (let i = 0; i < nodeList_jp.length; i++) {
      nodeList_jp[i].style.display = "block";
    }
  };

  return (
    <>
      {/*** EN btn  ***/}
      <Box
        pb={3}
        pt={3}
        sx={{
          position: "absolute",
          left: { xs: "8px", md: "34px" },
          top: { xs: "100px", md: "188px" },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "calc(154px * 0.8)", md: "154px" },
            height: { xs: "calc(70px * 0.8)", md: "70px" },
            cursor: "pointer",
          }}
          onClick={changeToEN}
        >
          <Image
            src={en_btn}
            alt="return icon"
            layout="intrinsic"
            objectFit="cover"
          />
        </Box>
      </Box>
      {/*** CH btn  ***/}
      <Box
        pb={3}
        pt={3}
        sx={{
          position: "absolute",
          left: { xs: "8px", md: "34px" },
          top: { xs: "158px", md: "265px" },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "calc(154px * 0.8)", md: "154px" },
            height: { xs: "calc(70px * 0.8)", md: "70px" },
            cursor: "pointer",
          }}
          onClick={changeToCH}
        >
          <Image
            src={ch_btn}
            alt="return icon"
            layout="intrinsic"
            objectFit="cover"
          />
        </Box>
      </Box>
      {/*** JP btn  ***/}
      <Box
        pb={3}
        pt={3}
        sx={{
          position: "absolute",
          left: { xs: "8px", md: "34px" },
          top: { xs: "216px", md: "342px" },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "calc(154px * 0.8)", md: "154px" },
            height: { xs: "calc(70px * 0.8)", md: "70px" },
            cursor: "pointer",
          }}
          onClick={changeToJP}
        >
          <Image
            src={jp_btn}
            alt="return icon"
            layout="intrinsic"
            objectFit="cover"
          />
        </Box>
      </Box>
      {/*** about content which can scroll ***/}
      <Box
        sx={{
          width: { xs: "95%", md: "80vw" },
          height: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingLeft: { xs: "20px", md: "171px" },
          paddingTop: { xs: "215px", md: "300px" },
          paddingBottom: "80px",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 0, md: 3 }}
        >
          <Item sx={{ width: { xs: "100%", md: "55%" } }}>
            <Box>
              <Stack spacing={{ xs: 4, md: 8 }}>
                {/*** 榕錦時光生活園區 ***/}
                <ItemSub>
                  <Box
                    className="ch"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "block",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.park_introduction_tw,
                    }}
                  />
                  <Box
                    className="en"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.park_introduction_en,
                    }}
                  />
                  <Box
                    className="jp"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.park_introduction_jp,
                    }}
                  />
                </ItemSub>
                {/*** 歷史沿革 ***/}
                {/* <ItemSub>
                  <Box
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                    }}
                    dangerouslySetInnerHTML={{ __html: about.history_tw }}
                  />
                </ItemSub> */}
              </Stack>
            </Box>
          </Item>
          <Item sx={{ width: { xs: "100%", md: "38%" } }}>
            <Box pt={{ xs: 0, md: 16 }}>
              <Stack spacing={{ xs: 4, md: 8 }}>
                {/*** 未來展望 ***/}
                <ItemSub>
                  <Box
                    className="ch"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "block",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.prospects_tw,
                    }}
                  />
                  <Box
                    className="en"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.prospects_en,
                    }}
                  />
                  <Box
                    className="jp"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.prospects_jp,
                    }}
                  />
                </ItemSub>
                {/*** 營運團隊 ***/}
                <ItemSub>
                  <Box
                    className="ch"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "block",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.operations_team_tw,
                    }}
                  />
                  <Box
                    className="en"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.operations_team_en,
                    }}
                  />
                  <Box
                    className="jp"
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      display: "none",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.operations_team_jp,
                    }}
                  />
                </ItemSub>
              </Stack>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
