
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const favorites = useSelector(
    state => state.favorites
  );

  const [bookingCount, setBookingCount] = useState(0);

  const location = useLocation();

  useEffect(() => {

    async function getBookingCount() {
      if (!user) {
        setBookingCount(0);
        return;
      }

      try {
        const response = await api.get("/bookings");

        const userBookings = response.data.filter(
          booking => booking.userId === user.id
        );

        setBookingCount(userBookings.length);

      } catch (error) {
        console.log("Error fetching booking count:", error);
      }
    }

    getBookingCount();

  }, [location.pathname, user?.id]);

  return (
    <nav>

      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/vehicles">
        Vehicles
      </NavLink>

      {user && (
        <>
          <NavLink to="/my-bookings">
            My Bookings ({bookingCount})
          </NavLink>

          <NavLink to="/add-vehicle">
            Add Vehicle
          </NavLink>

          <NavLink to="/logout">
            Logout
          </NavLink>
        </>
      )}

      {!user && (
        <>
          <NavLink to="/register">
            Register
          </NavLink>

          <NavLink to="/login">
            Login
          </NavLink>
        </>
      )}

      <NavLink to="/favorite">
        Favorites ({favorites.length})
      </NavLink>

    </nav>
  );
}

export default Navbar;
