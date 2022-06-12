import {Box, Card, CardActions, CardContent, Container, CssBaseline, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import StyledLink from "../../components/Navbar/StyledLink/StyledLink";

const EditProfile = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");

    const handleSubmit = () => {

    }



return <Container component="main" maxWidth="xs">
    <CssBaseline/>
    <Card
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <CardContent>
            <Typography component="h2" variant="subtitle1">
                Edit Profile
            </Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                multiline
                margin="normal"
                required
                fullWidth
                label="Password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                multiline
                margin="normal"
                required
                fullWidth
                label="Repeat Password"
                name="repeatPassword"
                id="repeatPassword"
                value={repeatPassword}
                onChange={e => setRepeatPassword(e.target.value)}
            />
        </CardContent>
        <CardActions sx={{width: "80%",display: "flex", alignItems: "center", justifyContent:"space-around"}}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{mt: 3, mb: 2}}
            >
                Update
            </Button>
            <StyledLink to="/my-profile">
                <Button
                        variant="contained"
                        color="error"
                        sx={{mt: 3, mb: 2}}>Cancel</Button>
            </StyledLink>
        </CardActions>



    </Card>
</Container>;
}
export default EditProfile;