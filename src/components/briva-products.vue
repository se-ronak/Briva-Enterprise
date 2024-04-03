<template>
  <v-row justify="center">
    <v-col v-for="(item, index) in products" :key="index" cols="auto">
      <v-img :src="item.image" contain width="300" height="300"></v-img>
      <p class="price white--text">₹ {{ item.price }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BrivaProducts",
  computed: {
    products() {
      const defaultPrice = 1200;
      return [
        { image: "Image-1.jpg", price: defaultPrice },
        { image: "Image-2.jpg", price: defaultPrice },
        { image: "Image-3.jpg", price: defaultPrice },
        { image: "Image-4.jpg", price: defaultPrice },
        { image: "Image-5.jpg", price: defaultPrice },
        { image: "Image-6.jpg", price: defaultPrice },
        { image: "Image-7.jpg", price: defaultPrice },
        { image: "Image-8.jpg", price: defaultPrice },
        { image: "Image-9.jpg", price: defaultPrice },
        { image: "Image-10.jpg", price: defaultPrice },
        { image: "Image-11.jpg", price: defaultPrice },
        { image: "Image-12.jpg", price: defaultPrice },
        { image: "Image-13.jpg", price: defaultPrice },
        { image: "Image-14.jpg", price: defaultPrice },
        { image: "Image-15.jpg", price: defaultPrice }
      ];
    }
  }

}
</script>

<style scoped>
.price {
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
}

.white--text {
  color: white;
}
</style>
