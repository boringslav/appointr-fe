import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StyledLink from "../Navbar/StyledLink/StyledLink";


const ProfileSubBar = (props) => {
    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar color="inherit" position="static">
                    <Toolbar sx={{justifyContent: "space-between"}}>
                        <div>
                        <Typography>Hello, {props.user.email}</Typography>
                        </div>
                        <div>
                            <StyledLink to="/edit-profile">
                                <Button color="warning">
                                    Edit Profile
                                </Button>
                            </StyledLink>
                            <Button color="error">Delete Profile</Button>
                            </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default ProfileSubBar;