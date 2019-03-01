<template>
<v-container fluid >
<v-layout align-center justify-start row fill-height>
  <v-flex  md3>
   <calendarpicker />
 </v-flex>
 <v-flex xs5 md7>
  <HelloWorld />
 </v-flex>
  </v-layout>
   </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import Calendarpicker from '../components/calendarpicker';
  import EventForms from '../components/eventforms';
  
  export default {
    components: {
      HelloWorld, Calendarpicker, EventForms
    }
  }
</script>
