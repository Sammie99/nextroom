<template>
  <v-app>
    <!-- class="napp" !!! -->
    <v-container fluid>
      <Header @opendrawer="opensidebar"></Header>

      <!-- <Topbar > </Topbar> -->
      <Sidebar :opendrawer="opendrawer"/>
      <Sidemenu/>

      <v-layout wrap>
        <v-flex auto>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-flex>

        <!-- <Footre />     -->
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Topbar from "./components/topbar";
import Footre from "./components/footer";
import Sidebar from "./components/layout/sidebar.vue";
export default {
  components: { Topbar, Footre, Sidebar },
  data() {
    return {
      opendrawer: false
    };
  },
  methods: {
    opensidebar() {
      this.opendrawer = !this.opendrawer;
    }
  },
  created() {
    var localroom = JSON.parse(localStorage.getItem("room"));
    this.$store.dispatch("getrooms", localroom[0]);
    console.log(localroom[0]);


    var roomlogs = JSON.parse(localStorage.getItem("roomlogs"));
    this.$store.dispatch("getroomlogs", roomlogs);
    console.log(roomlogs);
  },
  updated(){
    var roomlogs = JSON.parse(localStorage.getItem("roomlogs"));
    this.$store.dispatch("getroomlogs", roomlogs);
    console.log(roomlogs);
  },
  mounted() {
    require("../public/pace/pace.min.js");
    require("../public/pages/jquery-1.11.1.min.js");
    require("../public/pages/pages.js");
    require("../public/pages/modernizr.custom");
  },
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

 {
  opacity: 0;
}

#routeview {
  /* background-image:url('./assets/images.jpg') #81C784;  */
  background-color: rgba(235, 235, 235, 0.979);
  /* background-image:url('./assets/downloaded.jpg ');  */
  background-size: cover;
}
.napp {
  height: 90vh;
  color: #fff;
  background: linear-gradient(
    -45deg,
    rgb(255, 255, 255),
    rgb(201, 206, 201),
    rgb(245, 247, 245),
    rgb(199, 206, 207)
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

