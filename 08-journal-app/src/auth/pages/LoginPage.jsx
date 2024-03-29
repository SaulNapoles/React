import { Link as RouterLink} from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title='Log in'>
       <form>
         <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
               label="Email"
               type="email"
               placeholder="correo@gmail.com"
               fullWidth
               />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
               label="Password"
               type="password"
               placeholder="Password"
               fullWidth
               />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm= { 6 }>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm= { 6 }>
                <Button variant='contained' fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

          <Grid container  direction='row' justifyContent='end' >
            <Typography sx={{ mr: 1 }}>Don't have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/register'>
              Sign up
            </Link>

          </Grid>

         </Grid>
        </form>

    </AuthLayout>
  )
}
