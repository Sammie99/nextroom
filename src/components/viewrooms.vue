<template>
<v-container>
<v-layout wrap >
            <v-flex>
             <Rooms />
                </v-flex>
 
    <Room />     
 </v-layout>   
       
   
</v-container>
    
</template>
<script>
import Room from './Rooms/room.vue';
import Rooms from './Rooms/rooms.vue';
export default {
    components:{
        Room,Rooms
    }
}
</script>

