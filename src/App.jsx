import React, {useMemo, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Booking from "./pages/Booking/Booking";
import Bookings from "./pages/Bookings/Bookings";
import Home from "./pages/Home/Home";
import CreateBooking from "./pages/CreateBooking/CreateBooking";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
    const [user, setUser] = useState(null);
    const providerValue = useMemo(() => ({user,setUser}),[user,setUser]);
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={{user,setUser}}>
                <BrowserRouter>
                    <Navbar/>



                    <Routes>
                        <Route index element={user? <Home/> : <Navigate to="/sign-in"/>}/>
                        <Route path="bookings">
                            <Route index element={user? <Bookings/> : <Navigate to="/sign-in"/>}/>
                            <Route path=":bookingId" element={user? <Booking/>: <Navigate to="/sign-in"/>}/>
                            <Route path="new" element={user? <CreateBooking/>: <Navigate to="/sign-in"/>}/>
                        </Route>
                        <Route path="users">
                            <Route index element={user? <Users/> : <Navigate to="/sign-in"/>}/>
                            <Route path=":userId" element={user? <User/> : <Navigate to="/sign-in"/>}/>
                        </Route>
                        <Route path="sign-in" element={<SignIn/>}/>
                        <Route path="sign-up" element={<SignUp/>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </ThemeProvider>

    );
}

export default App;
