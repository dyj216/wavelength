<template>
  <div class="small">
    <div class="chart">
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </div>
    <vue-slider
      @change="updateData()"
      v-model="frequency"
      :min="0"
      :max="25"
      :interval="1"
      :marks="false"
      :tooltip-placement="'bottom'"
      :tooltip-formatter="formatter"
    ></vue-slider>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  components: {
    LineChart,
    VueSlider,
  },
  data () {
    return {
      datacollection: {},
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }],
        },
      },
      pointCount: 1000,
      frequency: 0,
      formatter: '{value} Hz',
    }
  },
  mounted () {
    this.updateData()
  },
  methods: {
    updateData () {
      this.datacollection = {
        labels: this.getPoints(this.pointCount),
        datasets: [
          {
            label: 'Data One',
            borderColor: '#f87979',
            backgroundColor: 'rgba(0,0,0,0)',
            data: this.getSin(this.getPoints(this.pointCount), this.frequency),
            pointRadius: 1,
          }
        ]
      }
    },
    getSin(points, freq) {
      let d = [];
      for (let point of points) {
        d.push(Math.sin(freq * point));
      }
      return d;
    },
    getPoints(count) {
      let a = [];
      for (let i=0;i<count;i++) {
        a.push(Math.PI * 2 / count * i);
      }
      a.push(Math.PI *2 );
      console.log(a.length);
      return a;
    }
  }
}
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }

  .chart {
    border: 1px solid black;
  }
</style>
