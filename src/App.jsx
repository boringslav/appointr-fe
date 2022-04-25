import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Booking from "./pages/Booking/Booking";
import Bookings from "./pages/Bookings/Bookings";
import Home from "./pages/Home/Home";
import CreateBooking from "./pages/CreateBooking/CreateBooking";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {

  const theme = createTheme();

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="bookings">
              <Route index element={<Bookings />} />
              <Route path=":bookingId" element={<Booking />} />
              <Route path="new" element={<CreateBooking />} />
            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<User />} />
            </Route>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
