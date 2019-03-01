<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-btn  @click.stop="drawer = !drawer">
        open
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
     permanent
      hide-overlay
      
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-icon color="grey">stars </v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="headline"><span style="font-family:cinzel; color:white;">Favorites</span></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile 
          v-for="item in items"
          :key="item.title"
         
        >
          <v-list-tile-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Book A Meeting', icon: 'add' },
          { title: 'View Calendar', icon: 'event' },
          { title: 'Next Menu', icon: 'view_array' }
        ],
        mini: true,
        right:true
      }
    },

    computed:{
        room(){
          return this.$store.getters.localroom[0]
        }
    }
  }
</script>
<style>
v-list-style:hover{
text-decoration-line: none;
}
</style>
