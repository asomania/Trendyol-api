import { createStore } from "vuex";
import { getAllProductsMethod } from "../api/getAllProducts";

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }, { shopId, apiKey, apiSecret, options }) {
      try {
        const products = await getAllProductsMethod(
          shopId,
          apiKey,
          apiSecret,
          options
        );
        commit("setProducts", products);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
