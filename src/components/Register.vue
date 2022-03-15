<template>
  <div class="container mt-5">
    <form @submit.prevent="register" class="form neu-border">
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <MDBRow class="mb-4">
        <MDBCol>
          <MDBInput type="text" label="Name" id="name" v-model="name" />
        </MDBCol>
        <MDBCol>
          <MDBInput
            type="text"
            label="Contact Number"
            id="phone_number"
            v-model="phone_number"
          />
        </MDBCol>
      </MDBRow>
      <!-- Email input -->
      <MDBInput
        type="email"
        label="Email address"
        id="email"
        v-model="email"
        wrapperClass="mb-4"
      />
      <!-- Password input -->
      <MDBInput
        type="password"
        label="Password"
        id="password"
        v-model="password"
        wrapperClass="mb-4"
      />

      <!-- Submit button -->
      <MDBBtn color="danger" block class="my-2"> Sign up </MDBBtn>

      <!-- Register buttons -->
      <div class="text-center">
        <p>
          Already a Member?
          <router-link class="mb-2" to="/Login">login</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
  },
  setup() {
    const name = ref("");
    const phone_number = ref("");
    const email = ref("");
    const password = ref("");

    return {
      name,
      phone_number,
      email,
      password,
    };
  },
  methods: {
    register() {
      fetch("https://capstone-bkend.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
<style>
.neu-border {
  border-radius: 5px;
  border-block-color: red;
  background: #252525;
}
</style>
