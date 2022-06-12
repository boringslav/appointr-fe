import React, {useContext, useEffect, useState} from "react";
import ProfileSubBar from "../../components/ProfileSubBar/ProfileSubBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProfileImage from "./UserProfile.svg";
import userContext from "../../context/UserContext";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {getProfileRequest} from "../../services/api";
import PersonIcon from '@mui/icons-material/Person';
import StyledLink from "../../components/Navbar/StyledLink/StyledLink";


const UserProfile = () => {
    const {user} = useContext(userContext);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await getProfileRequest(user.access_token);
                if(response.data) {
                    setProfile(response.data);
                }
            }catch (e) {
                console.error(e.message);
            }
        })()
    },[])


    return <>
    <ProfileSubBar user={user}/>
        <Grid container spacing={2} sx={{height: "60vh",}}>
            <Grid item xs={6}>
                <Box sx={{
                    padding: "5rem",
                }}>
                    <img src={ProfileImage} style={{height: "100%", width: "100%"}} alt="calendar image"/>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Card sx={{width: "60%"}}>
                    <CardContent >

                        <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
                            {profile.role}
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                            ID:  {profile.id}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.primary">
                          Email:  {profile.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.primary">
                            Name:  {profile.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <StyledLink to="/edit-profile" >
                            <Button color="warning">
                                Edit Profile
                            </Button>
                        </StyledLink>
                        <Button color="error" >Delete Profile</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
}

export default UserProfile;