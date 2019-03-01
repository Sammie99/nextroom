<template>
  <v-container>
    <v-layout
      text-xs-center
      
    >
     <v-flex>
       <Eventform />
       </v-flex>
 
    </v-layout>
  </v-container>
</template>

<script>

import Eventform from './eventform.vue';
 
  export default {
     components:{ Eventform},
    data: () => ({
     
        
    }),
    
  }
</script>

<style scoped>


</style>
