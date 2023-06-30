import { Typography,Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { WiRaindrop,WiStrongWind,WiThermometer} from 'react-icons/wi';

export default function AirCodition(){
    const { weatherData } = useSelector(state => state);
    return(
        <>
        <Grid mt={2} style={{backgroundColor:"rgb(32 43 59)",borderRadius:"20px"}}>
            <Typography p={3} variant="p" component="h2">Air Conditions</Typography>
            <Grid container>
            <Grid p={3}item>
            <WiThermometer size={64} color="yellow" />
              <Typography variant="p" component="p">Real Feel</Typography>
              <Typography variant="h4" component="h4">{weatherData?.list[0]?.main.feels_like}°</Typography>
            </Grid>
            <Grid p={3} ml={20} item>
            <WiStrongWind size={64} color="aliceblue" />
              <Typography variant="p" component="p">Wind Speed</Typography>
              <Typography variant="h4" component="h4">{weatherData?.list[0]?.main.feels_like}°</Typography>
            </Grid>
            <Grid p={3} ml={20}item>
            <WiRaindrop size={64} color="#1976d2" />
              <Typography variant="p" component="p">Humidity</Typography>
              <Typography variant="h4" component="h4">{weatherData?.list[0]?.main?.humidity}%</Typography>
            </Grid>
            </Grid>
        </Grid>
        </>
    )
};