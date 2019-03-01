<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
     class="blue-grey "
      light
      right
      clipped
      app
      height="55%"
      
      
     
    >
     <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
    </v-flex>
  </v-layout>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
      height="100%"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-blue"><v-icon>dashboard</v-icon>MeetingRoom App  
      
      
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <span> <v-icon>add_box<v-icon> </span> -->
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-chip label color="green" text-color="white" >
<v-icon left>label</v-icon>
      <h4  class="pa-5" >Scheduled Meetings</h4>
     
      
    </v-chip>
      <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
      expand-icon="mdi-menu-down"
    >
      <div slot="header">
        <v-layout row wrap>
          <v-flex xs6 sm6>
           <v-chip color="#C5CAE9" text-color="white"> Date:{{picker}}</v-chip>   
           </v-flex>
           <v-flex  xs6 sm6>
            <v-chip color="#90CAF9" text-color="white">Title: Meeting title</v-chip>
            </v-flex>
           </v-layout>
           </div>
      <v-card>
        <v-card-text class="grey lighten-3">Description: The marketting department's weekly reports and review committee </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
    </v-navigation-drawer>
    
    <v-content>

                <EventForms />
  
   <router-view></router-view> 
         
  
    </v-content>
    
    <v-footer color="blue-grey" class="white--text" app>
      <span> Made with <v-icon>heart_box</v-icon></span>
      
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import EventForms from './components/eventforms.vue';
  export default {
    components:{ EventForms },
    data: () => ({
      picker: new Date().toISOString().substr(0, 10),
      drawer: false,
      drawerRight: false,
      right: false,
      left: false
    }),
    props: {
      source: String
    }
  }
</script>
<style>
#inspire{
background-color:rgba(73, 180, 40, 0.534);
}
</style>
