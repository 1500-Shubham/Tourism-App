import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import { ImageCollage } from '../components/ImageCollage';
import CustomizedAccordion from '../components/CustomizedAccordian';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modals';

export const Tour = () => {
  return (
    <Container sx={{width:900}}>
        <Typography variant='h3' component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography> 

        <Box marginTop={3} sx={{display:'flex'}}>
        <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/34/2d/28/caption.jpg?w=700&h=-1&s=1&cx=662&cy=604&chk=v1_8984ddf3493edfb8c896'
        height={350}
        width={650}
        ></img>
        <ImageCollage/>    
        </Box> 

        <Box>
            <Typography variant='h6' component="h4" marginTop={3}>
            About Vegas
            </Typography> 

            <Typography variant='paragraph' component="p" marginTop={0}>
            Las Vegas is a place of million-lightbulb signs and fantastic architecture, of readily visible wealth and carefully hidden poverty. It is a place of superlatives, both positive and negative. Within the city stand the largest glass pyramid in the world; one of the largest hotels in the country, with more than 5,000 rooms; and one of the most expensive hotels ever constructed, the Bellagio. The area along Las Vegas Boulevard and its adjoining near-downtown streets—the famous “Strip”—is the “City Without Clocks,” whose multibillion-dollar economy is devoted to servicing a wide array of impulses and addictions of many kinds. It is this Las Vegas, the flashy playground unofficially known as “Sin City” 
            </Typography> 
        </Box>

        <Box marginBottom={10}>
            <Typography variant='h6' component="h4" marginTop={3} marginBottom={2}>
            Frequently Asked Questions
            </Typography> 
            <CustomizedAccordion/>
        </Box>

        <Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal/>
        </BottomNavigation>
      </Paper>
        </Box>
    </Container>
  )
}
