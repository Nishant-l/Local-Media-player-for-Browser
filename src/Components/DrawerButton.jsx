import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export const DrawerButton = ({handleDrawerOpen, open}) => {
    const [mouseOver, setOnMouseOver] = useState(false)
    const style = {
        backgroundColor : mouseOver===true ?'#ffffffba':'white',
        cursor:'pointer'
    }
    return (
        <>
        <div style={{display:'inline-block', width:'10%', marginTop:'20px',marginLeft:'20px',  width:'40px'}} onClick={handleDrawerOpen}  onMouseEnter={()=>setOnMouseOver(true)} onMouseLeave={()=>setOnMouseOver(false)}>
       
            <Paper elevation={0} style={style} >
                <MenuIcon sx={{marginLeft:1, marginTop:0.5}}/>
            </Paper>
        
        </div>
        </>
    )
}