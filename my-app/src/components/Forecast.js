import { Typography,Grid } from "@mui/material";
import { useSelector } from "react-redux";

export const ForeCast = () => {
    const { weatherData } = useSelector(state => state);
    console.log(weatherData)
    return (
        <>
        <Grid p={2}  style={{backgroundColor:"rgb(32 43 59)",borderRadius:"20px"}}>
            <Typography p={2} variant="p" component="h2">Today's Forecast</Typography>
            <Grid container style={{justifyContent:"space-around"}}>
            {
                weatherData?.list.length > 0 && weatherData?.list.map((weather,i) => {
                    if(i < 5){
                    return(
                        <>
                        <Grid item style={{borderRight:"1px solid white"}} >
                        <Typography variant="p" component="p">{(weather?.dt_txt.split(" ")[1].split(":")[0]+":00") + " " + (+(weather?.dt_txt.split(" ")[1].split(":")[0]) >= 12 ? "PM" : "AM" )}</Typography>
                        <img className="foreCastImg" src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}></img>
                        <Typography variant="h5" component="h4">{weather?.main?.temp}°</Typography>
                        </Grid>
                        </>
                    )
                    }
                })
            }
            </Grid>
        </Grid>
        </>
    )   
};