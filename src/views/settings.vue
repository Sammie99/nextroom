<template>
    <v-container class="settingview" fluid>
       <v-layout column wrap>
            <transition 
      enter-active-class="animated bounceInUp" 
      leave-active-class="animated fadeOut">
      <Notificationslide :notmessage="notmessage" :open="alertmodal"></Notificationslide> 
      </transition>
             
           
<v-flex xs8 sm8>
                <v-card elevation="10" color="blue-grey">
                <v-card-title text-xs-center color="#000000">
                    <div class="title " style='color:white;'>
                   OPTIONS  
                    </div>
                </v-card-title>
                <v-divider >

                </v-divider>
                
                <v-card elevation="7" class="pa-2">
                <div style=" max-width:250px; border-radius:10px; padding:5px; font-family:rubik;" >
                    <v-card color="white"  >
                    <v-card-title  >
                    <v-icon>arrow_forward_ios</v-icon>  <v-btn  color="grey" small  round> ADD NEW ROOMS </v-btn>     
                    </v-card-title>
                    <v-card-actions >
                      <Addroom /> 
                  </v-card-actions>
                </v-card>
                </div>
                
               <v-dialog persistent v-model="open" >   
                 <v-btn slot="activator" color="grey" small  round> ADD NEW ROOMS </v-btn> 
      
               <template>
                  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="+"><span style="color:grey; font-family:rubik;"> CREATE ROOM</span></v-stepper-step>

      <v-divider></v-divider>
  <transition 
      enter-active-class="animated bounceInUp" 
      leave-active-class="animated fadeOut">
      
      </transition>

      
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="+">
        <v-card
          class="mb-5"
          color="white"
          height="200px"
        >
        <template>
  <v-form v-model="valid">
    <v-container>
      <v-layout row>
        <v-flex
          xs12
          sm6
        >
          <v-text-field
            v-model="fullname"
            label="Room name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          sm6
        >
          <v-text-field
            v-model="roomname"
            :rules="nameRules"
            :counter="10"
            label="Display name"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
    <v-flex xs12 sm12>
        <v-slider v-model="roomseat" prepend-icon="event_seat" min="0" max="100" thumb-label thumb-color="green" ></v-slider>
    {{roomseat}}
    </v-flex>
         <v-flex xs12 sm12>
            <v-autocomplete
              v-model="utility"
              :items="utilities"
              box
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
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
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
</template>
        
 
</v-card>

        <v-btn
          color="success"
          @click="createRoom"
        >
          Create Room
        </v-btn>

        <v-btn color="danger"  flat @click="open = false ">Cancel</v-btn>
      </v-stepper-content>
      
    </v-stepper-items>
  </v-stepper>

                       
                 
               </template>
               </v-dialog>
                
             
               
                
                </v-card>
             
            </v-card> 
            </v-flex>
             <!-- <Eventform /> </v-layout>-->
           
            
         <v-layout>
<v-flex xs12 sm6>
<h2>Hello from here</h2>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel necessitatibus iste quibusdam autem eos reprehenderit 
  dolorum debitis eum sit reiciendis eveniet molestias tempora quis, hic, nesciunt ea illo nostrum perferendis.
</p>
</v-flex>
<v-flex xs12 sm6>
<img src="../../public/img/booking.svg" alt="hi" max-size="100px">
 </v-flex>
</v-layout>
         </v-layout>
        </v-container>
</template>
<script>
import Eventform from '../components/eventform';

import Notificationslide from '../components/notificationslide';

// import Addroom from '../components/settings/addroom.vue';
export default {
    components:{
        Eventform,Notificationslide
    },
    data(){
         const srcs = {
        1: 'scanner',
        2: 'cast',
        3: 'videocam',
        4: 'speaker',
        5: 'signal_wifi_3_bar'
      }
        return {
            notmessage:"",
            id:null,
            alertmodal:false,
            open: false,
            e1:0,
            roomseat: 0,
               valid: false,
          fullname: '',
              roomname: '',
         nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
       utility: [],

        name: 'Midnight Crew',
       utilities: [
          { name: 'Projector', avatar: srcs[1] },
          { name: 'Projector Display', avatar: srcs[2] },
          { name: 'Conference Call', avatar: srcs[3] },
          { name: 'Audio Equipment', avatar: srcs[4] },
          { name: 'WIFI', avatar: srcs[5] },
          { divider: true },
          
        ]
      }
    },
     methods: {
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
      createRoom(){
          if(this.roomname.length <= 10  ){
             //Getting room data and assigning
          const createdRoom = {fullname:"", roomname:"",roomseat:null, status:null, utility:null,};
          createdRoom.roomseat = this.roomseat;
          createdRoom.roomname = this.roomname;
        createdRoom.utility = this.utility;
        createdRoom.fullname = this.fullname;
        createdRoom.status = true;
      
           console.log (createdRoom );
           // Clearing Text Fields
          
          this.roomname ='';
           utility = null;
           fullname="";
             this.open = false;
             this.notmessage="SUCCESS - NEW ROOM ADDED !"
          this.alertmodal = true;
         
          //COMMITTING THE FORMDATA TO STORE
          this.$store.dispatch("setrooms", createdRoom)
          }
          else{
               this.notmessage = "Display Name should be 10 characters"
                this.alertmodal = true;
                 console.log("error")
          }
         

        }
   
    }
}
</script>


<style>
.settingview{
    margin-top:-3%;

}
.settingscard{
    border:1px solid rgb(221, 215, 215);
}
</style>
