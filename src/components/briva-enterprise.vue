<template>
  <v-container fluid>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Briva Enterprise</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img src="briva-logo.io.png" height="40" max-width="40"></v-img>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="primary lighten-1">
      <v-list-item>
        <v-list-item-title class="white--text mt-4">Briva Marketplace</v-list-item-title>
      </v-list-item>
      <v-divider class="mt-4"></v-divider>
      <v-list dense>
        <v-list-item @click="navigateToPage('home'), drawer = false">
          <v-list-item-icon>
            <v-icon color="white">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">Home</v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigateToPage('shop'), drawer = false">
          <v-list-item-icon>
            <v-icon color="white">mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">Shop</v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigateToPage('about', drawer = false)">
          <v-list-item-icon>
            <v-icon color="white">mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">About Us</v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigateToPage('contact'), drawer = false">
          <v-list-item-icon>
            <v-icon color="white">mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">Contact</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-row v-if="isHomePage">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 white--text">Welcome To Briva Enterprise</h1>
        <p class="subtitle-1 white--text">
          Your one-stop shop for all your needs!
        </p>
      </v-col>
      <v-img src="shopping-1.jpg" contain width="300" height="300"></v-img>
      <v-img src="shopping-2.jpg" contain width="300" height="300"></v-img>
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
      drawer: false,
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

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 10px;
}
</style>
