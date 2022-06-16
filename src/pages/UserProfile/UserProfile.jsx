import React, { useContext, useEffect, useState } from "react";
import ProfileSubBar from "../../components/ProfileSubBar/ProfileSubBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProfileImage from "./UserProfile.svg";
import userContext from "../../context/UserContext";
import { Button, Card, CardActions, CardContent, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import { deleteProfileRequest, getProfileRequest } from "../../services/api";
import StyledLink from "../../components/Navbar/StyledLink/StyledLink";

const UserProfile = () => {
    const { user, setUser } = useContext(userContext);
    const [profile, setProfile] = useState({});
    const [error, setError] = useState("");
    const [isProfileDeleted, setIsProfileDeleted] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await getProfileRequest(user.access_token);
                if (response.data) {
                    setProfile(response.data);
                }
            } catch (e) {
                console.error(e.message);
            }
        })();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setError(""), 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [error]);

    const deleteProfile = async (e) => {
        try {
            const response = await deleteProfileRequest(user.access_token);
            if (response.data) {
                setIsProfileDeleted(true);
                setTimeout(() => setUser(null), 4000);
            }

        } catch (e) {
            setError("Error deleting the profile: ", e.message);
        }
    };

    return (
        <div>
            {isProfileDeleted && <Alert severity="success" >User Deleted Successfully. You will be redirected to the Home Page</Alert>}
            <ProfileSubBar user={user} deleteProfile={deleteProfile} />
            <Grid container spacing={2} sx={{ height: "60vh" }}>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            padding: "5rem",
                        }}
                    >
                        <img
                            src={ProfileImage}
                            style={{ height: "100%", width: "100%" }}
                            alt="calendar"
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Card sx={{ width: "60%" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
                                {profile.role}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                                ID: {profile.id}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.primary">
                                Email: {profile.email}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.primary">
                                Name: {profile.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <StyledLink to="/edit-profile">
                                <Button color="warning">Edit Profile</Button>
                            </StyledLink>
                            <Button color="error" onClick={deleteProfile}>
                                Delete Profile
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserProfile;
