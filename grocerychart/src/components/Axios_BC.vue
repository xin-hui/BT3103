<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id = "chart">
            <covid></covid>

        </div>
        <div id = "chart">
            <transport></transport>

        </div>
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import covid from '../covid.js'
import transport from '../transport.js'

export default {
    components:{
        axiosExample,PSIIndex,covid,transport
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>