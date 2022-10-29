import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { OutlinedCard } from "./Components/cards/Card";
import { CURRENT_WEATHER } from "./data/remote/Urls";
import { WEB_HANDLER } from "./data/remote/WebHandler";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const onClickHandler = useCallback(() => {
    WEB_HANDLER(
      `${CURRENT_WEATHER}${city}`,
      (data) => {
        setData(data);
      },
      () => {}
    );
  }, [city]);

  return (
    <div className='App'>
      <TextField
        id='outlined-search'
        label='Search field'
        type='search'
        variant='outlined'
        size='large'
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
