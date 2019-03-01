<template>
        <v-layout wrap>
           <!-- <Sidebar></Sidebar> -->
            <v-flex >
                <v-toolbar  >
            <v-toolbar-side-icon ><v-icon  >watch_later</v-icon></v-toolbar-side-icon>
            <v-toolbar-title> Scheduled Meetings </v-toolbar-title>
            
        </v-toolbar>  
           
           <router-link class="btn title" tag='button' to="/viewcalendar/settings">option</router-link>
            </v-flex>
            <router-view></router-view>
         <!-- <Modalleft /> -->
         <!-- <v-flex xs8>
                   
               Hello form here

                 
          
         
          <v-flex xs4>
               TEST TEXT HERE   <Bookform /> 
          </v-flex>
       </v-flex>
  
    
             <v-flex xs6> 
<Timecalendar /> 

             </v-flex>
             <v-flex xs6 >
  <Daycalendar />
</v-flex> -->
        
       

    
    </v-layout>
       
       <!-- <compTest> </compTest>   -->
       
     <!-- <Logtime /> -->

</template>
<script>
import Timecalendar from "../components/viewcalendar/timecalendar.vue";
import Bookform from "../components/booktime/bookform.vue";
import Sidebar from "../components/layout/sidebar.vue";
import Daycalendar from "./daycalendar.vue";
import Timepicker from "../components/picker/timepicker.vue";

export default {
    components:{
        Bookform, Sidebar, Timecalendar, Daycalendar
    },
    data(){
        return {
            
        }
    },
    methods:{

    },
    computed:{
        view: function(){
return "Sidebar"
        }
    }
    
}
</script>
<style>
</style>

