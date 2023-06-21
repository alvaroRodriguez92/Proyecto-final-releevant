import {
  TextField,
  Box,
  Button,
  Typography,
  Grid,
  Link,
  Select,
  MenuItem,
  FormControl, 
  InputLabel
} from "@mui/material";
import {useState, useEffect} from "react"


export default function IntroduccionDatos({formik}) {
  
    const [sectores, setSectores] = useState([])
    const [categorias, setCategorias] = useState(null)

    useEffect(() => {
      async function getSectores() {
          const api = await fetch(`http://127.0.0.1:3000/sector`);
          const data=await api.json();

          setSectores(data)
      }
      getSectores();
  }, []);

  useEffect(()=>{
  async function categoriaFetch(){
    const response = await fetch(`http://127.0.0.1:3000/sector/${formik.values.sector}`)
    const data = await response.json()
    setCategorias(data)
  };
      categoriaFetch();
  },[formik.values.sector])

  return (
    <>
    
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            width: "90%",
            p: 5,
            margin: "0 auto",
          }}
        >
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="NOMBRE"
                error={formik.errors.NOMBRE && formik.touched.NOMBRE}
                name="NOMBRE"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.NOMBRE}
                helperText={formik.errors.NOMBRE}
                label="Nombre completo"
                size="small"
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="EMAIL"
                error={formik.errors.EMAIL && formik.touched.EMAIL}
                name="EMAIL"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.EMAIL}
                helperText={formik.errors.EMAIL}
                label="Email"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="TLF"
                error={formik.errors.TLF && formik.touched.TLF}
                type="tel"
                name="TLF"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.TLF}
                helperText={formik.errors.TLF}
                label="Telefono"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="URL"
                error={formik.errors.URL && formik.touched.URL}
                name="URL"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.URL}
                helperText={formik.errors.URL}
                label="Url"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="PASSWORD"
                type="password"
                error={formik.errors.PASSWORD && formik.touched.PASSWORD}
                name="PASSWORD"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.PASSWORD}
                helperText={formik.errors.PASSWORD}
                label="Password"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="repetirPassword"
                type="password"
                error={formik.errors.repetirPassword && formik.touched.repetirPassword}
                name="repetirPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repetirPassword}
                helperText={formik.errors.repetirPassword}
                label="Repetir password"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="DESCRIPCION"
                multiline
                rows={4}
                error={formik.errors.DESCRIPCION && formik.touched.DESCRIPCION}
                name="DESCRIPCION"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.DESCRIPCION}
                helperText={formik.errors.DESCRIPCION}
                label="Descripcion"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>

            <Grid item xs={6}>
              <Grid container spacing={1} width="100%" sx={{margin:"0 auto"}} >
              <Grid item xs={6}>
              <FormControl fullWidth>
              <InputLabel id="demo-select-small-label">Sector</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="sector"
                  name="sector"
                  value={formik.values.sector}
                  label="Sector"
                  onChange={formik.handleChange}
                  fullWidth
                >
                  
                  {sectores?.map((item, index)=>{
                    console.log(sectores, "sectores")
                    const sector= item.NOMBRE_SECTOR.toLowerCase()
                    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
                    
                    return(

                    <MenuItem key={index} value={item.ID}>{capitalize(sector)}</MenuItem>
                    )
                  })}
                  
                </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
              <InputLabel id="demo-select-small-label">Categoría</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="CATEGORIA"
                  name="CATEGORIA"
                  value={formik.values.CATEGORIA}
                  label="Categoria"
                  onChange={formik.handleChange}
                  fullWidth
                >
                 {categorias?.map((item)=>{
                  console.log(categorias, "categorias")
                  let categoria=""
                  {if(item.NOMBRE_CATEGORIA) {
                  categoria= item.NOMBRE_CATEGORIA.toLowerCase()}
                  }
                  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
                  return(
                  <MenuItem value={item.ID}>{capitalize(categoria)}</MenuItem>
                  )
                 })}

                </Select>
                </FormControl>
              </Grid>
            </Grid>
            
          </Grid>
          </Grid>
        </Box>
        
      {/* </form> */}
      <pre>{JSON.stringify(formik.values)}</pre>

    </>
  );
}
