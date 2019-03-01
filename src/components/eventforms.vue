
<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn 
        absolute
        bottom
        color="green"
        right
        fab slot="activator" dark>
         <v-icon> add </v-icon>


         </v-btn>
      <v-card color="grey">
        <v-card-title class=" px-5  text-xs-center" >
          <p class=" Fcolor px-5 headline "> MEETING DETAILS</p>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="title" label="TITLE" required hint=" Meeting Title " ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="booker" label="BOOKED BY" hint="- Individual - Unit/Dept"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  label="Start Date"
                
                  persistent-hint
                  required
                ></v-text-field>

              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  label="End Date*"
                 
                  required
                ></v-text-field>
                
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="description" label="DESCRIPTION*" required></v-text-field>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-select
                  :items="['Blue', 'Red', 'Green', 'Yellow']"
                  label="Event Color"
                  v-model="eventcolor"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['0-9', '10-19', '20+']"
                  label="No of Attendees"
                  v-model="attendees"
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn center color="red darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn center color="green darken-1" flat @click="booknow" >Shedule</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
      name:"EventForms",
    data: () => ({
      dialog: false,
      title:null,
      booker:null,
      description:null,
      start:null,
      end:null,
      eventcolor:null,
      attendees:null


    }),
    methods:{
      booknow(){
        
          if(confirm ("Are you sure ?")){
            alert("Your Meeting has been Scheduled")
          }
        
      }

    }
  }
</script>
<style>

</style>
