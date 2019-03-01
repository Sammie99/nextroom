const state = {
    rooms:[ 
    { roomname: "ROOM ZEUS",roomcapacity:9, status:true, 
   },

   
  { roomname: "ROOM IRIS", roomcapacity:19,  status:false 
 },
   
  { roomname: "ROOM ARES", roomcapacity:29,  status:true,
  } ,

 { roomname: "ROOM AQUA",roomcapacity:40,  status:true
},

  ],
};

const getters = {
rooms(state){
    return state.rooms;
}
};
export default {
state,
getters,
mutations,
actions
    
}

