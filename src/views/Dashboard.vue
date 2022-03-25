<template>
  <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <router-link
          class="nav-link active"
          aria-current="page"
          href="#!"
          to="/"
        >
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text"> Dashboard </span>
        </router-link>
      </li>

      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-laptop fa-2x"></i>
          <span class="nav-text"> Stars Components </span>
        </a>
      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-list fa-2x"></i>
          <span class="nav-text"> Forms </span>
        </a>
      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-folder-open fa-2x"></i>
          <span class="nav-text"> Pages </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-bar-chart-o fa-2x"></i>
          <span class="nav-text"> Graphs and Statistics </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-font fa-2x"></i>
          <span class="nav-text"> Quotes </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-table fa-2x"></i>
          <span class="nav-text"> Tables </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-map-marker fa-2x"></i>
          <span class="nav-text"> Maps </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text"> Documentation </span>
        </a>
      </li>
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text"> Logout </span>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Button trigger modal -->
  <MDBBtn
    color="danger"
    aria-controls="exampleModal"
    @click="exampleModal = true"
  >
    Create Product
  </MDBBtn>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel"> Create Product </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <div class="mb-3">
        <label for="addTitle" class="form-label">Title</label>
        <input
          class="form-control"
          type="text"
          name="addTitle"
          id="addTitle"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Category</label>
        <select
          class="form-select"
          name="addCategory"
          id="addCategory"
          v-model="category"
        >
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
          <option value="Apple">Apple</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="addPrice" class="form-label">Price</label>
        <input
          class="form-control"
          type="text"
          name="addPrice"
          id="addPrice"
          v-model="price"
        />
      </div>
      <div class="mb-3">
        <label for="addImg" class="form-label">Image Front URL</label>
        <input
          class="form-control"
          type="text"
          name="addImg"
          id="addImg"
          v-model="img_front"
        />
      </div>
      <div class="mb-3">
        <label for="addImg" class="form-label">Image Back URL</label>
        <input
          class="form-control"
          type="text"
          name="addImg"
          id="addImg"
          v-model="img_back"
        />
      </div>
      <div class="mb-3">
        <label for="addDescription" class="form-label">Description</label>
        <input
          class="form-control"
          type="text"
          name="addDescription"
          id="addDescription"
          v-model="description"
        />
      </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="primary" @click="createProduct()">Create Product</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <!-- Button trigger modal -->
  <MDBModal
    id="exampleModal2"
    tabindex="-1"
    labelledby="exampleModalLabel2"
    v-model="exampleModal2"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel2"> Update Product </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <div class="mb-3">
        <label for="addTitle" class="form-label">Title</label>
        <input
          class="form-control"
          type="text"
          name="addTitle"
          id="addTitle"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Category</label>
        <select
          class="form-select"
          name="addCategory"
          id="addCategory"
          v-model="category"
        >
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
          <option value="Apple">Apple</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="addPrice" class="form-label">Price</label>
        <input
          class="form-control"
          type="text"
          name="addPrice"
          id="addPrice"
          v-model="price"
        />
      </div>
      <div class="mb-3">
        <label for="addImg" class="form-label">Image Front URL</label>
        <input
          class="form-control"
          type="text"
          name="addImg"
          id="addImg"
          v-model="img_front"
        />
      </div>
      <div class="mb-3">
        <label for="addImg" class="form-label">Image Back URL</label>
        <input
          class="form-control"
          type="text"
          name="addImg"
          id="addImg"
          v-model="img_back"
        />
      </div>
      <div class="mb-3">
        <label for="addDescription" class="form-label">Description</label>
        <input
          class="form-control"
          type="text"
          name="addDescription"
          id="addDescription"
          v-model="description"
        />
      </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal2 = false">Close</MDBBtn>
      <MDBBtn color="primary" @click="updateProduct()">Update Product</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <div class="container">
    <h1 class="text-center display-6 mb-5 fw-bold subtitlee">Products</h1>
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel testi slide text-black col-lg-10"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="row text-center">
        <div
          class="carousel-inner text-dark border shadow-5-strong"
          v-for="(product, index) in products"
          :key="index"
        >
          <div
            class="carousel-item mt-5 card"
            :class="{ active: index == isActive }"
          >
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

            <div class="text-center mt-5">
              <p class="h5 names text-center mt-3">{{ product.title }}</p>
              <b class="category">{{ product.category }}</b>
              <div class=" ">
                <p class="text-center mt-3">{{ product.description }}</p>
                <p class="text-center mt-3">{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          @click="changePrevProducts"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          @click="changeNextProducts"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  <div class="container">
    <div v-if="products.length" class="row">
      <div
        v-for="product of products"
        :key="product._id"
        class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
      >
        <MDBCard text="danger" bg="dark" class="border shadow-5-strong my-5">
          <a class="card" v-mdb-ripple="{ color: 'dark' }">
            <MDBCardImg
              :src="product.img_front"
              class="card-img"
              alt="Card Front"
            />
            <MDBCardImg
              :src="product.img_back"
              class="img-top card-img"
              alt="Card Back"
            />
          </a>
          <MDBCardBody>
            <MDBCardTitle>{{ product.title }}</MDBCardTitle>
            <MDBCardText> {{ product.category }} </MDBCardText>
            <MDBCardText> {{ product.description }} </MDBCardText>
            <MDBCardText> R{{ product.price }} </MDBCardText>
            <MDBBtn
              color="info"
              aria-controls="exampleModal2"
              @click="exampleModal2 = true"
            >
              Update Product
            </MDBBtn>
            <MDBBtn
              tag="a"
              href="#!"
              color="danger"
              @click.prevent="deleteProduct(product._id)"
              >Delete</MDBBtn
            >
          </MDBCardBody>
        </MDBCard>
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

  <div class="container">
    <div v-if="users.length" class="row">
      <div
        v-for="user of users"
        :key="user._id"
        class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
      >
        <MDBCard text="danger" bg="dark" class="border shadow-5-strong my-5">
          <a class="card" v-mdb-ripple="{ color: 'dark' }">
            <MDBCardImg
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              class="card-img"
              alt="Card Front"
            />
          </a>
          <MDBCardBody>
            <MDBCardTitle>{{ user.name }}</MDBCardTitle>
            <MDBCardText> {{ user.email }} </MDBCardText>
            <MDBCardText> {{ user.phone_number }} </MDBCardText>
            <!-- <router-link
            :to="{
              name: 'ProductDetails',
              params: {
                id: user._id,
              },
            }"
            ><MDBBtn tag="a" href="#!" color="info"
              >View Product</MDBBtn
            ></router-link
          > -->
            <MDBBtn tag="a" href="#!" color="success">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
    <div v-else>
      <p class="my-5">Loading users...</p>
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
import axios from "axios";
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
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
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
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  },

  directives: {
    mdbRipple,
  },
  data() {
    return {
      products: [],
      users: [],
      title: "",
      category: "",
      description: "",
      img_front: "",
      img_back: "",
      price: "",
      isActive: 0,
    };
  },

  setup() {
    const exampleModal = ref(false);
    const exampleModal2 = ref(false);
    return {
      exampleModal,
      exampleModal2,
    };
  },

  methods: {
    changeNextProducts() {
      if (this.isActive < 19) this.isActive++;
      else this.isActive = 0;
    },
    changePrevProducts() {
      if (this.isActive < 20) {
        this.isActive--;
      }
      if (this.isActive < 0) {
        this.isActive = 19;
      }
    },

    // Create Product
    createProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://capstone-bkend.herokuapp.com/products/", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          category: this.category,
          price: this.price,
          img_front: this.img_front,
          img_back: this.img_back,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Created");
          // this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },

    // Update Product
    updateProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://capstone-bkend.herokuapp.com/products/" + this._id, {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          category: this.category,
          price: this.price,
          img_front: this.img_front,
          img_back: this.img_back,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Updated");
          // this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },

    deleteProduct(id) {
      const config = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      let apiURL = `https://capstone-bkend.herokuapp.com/products//${id}`;

      let indexOfArrayItem = this.products.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL, config)
          .then(() => {
            this.products.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
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
      }),
      fetch("https://capstone-bkend.herokuapp.com/users/", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.users = json;
        });
  },
};
</script>

<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);
.fa-2x {
  font-size: 2em;
}
.fa {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
}

.main-menu:hover,
nav.main-menu.expanded {
  width: 250px;
  overflow: visible;
}

.main-menu {
  background: #212121;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 60px;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  transform: translateZ(0) scale(1, 1);
  z-index: 1000;
}

.main-menu > ul {
  margin: 7px 0;
}

.main-menu li {
  position: relative;
  display: block;
  width: 250px;
}

.main-menu li > a {
  position: relative;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: #999;
  font-family: arial;
  font-size: 14px;
  text-decoration: none;
  transform: translateZ(0) scale(1, 1);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.main-menu .nav-icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main-menu .nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: "Titillium Web", sans-serif;
}

.main-menu > ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
}

.no-touch .scrollable.hover {
  overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y: auto;
  overflow: visible;
}

a:hover,
a:focus {
  text-decoration: none;
}

nav {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
}

.main-menu li:hover > a,
nav.main-menu li.active > a,
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus,
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
  color: #fff;
  background-color: #5fa2db;
}

.area {
  float: left;
  background: #e2e2e2;
  width: auto;
  height: auto;
}

@font-face {
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 300;
  src: local("Titillium WebLight"), local("TitilliumWeb-Light"),
    url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff)
      format("woff");
}

.card .img-top {
  display: none;
  position: absolute;
  top: 0;
  left: 50px;
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

.carousel-item {
  background-color: rgb(226, 226, 226);
  border-radius: 15px;
  height: 500px;
}
.carousel-control-prev-icon {
  background-color: rgb(255, 0, 0);
  margin-bottom: 230px;
}
.carousel-control-prev {
  opacity: 0.3 !important;
}
.carousel-control-next {
  opacity: 0.3 !important;
}
.carousel-control-next-icon {
  background-color: rgb(255, 0, 0);
  margin-bottom: 230px;
}
.category {
  color: rgb(255, 0, 0);
  font-size: x-large;
}
.names {
  font-size: xx-large;
}
.carousel-control-next-icon:hover {
  background-color: white;
}
.carousel-control-prev-icon:hover {
  background-color: white;
}
.description {
  width: 700px !important;
}
</style>
