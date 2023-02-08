import { defineStore } from "pinia";
import axios from "axios";
import { API_URL1 } from "../config";

export const useGalleryStore = defineStore({
  id: "galleries",
  state: () => ({
    galleries: [],
    gallery: null,
    error: null,
    loading: false,
  }),
  actions: {
    async fetchGallery() {
      this.galleries = [];
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${API_URL1}/gallery`);
        this.galleries = response.data(0);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
