<template>

  <v-layout justify-center>
    <v-flex xs12 sm12>
      

      <v-card class="Fcolor">
       <v-toolbar color="#81C784" dark>
        
        <v-toolbar-title>CURRENT ROOM</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
         <v-icon> i </v-icon>
        </v-btn>
      </v-toolbar>
       <v-container
          fluid
          grid-list-md
        >
        
          <v-layout fill-height justify-center align-center row wrap>
            {{ localroom.roomname }} 
            <v-flex
              v-for="room in localroom"
             xs4
              :key="room.roomname"
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
                        v-text="room.roomname"></span></h2>
                      </v-flex>
                      <v-flex xs12 justify-center>
                          <div  class="roomavailable" v-if="room.status">
                            AVAILABLE <br>
                         
                         <router-link to="/periods" >   <v-chip  color=white ><span style= "font-weight:bolder; font-family:monospace; color:rgb(40, 160, 40);">
                              ADD MEETING</span></v-chip>
                              </router-link>
                          </div>
                          <div class="roomengaged" v-else >
                            ENGAGED
                            <v-chip  color=white ><span style= "font-weight:bolder; font-family:monospace; color:rgb(160, 40, 70);">
                              VIEW ROOM</span></v-chip>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="blue-grey">event_seat</v-icon><v-avatar>{{room.roomseat}}</v-avatar>
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

        available:true
    }),
    
   mounted(){
      setTimeout(function(){
         console.log('heres')
      }, 5000)
     
     console.log()

     
     
    },
    computed:{
    rooms(){
      return this.$store.getters.room;
    },
    localroom(){
        return this.$store.getters.localroom[0];
        console.log("localroom")
    }
  }
  }
</script>
<style scoped>
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
