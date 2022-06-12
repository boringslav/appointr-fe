import React, {useContext} from "react";
import UserContext from "../../context/UserContext";
import landingImage from "./homeImage.svg";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";


function Home() {
    const {user, setUser} = useContext(UserContext);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box sx={{
                        marginTop: "10rem",
                    }}>
                        <Typography variant="h3" color="primary" component="h1"
                                    sx={{
                                        textAlign: "center",
                                        paddingBottom: "2rem"
                                    }}
                        >Appointr</Typography>
                        <Typography variant="p" component="p" color=""
                                    sx={{
                                        textAlign: "center",
                                    }}
                        >Appointr is an online reservation platform in
                            which you can make Appointments</Typography>
                    </Box>
                    <Box sx={{
                        marginTop: "2rem",
                        display:"flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <NavLink to="/sign-in">
                            <Button variant="contained">
                                Sign In
                            </Button>
                        </NavLink>

                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <Box sx={{
                        marginTop: "5rem",
                        height: "70vh",
                    }}>
                        <img src={landingImage} style={{height: "100%", width: "100%"}} alt="calendar image"/>
                    </Box>
                </Grid>

            </Grid>
        </>)
}

export default Home;
