import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CurrentCard } from "./Components/cards/CurrentCard";
import { CURRENT_WEATHER, DAY_WAETHER } from "./data/remote/Urls";
import { WEB_HANDLER } from "./data/remote/WebHandler";
import "./App.css";
import { DayCard } from "./Components/cards/DayCards";

function App() {
  const [city, setCity] = useState("");
  const [current_Data, setCurrentData] = useState({});
  const [day_Data, setDayData] = useState({});

  const current_Hanlder = () => {
    WEB_HANDLER(
      `${CURRENT_WEATHER}${city}`,
      (data) => {
        setCurrentData(data);
      },
      () => {}
    );
  };
  const day_Hanlder = () => {
    WEB_HANDLER(
      `${DAY_WAETHER}${city}`,
      (data) => {
        setDayData(data);
      },
      () => {}
    );
  };
  const checkButton = () => {
    day_Hanlder();
    current_Hanlder();
  };

  console.log(day_Data);

  return (
    <div className='App'>
      <Typography sx={{ fontSize: 24, mt: "3%" }} variant='h2' gutterBottom>
        {" "}
        <strong>Weather App</strong>
      </Typography>
      <TextField
        id='outlined-search'
        label='Search by City Name'
        type='search'
        variant='outlined'
        size='large'
        sx={{ mt: "2%" }}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        variant='contained'
        color='secondary'
        onClick={checkButton}
        size='large'
        sx={{ mt: "2%" }}
      >
        Check
      </Button>
      <br />
      <br />
      {current_Data?.main && <CurrentCard current_Data={current_Data} />}
      {day_Data?.city && <DayCard day_Data={day_Data} />}
    </div>
  );
}

export default App;
