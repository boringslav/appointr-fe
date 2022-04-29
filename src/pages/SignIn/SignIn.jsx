import {useState} from 'react';
import {NavLink} from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {signInRequest} from "../../services/api";




export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    signInRequest({email, password})
        .then(response => {
            console.log("Response: {}", response);
        })
        .catch(error => {
            console.log("Error: ", error)
        })

  };

  return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
              />

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent={"center"}>

                <Grid >
                  <NavLink to="/sign-up" passhref>
                    <Link  variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </NavLink>

                </Grid>
              </Grid>
            </Box>
          </Box>
          </Container>
  );
}