<template>
  <v-card
    class="mx-auto timelinecard"
    max-width="400"
    flat
  >
    <v-card
      dark
      flat
      class="timelinecard"
    >
      <v-btn
        absolute
        bottom
        color="green"
        right
        fab
      >
        <v-icon>  </v-icon>
      </v-btn> 
     <EventForms />
      <v-card-title class="pa-2 green lighten-2">
        <v-btn icon>
          <v-icon>label</v-icon>
        </v-btn>
        <h3 style="font-family:'cinzel';" class="title font-weight-medium text-xs-center ">Upcoming Today</h3>
      </v-card-title>
        
      
    </v-card>
    <v-card-text  class="py-0">
      <v-timeline
        align-top
        dense
        light
      >
        <v-timeline-item
          color="pink"
          small
        >
          <v-layout pt-3>
            <v-flex xs3>
              <strong>2-3pm</strong>
            </v-flex>
            <v-flex>
              <strong>Weekly Campaign Review</strong>
              <div class="caption">Sales Unit</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item
          color="green"
          small
        >
          <v-layout wrap pt-3>
            <v-flex xs3>
              <strong>3-4pm</strong>
            </v-flex>
            <v-flex>
              <strong>Available</strong>
              
             
            </v-flex>
          </v-layout>
        </v-timeline-item>


        <v-timeline-item
          color="pink "
          small
        >
          <v-layout pt-3>
            <v-flex xs3>
              <strong>4-5pm</strong>
            </v-flex>
            <v-flex>
              <strong>Weekly Meeting</strong>
              <div class="caption">HR</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
<script>
import EventForms from "./eventforms.vue";
export default {
  components:{EventForms},
  data(){
    return{

    }
  }
}
</script>

<style >
.timelinecard {
  font-family:"cardo";
  background-color:green;
  color:gold;
  border-radius:10px;
}
</style>