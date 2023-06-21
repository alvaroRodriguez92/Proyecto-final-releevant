import { ReactElement } from "react";
import Grid from "@mui/material/Grid";



function StepContainer({ children }) {
  return (
    <Grid container >
      <Grid xs={12}>
    
        {children}
       </Grid>
       </Grid>
  );
}

export default StepContainer;
