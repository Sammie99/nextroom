<template>
<v-container>
<!-- <v-layout >  -->
  <div>
    <div class="Add container">
      
      <form @submit="addContact" method="post">
    
     
           <div class="panel panel-primary">
  <div class="panel-heading">  
    <div class="panel-title" style="height:58px;">
             <h3 style="font-family:;">Meeting Details</h3>
            <input type="text" class="form-control" placeholder="Meeting Title" v-model="title" height="35px">
          </div>
  </div>

  <div class="panel-body row">
      
      <div class="formpad">
          <div class="col-md-3">
    <span><i class="ti-user"></i></span> 
      </div>
      <div class="col-md-8">
   <input type="text" class="form-control col-md-8" placeholder="Booked By" v-model="booker">
  </div> 
      </div>
   <div class="formpad">
        <div class="col-md-3">
    <span><i class="ti-calendar"></i></span> 
      </div>
      <div class="col-md-8">
   <input type="text" class="form-control col-md-8" placeholder="Start date" v-model='start'>
  </div> 
        </div>  
      <div class="formpad">
          <div class="col-md-3">
    <span><i class="ti-calendar"></i></span> 
      </div>
      <div class="col-md-8">
   <input type="text" class="form-control col-md-8" placeholder="End Date" v-model="End">
  </div>    
          </div>
   <div class="formpad">
           <div class="col-md-3">
    <span><i class="ti-info-alt"></i></span> 
      </div>
      <div class="col-md-8">
   <textarea type="text" col="10" rows="4" class="form-control col-md-8" placeholder="Description" v-model="description"> </textarea>
      </div>
       </div> 


        </div>
        <div class="formpad" >
  <button type="submit" @click="addContact" class="btn btn-info btn-md">
          <span class="ti-pin-alt"></span>
         Schedule
        </button>
        </div>
        </div>
         
        
      </form>
      
    </div>
    
  </div>
  <!-- </v-layout> -->
</v-container>
</template>
<script>
 import Calendarpicker from '../components/calendarpicker';
export default {
  name: "Eventform",
 components:{Calendarpicker},
  data() {
    return {
      title: "",
      booker: "",
      start: "",
      end:"",
      description: "",
    
    };
  },

  methods: {
    addContact(e) {
      e.preventDefault();
      if (!this.title || !this.service || !this.description) {
        console.log("fill all req details");
      } else {
        let contactform = {
          title: this.title,
          booker: this.booker,
          start: this.start,
          description: this.description,
          end: this.end,
         
        };

       
       

//         this.$http
//           .post("https://test-364d7.firebaseio.com/testdata", this.title)
//           .then(res => {
//             this.$router.push({ path: "/contact" });
//           })
//           .catch(err => {
//             console.log(err + "hello");
//           });
//         console.log(contactform);
//       }
//     }
//   },
//   created(){
//       this.$http.get("https://test-364d7.firebaseio.com/testdata.json")
//       .then(res => {
//           console.log(res)
          
//       })
//       .catch( err =>{ console.log(err + "hi")})

// console.log(contactform)
 
} }}
      }
</script>
<style scoped>
.formpad {
  padding: 25px;
  
 
}

.mtbtnPP {
    margin-top:5px;
}
.panel-primary{
    background-color:#dbe9e5;
}
.panel-heading{
    background-color:#0b81a5;
}
/* .Add {
  /* position: absolute;
  left: 0px;
  top: 350px; */
  
   /* width: 30% !important;  */
  /* margin-left: 0px; */
  /* height:40%; */
 
</style>
