<template> 
 
       <v-container class="settingview" fluid style="font-family:cinzel;">

             
             <v-dialog persistent v-model="open" >   
               
                <v-btn slot="activator" color="green" > <span class="subheader white--text"> Book A Meeting </span> </v-btn> 

 <!-- Notification alert component -->
        <!-- <transition 
      enter-active-class="animated shake" 
      leave-active-class="animated shake">
       
      </transition>   -->
   
   <Notificationslide :notmessage="notmessage" :open="alertmodal"   /> 
            


              <v-layout justify-center >
               <v-card width="400px"   class="addroomcard">

                 <v-toolbar color="success" extension-height="150" >

               <v-toolbar-title>    
<span  class="text-xs-center" style="background-size:100%; color:white; font-family:cinzel;"> MEETING DETAILS </span> 
               </v-toolbar-title>
      

                 </v-toolbar>

  <v-form v-model="valid">
    <v-container>
      <v-layout column>
        <v-flex
          xs12
          sm12
        >
          <v-text-field
            v-model="title"
            label="Meeting Title"
            required
            color="green"
            :rules="nameRules"
          >

          </v-text-field>

        </v-flex>

        <v-flex
          xs12
          sm12
        >
          <v-text-field
            v-model="host"
            :rules="nameRules"
            :counter="10"
            label="Host"
            required
            color="green"
          >
          
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout column wrap>
   
         <v-flex xs12 sm12>
         
          <v-text-field
            v-model="title"
            label="Meeting Description"
            required
            color="green"
            :rules="nameRules"
          >

          </v-text-field>

          </v-flex>

          /* start time and end time */
          


     
      </v-layout>
    </v-container>
  </v-form>

  <v-card-actions>
        <v-btn
          color="success"
        
        >
         Schedule 
        </v-btn>

        <v-btn color="danger"   @click="open = false ">Cancel</v-btn>
  </v-card-actions>
  </v-card>

     
</v-layout>                       
                 
               
               </v-dialog>
          </v-container>
              
 </template>

<script>

import Notificationslide from '../notificationslide';
import Timepicker from "../picker/timepicker.vue";

export default {
    components:{
      Notificationslide
    },
    data(){
         const srcs = {
        1: 'scanner',
        2: 'cast',
        3: 'videocam',
        4: 'local_printshop',
        5: 'signal_wifi_3_bar'
      }
        return {
            notmessage:"",
            id:0,
            alertmodal:false,
            open: false,
            
           
               valid: false,
          title: '',
              host: '',
         nameRules: [
        v => !!v || 'Display Name is required',
        v => v.length <= 10 || 'Display Name shouldnt exceed 10 characters'
      ],
       utility: [],

        name: 'Midnight Crew',
       utilities: [
          { name: 'Projector', avatar: srcs[1] },
          { name: 'Projector Display', avatar: srcs[2] },
          { name: 'Conference Call', avatar: srcs[3] },
          { name: 'Printers', avatar: srcs[4] },
          { name: 'WIFI', avatar: srcs[5] },
          { divider: true },
          
        ]
      }
    },
     methods: {

//        // removing an utility
//       remove (item) {
//         const index = this.utilities.indexOf(item.name)
//         if (index >= 0) this.utilities.splice(index, 1)
//       },
//       createRoom(){

//         // Validating room name
//           if (this.host.length <= 10 && this.host.length > 3 )
//           {
//              //Getting room data and assigning 
//           const createdRoom = {title:"", host:"",roomseat:null, status:null, utility:null, id:null};
//           createdRoom.roomseat = this.roomseat;
//           createdRoom.host = this.host;
//         createdRoom.utility = this.utility;
//         createdRoom.title = this.title;
//         createdRoom.status = true;
//         createdRoom.id = this.id++;
      
//            console.log (createdRoom );

//  //COMMITTING THE CREATEDROOM TO STORE
//           this.$store.dispatch("setrooms", createdRoom);

       
          
//            // Clearing Text Fields
          
//           this.host = '';
//           this.utility = null;
//            this.title = "";
//             this.roomseat = null;
          
              
//           this.$router.push("/home");  

//           //    this.notmessage="SUCCESS - NEW ROOM ADDED !"
//           // this.alertmodal = true;

//              this.open = false;
//           }
          
//           else {
//                this.notmessage = "Display Name Required ! Max. 10 characters"
//                 this.alertmodal = true;
//                  console.log("error")
                 
//           }
         

//         }
   }
    }

</script>


<style>
.addroomcard{
  border-radius:15px;

}
</style>