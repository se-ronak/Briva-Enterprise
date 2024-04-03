<template>
  <v-container fluid>
    <v-card class="elevation-5">
      <v-row class="px-4 mt-5">
        <v-col cols="12" sm="6">
          <v-text-field v-model="productName" label="Product Name" outlined color="primary" dense></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-file-input v-model="productPhoto" label="Product Photo" dense></v-file-input>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="productRate" label="Product Rate" outlined color="primary" dense></v-text-field>
        </v-col>
        <v-col cols="12" class="text-right">
          <v-btn color="primary" @click="addProduct" class="white--text">Add Product</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AddNewBrivaProducts",
  data() {
    return {
      productName: "",
      productPhoto: null,
      productRate: 0
    };
  },
  methods: {
    addProduct() {
      console.log("Product Name:", this.productName);
      console.log("Product Photo:", this.productPhoto);
      console.log("Product Rate:", this.productRate);
      this.productName = "";
      this.productPhoto = null;
      this.productRate = 0;
    }
  }
}
</script>

<style scoped></style>
