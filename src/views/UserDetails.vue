<template>
  <!-- Button trigger modal -->
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel"> Update User </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <div class="mb-3">
        <label for="addName" class="form-label">Name</label>
        <input
          class="form-control"
          type="text"
          name="addName"
          id="addName"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="addEmail" class="form-label">Email</label>
        <input
          class="form-control"
          type="email"
          name="addEmail"
          id="addEmail"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="addContact" class="form-label">Phone Number</label>
        <input
          class="form-control"
          type="text"
          name="addContact"
          id="addContact"
          v-model="phone_number"
        />
      </div>
      <div class="mb-3">
        <label for="addPassword" class="form-label">Password</label>
        <input
          class="form-control"
          type="password"
          name="addPassword"
          id="addPassword"
          v-model="password"
        />
      </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="black" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="danger" @click="updateUser()">Update User</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <h1 class="fw-bold my-5">User Details</h1>
  <MDBBtn
    color="black"
    onclick="history.back(-1)"
    class="link-button link-back-button"
  >
    Go Back
  </MDBBtn>
  <div class="container animate__animated animate__rubberBand">
    <div v-if="user" class="row d-flex justify-content-center">
      <div class="card-item text-dark border shadow-5-strong mt-5 card">
        <img
          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          class="d-block img-thumbnail"
          alt="..."
        />
        <div class="text-center">
          <p class="h5 names text-center mt-3">{{ user.name }}</p>
          <b class="category">{{ user.email }}</b>
          <div class=" ">
            <p class="text-center mt-3">{{ user.phone_number }}</p>
          </div>
        </div>
        <div class="my-2">
          <MDBBtn
            color="black"
            aria-controls="exampleModal"
            @click="exampleModal = true"
          >
            Update/Edit
          </MDBBtn>
          <MDBBtn
            tag="a"
            href="#!"
            color="danger"
            @click.prevent="deleteUser(user._id)"
            >Delete</MDBBtn
          >
        </div>
      </div>
    </div>
    <div v-else>
      <p class="my-5">Loading one user...</p>
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
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  },
  props: ["id"],
  data() {
    return {
      user: null,
      name: "",
      email: "",
      phone_number: "",
      password: "",
    };
  },

  setup() {
    const exampleModal = ref(false);
    return {
      exampleModal,
    };
  },

  mounted() {
    fetch("https://capstone-bkend.herokuapp.com/users/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.user = json;
      })
      .catch((err) => {
        alert(console.log(err));
      });
  },

  methods: {
    updateUser() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://capstone-bkend.herokuapp.com/users/" + this.id, {
        method: "PUT",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.user = json;
          alert("User Updated!");
          location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    },

    deleteUser(id) {
      const config = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      let apiURL = `https://capstone-bkend.herokuapp.com/users//${id}`;

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL, config)
          .then(() => {
            alert("User Deleted");
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
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

.card-item {
  background-color: rgb(226, 226, 226);
  border-radius: 15px;
  height: 500px;
  max-width: 400px;
}
.category {
  color: rgb(255, 0, 0);
  font-size: x-large;
}
.names {
  font-size: xx-large;
}
.description {
  width: 700px !important;
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
