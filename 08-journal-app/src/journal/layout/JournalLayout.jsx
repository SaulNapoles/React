import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components';

const drawerwidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        <NavBar drawerwidth={ drawerwidth } />

        <SideBar drawerwidth={ drawerwidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p:  3 }}
        >
            <Toolbar/>

            { children }
        </Box>
    </Box>
  )
}
