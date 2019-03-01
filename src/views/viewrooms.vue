<template>
<v-container fluid  class="gogets">
  <v-layout row wrap  >
  
     
     
    <Viewroom />
      
  </v-layout>
  <v-divider></v-divider>
<v-layout row wrap>

</v-layout>
</v-container>
  
</template>
<script>
import Viewroom from '../components/viewrooms.vue';

export default {
  components:{
    Viewroom
  },
  
}
</script>

<style>
.gogets{
    background: radial-gradient(ellipse at bottom,  #fdfdfd  0%, rgb(255, 255, 255) 70%);
    background-size: 100%;
    border-radius:20px;
    box-shadow:1px 1px 10px 0px;
    margin-top: -6%;
}

</style>

