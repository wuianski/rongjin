import { useState, useEffect } from "react";
import fetchData from "../lib/api";
import Image from "next/image";
import Box from "@mui/material/Box";
import Nav from "../components/nav";
import Link from "next/link";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import ReactPlayer from "react-player";

import logo from "../public/imgs/logo.png";
import cover from "../public/imgs/health_care/cover.png";
import img1 from "../public/imgs/health_care/img.png";

/******************/
/*** nav stack ***/
const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  // width: "max-content",
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export default function Community_health_care({ about, menu }) {
  /*** !!adding for react-player to use ***/
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/*** logo  ***/}
      <Link href="/">
        <Box
          sx={{
            position: "fixed",
            zIndex: 9,
            left: { xs: 30, md: 30 },
            top: { xs: 15, md: 30 },
            width: { xs: 147 * 0.7, md: 147 },
            height: 121.63,
            cursor: "pointer",
          }}
        >
          <Image src={logo} placeholder="blur" alt="bg" />
        </Box>
      </Link>
      {/*** menu  ***/}
      <Box>
        <Nav menu={menu.menu} />
      </Box>
      <Box>
        <Box
          mt={{ xs: 23, md: 23 }}
          ml="auto"
          mr="auto"
          sx={{
            width: { xs: "100%", md: "70vw" },
            position: "relative",
            display: "block",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "column" }}
            spacing={{ xs: 3, md: 3 }}
            pb={3}
          >
            <Item>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 200, md: 512 },
                }}
              >
                <Image
                  src={cover}
                  placeholder="blur"
                  alt="cover image"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Item>
            <Item>
              <Box
                sx={{
                  textAlign: "center",
                  fontFamily: "GenWanMin TW",
                  fontSize: 64,
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                幸福時光
              </Box>
              <Box
                pb={{ xs: 2, md: 4 }}
                sx={{
                  textAlign: "center",
                  fontFamily: "GenYoGothic TW",
                  fontSize: 29,
                  fontWeight: 600,
                  lineHeight: "172%",
                  letterSpacing: "0.025em",
                }}
              >
                社區——居家照護
              </Box>
            </Item>
            <Item>
              <Box
                pt={4}
                sx={{
                  textAlign: "justify",
                  fontFamily: "GenYoGothic TW",
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: "160%",
                  letterSpacing: "0.025em",
                  borderTop: "1px solid #000",
                }}
              >
                《大安學》(Daanlogy)以大安區深厚的藝術氛圍與文化歷史為本，結合教育、環境與健康的生活哲學，致力實踐「醫居動養：地方創生、科文雙融、健康福祉」之宜居共生社區。
                財團法人臺北市昇德基金會率先進入社區建立友善信任關係，經由系統性調研、設計發展與資源整合，規劃方案與課程，滿足銀髮族與次世代（50歲以上）對健康、社交互動與居家安寧等需求。於此同時，持續投入長照
                2.0
                四包錢（專業照顧、交通接送、輔具及環境無礙、喘息服務），提供促進健康、慢性病管理預防、延緩失智失能、關懷家庭等資源與服務；並以預防醫學角度，將我們服務的對象分為以下三級，針對不同階段需求提供相應的資源整合及服務：
                初級預防:完全健康者，提供促進健康與預防疾病之照護服務。
                次級預防:亞健康者，提供延緩疾病、失能和失智的嚴重度之照護服務。
                三級預防: 已生病、失能或失智者，提供身心復健與生活的支援與自立。
                參酌日本巢鴨地藏通商店街與共生社區典範佛子園，成立「大安學苑：榕錦社區保健室」作為醫療院所與社區家庭的中介，落實社區居家照護服務、資源共享，打造寓「食衣住行育樂醫」於一體的場域，並結合雲端醫療照護和智慧家庭／社區，與大專院校、醫療院所等團體組織共同創新，發展大數據以確保民眾從社區到居家的健康福祉與生活照護，並與醫療照護無縫銜接，使服務延續且不中斷，以實踐就地安養的願景。
              </Box>
            </Item>
            <Item>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 200, md: 512 },
                }}
              >
                <Image
                  src={img1}
                  placeholder="blur"
                  alt="cover image"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Item>
            <Item>
              <Box
                pt={4}
                sx={{
                  textAlign: "left",
                  fontFamily: "GenWanMin TW",
                  fontSize: 31,
                  fontWeight: 600,
                  lineHeight: 1,
                  borderTop: "1px solid #000",
                }}
              >
                服務項目
              </Box>
              <Box
                pt={4}
                pb={{ xs: 2, md: 4 }}
                sx={{
                  textAlign: "justify",
                  fontFamily: "GenYoGothic TW",
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: "160%",
                  letterSpacing: "0.025em",
                }}
              >
                經專業評估後，針對需求提供最適服務包含：
                居家長照及護理：專業照顧、交通接送、輔具及環境無礙、喘息
                慢性病智能健康管理與自我照顧訓練
                行動教室：課程、講座、節慶活動、街區走讀 臨時托顧(2～3小時)
                腳底按摩與足部護理 生活支援與生活自立再設計 照顧諮詢與資源連結
              </Box>
            </Item>
            <Item>
              <Box
                pt={4}
                pb={{ xs: 2, md: 4 }}
                sx={{
                  textAlign: "left",
                  fontFamily: "GenWanMin TW",
                  fontSize: 31,
                  fontWeight: 600,
                  lineHeight: 1,
                  borderTop: "1px solid #000",
                }}
              >
                長照2.0四包錢簡介
              </Box>
              <Box>
                <Box className="player-wrapper" mt={"15px"} mb={"15px"}>
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=8dS8mIR3tfE"
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </Box>
              </Box>
              <Box
                pt={{ xs: 2, md: 4 }}
                pb={{ xs: 2, md: 4 }}
                sx={{
                  textAlign: "left",
                  fontFamily: "GenYoGothic TW",
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: "160%",
                  letterSpacing: "0.025em",
                }}
              >
                ©中華民國衛生福利部長期照顧司
              </Box>
            </Item>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [about, menu] = await Promise.all([
    await fetchData(
      `
        query  {
            about{
              id
              park_introduction_tw
              history_tw
              prospects_tw
              operations_team_tw
              transportation_tw
            }
        }
        `,
      {
        variables: {},
      }
    ),
    await fetchData(
      `
        query  {
            menu{
              id
              business_hours
              contact_us
            }
        }
        `,
      {
        variables: {},
      }
    ),
  ]);

  return {
    props: {
      about: about.data,
      menu: menu.data,
    },
    //revalidate: 1,
  };
}
