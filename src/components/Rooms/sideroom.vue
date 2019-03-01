<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img>
          <img src="../../assets/mtrom.jpg" style="height:250px; width:350px;">
          <v-card-title primary-title>
            <div>
              <div class="headline">
                <span style="font-family:rubik; text-transform:capitalize">{{localroom.roomname}}</span>
              </div>
              <div class="roomicons">
                

                <v-icon>wifi</v-icon>
                <v-icon>local_printshop</v-icon>
                <v-icon>personal_video</v-icon>
               <v-badge right color="grey">
                  <span slot="badge">{{localroom.roomseat}}</span>
                  <v-icon overlap color="dodgerblue ">event_seat</v-icon>
                </v-badge>
              </div>
            </div>
          </v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn flat color="rgb(159, 199, 240)">View Calendar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-x-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver.
            You won't have time for sleeping, soldier, not with all the coding you'll be doing.
            Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk!
            You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-x-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    localroom() {
      return this.$store.getters.localroom[0];
    }
  }
};
</script>
<style>
.roomicons {
  padding: 8px;
}
</style>

