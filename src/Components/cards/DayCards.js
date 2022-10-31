import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CardContent, Typography } from "@mui/material";

export const DayCard = (props) => {
  const { day_Data } = props;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{ flexGrow: 1, mt: "2%" }}
      style={{
        marginInline: 0,
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {day_Data?.list?.map((item, index) => (
          <Grid xs={3} sm={4} md={3} key={index}>
            <Item sx={{ opacity: "0.6" }}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} variant='h4' gutterBottom>
                  {" "}
                  {item?.weather[0]?.description}
                </Typography>
                <Typography variant='h4' component='div'>
                  {day_Data?.city?.name}
                  {","}
                  {day_Data?.city?.country}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant='h4'
                  color='text.secondary'
                >
                  {(item?.main?.temp - 273.15).toFixed(1)}
                  <sup>&deg;</sup>
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant='h4'
                  color='text.secondary'
                >
                  {item?.dt_txt}
                </Typography>
              </CardContent>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
