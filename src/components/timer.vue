<template>
    <div>
<div id="clock">
    <p class="time">{{ topbartime }} </p>
     <p class="date">{{ topbardate }}</p>
      <p class="test">{{ test }}</p>
    </div>
        </div>
</template>
<script>
export default {

    data() {
        return {
         topbartime:' ',
        topbardate:' ' ,
     test:""
        
        }
        
    },
    methods:{
        // updatetime(){ 
        //    this = this
        //      const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        //      const month= [ 'January', 'February','March', 'April' ,'May','June' ,'July', 'August' ,'September', 'October', 'November' ,'December']
        //        const cd = new Date();
        //  this.test= cd.toISOString().slice(11,23);
        // this.topbartime = cd.getUTCHours()+1 + ":" + cd.getUTCMinutes();
        //this.topbardate =  month[cd.getUTCMonth()] + " " + cd.getUTCDate() + "," + cd.getUTCFullYear() + ' ' + week[cd.getUTCDay()];
        // console.log(this.topbardate)}
                

    },
  created() { 
         const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
             const month= [ 'January', 'February','March', 'April' ,'May','June' ,'July', 'August' ,'September', 'October', 'November' ,'December']
               const cd = new Date();
    //  this.test  = cd.toISOString().slice(11,20);
      setInterval(function(){
          this.topbartime = cd.getUTCHours()+1 + ":" + cd.getUTCMinutes() + ":" + cd.getUTCSeconds();
     
       this.topbardate =  month[cd.getUTCMonth()] + " " + cd.getUTCDate() + "," + cd.getUTCFullYear() + ' ' + week[cd.getUTCDay()];
   
      },1000)
       this.topbartime = cd.getUTCHours()+1 + ":" + cd.getUTCMinutes()  
     
       this.topbardate =  month[cd.getUTCMonth()] + " " + cd.getUTCDate() + "," + cd.getUTCFullYear() + ' ' + week[cd.getUTCDay()];
   
     
        console.log(this.topbartime + "outside")
    
      
    //  setInterval(function(){
       
    //          const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    //          const month= [ 'January', 'February','March', 'April' ,'May','June' ,'July', 'August' ,'September', 'October', 'November' ,'December']
    //            const cd = new Date();
    //  return    this.test  = cd.toISOString().slice(11,23);
    //   return  this.topbartime = cd.getUTCHours()+1 + ":" + cd.getUTCMinutes() + ":" + cd.getUTCSeconds();
    //    this.topbardate =  month[cd.getUTCMonth()] + " " + cd.getUTCDate() + "," + cd.getUTCFullYear() + ' ' + week[cd.getUTCDay()];
    //      console.log(this.topbardate)
            
    //  },1000);
      
  
       
            
        
   
    
    },
    // computed:{
    //     topbartimes(){
    //         setInterval(updatetime(),1000)
    //     }
    // }
};







</script>

<style>
p {
    margin: 0;
    padding: 0;
}
#clock {
    font-family: 'Share Tech Mono', "monospace";
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    box-shadow: 0px -10px 6px rgb(186, 233, 186);
    border-radius:30px;
}
    .time {
        letter-spacing: 0.05em;
        font-size: 50px;
        padding: 5px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
</style>

