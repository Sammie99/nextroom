<template>

  <v-layout justify-center>
    <v-flex xs12 sm12>
      

      <v-card class="Fcolor">
       <v-toolbar color="#81C784" dark>
        
        <v-toolbar-title>FIND FREE ROOMS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
         <v-icon> </v-icon>
        </v-btn>
      </v-toolbar>
       <v-container
          fluid
          grid-list-md
        >
          <v-layout fill-height row wrap>
        
            <v-flex
              v-for="card in cards"
             xs4
              :key="card.title"
            >
              <v-card  >
              
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height row justify-center wrap>
                      <v-flex xs12  justify-center >
                        <h2><span  style="align-text:center; background-size:cover; padding:3px; border:3px solid #424242; box-shadow:0px 2px 2px; border-radius:10px; font-family:cinzel; background-color:black;  color:white;"
                        v-text="card.title"></span></h2>
                      </v-flex>
                      <v-flex xs12 justify-center>
                          <div  class="roomavailable" v-if="card.available">
                            AVAILABLE <br>
                         
                            <v-chip color=white ><span style= "font-weight:bolder; font-family:monospace; color:rgb(40, 160, 40);">ADD MEETING</span></v-chip>
                          </div>
                          <div class="roomengaged" v-else >
                            ENGAGED
                            <v-chip color=white ><span style= "font-weight:bolder; font-family:monospace; color:rgb(160, 40, 70);">VIEW ROOM</span></v-chip>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="blue-grey">event_seat</v-icon><v-avatar>{{card.roomseat}}</v-avatar>
                  </v-btn>
                  
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>  
<script>
  export default {
    data: () => ({

        
      cards: [
        { title: "ROOM ZEUS", roomseat:9, available:true, status:["Available", 'IN USE']},
        { title: "ROOM IRIS",  roomseat:19, available:false, status:["Available", 'IN USE'] },
        { title: "ROOM ARES",roomseat:29, available:false, status:["Available", 'IN USE']  } ,
       { title: "ROOM AQUA",roomseat:40, available:true, status:["Available", 'IN USE']}
      ]
    }),
    created(){
    //   console.log('see me ');
    //  const self = this ;
    //   setTimeout (function(){
    //    if(!self.room.available) {
    //        self.available = null;
    //         console.log(this.available + "hi");
    //       }  
    //   },5000);
    },
    mounted(){
      setTimeout(function(){
         console.log('here')
         
      }, 5000)
     
     
    },
    computed:{
    rooms(){

      return this.$store.getters.localroom[0];
    }
  }
  }
</script>
<style>
h3{
    text-transform: capitalize; 
}
.redblock{
    border:2px solid tomato;
}
.greenblock{
    border:2px solid green;
    font-family:"cinzel";


}

</style>
