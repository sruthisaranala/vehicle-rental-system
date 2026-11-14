
import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

import { Link } from "react-router-dom";

function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Vehicles
      </h1>

      {favorites.length === 0 ? (

        <div className="empty-favorites">

          <h2>
            No Favorite Vehicles
          </h2>

          <p>
            Add vehicles from the Vehicles page.
          </p>

          <Link to="/vehicles">
            Explore Vehicles
          </Link>

        </div>

      ) : (

        <div className="favorites-grid">

          {favorites.map(vehicle => (

            <div
              key={vehicle.id}
              className="favorite-card"
            >

              <img
                src={vehicle.image}
                alt={vehicle.name}
              />

              <div className="favorite-content">

                <h2>{vehicle.name}</h2>

                <p>{vehicle.brand}</p>

                <p>{vehicle.category}</p>

                <p>⭐ {vehicle.rating}</p>

                <p>
                  💰 ₹{vehicle.pricePerDay}/day
                </p>

                <div className="favorite-actions">

                  <Link
                    to={`/vehicles/${vehicle.id}`}
                    className="view-btn"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() =>
                      dispatch(removeFavorite(vehicle.id))
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Favorites;
