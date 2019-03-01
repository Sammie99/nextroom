<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
<p class="time">{{ times }}</p>  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      date: "feb",
      countto: new Date(this.date)
    };
  },
  computed: {
    times: function() {
      // date counting down to

      var countDownDate = new Date("feb 20, 2019 12:59:25").getTime();

      //  count down every 1 second
      var x = setInterval(function() {
        // todays date and time
        var now = new Date().getTime();

        // distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        return (this.time = hours + "h " + minutes + "m " + seconds + "s ");

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          this.time = "Now";
        }
      }, 1000);
      console.log(this.time);
      console.log(distance);
      return `Free in ${time}`;
    }
  },
  methods:{

  },
  created() {
    //         // date counting down to
    //     var countDownDate = new Date("feb 20, 2019 12:59:25").getTime();
    // //  count down every 1 second
    //     var x = setInterval(function() {
    //   // todays date and time
    //   var now = new Date().getTime();
    //   // distance between now and the count down date
    //   var distance = countDownDate - now;
    //   // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //   // Output the result in an element with id="demo"
    //   return this.time = hours + "h "
    //   + minutes + "m " + seconds + "s ";
    //   // If the count down is over, write some text
    //   if (distance < 0) {
    //     clearInterval(x);
    //    this.time = "Now";
    //   }
    // }, 1000);
  }
};
</script>
<style scoped>
#clock {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),
    0 0 20px rgba(247, 218, 114, 0.726);
}
.time {
  letter-spacing: 0.05em;
  font-size: 30px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
</style>
