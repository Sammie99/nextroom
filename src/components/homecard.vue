<template>
  <v-container justify-start grid-list-md>
    <v-layout justify-start-center>
      <v-card color="transparent" flat ripple>
        <v-card-title>
          <span style="padding-right:60px;">
            <p style="color:#66BB6A; font-size:25px; font-family:'cinzel';">
              NEXT In
              <span>0h 0mins
                <Counter/>
              </span>
            </p>
          </span>

          <!-- <v-icon x-large dark color="green" >add_box</v-icon>   -->
        </v-card-title>
        <v-card-text style="box-shadow:1px 1px -1px 1px">
          <div>
            <p class="homecard">
              <span>
                <v-icon color="#66BB6A">perm_contact_calendar</v-icon>
              </span>
              {{ booker }}
            </p>
            <p class="homecard">
              <span>
                <v-icon color="#66BB6A">event_note</v-icon>
              </span>
              {{ title}}
            </p>
            <p class="homecard">
              <span>
                <v-icon color="#66BB6A">schedule</v-icon>
              </span>
              {{ start }} - {{ end }}
            </p>
            <p class="homecard">
              <span>
                <v-icon color="#66BB6A">groups</v-icon>
              </span>
              <span style="font-size:15px;">{{ booker}} - {{ attendees[0] }} - {{attendees[1]}}</span>
            </p>
          </div>
        </v-card-text>
        <Footer class="home-foot"/>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import Counter from "./countdown.vue";
import Footer from "./footerz.vue";
export default {
  components: { Counter, Footer },
  data() {
    return {
      booker: "Fola Uche",
      title: "Project Meeting",
      start: "14:00",
      attendees: ["Jane Alabi", "Jeff Ige"],
      end: "15:00"
    };
  }
};
</script>

<style scoped>
.homecard {
  color: #66bb6a;
  font-family: "cinzel";
  font-size: 22px;
  padding: 8px;
}

.scrollclass {
  position: fixed;
  top: 10px;
  box-shadow: 5px 0px 5px;
  background-color: rgb(137, 221, 169);
  color: white;
}
.home-foot {
  position: absolute;
  left: 140px;
}
</style>

