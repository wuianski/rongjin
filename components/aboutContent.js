import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
}));

const ItemSub = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "left",
  // filter: "drop-shadow(20px 20px 40px rgba(0, 0, 0, 0.5))",
  boxShadow:
    "20px 20px 30px -1px rgba(0,0,0,0.2),10px 10px 40px 0px rgba(0,0,0,0.14),10px 10px 40px 0px rgba(0,0,0,0.12)",
  borderRadius: 0,
}));

export default function AboutContent({ about }) {
  return (
    <>
      {/*** about content which can scroll ***/}
      <Box
        sx={{
          width: { xs: "93vw", md: "80vw" },
          height: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingLeft: { xs: "25px", md: "171px" },
          paddingTop: "315px",
          paddingBottom: "30px",
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
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.park_introduction,
                    }}
                  />
                </ItemSub>
                {/*** 歷史沿革 ***/}
                <ItemSub>
                  <Box
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                      height: "200vh",
                    }}
                    dangerouslySetInnerHTML={{ __html: about.history }}
                  />
                </ItemSub>
              </Stack>
            </Box>
          </Item>
          <Item sx={{ width: { xs: "100%", md: "38%" } }}>
            <Box pt={16}>
              <Stack spacing={{ xs: 4, md: 8 }}>
                {/*** 未來展望 ***/}
                <ItemSub>
                  <Box
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.prospects,
                    }}
                  />
                </ItemSub>
                {/*** 營運團隊 ***/}
                <ItemSub>
                  <Box
                    sx={{
                      fontFamily: "GenWanMin, Noto Serif TC",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: about.operations_team,
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
