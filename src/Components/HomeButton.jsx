import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

export const HomeButton = ({setFolderLocation, setListOfVedio}) => {
    const [mouseOver, setOnMouseOver] = useState(false)
    const style = {
        backgroundColor : mouseOver===true ?'#ffffffba':'white',
        cursor:'pointer'
    }
    return (
        <>
        <div   style={{display:'inline-block', width:'10%', marginTop:'20px',marginLeft:'20px', width:'40px'}}  onClick={()=>{setFolderLocation(null); setListOfVedio({})}} onMouseEnter={()=>setOnMouseOver(true)} onMouseLeave={()=>setOnMouseOver(false)}>
            <Paper elevation={0} style={style} >
                <HomeIcon sx={{marginLeft:1, marginTop:0.5}} />
            </Paper>
        </div>
        </>
    )
}