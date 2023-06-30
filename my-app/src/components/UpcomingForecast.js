import { Grid, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Upcoming() {

  const { weatherData } = useSelector((state) => state);

  let data = weatherData?.list.reduce((acc, cv) => {
    if (
      !acc?.some(
        (item) => cv?.dt_txt.slice(0, 10) === item?.dt_txt.slice(0, 10)
      )
    ) {
      acc.push(cv);
    }
    return acc;
  }, []);
  
  return (
    <>
      <Grid
        p={2}
        style={{ backgroundColor: 'rgb(32 43 59)', borderRadius: '20px' }}
      >
        <Typography p={2} variant="p" component="h2">7-day Forecast</Typography>
            <Grid  container style={{display:"flex" ,justifyContent:"center"}}>
            {
                data.length > 0 && 
                data.map((weather,i) => {
                    return(
                        <>
                        <Grid  p={0.2} item style={{ display:"flex",alignItems:"center", borderBottom:"1px solid white"}} >
                        <Typography variant="p" component="p"> {i === 0 ? "TODAY" : ["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date(weather?.dt_txt).getDay()]}</Typography>
                        <Typography m={2} variant="h6" component="h2">{weather?.weather[0]?.main}</Typography>
                        <img up className="foreCastImg" src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} alt="Weather_img"/>
                        <Typography variant="h5" component="h4">{String(weather?.main?.temp_min).slice(0,2)}/{String(weather?.main?.temp_max).slice(0,2)}°</Typography>
                        </Grid>
                        </>
                    )
                })
            }
            </Grid>
      </Grid>
    </>
  );
}
