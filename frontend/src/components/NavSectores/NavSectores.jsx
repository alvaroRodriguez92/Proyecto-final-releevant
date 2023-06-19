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

    const { section, setSection } = useUserContext();
    const sectionContainer = { display: "flex", flexDirection: "column", alignItems: "center",width:"8rem", svg: { height: "60px", fontSize: "2.5rem" } }
    return (

        <>
            <Box sx={{display: "flex", columnGap: "1rem", width: "100%", justifyContent: "space-evenly", div: { ">p": { margin: "0 !important" } } }}>
                <Box onClick={() => { section === "salud" ? setSection("") : setSection("salud") }} sx={sectionContainer} className={`${section==="salud"?'active':""}`} >
                    <LocalHospitalOutlinedIcon />
                    <p>Salud</p>
                </Box>
                <Box onClick={() => { section === "construccion" ? setSection("") : setSection("construccion") }} sx={sectionContainer} className={`${section==="construccion"?'active':""}`}>
                    <ConstructionOutlinedIcon />
                    <p>Construccion</p>
                </Box>
                <Box onClick={() => { section === "agroalimentario" ? setSection("") : setSection("agroalimentario") }} sx={sectionContainer} className={`${section==="agroalimentario"?'active':""}`}>
                    <AgricultureOutlinedIcon />
                    <p>Agroalimentario</p>
                </Box>
                <Box onClick={() => { section === "legal" ? setSection("") : setSection("legal") }} sx={sectionContainer} className={`${section==="legal"?'active':""}`}>
                    <AccountBalanceOutlinedIcon />
                    <p>Legal</p>
                </Box>
                <Box onClick={() => { section === "industria" ? setSection("") : setSection("industria") }} sx={sectionContainer} className={`${section==="industria"?'active':""}`}>
                    <FactoryOutlinedIcon />
                    <p>Industria</p>
                </Box>
                <Box onClick={() => { section === "educacion" ? setSection("") : setSection("educacion") }} sx={sectionContainer} className={`${section==="educacion"?'active':""}`}>
                    <MenuBookOutlinedIcon />
                    <p>Educacion</p>
                </Box>
                <Box onClick={() => { section === "deporte" ? setSection("") : setSection("deporte") }} sx={sectionContainer} className={`${section==="deporte"?'active':""}`}>
                    <SportsFootballOutlinedIcon />
                    <p>Deporte</p>
                </Box>
                <Box onClick={() => { section === "hosteleria" ? setSection("") : setSection("hosteleria") }} sx={sectionContainer} className={`${section==="hosteleria"?'active':""}`}>
                    <NightShelterOutlinedIcon />
                    <p>Hosteleria</p>
                </Box>
                <Box onClick={() => { section === "hogar" ? setSection("") : setSection("hogar") }} sx={sectionContainer} className={`${section==="hogar"?'active':""}`}>
                    <GiteOutlinedIcon />
                    <p>Hogar</p>
                </Box>
                <Box onClick={() => { section === "tecnologia" ? setSection("") : setSection("tecnologia") }} sx={sectionContainer} className={`${section==="tecnologia"?'active':""}`}>
                    <DevicesOutlinedIcon />
                    <p>Tecnologia</p>
                </Box>
                <Box onClick={() => { section === "automocion" ? setSection("") : setSection("automocion") }} sx={sectionContainer} className={`${section==="automocion"?'active':""}`}>
                    <DirectionsCarOutlinedIcon />
                    <p>Automocion</p>
                </Box>
                <Box onClick={() => { section === "inmobiliaria" ? setSection("") : setSection("inmobiliaria") }} sx={sectionContainer} className={`${section==="inmobiliaria"?'active':""}`}>
                    <HomeWorkOutlinedIcon />
                    <p>Inmobiliaria</p>
                </Box>
                <Box onClick={() => { section === "cultura" ? setSection("") : setSection("cultura") }} sx={sectionContainer} className={`${section==="cultura"?'active':""}`}>
                    <SchoolOutlinedIcon />
                    <p>Cultura</p>
                </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: "1rem", p: "1rem", minHeight:"86px" }}>

                {section === "salud" && <Categorias idCategoria={8} />}
                {section === "construccion" && <Categorias idCategoria={9} />}
                {section === "agroalimentario" && <Categorias idCategoria={10} />}
                {section === "legal" && <Categorias idCategoria={11} />}
                {section === "industria" && <Categorias idCategoria={12} />}
                {section === "educacion" && <Categorias idCategoria={13} />}
                {section === "deporte" && <Categorias idCategoria={14} />}
                {section === "tecnologia" && <Categorias idCategoria={15} />}
                {section === "hogar" && <Categorias idCategoria={16} />}
                {section === "automocion" && <Categorias idCategoria={17} />}
                {section === "inmobiliaria" && <Categorias idCategoria={18} />}
                {section === "cultura" && <Categorias idCategoria={19} />}
                {section === "hosteleria" && <Categorias idCategoria={20} />}
            </Box>
        </>

    );
}
