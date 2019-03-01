<template>
  <v-toolbar  class="tool" dark extended app>
    <v-layout column justify-center align center justify-space-around>
      <v-flex >
        <v-toolbar-title
          style="margin-top:50px; "
          slot="extension"
          class=" lemon--text"
        >
        <!-- <v-icon x-large color="#A5D6A7">stars</v-icon> -->
          <!-- <transition 
      enter-active-class="animated wobble" 
      >  </transition> -->
        <span style="font-size:26px;  color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    "> {{localroom.roomname}} </span>
        
        </v-toolbar-title>
      </v-flex>

      <v-flex>
        <v-toolbar-title slot="extension" class="white--text" font-weight-thin>
          <div v-if="localroom.status"><v-chip  label color="#A5D6A7" text-color="white">available</v-chip>
          <!-- <v-icon color="green" v-for="utilicon in localroom.utility" :key="localroom.utility">

          </v-icon>
           -->
           </div>
           <v-chip v-else label color="#FF9E80" text-color="white">{{localroom.status? "Available" : "Occupied"}}</v-chip>
        <Toptime  />
        </v-toolbar-title>
      </v-flex>

    </v-layout>
    

    <v-spacer></v-spacer>
              

      
      <v-avatar size="44" color="white">
        <v-badge color="green">
      <span slot="badge"> {{ localroom.roomseat }}</span>
      <v-icon
        overlap
        color="green "
      >
       event_seat
      </v-icon>
    </v-badge>
      </v-avatar>
   
  
    
    <!-- // left Topbar buttons -->
      
      <v-btn fab ripple color="white">
        <v-icon color="green">date_range</v-icon>
      </v-btn>
    <v-menu bottom  allow-overflow close-on-click 
    nudge-bottom="32" transition="slide-y-transition" >
            
            <v-btn   slot="activator" fab color="white">
        <v-icon color="green">more_vert</v-icon>
      </v-btn>  
       

          
                 <Addroom /> 
            
          </v-menu>
     
    
  </v-toolbar>
</template>
<script>
import Toptime from './timer.vue';
 import Addroom from './settings/addroom.vue';
export default {
  components:{Toptime, Addroom},
  data() {
    return {
    
    };
  },
  methods: {},

  computed:{
      localroom(){
        return this.$store.getters.localroom[0];
  },


}
};
</script>

<style scoped>

.tool {
  /* background-image: url("../assets/box.jpg");
 background-size:70%;    */
 background: #50ddba;
    background: radial-gradient(ellipse at left,  #383838  0%,rgb(34, 34, 34) 70%);
    background-size: 100%;
  font-family: "cinzel";
  }
</style>