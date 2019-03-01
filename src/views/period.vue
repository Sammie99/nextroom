 <template>
  <v-layout row fluid class="periods">
    <v-flex class="timelistlayout" xs12 sm12>
      <img src="../assets/assets/img/modalicon/basic_postcard.png" alt="schedule">
      <h3>
        <span
          style="color:black; padding-bottom:10px; font-family:cinzel; font-size:30px;"
        >Scheduled Meetings</span>
      </h3>
      <v-divider></v-divider>
      <v-card>
        <v-toolbar height="70" color="white">
          <v-toolbar-title class="headline pa-3">
            <span
              style="font-family:cinzel; font-size:20px; color:grey; line-space:1em;"
            >Meeting Times</span>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>access_time</v-icon>
          </v-btn>
        </v-toolbar>
        <v-layout wrap>
          <v-flex sm12>
            <v-list light three-line>
              <v-subheader>Free and Upcoming Meetings</v-subheader>
              <v-list-tile
                v-for="item in roomtime"
                :key="item.title"
                avatar
                ripple
                class="timelist"
              >
                <v-list-tile-avatar>
                  <v-icon x-large :color="item.event ? 'red' : 'green'">label</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content class="ml-5">
                  <v-list-tile-title class="gold--text ml-10" v-html="item.time"></v-list-tile-title>

                  <v-list-tile-content class="ml-2" v-if="item.event">
                    <span class="subheader blue--text">{{item.event}}</span>
                    <!-- <span class="red--text"> {{item.host}} </span> -->
                  </v-list-tile-content>
                  <v-list-tile-content class="ml-2" v-else>
                    <span class="headline green--text">FREE</span>
                  </v-list-tile-content>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn flat to="/roomtime">
                    <v-icon
                      right
                      :disabled="item.booked"
                      @click="openaddevent = !openaddevent"
                    >create</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex xs5 offset-xs3>
            <h1>
              <span style="color:blue;">Note : add bookform</span>
            </h1>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Booktime from "../components/booktime/bookform.vue";
import Modalleft from "../components/layout/modalleft.vue";

export default {
  components: { Booktime, Modalleft },
  data() {
    return {
      openaddevent: false,
      roomtime: [
        { booked: false, time: "7:00 - 8:00", event: null },
        { booked: false, time: "8:00 - 9:00", event: null },
        {
          booked: true,
          time: "9:00 - 10:00",
          event: "Weekly Meeting",
          host: "Annie Jones"
        },
        { booked: false, time: "10:00 - 11:00" },
        { booked: false, time: "11:00 - 12:00" },
        { booked: false, time: "12:00 - 1:00" },
        { booked: false, time: "1:00 - 2:00" },
        { booked: false, time: "2:00 - 3:00" },
        {
          booked: true,
          time: "3:00 - 4:00",
          event: "Project Review",
          host: "Gale Mike"
        },
        {
          booked: true,
          time: "4:00 - 5:00",
          event: "Group Internal Audit",
          host: "Tope Quadri"
        },
        { booked: false, time: "5:00 - 6:00 " },
        { booked: false, time: "6:00 - 7:00" }
      ]
    };
  }
};
</script>
<style scoped>
.timelist:hover {
  text-decoration: none;
}
.timelistlayout {
  border-radius: 10px;
  margin-top: -2%;
}
.listBg {
  width: 100wh;
  height: 90vh;
  color: black;
  background: linear-gradient(
    -45deg,
    rgb(194, 189, 189),
    rgb(92, 94, 92),
    rgb(189, 192, 189),
    rgb(220, 227, 228)
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
.periods {
  margin-left: 10%;
}
</style>
