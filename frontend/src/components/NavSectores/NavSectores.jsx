import { useEffect, useState } from "react";
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
import Categorias from '../Categorias/Categorias'
import { Box } from '@mui/material';
import { useUserContext } from "../../context/UserContext";

const sectionContainer = {pb:"0.5rem",display: "flex", flexDirection: "column", alignItems: "center",width:"8rem", svg: { height: "60px", fontSize: "2.5rem" } }

const ICONOS = {

    SALUD: <LocalHospitalOutlinedIcon />,
    CONSTRUCCION: <ConstructionOutlinedIcon/>,
    AGROALIMENTARIO: <AgricultureOutlinedIcon/>,
    LEGAL: <AccountBalanceOutlinedIcon/>,
    INDUSTRIA: <FactoryOutlinedIcon/>,
    EDUCACION: <MenuBookOutlinedIcon/>,
    DEPORTE: <SportsFootballOutlinedIcon/>,
    HOGAR: <GiteOutlinedIcon/>,
    AUTOMOCION: <DirectionsCarOutlinedIcon/>,
    INMOBILIARIA: <HomeWorkOutlinedIcon/>,
    CULTURA:<SchoolOutlinedIcon/> ,
    TECNOLOGIA: <DevicesOutlinedIcon/>,
    HOSTELERIA: <NightShelterOutlinedIcon/>,
    SIN_SECTOR: <SchoolOutlinedIcon/>,
};



export default function NavSectores() {
    const { section, setSection } = useUserContext();
    const [sectores, setSectores] = useState([]);
    
    useEffect(() => {
        async function getSectores() {
            const api = await fetch(`http://127.0.0.1:3000/sector`);
            setSectores(await api.json());
        }
        getSectores();
    }, []);

    const handleClick = (sectorSelected) => { section.NOMBRE_SECTOR === sectorSelected.NOMBRE_SECTOR ? setSection("") : setSection(sectorSelected) }
    
    return (
        <Box sx={{width:"100%"}}>
        <Box sx={{textTransform: "capitalize",display: "flex", columnGap: "2.1rem", width: "100%", justifyContent: "space-evenly",pt:"1.5rem", div: { ">p": { margin: "0 !important" } } }}>
                {sectores.map((sector) => {
                   if (sector.NOMBRE_SECTOR !== "SIN SECTOR" ){
                        return (
                            <Box onClick={()=>handleClick(sector)} className={`${section.NOMBRE_SECTOR===sector.NOMBRE_SECTOR? 'active':""}`} key={sector.ID} sx={sectionContainer}>
                                  {ICONOS[sector.NOMBRE_SECTOR]}
                                <Box><p>{sector.NOMBRE_SECTOR.toLowerCase()}</p></Box>
                            </Box>
                        );
                    }
            }
            )}
        </Box>
        <Box sx={{ display: "flex", columnGap: "1rem", pr: "1rem",pt:"2rem",minHeight:"86px" }}>
                <Categorias/>
            </Box>
            </Box>
    );
}