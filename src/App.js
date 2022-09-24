import './App.css';
import { useState } from 'react';
import { FolderSelector } from './Components/FolderSelector';
import { HomeButton } from './Components/HomeButton';
import { ListDisplayer } from './Components/ListDisplayer';
import { Drawerr } from './Components/Drawer';
import { DrawerButton } from './Components/DrawerButton';

function App() {

  const [folderLocation, setFolderLocation ] = useState(null);
  const [listOfVedio, setListOfVedio] = useState({});
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };      

  return (
    <>
      <HomeButton setFolderLocation={setFolderLocation} setListOfVedio={setListOfVedio}/>
      <DrawerButton handleDrawerOpen={handleDrawerOpen} open={open}/>
      {folderLocation==null && <FolderSelector setFolderLocation={setFolderLocation} setListOfVedio={setListOfVedio}/> }
      {folderLocation!==null && <ListDisplayer listOfVedio={listOfVedio}/>}  
      <Drawerr listOfVedio={listOfVedio} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open}/>    
    </>
  );
}

export default App;
