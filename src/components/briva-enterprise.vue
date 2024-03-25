<template>
  <v-container fluid>
    <v-app-bar app dark color="primary">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :class="{ 'highlighted-btn': isHomePage }" text @click="navigateToPage('home')">Home</v-btn>
        <v-btn :class="{ 'highlighted-btn': isShopPage }" text @click="navigateToPage('shop')">Shop</v-btn>
        <v-btn :class="{ 'highlighted-btn': isAboutPage }" text @click="navigateToPage('about')">About Us</v-btn>
        <v-btn :class="{ 'highlighted-btn': isContactPage }" text @click="navigateToPage('contact')">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-row v-if="isHomePage">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 white--text">Welcome To Briva Enterprise</h1>
        <p class="subtitle-1 white--text">
          Your one-stop shop for all your needs!
        </p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-img src="briva-logo.io.png" contain height="450"></v-img>
      </v-col>
    </v-row>

    <v-row v-if="isShopPage">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 white--text">Shop Page</h1>
        <p class="subtitle-1 white--text">Explore our products!</p>
        <BrivaProducts></BrivaProducts>
      </v-col>
    </v-row>

    <v-row v-if="isAboutPage">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 white--text">About Us</h1>
        <p class="subtitle-1 white--text">Learn more about our company.</p>
        <p class="white--text">
          Briva Enterprise is a leading provider of innovative solutions in the
          field of e-commerce. Our mission is to revolutionize the way people
          shop online by offering a seamless and enjoyable shopping experience.
          With a team of dedicated professionals and cutting-edge technology, we
          strive to exceed customer expectations and set new standards in the
          industry.
        </p>
      </v-col>
    </v-row>

    <v-row v-if="isContactPage">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 white--text">Contact Us</h1>
        <p class="subtitle-1 white--text">Reach out to us for any inquiries.</p>
        <p class="white--text">
          For any questions, feedback, or inquiries, feel free to contact us
          using the following methods:
          <br /><br />
          Email:
          <a class="white--text" href="mailto:Info.brivaenterprise@gmail.com">Info.brivaenterprise@gmail.com</a><br />
          Phone:
          <a class="white--text" href="tel:+917096751961">+91 7096751961</a>
        </p>
      </v-col>
      <template>
        <v-col cols="12" class="text-center">
          <div class="mb-2 white--text">Connect with us:</div>
          <v-btn icon class="mx-2">
            <a href="https://www.facebook.com/brijesh.vaghasiya.771" target="_blank">
              <v-icon color="blue darken-2">mdi-facebook</v-icon>
            </a>
          </v-btn>
          <v-btn icon class="mx-2">
            <a href="https://www.instagram.com/briva_enterprise343" target="_blank">
              <v-icon color="pink darken-2">mdi-instagram</v-icon>
            </a>
          </v-btn>
        </v-col>
      </template>
    </v-row>

    <v-footer class="mt-5" app dark color="primary">
      <v-row justify="center">
        <v-col cols="12" class="text-center white--text">
          © {{ new Date().getFullYear() }} Briva Enterprise. All rights
          reserved.
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import BrivaProducts from "./briva-products.vue";
export default {
  name: "BrivaEnterprise",
  data() {
    return {
      isHomePage: true,
      isShopPage: false,
      isAboutPage: false,
      isContactPage: false,
    };
  },
  computed: {
    isMobileView() {
      return this.$vuetify.breakpoint.name === "xs";
    },
  },
  methods: {
    navigateToPage(page) {
      this.isHomePage = page === "home";
      this.isShopPage = page === "shop";
      this.isAboutPage = page === "about";
      this.isContactPage = page === "contact";
    },
  },
  components: {
    BrivaProducts,
  },
};
</script>

<style scoped>
.white--text {
  color: white;
}

.display-2 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.subtitle-1 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.mt-5 {
  margin-top: 5rem;
}

.mt-10 {
  margin-top: 10rem;
}

.v-btn {
  align-items: center;
}

.v-footer__content {
  padding-top: 10px;
  padding-bottom: 10px;
}

.highlighted-btn {
  background-color: #03a9f4;
  color: #ffffff;
}
</style>
