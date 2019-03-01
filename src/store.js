import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opendrawer:'',
    // All rooms and time
    rooms:[],
      room:[],
    // Global roomtime
   roomtime:[{log1:true},{log2:true},{log3:true},{log4:true},{log5:true},{log6:true},{log7:true},{log8:true},{log9:true},
    {log10:true},{log11:true},{log12:true}],
    roomlogtest:{},
    roomlog:[],
    roomlogpull:[]
  },
  mutations: {
    setdate(state, payload){
      state.date = payload
    },
    setrooms(state, payload){
      //ADDING NEW ROOM TO STORE
      state.room.push(payload) ;
       
      console.log(state.room);

      //SAVING ROOM TO LOCAL STORAGE
    
        localStorage.setItem("room", JSON.stringify(state.room));

        // RETRIEVING ROOM FROM localStorage
    //  state.rooms = localStorage.getItem("rooms");
      
    },
    getrooms(state,payload){
      state.rooms.push(payload)
    //  let currentroom = null;
    // currentroom = JSON.parse(localStorage.getItem("room"));
    //   console.log(currentroom);
      
    //   state.rooms.push(currentroom);
    //   console.log(room);
      
    },

  
  setroomlogs(state, payload){
    //ADDING NEW LOG TO STORE FROM MEETING CREATION FORM @ /ROOMTIME
    state.roomlog.push(payload) ;
     
    console.log(state.roomlog);

    //SAVING LOG TO LOCAL STORAGE
  
      localStorage.setItem("roomlogs", JSON.stringify(state.roomlog));
  },
  getroomlogs(state,payload){
    //RETRIEVED  MEETING AND PUSHED TO STORE
    state.roomlogpull.push(payload)
  //   let currentroom = null;
  //  currentroom = JSON.parse(localStorage.getItem("roomlogs"));
  //   console.log(currentroom);
    
  //    state.rooms.push(currentroom);
  //    console.log(roomlogspull);
    
  }
},
  actions: {
    setrooms({commit}, payload){
      commit("setrooms",payload)
    },
    getrooms({commit}, payload){
     commit('getrooms',payload) ;
    },
    setroomlogs({commit}, payload){
      commit('setroomlogs', payload)
    },
    getroomlogs({commit}, payload){
      commit('getroomlogs', payload)
    }
  },
  getters:{
    roomlogpull(state){
      return state.roomlogpull
    },
    room(state){
      return state.room
    },
    localroom(state){
      return state.rooms
    },
    roomtime(state){
    return  state.roomtime
    }
  }
});
