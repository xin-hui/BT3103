import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Covid 19 cases in the US by hour',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"aqua",
              backgroundColor:'cornflowerblue',
              fill:false
            }
          ]
          
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        //console.log(this.results);
        var i;
        for(i = 3; i < this.results.length; i++ ){
            this.chartdata.datasets[0].data.push(this.results[i].cases)
            this.chartdata.labels.push(this.results[i].timestamp.slice(11,16) +'')
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }
    
}