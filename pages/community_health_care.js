import fetchData from "../lib/api";
import Image from "next/image";
import Box from "@mui/material/Box";
import Nav from "../components/nav";
import logo from "../public/imgs/logo.png";

export default function community_health_care({ about, menu }) {
  return (
    <>
      {/*** logo  ***/}
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
        <Image src={logo} placeholder="blur" alt="bg" />
      </Box>
      {/*** menu  ***/}
      <Box>
        <Nav menu={menu.menu} />
      </Box>
      <Box>community_health_care page</Box>
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
              park_introduction
              history
              prospects
              operations_team
              transportation
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
