
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function VehicleCard({ vehicle, onDelete }) {

  let dispatch = useDispatch();

  return (
    <div className="card">

      <img
        src={vehicle.image}
        alt={vehicle.name}
      />

      <h3>{vehicle.name}</h3>

      <p>{vehicle.brand}</p>
      <p>{vehicle.type}</p>
      <p>{vehicle.category}</p>
      <p>Fuel: {vehicle.fuel}</p>
      <p>Seats: {vehicle.seats}</p>
      <p>Price: ₹{vehicle.pricePerDay}/day</p>
      <p>⭐ {vehicle.rating}</p>
      <p>{vehicle.availability}</p>

      <div className="card-actions">

        <Link
          className="view-btn"
          to={`/vehicles/${vehicle.id}`}
        >
          View
        </Link>

        <Link
          className="rent-btn"
          to={`/rent/${vehicle.id}`}
        >
          Rent Now
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-vehicle/${vehicle.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(vehicle.id)}
        >
          Delete
        </button>

        <button
          className="favorite-btn"
          onClick={() => dispatch(addFavorite(vehicle))}
        >
          Favorite
        </button>

      </div>

    </div>
  );
}

export default VehicleCard;
