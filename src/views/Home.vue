<template>
  <section class="container">
    <div class="welcome">Be Mobile</div>
  </section>
</template>

<script>
import { MDBBtn } from "mdb-vue-ui-kit";
export default {
  name: "Home",
  components: {
    components: {
      MDBBtn,
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 60vh;
  background: -webkit-linear-gradient(
      rgba(246, 247, 249, 0.8),
      rgba(246, 247, 249, 0.8)
    ),
    url(https://cdn.mos.cms.futurecdn.net/XGBorFEVLWV9H3aKV8Q2iC.jpg) no-repeat
      center center fixed;
  background: url(https://cdn.mos.cms.futurecdn.net/XGBorFEVLWV9H3aKV8Q2iC.jpg)
    no-repeat center center fixed;
  background-size: cover;
}

.welcome {
  font-size: 57.6px;
  line-height: 64px;
  font-family: "Muli";
  color: #ecf0f1;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -165px;
}
.welcome:before {
  content: "[";
  position: absolute;
  left: -30px;
  line-height: 64px;
}
.welcome:after {
  content: "]";
  position: absolute;
  right: -30px;
  line-height: 64px;
}
.welcome:after,
.welcome:before {
  font-family: "Muli";
  color: #ff0000;
  font-weight: 500;
  font-size: 64px;
  animation: 2s linear 0s normal none infinite opacity;
  -webkit-animation: 2s ease-out 0s normal none infinite opacity;
  -moz-animation: 2s ease-out 0s normal none infinite opacity;
  -o-animation: 2s ease-out 0s normal none infinite opacity;
}
.visible {
  float: left;
  font-weight: 600;
  overflow: hidden;
  height: 64px;
}
.welcome p {
  display: inline;
  float: left;
  margin: 0;
}
.welcome ul {
  margin-top: 0;
  padding-left: 284px;
  text-align: left;
  list-style: none;
  animation: 6s linear 0s normal none infinite change;
  -webkit-animation: 6s linear 0s normal none infinite change;
  -moz-animation: 6s linear 0s normal none infinite change;
  -o-animation: 6s linear 0s normal none infinite change;
}
.welcome ul li {
  line-height: 64px;
  margin: 0;
}
@-webkit-keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes change {
  0% {
    margin-top: 0;
  }
  15% {
    margin-top: 0;
  }
  25% {
    margin-top: -64px;
  }
  40% {
    margin-top: -64px;
  }
  50% {
    margin-top: -128px;
  }
  65% {
    margin-top: -128px;
  }
  75% {
    margin-top: -64px;
  }
  85% {
    margin-top: -64px;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes change {
  0% {
    margin-top: 0;
  }
  15% {
    margin-top: 0;
  }
  25% {
    margin-top: -64px;
  }
  40% {
    margin-top: -64px;
  }
  50% {
    margin-top: -128px;
  }
  65% {
    margin-top: -128px;
  }
  75% {
    margin-top: -64px;
  }
  85% {
    margin-top: -64px;
  }
  100% {
    margin-top: 0;
  }
}
</style>
