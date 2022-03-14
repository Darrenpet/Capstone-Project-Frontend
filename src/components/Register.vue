<template>
  <form @submit.prevent="register" class="form neu-border">
    <!-- 2 column grid layout with text inputs for the first and last names -->
    <MDBRow class="mb-4">
      <MDBCol>
        <MDBInput
          type="text"
          label="First name"
          id="form3FirstName"
          v-model="form3FirstName"
        />
      </MDBCol>
      <MDBCol>
        <MDBInput
          type="text"
          label="Last name"
          id="form3LastName"
          v-model="form3LastName"
        />
      </MDBCol>
    </MDBRow>
    <!-- Email input -->
    <MDBInput
      type="email"
      label="Email address"
      id="form3Email"
      v-model="form3Email"
      wrapperClass="mb-4"
    />
    <!-- Password input -->
    <MDBInput
      type="password"
      label="Password"
      id="form3Password"
      v-model="form3Password"
      wrapperClass="mb-4"
    />

    <!-- Checkbox -->
    <MDBCheckbox
      label="Remember me"
      id="form3SubscribeCheck"
      v-model="form3SubscribeCheck"
      wrapperClass="d-flex justify-content-center mb-4"
    />

    <!-- Submit button -->
    <MDBBtn color="primary" block class="mb-4"> Sign up </MDBBtn>

    <!-- Register buttons -->
    <div class="text-center">
      <p>or sign up with:</p>
      <MDBBtn color="primary" floating class="mx-1">
        <MDBIcon iconStyle="fab" icon="facebook-f" />>
      </MDBBtn>

      <MDBBtn color="primary" floating class="mx-1">
        <MDBIcon iconStyle="fab" icon="google" />
      </MDBBtn>

      <MDBBtn color="primary" floating class="mx-1">
        <MDBIcon iconStyle="fab" icon="twitter" />
      </MDBBtn>

      <MDBBtn color="primary" floating class="mx-1">
        <MDBIcon iconStyle="fab" icon="github" />
      </MDBBtn>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      password: "",
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
  border-radius: 15px;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
}
</style>
