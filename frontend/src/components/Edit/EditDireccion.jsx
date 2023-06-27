import { TextField, Box, Button, Grid } from "@mui/material";
import { FieldArray } from "formik";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DireccionBloqueados from "./utils/ComponentesEditDireccion/DireccionBloqueados";
import DireccionEditables from "./utils/ComponentesEditDireccion/DireccionEditables"

export default function EditDireccion({address}) {
  const [isEditing, setIsEditing] = useState(false);


  console.log(address)
  return (
    // {isEditing?(<DireccionEditables/>):(<DireccionBloqueados address={address}/>)}
    <h1></h1>
  );
}
