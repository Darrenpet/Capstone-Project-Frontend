<template>
  <section class="products">
    <div class="container my-5">
      <div class="row my-5">
        <div
          class="col-lg-6 col-md-6 col-sm-12 mb-5 animate__animated animate__rotateInDownLeft"
        >
          <h1 class="fw-bold mb-3">About</h1>
          <p class="text-start text-black">
            Be Mobile maybe a roaring and growing business at the center of the
            movable sector that serves numerous customers through our retail,
            wholesale and online activities. For retail customers Be Mobile has
            become a saw for mobiles, parts, accessories, services, and repairs
            through our four shops in CT, South Africa. Currently established
            for over a decade, we have a tendency to extend into wholesale offer
            and distribution concerning four years past and have conjointly
            developed refined, easy websites to sell mobiles, parts, repair
            services, and accessories to new customers everyplace. Be
          </p>
          <p class="text-start text-black">
            Mobile's success thus far has primarily been designed on our
            dedication to providing a superb client service, treating every
            client as special, and going the additional mile, whenever
            necessary, to search out the correct product and services.
          </p>
        </div>

        <div
          class="col-lg-6 col-md-6 col-sm-12 animate__animated animate__rotateInDownRight"
        >
          <h1 class="fw-bold mb-3">Featured</h1>
          <Carousel />
        </div>
      </div>
    </div>
  </section>
  <h1 class="fw-bold mb-5">Products</h1>
  <div class="container my-5">
    <div class="d-flex justify-content-center">
      <div class="sortBar mx-1">
        <label>
          Sort Price:
          <select v-model="price" @change="sortPrice(price)">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label>
          Sort Name:
          <select v-model="title" @change="sortTitle(title)">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label>
          Filter Category:
          <select v-model="selected" @click="sortCategory(category)">
            <option value="">All</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
            <option value="Apple">Apple</option>
          </select>
        </label>
      </div>
      <input type="text" name="all" placeholder="Search" v-model="search" />
    </div>

    <div v-if="products.length" class="row my-5 border shadow-5-strong py-5">
      <div
        v-for="product in filterProducts"
        :key="product._id"
        class="product col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
      >
        <router-link
          :to="{
            name: 'ProductDetails',
            params: {
              id: product._id,
            },
          }"
        >
          <h2 class="card text-white animate__animated animate__zoomIn">
            <img
              :src="product.img_front"
              class="d-block img-thumbnail"
              alt="..."
            />
            <img
              :src="product.img_back"
              class="img-thumbnail img-top card-img"
              alt="..."
            />
            {{ product.title }}
            <br />
            {{ product.category }}
            <br />
            R{{ product.price }}
          </h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p class="my-5">Loading products...</p>
      <div class="fingerprint-spinner my-5">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
  mdbRipple,
  MDBCardGroup,
  MDBCardGroupItem,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
    MDBCardGroup,
    MDBCardGroupItem,
    Carousel,
  },

  directives: {
    mdbRipple,
  },
  data() {
    return {
      products: [],
      selected: "",
      search: "",
      category: "",
      price: "",
      title: "",
    };
  },
  mounted() {
    fetch("https://capstone-bkend.herokuapp.com/products/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.products = json;
      });
  },

  computed: {
    filterProducts: function () {
      if (this.selected == "") {
        this.products = this.products.filter((product) => {
          return product.category
            .toLowerCase()
            .match(this.selected.toLowerCase());
        });
        if (this.search) {
          this.products = this.products.filter((product) => {
            return product.title.toLowerCase().match(this.search.toLowerCase());
          });
        }
        return this.products;
      }
      if (this.selected) {
        this.products = this.products.filter((product) => {
          return product.category
            .toLowerCase()
            .match(this.selected.toLowerCase());
        });
        if (this.search) {
          this.products = this.products.filter((product) => {
            return product.title.toLowerCase().match(this.search.toLowerCase());
          });
        }
        return this.products;
      }
    },
  },

  methods: {
    sortPrice(price) {
      this.filterProducts = this.filterProducts.sort(
        (a, b) => a.price - b.price
      );
      if (price == "desc") this.filterProducts.reverse();
    },

    sortTitle(title) {
      this.filterProducts = this.filterProducts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      if (title == "desc") this.filterProducts.reverse();
    },

    sortCategory(category) {
      if (category == "All") {
        return this.products(products);
      }

      this.products = products.filter((products) => {
        return products.category
          .toLowerCase()
          .match(this.selected.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.products {
  min-height: 50vh;
}

.product h2 {
  background: #000000;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  min-width: 350px;
  max-height: 350px;
  cursor: pointer;
  color: #444;
}

.product h2:hover {
  background: rgb(255, 0, 0);
}

.product a {
  text-decoration: none;
}

.card .img-top {
  display: none;
  position: absolute;
  top: 20px;
  left: 75px;
  z-index: 99;
}

.card:hover .img-top {
  display: inline;
  border-radius: 50%;
  height: 200px;
  margin: auto;
  width: 200px;
  object-fit: cover;
}

.d-block {
  border-radius: 50%;
  height: 200px;
  margin: auto;
  width: 200px;
  object-fit: cover;
}

.fingerprint-spinner,
.fingerprint-spinner * {
  box-sizing: border-box;
}

.fingerprint-spinner {
  height: 64px;
  width: 64px;
  padding: 2px;
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.fingerprint-spinner .spinner-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #ff0000;
  animation: fingerprint-spinner-animation 1500ms
    cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.fingerprint-spinner .spinner-ring:nth-child(1) {
  height: calc(60px / 9 + 0 * 60px / 9);
  width: calc(60px / 9 + 0 * 60px / 9);
  animation-delay: calc(50ms * 1);
}

.fingerprint-spinner .spinner-ring:nth-child(2) {
  height: calc(60px / 9 + 1 * 60px / 9);
  width: calc(60px / 9 + 1 * 60px / 9);
  animation-delay: calc(50ms * 2);
}

.fingerprint-spinner .spinner-ring:nth-child(3) {
  height: calc(60px / 9 + 2 * 60px / 9);
  width: calc(60px / 9 + 2 * 60px / 9);
  animation-delay: calc(50ms * 3);
}

.fingerprint-spinner .spinner-ring:nth-child(4) {
  height: calc(60px / 9 + 3 * 60px / 9);
  width: calc(60px / 9 + 3 * 60px / 9);
  animation-delay: calc(50ms * 4);
}

.fingerprint-spinner .spinner-ring:nth-child(5) {
  height: calc(60px / 9 + 4 * 60px / 9);
  width: calc(60px / 9 + 4 * 60px / 9);
  animation-delay: calc(50ms * 5);
}

.fingerprint-spinner .spinner-ring:nth-child(6) {
  height: calc(60px / 9 + 5 * 60px / 9);
  width: calc(60px / 9 + 5 * 60px / 9);
  animation-delay: calc(50ms * 6);
}

.fingerprint-spinner .spinner-ring:nth-child(7) {
  height: calc(60px / 9 + 6 * 60px / 9);
  width: calc(60px / 9 + 6 * 60px / 9);
  animation-delay: calc(50ms * 7);
}

.fingerprint-spinner .spinner-ring:nth-child(8) {
  height: calc(60px / 9 + 7 * 60px / 9);
  width: calc(60px / 9 + 7 * 60px / 9);
  animation-delay: calc(50ms * 8);
}

.fingerprint-spinner .spinner-ring:nth-child(9) {
  height: calc(60px / 9 + 8 * 60px / 9);
  width: calc(60px / 9 + 8 * 60px / 9);
  animation-delay: calc(50ms * 9);
}

@keyframes fingerprint-spinner-animation {
  100% {
    transform: rotate(360deg);
  }
}
</style>
