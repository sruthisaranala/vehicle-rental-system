
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const favorites = useSelector(
    state => state.favorites
  );

  return (
    <nav>

      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/vehicles">
        Vehicles
      </NavLink>

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

      {user && (
        <>
          <NavLink to="/add-vehicle">
            Add Vehicle
          </NavLink>

          <NavLink to="/logout">
            Logout
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
