import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const FolderSelector = ({setFolderLocation, setListOfVedio}) => {

    // -------------------------------------------------------------------------
    const click = async() => {
        const dirPicker = await window.showDirectoryPicker();
        setFolderLocation(dirPicker);
        const dict = {};
        setListOfVedio({})
        for await (const [name, handle] of dirPicker.entries()){
            dict[name]=handle;
        }
        // console.log(Object.keys(vedList).sort());
        console.log(dict);
        setListOfVedio(dict)
        console.log(dict);
    }
    // -------------------------------------------------------------------------

    return (
        <Box
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            width: 600,
            height: 128,
            margin:'auto',
            marginTop:40,
            backgroundColor:'#011e3c'
        },
        }}
    >
        <Paper elevation={20} >
            <Button onClick={click} variant="contained" disableElevation 
                sx={{marginLeft:20, marginTop:6}}
            >
                Click to Select Foldef Location
            </Button>
        </Paper>
        </Box>
    )
}