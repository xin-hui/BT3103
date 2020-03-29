import { Bubble } from 'vue-chartjs'
import database from "./firebase.js"


export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            //labels: "Africa",
            datasets: []
        },
        options: {
            title: {
              display: true,
              text: 'GDP, happiness and population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness",
                  min: 0
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)",
                  min:0
                }
              }],
              layout:{
                padding:{
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 10
                }
            }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('countries').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.datacollection.datasets.push(doc.data())
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems();
  }
}
