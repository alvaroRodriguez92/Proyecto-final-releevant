import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import NightShelterOutlinedIcon from "@mui/icons-material/NightShelterOutlined";
import GiteOutlinedIcon from "@mui/icons-material/GiteOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { InputAdornment, Box } from "@mui/material";

export default function NavIconos() {
    return (

        <Box sx={{ display: "flex", columnGap: "1rem", p: "0.5rem" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" ,ml:"1.4rem",mr:"2rem"}} >
                <LocalHospitalOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem" ,ml:"1rem"}} />
                <p>Salud</p>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem",mr:"2rem" }}>
                <ConstructionOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }}  />
                <p>Construccion</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem",mr:"2rem"  }}>
                <AgricultureOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                <p>Agroalimentario</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem",mr:"2rem" }}>
                <AccountBalanceOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                <p>Legal</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem",mr:"2rem" }}>
                <FactoryOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                <p>Industria</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem" ,mr:"2rem"}}>
                <MenuBookOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                <p>Educacion</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem" ,mr:"2rem"}}>
                <SportsFootballOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                <p>Deporte</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" ,ml:"1.4rem",mr:"2rem"}}>
                    <NightShelterOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                    <p>Hosteleria</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem",mr:"2rem" }}>
                    <GiteOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                    <p>Hogar</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem",mr:"2rem" }}>
                    <DevicesOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem" ,ml:"1rem"}} />
                    <p>Tecnologia</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" ,ml:"1.4rem",mr:"2rem"}}>
                <DirectionsCarOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                <p>Automocion</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",ml:"1.4rem" ,mr:"2rem"}}>
                    <HomeWorkOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                    <p>Inmobiliaria</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" ,ml:"1.4rem",mr:"2rem"}}>
                    <SchoolOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem",ml:"1rem" }} />
                    <p>Cultura</p>
                </Box>
            </Box>
            );
}
