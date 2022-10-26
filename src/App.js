import { Button, TextField } from "@mui/material";
// import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "8117b6b7404a65e51ebec28f012f66cd";

  useEffect(() => {
    fetch(`${api}${city}&appid=${apiKey}`)
      .then((res) => res.json())
      .then((rawData) => {
        return setData(rawData);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, [city]);
  console.log(data);
  const OnCheck = () => {
    setCity(input);
    setInput("");
  };

  return (
    <div className='App'>
      <h1>Temperature of Your city</h1>
      <TextField
        id='outlined-basic'
        label='Enter city name'
        variant='outlined'
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant='contained'
        color='secondary'
        onClick={OnCheck}
        size='large'
      >
        Check
      </Button>
      <h2>
        Current temperature of {city} is{" "}
        {(data?.main?.temp - 273.15).toFixed(1)}
      </h2>
    </div>
  );
}

export default App;
