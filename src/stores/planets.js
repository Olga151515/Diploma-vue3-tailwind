import { defineStore } from "pinia";
import axios from "axios";
import { API_URL } from "../config";

export const usePlanetsStore = defineStore({
  id: "planet",
  state: () => ({
    planets: [],
    planet: null,
    error: null,
    loading: false,
  }),
  actions: {
    async fetchPlanets() {
      this.planets = [];
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${API_URL}/planets`);
        this.planets = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPlanet(slug) {
      this.planet = null;
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${API_URL}/planets?slug=${slug}`);
        this.planet = response.data[0];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async getPlanet(slug) {
      try {
        const response = await axios.get(`${API_URL}/planets/${slug}`);
        return response.data[0];
      } catch (error) {
        this.error = error;
      }
    },
  },
});
