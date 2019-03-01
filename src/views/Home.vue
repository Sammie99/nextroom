<template>
  <v-container class="homeview">
    <v-layout class="trans" row align-center justify-space-around>
      <v-flex xs8 style="padding-right:30px; padding-left:30px;">
        <h1 style="color:dodgerblue;  font-size:50px!important; ">More In One...</h1>
        <br>
        <h5 style="color:dodgerblue;  display:inline-block;">
          <span>The Best way to Manage Meeting Rooms.</span>
        </h5>
        <br>
        <v-layout column>
          <h5 style="color:dodgerblue;  display:inline-block;">
            <span>Flexible And Easy As</span>
          </h5>
          <div class="ml15">
            <span class="word">Find Free Rooms</span>
            <span class="word">Schedule A Meeting</span>
            <span class="word">View Calendar</span>
          </div>
          <!-- <v-btn round color="blue">
            <span style="color:white;">Find A Rooms</span>
          </v-btn>
          <v-btn round>
            <span style="color:green;">Schedule A Meeting</span>
          </v-btn>
          <v-btn round color="blue">
            <span style="color:white;">View Calendar</span>
          </v-btn>-->
        </v-layout>
      </v-flex>
      <v-flex xs4>
        <img
          src="../../public/img/events.svg"
          alts="welcome"
          class="img-fluid"
          style="width:500px; height:400px;"
        >
      </v-flex>
    </v-layout>
    <hr>

    <v-layout style="border-left:20px solid dodgerblue;" row wrap class="takescreen">
      <v-flex xs6>
        <div style>
          <Homecard/>
        </div>
      </v-flex>
      <v-flex xs6>
        <!-- <Timeline/> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Toptime from "../components/countdown";
import Homecard from "../components/homecard";

import Timeline from "../components/timeline";
export default {
  components: { Homecard, Timeline, Toptime },
  mounted() {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml15 .word",
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCircle",
        duration: 800,
        delay: function(el, i) {
          return 800 * i;
        }
      })
      .add({
        targets: ".ml15",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
.homeview {
  background: radial-gradient(
    ellipse at bottom,
    #f5f6f7 0%,
    rgb(250, 250, 250) 30%
  );
  background-size: 100%;
  font-weight: 20px;
  height: 100%;
  margin-top: -5%;
}
.ml15 {
  font-weight: 500;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: rgb(239, 242, 245);
}

.ml15 .word {
  display: inline-block;
  line-height: 1em;
  border-radius: 4px;
  background-color: dodgerblue;
  text-justify: center;
}
/* .homeview:hover{
  background-size:cover;
  height:100%;

} */
.trans {
  width: 600px;
  font-size: 35px;
  height: 500px;
  background: white;
  -webkit-transition: font-weight 2s, width 2s, height 4s; /* For Safari 3.1 to 6.0 */
  transition: font-weight 2s, width 2s, height 4s;
}

.trans:hover {
  width: 800px;
  height: 600px;
}
.takescreen {
  -webkit-transition: border 3s, background-color 1s, width 2s, height 3s; /* For Safari 3.1 to 6.0 */
  transition: border 3s, background-color 1s, width 2s, height 3s;
}
.takescreen:hover {
  height: 80%;
  /* border: 13px solid rgb(92, 187, 224); */
  border-radius: 29px;
  background-color: rgb(240, 243, 245);
  background-size: 100%;
  position: fixed;
  top: 6%;
  right: 75%;

  width: 80%;
}
</style>

