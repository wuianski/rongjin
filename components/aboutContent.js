import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
}));

const ItemSub = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function AboutContent({ about }) {
  return (
    <>
      {/*** about content which can scroll ***/}
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingLeft: "171px",
          paddingTop: "315px",
          paddingBottom: "30px",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Item sx={{ width: "65%" }}>
            <Box>
              <Stack spacing={2}>
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
          <Item sx={{ width: "35%" }}>
            <Box>
              <Stack spacing={2}>
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
