import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CurrentCard = (props) => {
  const { current_Data } = props;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} variant='h4' gutterBottom>
          {" "}
          <strong>{current_Data?.weather[0]?.main}</strong>
        </Typography>
        <Typography variant='h4' component='div'>
          {current_Data?.name}
          {","}
          {current_Data?.sys?.country}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant='h3' color='text.secondary'>
          {(current_Data?.main?.temp - 273.15).toFixed(1)}
          <sup>&deg;</sup>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box
      sx={{
        minWidth: 275,
        mt: "2%",
        mx: "30%",
        opacity: "0.6",
      }}
    >
      <Card variant='standard'>{card}</Card>
    </Box>
  );
};
