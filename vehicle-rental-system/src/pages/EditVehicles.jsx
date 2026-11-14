
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditVehicles() {

  const { id } = useParams();
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
    features: [],
    cancellationPolicy: "",
    image: ""
  });

  useEffect(() => {
    getVehicle();
  }, [id]);

  async function getVehicle() {
    try {
      const response = await api.get(
        `/vehicles/${id}`
      );

      setFormData({
        ...response.data,
        features: response.data.features || []
      });

    } catch (error) {
      console.log(error);
    }
  }

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
      features: typeof formData.features === "string"
        ? formData.features.split(",").map(item => item.trim()).filter(Boolean)
        : formData.features
    };

    try {
      await api.put(
        `/vehicles/${id}`,
        vehicleData
      );

      navigate("/vehicles");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <h2>Edit Vehicle</h2>

        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Purchase Price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="pricePerDay"
          placeholder="Rental Price Per Day"
          value={formData.pricePerDay}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fuel"
          placeholder="Fuel Type"
          value={formData.fuel}
          onChange={handleChange}
        />

        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={formData.seats}
          onChange={handleChange}
        />

        <input
          type="number"
          name="modelYear"
          placeholder="Model Year"
          value={formData.modelYear}
          onChange={handleChange}
        />

        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
          value={formData.transmission}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mileage"
          placeholder="Mileage"
          value={formData.mileage}
          onChange={handleChange}
        />

        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalReviews"
          placeholder="Total Reviews"
          value={formData.totalReviews}
          onChange={handleChange}
        />

        <input
          type="number"
          name="securityDeposit"
          placeholder="Security Deposit"
          value={formData.securityDeposit}
          onChange={handleChange}
        />

        <input
          type="text"
          name="insurance"
          placeholder="Insurance"
          value={formData.insurance}
          onChange={handleChange}
        />

        <input
          type="text"
          name="registrationNumber"
          placeholder="Registration Number"
          value={formData.registrationNumber}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Vehicle Description"
          value={formData.description}
          onChange={handleChange}
        />

        <textarea
          name="features"
          placeholder="Features (comma separated)"
          value={
            Array.isArray(formData.features)
              ? formData.features.join(", ")
              : formData.features
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="cancellationPolicy"
          placeholder="Cancellation Policy"
          value={formData.cancellationPolicy}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <button className="submit-btn">
          Update Vehicle
        </button>

      </form>
    </div>
  );
}

export default EditVehicles;
