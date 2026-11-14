
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import VehicleDetails from "../pages/VehicleDetails";
import AddVehicle from "../pages/AddVehicle";
import EditVehicles from "../pages/EditVehicles";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoutes";
import Favorites from "../pages/Favorites"
import RentalBooking from "../pages/RentalBooking"
import MyBooking from "../pages/MyBooking";
function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/vehicles"
        element={<Vehicles />}
      />

      <Route
        path="/vehicles/:id"
        element={<VehicleDetails />}
      />

      <Route
        path="/add-vehicle"
        element={
          <ProtectedRoute>
            <AddVehicle />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-vehicle/:id"
        element={
          <ProtectedRoute>
            <EditVehicles />
          </ProtectedRoute>
        }
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/logout"
        element={<Logout />}
      />
      <Route path='/favorite'element={<Favorites/>}
/>
<Route
  path="/rent/:id"
  element={
    <ProtectedRoute>
      <RentalBooking />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-bookings"
  element={
    <ProtectedRoute>
      <MyBooking />
    </ProtectedRoute>
  }
/>
</Routes>
  );
}

export default AppRoutes;
