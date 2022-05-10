import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {NavLink} from "react-router-dom";
import Link from "@mui/material/Link";
import {Alert, Checkbox, FormControlLabel} from "@mui/material";
import {signUpRequest} from "../../services/api";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCompany, setIsCompany] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setError("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [error])




    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestObject = {
            name,
            email,
            password,
            role: isCompany ? "COMPANY" : "CUSTOMER"
        }

        signUpRequest(requestObject).then((response) => {
          if(response.error) {
              throw new Error(error.message);
          }

          navigate('/sign-in');
        }).catch(error => {
            setError(error.message);
        })
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked={false} onChange={e => setIsCompany(e.target.checked)}/>}
                        label="I am a company"/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent={"center"}>

                        <Grid>
                            <NavLink to="/sign-in" passhref>
                                <Link variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </NavLink>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;
