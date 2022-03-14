<template>
  <div class="Login">
    <form @submit.prevent="login" class="form neu-border">
      <!-- Email input -->
      <MDBInput
        type="email"
        label="Email address"
        id="form2Email"
        v-model="form2Email"
        wrapperClass="mb-4"
      />
      <!-- Password input -->
      <MDBInput
        type="password"
        label="Password"
        id="form2Password"
        v-model="form2Password"
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
      <MDBBtn color="danger" block> Sign in </MDBBtn>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <MDBBtn color="danger" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="facebook-f" />>
        </MDBBtn>

        <MDBBtn color="danger" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="google" />
        </MDBBtn>

        <MDBBtn color="danger" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="twitter" />
        </MDBBtn>

        <MDBBtn color="danger" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="github" />
        </MDBBtn>
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
<style>
.neu-border {
  border-radius: 15px;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px whitesmoke, -8px -8px 15px whitesmoke;
}
</style>
