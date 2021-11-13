<template>
  <div class="small">
    <div class="chart">
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </div>
    <div class="slider-holder">
      <vue-slider
          @change="updateChart()"
          v-model="frequency"
          :min="0"
          :max="25"
          :interval="1"
          :marks="false"
          :tooltip-placement="'bottom'"
          :tooltip-formatter="formatter"
      ></vue-slider>
    </div>
    <md-button class="md-raised md-primary" @click="getNewRandom()">Get new random chart</md-button>
    <md-button class="md-raised md-accent" @click="toggleRandomDataSet()">Toggle random</md-button>
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
  data() {
    return {
      datacollection: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
        tooltips: {
          enabled: false
        }
      },
      points: this.getPoints(1000),
      frequency: 0,
      formatter: v => v * 4 + ' %',
      randomWave: {}
    }
  },
  mounted() {
    this.randomWave = {
      label: 'Random wave',
      borderColor: 'rgba(0,100,200, 1)',
      backgroundColor: 'rgba(0,0,0,0)',
      data: this.getSin(this.points, Math.floor(Math.random() * 26)),
      pointRadius: 0,
      borderWidth: 7,
    };
    this.updateChart();
  },
  methods: {
    updateChart() {
      this.datacollection =
          {
            labels: this.points,
            datasets: [
              {
                label: 'Guessed wave',
                borderColor: '#f87979',
                backgroundColor: 'rgba(0,0,0,0)',
                data: this.getSin(this.points, this.frequency),
                pointRadius: 0,
                borderWidth: 3,
              },
              this.randomWave
            ]
          }
    },
    getNewRandom() {
      this.randomWave = {
        label: 'Random wave',
        borderColor: 'rgba(0,100,200, 1)',
        backgroundColor: 'rgba(0,0,0,0)',
        data: this.getSin(this.points, Math.floor(Math.random() * 26)),
        pointRadius: 0,
        borderWidth: 7,
        hidden: false,
      };
      this.updateChart();
    },
    toggleRandomDataSet() {
      this.randomWave.hidden = !this.randomWave.hidden;
      this.updateChart();
    },
    getSin(points, freq) {
      let d = [];
      for (let point of points) {
        d.push(Math.sin(freq * point / 2));
      }
      return d;
    },
    getPoints(count) {
      let a = [];
      for (let i = 0; i < count; i++) {
        a.push(Math.PI * 2 / count * i);
      }
      a.push(Math.PI * 2);
      return a;
    }
  }
}
</script>

<style>
.small {
  position: relative;
  width: 40vw;
  margin: auto;
}

.chart {
  border: 1px solid black;
  position: relative;
  width: 40vw;
  margin: auto;
}

.slider-holder {
  margin: 30px 0;
}
</style>
