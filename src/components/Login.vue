<template>
  <div class="container mt-5">
    <form @submit.prevent="login" class="form neu-border">
      <!-- Email input -->
      <MDBInput
        class="text-white"
        type="email"
        label="Email Address"
        id="form2Email"
        v-model="email"
        wrapperClass="mb-4"
      />
      <!-- Password input -->
      <MDBInput
        class="text-white"
        type="password"
        label="Password"
        id="form2Password"
        v-model="password"
        wrapperClass="mb-4"
      />
      <!-- 2 column grid layout for inline styling -->
      <MDBRow class="mb-4">
        <MDBCol class="d-flex justify-content-center">
          <!-- Checkbox -->
          <MDBCheckbox
            label="Remember me"
            id="form2LoginCheck"
            v-model="form2LoginCheck"
            wrapperClass="mb-3 mb-md-0"
          />
        </MDBCol>
        <MDBCol>
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>
      <!-- Submit button -->
      <MDBBtn color="danger" type="submit" block> Sign in </MDBBtn>

      <!-- Register buttons -->
      <div class="text-center my-3">
        <p>
          Not a member?
          <router-link class="mb-2" :to="{ name: 'RegisterU' }"
            >Register</router-link
          >
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
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const form2Email = ref("");
    const form2Password = ref("");
    const form2LoginCheck = ref(true);

    return {
      form2Email,
      form2Password,
      form2LoginCheck,
    };
  },
  methods: {
    login() {
      fetch("https://capstone-bkend.herokuapp.com/users/", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert("User does not exsist");
        });
    },
  },
};
</script>
<style></style>
