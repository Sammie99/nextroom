<template>
    <v-container v-if="open"  class="here" justify-end >
        <v-layout  align-end row> 
            <v-flex>
                <div id="notification" >

                   <span class="text-xs-center"> {{notmessage}} </span>
             <!-- :style="{color:alerTextColor, backgroundColor:alertBgColor }" -->
                </div>
            </v-flex>

          
        </v-layout>

    </v-container>
</template>
<script>
export default {
    props:["open" , "notmessage" ],
data(){
    return{
        alert:false,
    }
}
 

}
</script>
<style scoped>
.here{
    position:relative;
    top:16%;
    right:0px;  
    
    background-color: rgb(214, 245, 210);
    border:1px solid rgb(164, 231, 173);
     height: 4px;
    border-radius :10px;
    font-family:"cairo";
    font-size:15px;
    color:red;
    max-width:370px;
}
</style>

