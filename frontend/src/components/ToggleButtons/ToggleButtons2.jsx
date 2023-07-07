import * as React from 'react';
import { useUserContext } from "../../context/UserContext";
import { Avatar, Button,Box,Tooltip,Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

export default function ToggleButtons2(){

    const { logout, user } = useUserContext();

    return (
        <Box sx={{display:"flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
            <Link  to={`/perfil/edit/${user.ID}`} style={{textDecoration:"none", color:"rgba(0, 0, 0, 0.87)",margin: "4px"}}><Button>Perfil</Button></Link>
            <Button onClick={logout} sx={{marginLeft: "4px"}}>Logout</Button>
        </Box>
    )

}