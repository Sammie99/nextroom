<template>
  <div>
    <v-layout class="cale" column justify-space-around >
        <v-flex >
            <v-date-picker color="green lighten-1" v-model="picker" :events="events" :landscape="landscape" :reactive="reactive">
        </v-date-picker>
        </v-flex>
        <v-flex>
            <template>
  <div>
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      class="mt-3"
      min="2016-06-15"
      max="2018-03-20"
    ></v-date-picker>
  </div>
</template>
            </v-flex>







      
    </v-layout>

{{picker}}
    
  </div>
</template>
<style scoped>
.cale{
    /* margin-top:200px; */
    
}
</style>
<script>
  export default {
    data () {
      return {
        date: '2018-03-02',
        picker: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: true,
        events: [ new Date().toISOString().substr(0, 10), new Date().toISOString().substr(0, 10) ]
      }
    },
    methods: {
        
      allowedDates: val => parseInt(val.split('-')[1])
    
    }
  }
</script>