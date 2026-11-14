  import { useEffect, useState } from "react";
  import api from "../services/api";
  import VehicleCard from "../components/VehicleCard";
  import { Link } from "react-router-dom";

  function Vehicles() {

    const [category, setCategory] = useState("All");
    const [pricePerDay, setPricePerDay] = useState("All");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
      getVehicles();
    }, []);

    // GET VEHICLES
    async function getVehicles() {
      try {
        const response = await api.get("/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.log("Error fetching vehicles:", error);
      }
    }

    // DELETE VEHICLE
    async function deleteVehicle(id) {
      try {
        await api.delete(`/vehicles/${id}`);

        setVehicles((prevVehicles) =>
          prevVehicles.filter((vehicle) => vehicle.id !== id)
        );
      } catch (error) {
        console.log("Error deleting vehicle:", error);
      }
    }

    // SEARCH AND FILTER
    const filteredVehicles = vehicles.filter((vehicle) => {

      const searchMatch =
        vehicle.name?.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.brand?.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        category === "All" ||
        vehicle.category === category;

      const priceMatch =
        pricePerDay === "All" ||
        Number(vehicle.pricePerDay) === Number(pricePerDay);

      return searchMatch && categoryMatch && priceMatch;
    });

    // SORT VEHICLES
    let finalVehicles = [...filteredVehicles];

    if (sort === "high") {
      finalVehicles.sort(
        (a, b) => Number(b.pricePerDay) - Number(a.pricePerDay)
      );
    }

    if (sort === "low") {
      finalVehicles.sort(
        (a, b) => Number(a.pricePerDay) - Number(b.pricePerDay)
      );
    }

    return (
      <div className="vehicles-page">

        <h1>Available Vehicles</h1>

        <Link to="/add-vehicle" className="add-btn">
          Add Vehicle
        </Link>

        {/* FILTERS */}
        <div className="filters">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search Vehicle"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* CATEGORY FILTER */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="SUV">SUV</option>
            <option value="Electric SUV">Electric SUV</option>
            <option value="Cafe Racer">Cafe Racer</option>
            <option value="Crusier">Crusier</option>
            <option value="Compact SUV">Compact SUV</option>
            <option value="Sports Bike">Sports Bike</option>
            <option value="Scooter">Scooter</option>
            <option value="Adventure Bike">Adventure Bike</option>
          </select>

          {/* PRICE FILTER */}
          <select
            value={pricePerDay}
            onChange={(e) => setPricePerDay(e.target.value)}
          >
            <option value="All">All Prices</option>
            <option value="3500">₹3500</option>
            <option value="4000">₹4000</option>
            <option value="1500">₹1500</option>
            <option value="1000">₹1000</option>
            <option value="500">₹500</option>
          </select>

          {/* SORT */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="high">High To Low</option>
            <option value="low">Low To High</option>
          </select>

        </div>

        {/* VEHICLE CARDS */}
        <div className="car">

          {finalVehicles.length > 0 ? (

            finalVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onDelete={deleteVehicle}
              />
            ))

          ) : (

            <p>No vehicles available.</p>

          )}

        </div>

      </div>
    );
  }

  export default Vehicles;
