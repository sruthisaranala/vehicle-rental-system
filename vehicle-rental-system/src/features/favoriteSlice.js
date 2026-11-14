
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({

  name: "favorites",

  initialState: JSON.parse(
    localStorage.getItem("vehicleFavorites")
  ) || [],

  reducers: {

    addFavorite: (state, action) => {

      const exists = state.some(
        (vehicle) => vehicle.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);

        localStorage.setItem(
          "vehicleFavorites",
          JSON.stringify(state)
        );

        alert("Added to Favorites!");
      } else {
        alert("Already in Favorites!");
      }
    },

    removeFavorite: (state, action) => {

      const updated = state.filter(
        (vehicle) => vehicle.id !== action.payload
      );

      localStorage.setItem(
        "vehicleFavorites",
        JSON.stringify(updated)
      );

      return updated;
    }

  }

});

export const { addFavorite, removeFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
