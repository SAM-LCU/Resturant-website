import React from 'react'
import Layout from '../Components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
        <Layout>
             <Box sx={{
              my:10,
              textAlign: "center",
              p:2,
              "& h4": {
                fontWeight:"bold",
                my:2,
                fontSize:"2rem"
              },
              "& p":{
                textAlign: "justify"
              },
              '@media (max-width: 600px)':{
                mt:0
              }
             }}>
              <Typography variant='h4'>
                  Nambi Vangea Sandhoshma Pongea
              </Typography>
              <p>
                We Serve the best and quality Foods All over the Madurai Town. 
                The Main thing of our Restrurant is to Fullfill all the people choice of Dishes. 
                The key factor of the business is that each and every person should get quality of food with an affordable price.
                The Nesmani Kitchen Resturant is mainly opened on behalf of <b>"Legendary Actor Mr.Vadivelu"</b> who is the King oF
                 <b>"Tamil Meme World"</b> and a Great Entertainer for Many years in Tamil Film Industry. His favourite quote of Food is that
                  <b>"Thani Oru Manidhanaku Unavu Ellaiyanil Indha Jagathinai Alithuvidumo"</b>.The actuall meaning of this quote is that 
                  <b>"If an Individual on this earth restricted to have an single meal per day, lets destroy the whole world "</b>

              </p>
             </Box>
        </Layout>   
  )
}

export default About
