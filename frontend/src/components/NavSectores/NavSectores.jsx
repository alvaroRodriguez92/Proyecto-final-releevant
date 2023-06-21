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

export default function NavSectores() {

    function handleSector(sector){
        setSection(sector)
    }
    const { section, setSection } = useUserContext();
    const sectionContainer= { display: "flex", flexDirection: "column", alignItems: "center", svg:{height: "60px", fontSize: "2.5rem"} }
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
                <AgricultureOutlinedIcon />
                <p>Agroalimentario</p>
            </Box>
            <Box onClick={()=>{section==="legal"?setSection(""): setSection("legal")}} sx={sectionContainer}>
                <AccountBalanceOutlinedIcon/>
                <p>Legal</p>
            </Box>
            <Box onClick={()=>{section==="industria"?setSection(""): setSection("industria")}} sx={sectionContainer}>
                <FactoryOutlinedIcon/>
                <p>Industria</p>
            </Box>
            <Box onClick={()=>{section==="educacion"?setSection(""): setSection("educacion")}} sx={sectionContainer}>
                <MenuBookOutlinedIcon/>
                <p>Educacion</p>
            </Box>
            <Box onClick={()=>{section==="deporte"?setSection(""): setSection("deporte")}} sx={sectionContainer}>
                <SportsFootballOutlinedIcon/>
                <p>Deporte</p>
            </Box>
            <Box onClick={()=>{section==="hosteleria"?setSection(""): setSection("hosteleria")}} sx={sectionContainer}>
                <NightShelterOutlinedIcon/>
                <p>Hosteleria</p>
            </Box>
            <Box onClick={()=>{section==="hogar"?setSection(""): setSection("hogar")}} sx={sectionContainer}>
                <GiteOutlinedIcon/>
                <p>Hogar</p>
            </Box>
            <Box onClick={()=>{section==="tecnologia"?setSection(""): setSection("tecnologia")}} sx={sectionContainer}>
                <DevicesOutlinedIcon/>
                <p>Tecnologia</p>
            </Box>
            <Box onClick={()=>{section==="automocion"?setSection(""): setSection("automocion")}} sx={sectionContainer}>
                <DirectionsCarOutlinedIcon/>
                <p>Automocion</p>
            </Box>
            <Box onClick={() => handleSector("inmobiliaria")} sx={sectionContainer}>
                <HomeWorkOutlinedIcon/>
                <p>Inmobiliaria</p>
            </Box>
            <Box onClick={() => handleSector("cultura")} sx={sectionContainer}>
                <SchoolOutlinedIcon/>
                <p>Cultura</p>
            </Box>
        </Box>
            {section === "salud" && <Categorias idCategoria={8}/>}
            {section === "construccion" && <Categorias idCategoria={9} />}
            {section === "agroalimentario" && <Categorias idCategoria={10} />}
            {section === "legal" && <Categorias idCategoria={11}/>}
            {section === "industria" && <Categorias idCategoria={12}/>}
            {section === "educacion" && <Categorias idCategoria={13}/>}
            {section === "deporte" && <Categorias idCategoria={14}/>}
            {section === "tecnologia" && <Categorias idCategoria={15}/>}
            {section === "hogar" && <Categorias idCategoria={16}/>}
            {section === "automocion" && <Categorias idCategoria={17}/>}
            {section === "inmobiliaria" && <Categorias idCategoria={18}/>}
            {section === "cultura" && <Categorias idCategoria={19}/>}
            {section === "hosteleria" && <Categorias idCategoria={20}/>}</>
    );
}