<template> 
 
       <v-container class="settingview" fluid style="font-family:cinzel;">

             
             <v-dialog persistent v-model="open" >   
               
                <v-btn slot="activator" color="green" > <span class="subheader white--text"> ADD NEW ROOM </span> </v-btn> 

 <!-- Notification alert component -->
        <!-- <transition 
      enter-active-class="animated shake" 
      leave-active-class="animated shake">
       
      </transition>   -->
   
   <Notificationslide :notmessage="notmessage" :open="alertmodal"   /> 
            


              <v-layout justify-center >
               <v-card max-width="600px" raised  class="addroomcard">

                 <v-toolbar color="success" extension-height="150" >

               <v-toolbar-title>    
<span  class="text-xs-center" style="background-size:100%; color:white; font-family:cinzel;"> ASSIGN THIS DEVICE TO ROOM </span> 
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
            v-model="fullname"
            label="Room Name"
            required
            color="green"
          >

          </v-text-field>

        </v-flex>

        <v-flex
          xs12
          sm12
        >
          <v-text-field
            v-model="roomname"
            :rules="nameRules"
            :counter="10"
            label="Display Name"
            required
            color="green"
          >
          
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout column wrap>
    <v-flex xs12 sm12>
        <v-slider v-model="roomseat" prepend-icon="event_seat" min="0" max="100" thumb-label thumb-color="green" ></v-slider>
    <span style="color:orange;"> {{roomseat}} - Seats </span>
    </v-flex>
         <v-flex xs12 sm12>
            <v-autocomplete
              v-model="utility"
              :items="utilities"
              
              chips
              color="blue-grey lighten-2"
              label="ROOM UTILITIES"
              item-text="name"
              item-value="name"
              multiple
            >
              <template
                slot="selection"
                slot-scope="data"
                 >
              
                <v-chip
                  :selected="data.selected"
                  close
                  class="chip--select-multi"
                  @input="remove(data.item)"
                >
                  <v-avatar>
                    <v-icon v-text="data.item.avatar"></v-icon>
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template
                slot="item"
                slot-scope="data"
              >
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item">

                  </v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-avatar>
                     <v-icon v-text="data.item.avatar"></v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                  </v-list-tile-content>
                </template>
              </template>
            </v-autocomplete>
          </v-flex>
     
      </v-layout>
    </v-container>
  </v-form>
  
  <v-card-actions>
        <v-btn
          color="success"
          @click="createRoom"
        >
         Assign Room
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
            
            roomseat: null,
               valid: false,
          fullname: '',
              roomname: '',
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

       // removing an utility
      remove (item) {
        const index = this.utilities.indexOf(item.name)
        if (index >= 0) this.utilities.splice(index, 1)
      },
      createRoom(){

        // Validating room name
          if (this.roomname.length <= 10 && this.roomname.length > 3 )
          {
             //Getting room data and assigning 
          const createdRoom = {fullname:"", roomname:"",roomseat:null, status:null, utility:null, id:null};
          createdRoom.roomseat = this.roomseat;
          createdRoom.roomname = this.roomname;
        createdRoom.utility = this.utility;
        createdRoom.fullname = this.fullname;
        createdRoom.status = true;
        createdRoom.id = this.id++;
      
           console.log (createdRoom );

 //COMMITTING THE CREATEDROOM TO STORE
          this.$store.dispatch("setrooms", createdRoom);

       
          
           // Clearing Text Fields
          
          this.roomname = '';
          this.utility = null;
           this.fullname = "";
            this.roomseat = null;
          
              
          this.$router.push("/home");  

          //    this.notmessage="SUCCESS - NEW ROOM ADDED !"
          // this.alertmodal = true;

             this.open = false;
          }
          
          else {
               this.notmessage = "Display Name Required ! Max. 10 characters"
                this.alertmodal = true;
                 console.log("error")
                 
          }
         

        }
   }
    }

</script>


<style>
.addroomcard{
  border-radius:15px;

}
</style>