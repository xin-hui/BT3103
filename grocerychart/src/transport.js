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
              label: 'Average count of MRT ridership in Singapore',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"turquoise",
              backgroundColor:'teal',
              fill:false
            },
            {
                label: 'Average count of LRT ridership in Singapore',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"mediumorchid",
                backgroundColor:'violet',
                fill:false
            },
            {
                label: 'Average count of Bus ridership in Singapore',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"red",
                backgroundColor:'lightcoral',
                fill:false
            },
            {
                label: 'Average count of Taxi ridership in Singapore',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"coral",
                backgroundColor:'yellow',
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
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        console.log(this.results);
        var i;
        for(i = 0; i < this.results.length; i++ ){
            if (this.results[i].type_of_public_transport == "MRT") {
                this.chartdata.datasets[0].data.push(this.results[i].average_ridership)
                if (!this.chartdata.labels.includes(this.results[i].year)) {
                    this.chartdata.labels.push(this.results[i].year+'')
                }
            } else if (this.results[i].type_of_public_transport == "LRT") {
                this.chartdata.datasets[1].data.push(this.results[i].average_ridership)
                if (!this.chartdata.labels.includes(this.results[i].year)) {
                    this.chartdata.labels.push(this.results[i].year+'')
                }
            } else if (this.results[i].type_of_public_transport == "Bus") {
                this.chartdata.datasets[2].data.push(this.results[i].average_ridership)
                if (!this.chartdata.labels.includes(this.results[i].year)) {
                    this.chartdata.labels.push(this.results[i].year+'')
                }
            } else if (this.results[i].type_of_public_transport == "Taxi") {
                this.chartdata.datasets[3].data.push(this.results[i].average_ridership)
                if (!this.chartdata.labels.includes(this.results[i].year)) {
                    this.chartdata.labels.push(this.results[i].year+'')
                }
            }
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }
    
}