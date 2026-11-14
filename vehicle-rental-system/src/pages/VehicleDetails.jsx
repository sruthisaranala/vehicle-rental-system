
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function VehicleDetails() {

  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    getVehicle();
  }, [id]);

  async function getVehicle() {
    try {
      const response = await api.get(
        `/vehicles/${id}`
      );

      setVehicle(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!vehicle) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">

      <img
        src={vehicle.image}
        alt={vehicle.name}
      />

      <h1>{vehicle.name}</h1>

      <p>{vehicle.description}</p>

      <h3>Brand</h3>
      <p>{vehicle.brand}</p>

      <h3>Vehicle Type</h3>
      <p>{vehicle.type}</p>

      <h3>Category</h3>
      <p>{vehicle.category}</p>

      <h3>Purchase Price</h3>
      <p>₹ {vehicle.price}</p>

      <h3>Rental Price Per Day</h3>
      <p>₹ {vehicle.pricePerDay}</p>

      <h3>Fuel Type</h3>
      <p>{vehicle.fuel}</p>

      <h3>Seating Capacity</h3>
      <p>{vehicle.seats}</p>

      <h3>Model Year</h3>
      <p>{vehicle.modelYear}</p>

      <h3>Transmission</h3>
      <p>{vehicle.transmission}</p>

      <h3>Mileage</h3>
      <p>{vehicle.mileage}</p>

      <h3>Color</h3>
      <p>{vehicle.color}</p>

      <h3>Location</h3>
      <p>{vehicle.location}</p>

      <h3>Availability</h3>
      <p>{vehicle.availability}</p>

      <h3>Rating</h3>
      <p>⭐ {vehicle.rating}</p>

      <h3>Total Reviews</h3>
      <p>{vehicle.totalReviews}</p>

      <h3>Security Deposit</h3>
      <p>₹ {vehicle.securityDeposit}</p>

      <h3>Insurance</h3>
      <p>{vehicle.insurance}</p>

      <h3>Registration Number</h3>
      <p>{vehicle.registrationNumber}</p>

      <h3>Features</h3>

      {vehicle.features && (
        <ul>
          {vehicle.features.map(
            (feature, index) => (
              <li key={index}>{feature}</li>
            )
          )}
        </ul>
      )}

      <h3>Cancellation Policy</h3>
      <p>{vehicle.cancellationPolicy}</p>

    </div>
  );
}

export default VehicleDetails;
