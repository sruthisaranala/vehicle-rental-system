
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function RentalBooking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [vehicle, setVehicle] = useState(null);
  const [phone, setPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVehicle();
  }, [id]);

  async function getVehicle() {
    try {
      const response = await api.get(`/vehicles/${id}`);
      setVehicle(response.data);
    } catch (error) {
      console.log("Error fetching vehicle:", error);
    }
  }

  const rentalDays =
    pickupDate && returnDate &&
    new Date(returnDate + "T00:00:00") >
    new Date(pickupDate + "T00:00:00")
      ? Math.ceil(
          (new Date(returnDate + "T00:00:00") -
            new Date(pickupDate + "T00:00:00")) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const totalAmount = vehicle
    ? rentalDays * Number(vehicle.pricePerDay)
    : 0;

  async function handleBooking(e) {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (!vehicle) {
      setMessage("Vehicle details are not available.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!pickupDate || !returnDate || rentalDays <= 0) {
      setMessage("Please select valid pickup and return dates.");
      return;
    }

    if (vehicle.availability !== "Available") {
      setMessage("Sorry, this vehicle is not available.");
      return;
    }

    const bookingData = {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      customerName: user.name,
      phone,
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      vehicleImage: vehicle.image,
      pricePerDay: Number(vehicle.pricePerDay),
      pickupDate,
      returnDate,
      rentalDays,
      totalAmount,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    try {
      setLoading(true);
      setMessage("");

      await api.post("/bookings", bookingData);

      setMessage("Booking confirmed successfully!");

      setTimeout(() => {
        navigate("/my-bookings");
      }, 1500);

    } catch (error) {
      console.log("Booking error:", error);
      setMessage("Unable to confirm booking. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!vehicle) {
    return <h2>Loading vehicle details...</h2>;
  }

  return (
    <div className="rental-booking">

      <h1>Book Your Vehicle</h1>

      <div className="booking-vehicle">

        <img src={vehicle.image} alt={vehicle.name} />

        <h2>{vehicle.name}</h2>

        <p>Brand: {vehicle.brand}</p>
        <p>Type: {vehicle.type}</p>
        <p>Fuel: {vehicle.fuel}</p>
        <p>Seats: {vehicle.seats}</p>

        <h3>
          Rental Price: ₹{vehicle.pricePerDay}/day
        </h3>

        <p>Availability: {vehicle.availability}</p>

      </div>

      <form className="booking-form" onSubmit={handleBooking}>

        <h2>Customer Details</h2>

        <label>Customer Name</label>
        <input
          type="text"
          value={user?.name || ""}
          readOnly
        />

        <label>Email Address</label>
        <input
          type="email"
          value={user?.email || ""}
          readOnly
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter 10-digit phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength="10"
          required
        />

        <h2>Rental Dates</h2>

        <label>Pickup Date</label>
        <input
          type="date"
          min={new Date().toLocaleDateString("en-CA")}
          value={pickupDate}
          onChange={(e) => {
            setPickupDate(e.target.value);
            setReturnDate("");
          }}
          required
        />

        <label>Return Date</label>
        <input
          type="date"
          min={pickupDate || new Date().toLocaleDateString("en-CA")}
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />

        <div className="booking-summary">

          <h2>Booking Summary</h2>

          <p>
            Rental Days: <strong>{rentalDays}</strong>
          </p>

          <p>
            Price Per Day:
            <strong> ₹{vehicle.pricePerDay}</strong>
          </p>

          <h3>
            Total Amount: ₹{totalAmount}
          </h3>

        </div>

        {message && <p>{message}</p>}

        <button
          type="submit"
          disabled={loading || !rentalDays ||
            vehicle.availability !== "Available"}
        >
          {loading ? "Confirming..." : "Confirm Booking"}
        </button>

      </form>

    </div>
  );
}

export default RentalBooking;
