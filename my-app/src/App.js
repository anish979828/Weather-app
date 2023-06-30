import Header from "./components/Header";
import { Grid,Typography } from "@mui/material";
import Weather from "./components/Weather.js";
import { ForeCast } from "./components/Forecast";
import AirCodition from "./components/AirCondition";
import Upcoming from "./components/UpcomingForecast";
import { useSelector } from "react-redux";
import {  Puff } from  'react-loader-spinner';
import { useEffect } from "react";

function App() { 

  const { weatherData,loading,error } = useSelector(state => state);

  useEffect(() => {
    document.body.classList.add(weatherData?.cnt ? "dark": "light")
  },[weatherData]);

  return (
    <>
    <div className={weatherData ? "dark" : "light"}> 
    <Header />
    {
      loading && 
    <div className="center">
    <Puff
         height="80"
         width="80"
         radius={1}
         color="#4fa94d"
         ariaLabel="puff-loading"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
     />  
    </div>
    }
    {
      error && <Typography variant="h2" style={{textAlign:"center",color:"orange"}} component="h1">{error}</Typography>
    }
    {
      weatherData?.cnt && 
      <>
      <Grid spacing={4} container p={15}>
          <Grid item lg={8}>
              <Weather />
              <ForeCast />
              <AirCodition />
          </Grid>
          <Grid item lg={4} sx={2}>
              <Upcoming />
           </Grid>
      </Grid>
      </>
    }
    </div>
    </>
  );
}

export default App;

