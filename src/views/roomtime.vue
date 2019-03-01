<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 class="roomtimetitle">
      <img alt="bookform" src="../assets/assets/img/modalicon/basic_elaboration_calendar_check.png">
      <h3>
        <span style="color:black; padding-bottom:10px; font-family:rubik; font-size:30px;">BOOK A MEETING</span>
      </h3> 
      <hr>
    </v-flex>
  
    <v-flex xs12 sm7 class="roomtime">
      <div class="bookform">
        <h3>
          <span
            style="color:rgb(35, 35, 35); padding-bottom:20px; font-family:rubik; font-size:30px;"
          >MEETING DETAILS</span>
        </h3>
        <hr>
        <div v-if="!errornotification">
          <h5 style="padding-bottom:35px;">
            <span
              style=" color:rgb(192, 132, 132); font-family:cardo; font-size:16px;"
            >Kindly Provide All Required Fields **</span>
          </h5>
        </div>
        <div v-else id="formnotify" class="pgn-wrapper" data-position="top-left">
          <div class="pgn push-on-sidebar-open pgn-circle">
            <div class="alert alert-danger">
              <div>
                <div class="pgn-thumbnail">
                  <div>
                    <img
                      width="40"
                      height="40"
                      style="display: inline-block;"
                      src="../assets/assets/img/error.png"
                      data-src="assets/img/profiles/avatar.jpg"
                      data-src-retina="assets/img/profiles/avatar2x.jpg"
                      alt
                    >
                  </div>
                </div>
                <div class="pgn-message">
                  <div>
                    <p class="bold">
                      <span style="font-family:cinzel; ">Kindly Verify</span>
                    </p>
                    <p>
                      <span style=" font-family:ShareTechMono; font-size:15px; ">{{errormessage}}</span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                @click="errornotification = !errornotification"
                type="button"
                class="close"
                data-dismiss="alert"
              >
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
              </button>
            </div>
          </div>
        </div>
        <!-- <v-alert v-model="errornotification" dismissible type="error" transition="scale-transition">
          <span style="color:white; font-family:cinzel; ">{{errormessage}}</span>
        </v-alert>-->
        <form role="form">
          <div class="form-group form-group-default">
            <label>Meeting Title</label>
            <input v-model="title" type="email" class="form-control" required>
          </div>

          <div class="form-group form-group-default">
            <label>Host</label>
            <input v-model="host" type="text" class="form-control" required>
          </div>

          <div class="form-group form-group-default">
            <label>Description</label>
            <input v-model="description" type="text" class="form-control">
          </div>

          <div class="form-group form-group-default">
            <label>Meeting Date</label>
            <input
              v-model="day"
              type="date"
              class="form-control"
              placeholder="Pick a date"
              required
            >
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group form-group-default">
                <label>Start Time</label>
                <input v-model="start" type="time" class="form-control" required>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group form-group-default">
                <label>End Time</label>
                <input v-model="end" type="time" class="form-control" required>
              </div>
            </div>
          </div>
          <div style="padding-bottom:30px; margin-left:0px; bottom:1%;">
            <v-btn @click="createMeeting" round color="blue" class="white--text">
              <v-icon left>add_circle_outline</v-icon>Schedule
            </v-btn>
            <v-btn @click="resetFields" round color="black" class="white--text">
              <v-icon left>cached</v-icon>Reset
            </v-btn>
          </div>
        </form>
      </div>
    </v-flex>
    <v-flex xs12 sm4 class="sideroomdisplay">
      <h3 style="margin-bottom:25px; margin-top:53px;  font-size:30px; font-family:rubik;" class>
        <span
          style="color:rgb(34, 34, 3); text-transform:capitalize; font-family:rubik; padding:5px;"
        >ROOM DETAILS</span>
      </h3>

      <Sideroom/>
    </v-flex>
  </v-layout>
</template>
<script>
import Sideroom from "../components/Rooms/sideroom.vue";
import { log } from "util";
export default {
  components: { Sideroom },
  data() {
    return {
      title: "",
      host: "",
      description: "",
      day: "",
      start: "",
      end: "",
      log: "fieldscleared",
      errornotification: false,
      errormessage: ""
    };
  },
  methods: {
    // class Meeting {
    //   constructor(title,host,description,day,start,end){

    //   }

    // },

    resetFields() {
      const tm = this;
      setTimeout(function() {
        tm.day = "";
        tm.host = "";
        tm.start = "";
        tm.title = "";
        tm.end = "";
        tm.description = "";
        tm.errornotification = false;
        console.log(tm.log);
      }, 1000);
    },

    createMeeting() {
      //creating Today's date string
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      var today = dd + "/" + mm + "/" + yyyy;
      console.log(today);

      // Validating meeting form
      if (
        this.day >= today &&
        this.start < this.end &&
        this.day &&
        this.host &&
        this.start &&
        this.title &&
        this.end &&
        this.description
      ) {
        //Creating meeting properties and assigning user input
        const createdMeeting = {
          title: "",
          host: "",
          description: "",
          day: "",
          start: "",
          end: ""
        };
        createdMeeting.day = this.day;
        createdMeeting.host = this.host;
        createdMeeting.start = this.start;
        createdMeeting.title = this.title;
        createdMeeting.end = this.end;
        createdMeeting.description = this.description;

        // Capitalizing first letter of the strings
        const capitalizeFirstLetter = function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        capitalizeFirstLetter(this.description);
        capitalizeFirstLetter(this.host);
        capitalizeFirstLetter(this.title);

        console.log(createdMeeting);

        //COMMITTING THE CREATEDMEETING TO STORE
        this.$store.dispatch("setroomlogs", createdMeeting);

        // Clearing Text Fields
        this.resetFields();

        //sweetalert
        Swal.fire("SUCCESS !", "Your Meeting has been Added !", "success");

        this.$router.push("/home");
        setTimeout(function() {
          console.log(this.$store.getters.roomlogpull);
        }, 1000);
      } else if (
        this.title &&
        this.host &&
        this.description &&
        this.day <= today &&
        this.start > this.end
      ) {
        this.errornotification = true;

        this.errormessage = "Date and Time Must be valid";
        console.log("errordate");

        //
      } else {
        this.errornotification = true;

        this.errormessage = "Title, Host, Description,  Date and Time ";
        console.log("errorname");
        setTimeout(function() {
          tm.errornotification = false;
        }, 3000);
      }
    }
  },
  mounted() {
    this.today = Date.now;
  }
};
</script>
<style>
.roomtime {
  margin-left: 7%;
  margin-top: 1%;

  border: 0.1px solid rgb(219, 217, 217);
}
.bookform {
  padding: 50px;
}
.sideroomdisplay {
  margin-top: 1%;
  padding: 2px;
  margin-left: 1%;
  border: 0.1px solid rgb(219, 217, 217);
}
.roomtimetitle{
  margin-left: 7%;
  
}
/* #formnotify {
  position: absolute;
  left: 15%;
} */
</style>
