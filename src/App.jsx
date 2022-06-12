import React, {useMemo, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Booking from "./pages/Booking/Booking";
import Bookings from "./pages/Bookings/Bookings";
import Home from "./pages/Home/Home";
import CreateBooking from "./pages/CreateBooking/CreateBooking";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar/Navbar";
import BookingsContext from "./context/BookingsContext";
import EditBooking from "./pages/EditBooking/EditBooking";
import Chat from "./pages/Chat/Chat";
import UserProfile from "./pages/UserProfile/UserProfile";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState(null);

    const userProviderValue = useMemo(() => ({user, setUser}), [user, setUser]);
    const bookingsProviderValue = useMemo(() => ({bookings, setBookings}), [bookings, setBookings]);
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={userProviderValue}>
                <BookingsContext.Provider value={bookingsProviderValue}>
                    <BrowserRouter>
                        <Navbar/>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="bookings">
                                <Route index element={user ? <Bookings/> : <Navigate to="/"/>}/>
                                <Route path=":bookingId" element={user ? <Booking/> : <Navigate to="/"/>}/>
                                <Route path="new" element={user ? <CreateBooking/> : <Navigate to="/"/>}/>
                                <Route path="edit/:bookingId"
                                       element={user ? <EditBooking/> : <Navigate to="/"/>}/>
                            </Route>
                            <Route path="chat" element={user ? <Chat/> : <Navigate to="/"/>}/>
                            <Route path="my-profile">
                                <Route index element={user ? <UserProfile/> : <Navigate to="/"/>}/>
                            </Route>
                            <Route path="edit-profile">
                                <Route index element={user ? <EditProfile/> : <Navigate to="/"/>}/>
                            </Route>
                            <Route path="sign-in" element={<SignIn/>}/>
                            <Route path="sign-up" element={<SignUp/>}/>
                            <Route path="chat" element={<Chat/>}/>
                        </Routes>
                    </BrowserRouter>
                </BookingsContext.Provider>
            </UserContext.Provider>
        </ThemeProvider>

    );
}

export default App;
