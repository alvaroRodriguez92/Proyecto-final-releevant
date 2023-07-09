// import { Box, Grid } from "@mui/material";

// export default function Valoraciones() {
//   return (
//     <>
//       <Box
//         sx={{
//           height: "30rem",
//           p: "3rem 0.5rem",
//           input: { borderColor: "black", borderRadius: "10px" },
//           button: { borderColor: "black", borderRadius: "10px", mt: "1rem", ":hover": { backgroundColor: "grey", color: "white" } },
//           ".label-contraseña": { mt: "1rem" },
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <Box sx={{ p: "0.5rem", display: "flex", justifyContent: "center" }}>
//             <h2>Valoraciones</h2>
//           </Box>
//           <Box sx={{ p: "0.5rem" }}>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Introduce tu email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.email && touched.email ? "input-error" : ""}
//             />
//             {errors.email && touched.email && <p className="error">{errors.email}</p>}
//           </Box>
//           <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
//             <Grid item xs={6}>
//               <TextField
//                 id="DESCRIPCION"
//                 multiline
//                 rows={4}
//                 error={formik.errors.DESCRIPCION && formik.touched.DESCRIPCION}
//                 name="DESCRIPCION"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.DESCRIPCION}
//                 helperText={formik.errors.DESCRIPCION}
//                 label="Descripcion"
//                 size="small"
//                 sx={{ m: 1, width: "100%" }}
//               />
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </>
//   );
// }
