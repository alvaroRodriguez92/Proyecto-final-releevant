import FaceIcon from "@mui/icons-material/Face";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import FilterBAndWIcon from "@mui/icons-material/FilterBAndW";
//import { CHARACTERS, EPISODES, LOCATIONS } from "./routes";

export const drawerMenu = [
  {
    label: "Imagenes",
    icon: FilterBAndWIcon,
  },
  {
    label: "Characters",
    //path: `/${CHARACTERS}`,
    icon: FaceIcon,
  },
  {
    label: "Locations",
    //path: `/${LOCATIONS}`,
    icon: PersonPinCircleIcon,
  },
  {
    label: "Episodes",
    //path: `/${EPISODES}`,
    icon: LiveTvIcon,
  },
];
