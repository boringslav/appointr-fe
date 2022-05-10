import {useState, useEffect, useContext} from "react";
import styled from "@emotion/styled";
import {getAllReq} from "../../services/api";
import UserContext from "../../context/UserContext";
import BookingsSubBar from "../../components/BookingsSubBar/BookingsSubBar";
import BookingCard from "../../components/BookingCard/BookingCard";
import bookingsContext from "../../context/BookingsContext";

const BookingCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;


function Bookings() {
    const [error, setError] = useState();
    const {user} = useContext(UserContext);
    const {bookings, setBookings} = useContext(bookingsContext);

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
    }, [bookings])



    return (
        <>
            <BookingsSubBar/>
            <BookingCardsContainer>
                {bookings && bookings.map((booking) => {
                        return <BookingCard key={booking.id} data={booking} />
                    }
                )}
            </BookingCardsContainer>;
        </>
    )
}

export default Bookings;
