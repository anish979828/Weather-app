import { Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Weather(){
    const { weatherData } = useSelector((state) => state);
    return( 
        <>
        {
          weatherData?.cnt  &&  (
        <>
        <Grid container>
            <Grid item lg={8}>
                <Typography  variant="h1" component="h1">{weatherData.city.name}</Typography>
                <Typography variant="p" component="h1">{weatherData?.list[0]?.weather[0]?.description}</Typography>
                <Typography mt={8} variant="h2" component="h1">{weatherData?.list[0]?.main?.temp}°</Typography>
            </Grid>
            <Grid item lg={4}>
                <Stack>
                   <img
                   src={`http://openweathermap.org/img/w/${weatherData?.list[0]?.weather[0]?.icon}.png`}
                   alt={"Weather Icon"}/>
                 </Stack>
            </Grid>         
        </Grid>
        </> 
        )
        }
        </>   
    )
};