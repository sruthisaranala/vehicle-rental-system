
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddVehicle() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    brand: "",
    category: "",
    price: "",
    pricePerDay: "",
    fuel: "",
    seats: "",
    modelYear: "",
    transmission: "",
    mileage: "",
    color: "",
    location: "",
    availability: "Available",
    rating: "",
    totalReviews: "",
    securityDeposit: "",
    insurance: "",
    registrationNumber: "",
    description: "",
    features: "",
    cancellationPolicy: "",
    image: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const vehicleData = {
      ...formData,
      price: Number(formData.price),
      pricePerDay: Number(formData.pricePerDay),
      seats: Number(formData.seats),
      modelYear: Number(formData.modelYear),
      rating: Number(formData.rating),
      totalReviews: Number(formData.totalReviews),
      securityDeposit: Number(formData.securityDeposit),
      features: formData.features
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
    };

    await api.post("/vehicles", vehicleData);

    navigate("/vehicles");
  }

  return (
    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <h2>Add New Vehicle</h2>

        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          onChange={handleChange}
          required
        />

        <select
          name="type"
          onChange={handleChange}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (SUV, Sports Bike)"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Vehicle Price"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pricePerDay"
          placeholder="Rental Price Per Day"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fuel"
          placeholder="Fuel Type"
          onChange={handleChange}
        />

        <input
          type="number"
          name="seats"
          placeholder="Number of Seats"
          onChange={handleChange}
        />

        <input
          type="number"
          name="modelYear"
          placeholder="Model Year"
          onChange={handleChange}
        />

        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
          onChange={handleChange}
        />

        <input
          type="text"
          name="mileage"
          placeholder="Mileage"
          onChange={handleChange}
        />

        <input
          type="text"
          name="color"
          placeholder="Vehicle Color"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <select
          name="availability"
          onChange={handleChange}
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalReviews"
          placeholder="Total Reviews"
          onChange={handleChange}
        />

        <input
          type="number"
          name="securityDeposit"
          placeholder="Security Deposit"
          onChange={handleChange}
        />

        <input
          type="text"
          name="insurance"
          placeholder="Insurance Details"
          onChange={handleChange}
        />

        <input
          type="text"
          name="registrationNumber"
          placeholder="Registration Number"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Vehicle Description"
          onChange={handleChange}
        />

        <textarea
          name="features"
          placeholder="Features"
          onChange={handleChange}
        />

        <input
          type="text"
          name="cancellationPolicy"
          placeholder="Cancellation Policy"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Vehicle Image URL"
          onChange={handleChange}
          required
        />

        <button className="submit-btn">
          Add Vehicle
        </button>

      </form>
    </div>
  );
}

export default AddVehicle;
