import { Button, TextField } from "@mui/material";
// import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import { OutlinedCard } from "./Components/cards/Card";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "8117b6b7404a65e51ebec28f012f66cd";

  const onClickHandler = (e) => {
    if (e?.key === "Enter" || e?.type === "click") {
      fetch(`${api}${city}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((rawData) => {
          setData(rawData);
        })
        .catch((err) => {
          return console.log(err);
        });
    }
  };

  return (
    <div className='App'>
      <TextField
        id='standard-search'
        label='Search field'
        type='search'
        variant='standard'
        sx={{ mt: "4%" }}
        onChange={(e) => setCity(e.target.value)}
      />

      <br />
      <br />
      <Button
        variant='contained'
        color='secondary'
        onClick={onClickHandler}
        size='large'
      >
        Check
      </Button>
      {data?.main && <OutlinedCard data={data} city={city} />}
    </div>
  );
}

export default App;
