<template>
<v-container >
    <div  >
    <v-footer
    height="50px"
    class="footbar"
   elevation="20px"
   ripple
   app
    >
    <v-layout
      justify-center
      row
      wrap
    >
    
         <!-- //Center NAV modal '#66BB6A'-->
      <v-dialog v-model="dialog" width="480" class="hide-overflow" full-width >

      
       <v-btn 
        ripple
       color="black"
       flat
       slot="activator"
        x-large
       >
        <v-icon 
        
        x-large
        
        >

        apps
        </v-icon>
        </v-btn> 
        
        
        <!-- MODAL ACTIVATOR -->
      
 
     
          
      
           <v-container fluid class="popmenu">
          <v-layout class="popmenugrid " row wrap align-center >
              
                  <v-flex xs6  >
                      
                      <v-btn to="/viewrooms" @click="dialog=false"  class="popbtn meetroom pa-3" x-large block  >    
                  
        <v-icon class="pa-3" x-large color="blue"> 
                     meeting_room  </v-icon><span style="color:#039BE5">VIEW ROOMS</span>
                        

                              
                     </v-btn>
              
             
              </v-flex>
            
              <v-flex xs6 sm6>
                 <v-btn to="/periods" @click="dialog=false" class="popbtn  pa-3" x-large  block   >
                     <v-icon class="pa-2"  color="green" x-large>
                    add
              </v-icon> <span style="color:#039BE5">Add meeting </span>
              </v-btn>
                  
              </v-flex> 
              
                  <v-flex xs6 sm6>
                  <v-btn to="/viewcalendar" class="popbtn  pa-3" large  @click="dialog=false" x-large  block>
                      <v-icon class="px-1" x-large color="blue">
                     event

              </v-icon><span style="color:#039BE5">VIEW Calendar</span>
              </v-btn>
              </v-flex>
            
              <v-flex xs6 sm6>
                 <v-btn to="/home" class="popbtn  pa-3" @click="dialog=false" x-large block>
                     <v-icon class="pa-1"  color="blue" x-large>
                    home
              </v-icon><span style="color:#039BE5">HOME SCREEN</span>
              </v-btn>
                  
              </v-flex>
             
              
         
              
          </v-layout>
       
           
          
      </v-container>
  </v-dialog>
  
    
      
    
    </v-layout>
     
            
      
  </v-footer>
    </div>
  
</v-container>

</template>

<script>
export default {
    data(){
        return{
            roomseat:9,
            dialog: false,
          
        }
    },
 


 }

</script>
<style scoped>
.footbar{
  width:100%;
  /* margin-left:0px;
  margin-right:0px;
  margin-bottom:0px;   */
  position: fixed;
   left: 0;
   bottom: 0;
    background: radial-gradient(ellipse at bottom,  #c6f8c6  0%, #b8d2f0 10%);
    background-size: 100%;
    border-radius:1px;
    box-shadow: 1px 0px 1px 1px white;
 
   
} 
.meetroom{
    color:#039BE5;
     
 }
.popmenu{

    /* display:grid;
    grid-template-rows: repeat(2,50%);
    grid-auto-columns: repeat(2,50%); */
   /*  grid-template-areas: 
    "menu1 menu2"
    "menu3 menu4" ; */
}
.popbtn{
    height:150px; 

    border-radius:20px;
}

    </style>
