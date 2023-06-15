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
import Categorias from "../Categorias/Categorias";
import { InputAdornment, Box } from "@mui/material";
import { useUserContext } from "../../context/UserContext";

export default function NavIconos() {

    const { section, setSection } = useUserContext();
    const sectionContainer= { display: "flex", flexDirection: "column", alignItems: "center", svg:{height: "60px", fontSize: "2.5rem"} }
    const arrayCategorias = { salud: [{ nombre: "dentista" }, { nombre: "dentista" }], construccion: [{ nombre: "albañil" },{nombre:"fontanero"}], agroalimentario:[{nombre:"ganaderia"},{nombre:"pesca"},{nombre:"agricultura"}],legal:[{nombre:"abogados"},{nombre:"notarios"}]}
    return (
        <>
        <Box sx={{ display: "flex", columnGap: "1rem",width:"100%",justifyContent:"space-evenly", div: { ">p": { margin: "0 !important" } } }}>
                <Box onClick={() => {section==="salud"?setSection(""): setSection("salud")}} sx={sectionContainer}>
                <LocalHospitalOutlinedIcon />
                <p>Salud</p>
            </Box>
            <Box onClick={()=>{section==="construccion"?setSection(""): setSection("construccion")}} sx={sectionContainer}>
                <ConstructionOutlinedIcon />
                <p>Construccion</p>
            </Box>
            <Box onClick={()=>{section==="agroalimentario"?setSection(""): setSection("agroalimentario")}} sx={sectionContainer}>
                <AgricultureOutlinedIcon sx={{ height: "60px", fontSize: "2.5rem", ml: "1rem" }} />
                <p>Agroalimentario</p>
            </Box>
            <Box onClick={()=>{section==="legal"?setSection(""): setSection("legal")}} sx={sectionContainer}>
                <AccountBalanceOutlinedIcon/>
                <p>Legal</p>
            </Box>
            <Box sx={sectionContainer}>
                <FactoryOutlinedIcon/>
                <p>Industria</p>
            </Box>
            <Box sx={sectionContainer}>
                <MenuBookOutlinedIcon/>
                <p>Educacion</p>
            </Box>
            <Box sx={sectionContainer}>
                <SportsFootballOutlinedIcon/>
                <p>Deporte</p>
            </Box>
            <Box sx={sectionContainer}>
                <NightShelterOutlinedIcon/>
                <p>Hosteleria</p>
            </Box>
            <Box sx={sectionContainer}>
                <GiteOutlinedIcon/>
                <p>Hogar</p>
            </Box>
            <Box sx={sectionContainer}>
                <DevicesOutlinedIcon/>
                <p>Tecnologia</p>
            </Box>
            <Box sx={sectionContainer}>
                <DirectionsCarOutlinedIcon/>
                <p>Automocion</p>
            </Box>
            <Box sx={sectionContainer}>
                <HomeWorkOutlinedIcon/>
                <p>Inmobiliaria</p>
            </Box>
            <Box sx={sectionContainer}>
                <SchoolOutlinedIcon/>
                <p>Cultura</p>
            </Box>
        </Box>
            {section === "salud" && <Categorias array={arrayCategorias.salud} />}
            {section === "construccion" && <Categorias array={arrayCategorias.construccion} />}
            {section === "agroalimentario" && <Categorias array={arrayCategorias.agroalimentario} />}
            {section === "legal" && <Categorias array={arrayCategorias.legal} />}</>
    );
}
