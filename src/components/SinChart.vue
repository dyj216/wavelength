<template>
  <div class="content">
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
    <div>
      <md-button class="md-raised md-primary" @click="getNewRandom()">Get new random</md-button>
      <md-button class="md-raised md-accent" @click="toggleRandomDataSet()">Toggle random</md-button>
      <md-button class="md-raised md-primary" @click="getNewWords()">New card</md-button>
    </div>
    <div v-if="!this.randomWave.hidden">
      <p>Wave difference: {{this.getFrequencyDifference() * 4}} %, points: {{this.getGuessResult()}}</p>
    </div>
    <div class="card-holder">
      <md-card class="md-primary">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ this.words[0] }}</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <md-card class="md-accent">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ this.words[1] }}</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import {cards} from './cards'

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
      randomFrequency: 0,
      randomWave: {},
      cards: cards,
      usedCards: [],
      words: [],
    }
  },
  mounted() {
    this.getNewRandom();
    this.getNewWords();
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
      this.randomFrequency = Math.floor(Math.random() * 26);
      this.randomWave = {
        label: 'Random wave',
        borderColor: 'rgba(0,100,200, 1)',
        backgroundColor: 'rgba(0,0,0,0)',
        data: this.getSin(this.points, this.randomFrequency),
        pointRadius: 0,
        borderWidth: 7,
        hidden: false,
      };
      this.updateChart();
    },
    getNewWords() {
      if (this.cards.length === 0) {
        this.cards = this.usedCards;
        this.shuffleCards();
        this.usedCards = [];
      }
      this.words = this.cards.pop();
      this.usedCards.push(this.words)
      return this.words;
    },
    shuffleCards() {
      this.cards.sort(() => Math.random() - 0.5);
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
    },
    getFrequencyDifference () {
      return Math.abs(this.randomFrequency - this.frequency);
    },
    getGuessResult() {
      let difference = this.getFrequencyDifference();
      if (difference < 3) {
        return 3 - difference;
      }
      else {
        return 0;
      }
    },
  }
}
</script>

<style>
.content {
  position: relative;
  width: 90vw;
  margin: auto;
}

.chart {
  border: 1px solid black;
  position: relative;
  margin: auto;
}

.slider-holder {
  margin: 30px 0;
}

.card-holder {
  margin: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;

}

.md-card {
  width: 160px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
