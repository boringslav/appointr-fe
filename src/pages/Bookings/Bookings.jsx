import {useState, useEffect, useContext} from "react";
import styled from "@emotion/styled";
import {getAllReq} from "../../services/api";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import UserContext from "../../context/UserContext";
import BookingsSubBar from "../../components/BookingsSubBar/BookingsSubBar";

const BookingCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;


function Bookings() {
    const [bookings, setBookings] = useState();
    const [error, setError] = useState();
    const {user} = useContext(UserContext);

    useEffect(() => {

        (async () => {
            try {
                const response = await getAllReq("/bookings", user.access_token);

                if (response.data) {
                    setBookings(response.data.bookings);
                }
                if (response.error) {
                    throw new Error("Ooops something went wrong!");
                }

            } catch (e) {
                setError(e.message);
            }
        })()


    }, [])

    return (
        <>
            <BookingsSubBar/>
            <BookingCardsContainer>
                {bookings && bookings.map((booking) => {
                        return <Card key={booking.id} sx={{
                            maxWidth: 275,
                            margin: "2rem"
                        }}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    {booking.creator.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {booking.title}
                                </Typography>

                                <Typography variant="body2">
                                    {booking.description}
                                </Typography>

                                <Typography variant="body2">
                                    {booking.bookingDate}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Book</Button>
                            </CardActions>
                        </Card>
                    }
                )}
            </BookingCardsContainer>;
        </>
    )
}

export default Bookings;
