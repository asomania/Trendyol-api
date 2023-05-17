<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <button @click="fetchProducts">Ürünleri Getir</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    const fetchProducts = () => {
      const shopId = 123; // Trendyol mağaza ID'si
      const apiKey = "YOUR_API_KEY";
      const apiSecret = "YOUR_API_SECRET";
      const options = {
        page: 1,
        size: 10,
        // Diğer seçenekleri burada belirtin
      };

      store.dispatch("fetchProducts", { shopId, apiKey, apiSecret, options });
    };

    return {
      products,
      fetchProducts,
    };
  },
};
</script>
