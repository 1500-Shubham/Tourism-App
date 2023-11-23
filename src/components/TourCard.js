import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const GridTheme= createTheme({
    components: {
        MuiTypography:{
            variants:[
                {
                    props:{variant:"body2"},
                    style:{fontSize:13}
                },
                {
                    props:{variant:"body3"},
                    style:{fontSize:11, backgroundColor:'#FFFBF5'}
                }
            ]
        }
    }
})

export const TourCard = ({tour,key}) => {
  return (
    <Grid item xs={3}>
    <ThemeProvider theme={GridTheme}>
    <Paper elevation={4}>
        <img src={tour.image}
        alt=''
        className='img'
        ></img>
        <Box padding={1} >

            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>

            <Box sx={{display:'flex',alignItems:'center'}}>
            <AccessTimeIcon sx={{width:12.5}}/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
             {tour.duration} hours
            </Typography>
            </Box>

             <Box sx={{display:'flex',alignItems:'center',marginTop:3}}>
             <Rating name="read-only" value={3.5} readOnly defaultValue={3.5} precision={0.5} size='small' />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
                </Typography>
             </Box>
                 <Typography variant="h6" component="h3" marginTop={0}>
                $ {tour.price}
                </Typography>
             <Box>
                
             </Box>

        </Box>
    </Paper>
    </ThemeProvider>
    </Grid>
  )
}
