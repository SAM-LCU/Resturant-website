import React, {useState} from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {Link, NavLink} from "react-router-dom"
import "../../src/styles/Headingstyle.css"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false)


// handle menu click
const handleDrawerToggle = () => {
  setmobileOpen(!mobileOpen)
}


  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
           <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1, my:2}}>
                    <DinnerDiningIcon/>
                       My Resturant
                  </Typography>
                  <Divider/>
                          <ul className='moblie-navigation'>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/menu"}>Menu</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                          </ul>
    </Box>
  )


  return (
    <div>
        <Box>
            <AppBar component={"nav"} sx={{bgcolor : "black"}}>
              <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display : {sm : "none"} }} onClick={handleDrawerToggle}>
                    <MenuIcon/>
                </IconButton>
                  <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}>
                    <DinnerDiningIcon/>
                       Nesamani Kitchen
                  </Typography>
                      <Box sx={{ display: {  sm:"black" } }}>
                          <ul className='navigation-menu'>
                            <li><NavLink activeClassName='active' to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/menu"}>Menu</NavLink></li>
                            <li><NavLink to={"/about"}>About</NavLink></li>
                            <li><NavLink to={"/contact"}>Contact</NavLink></li>
                          </ul>
                      </Box>
              </Toolbar>
            </AppBar>
                <Box component='nav'>
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block",sm:"none"}, }}>
                      {drawer}
                    </Drawer>
                </Box>
                <Toolbar/>
        </Box>
    </div>
  )
}

export default Header