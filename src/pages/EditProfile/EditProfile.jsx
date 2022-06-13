import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import Button from "@mui/material/Button";
import StyledLink from "../../components/Navbar/StyledLink/StyledLink";
import { editProfileRequest } from "../../services/api";
import UserContext from "../../context/UserContext";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isUpdatedSuccessFully, setIsUpdatedSuccessfully] = useState(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => setError(""), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      return setError("Passwords don`t match");
    }
    if (!name) {
      return setError("Name field cannot be empty!");
    }

    if (!email) {
      return setError("Email field cannot be empty!");
    }

    const dataObject = { email, name, password };

    try {
      const response = await editProfileRequest(user.access_token, dataObject);
      if (response.data) {
        console.log("Response: ", response.data);
        setIsUpdatedSuccessfully(true);
        setTimeout(() => setUser(null), 5000);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography component="h2" variant="subtitle1">
            Edit Profile
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {isUpdatedSuccessFully && (
            <Alert severity="success">
              Profile Successfully Updated! You will be redirected to the Home
              page
            </Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Repeat Password"
            name="repeatPassword"
            id="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </CardContent>
        <CardActions
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Update
          </Button>
          <StyledLink to="/my-profile">
            <Button variant="contained" color="error" sx={{ mt: 3, mb: 2 }}>
              Cancel
            </Button>
          </StyledLink>
        </CardActions>
      </Card>
    </Container>
  );
};
export default EditProfile;
