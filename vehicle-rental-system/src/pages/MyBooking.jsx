
import { useEffect, useState } from "react";
import api from "../services/api";

function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getBookings();
  }, []);

  async function getBookings() {
    try {
      const response = await api.get("/bookings");

      const userBookings = response.data.filter(
        (booking) => booking.userId === user?.id
      );

      setBookings(userBookings);
    } catch (error) {
      console.log("Error fetching bookings:", error);
      setError("Unable to load your bookings.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading your bookings...</h2>;
  }

  return (
    <div className="my-bookings-container">

      <h1>My Bookings</h1>

      {error && <p>{error}</p>}

      {!error && bookings.length === 0 && (
        <div className="no-bookings">
          <h2>No Bookings Yet!</h2>
          <p>You haven't booked any vehicles yet.</p>
        </div>
      )}

      <div className="my-bookings-grid">

        {bookings.map((booking) => (
          <div className="my-booking-card" key={booking.id}>

            <img
              src={booking.vehicleImage}
              alt={booking.vehicleName}
            />

            <h2>{booking.vehicleName}</h2>

            <p>
              Customer: {booking.customerName}
            </p>

            <p>
              Phone: {booking.phone}
            </p>

            <p>
              Pickup Date: {booking.pickupDate}
            </p>

            <p>
              Return Date: {booking.returnDate}
            </p>

            <p>
              Rental Days: {booking.rentalDays}
            </p>

            <h3>
              Total Amount: ₹{booking.totalAmount}
            </h3>

            <p>
              Status: {booking.status}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MyBooking;
