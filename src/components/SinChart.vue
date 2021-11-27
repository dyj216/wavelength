<template>
  <div class="content">
    <md-dialog :md-active.sync="dialog">
      <md-dialog-title>Settings</md-dialog-title>
      <md-dialog-content>
        <md-checkbox v-model="advancedWords">Use advanced words too</md-checkbox>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-button class="md-icon-button settings-button" @click="openDialog()">
      <md-icon>settings</md-icon>
    </md-button>
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
          :tooltip="'always'"
          :tooltip-placement="'top'"
          :tooltip-formatter="formatter"
          :process="sliderProcess"
      ></vue-slider>
    </div>
    <div>
      <md-button class="md-raised md-primary" @click="getNewRandom()">Get new random</md-button>
      <md-button class="md-raised md-accent" @click="toggleRandomDataSet()">Toggle random</md-button>
      <md-button class="md-raised md-primary" @click="getNewWords()">New card</md-button>
    </div>
    <div v-if="!this.randomWave.hidden">
      <p>Random wave: {{100 - this.randomFrequency * 4}}% / {{this.randomFrequency * 4}}%, difference: {{this.getFrequencyDifference() * 4}} %, points: {{this.getGuessResult()}}</p>
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
import {cards, advancedCards} from './cards'

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
      formatter: v => (100 - v * 4) + '% / ' + v * 4 + '%',
      randomFrequency: 0,
      randomWave: {},
      cards: [],
      usedCards: [],
      words: [],
      dialog: false,
      advancedWords: false,
      sliderProcess: dotsPos => [
          [0, dotsPos[0], {backgroundColor: '#ff5252'}],
          [dotsPos[0], 100, {backgroundColor: '#448aff'}],
      ],
    }
  },
  mounted() {
    if (localStorage.getItem("advancedWords") === "true") {
      this.advancedWords = localStorage.advancedWords === "true";
    }
    this.cards = this.advancedWords ? cards.concat(advancedCards) : cards;
    this.shuffleCards();
    this.getNewWords();
    this.getNewRandom();
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
    openDialog() {
      if (localStorage.getItem("advancedWords")) {
        this.advancedWords = localStorage.advancedWords === "true";
      }
      this.dialog = true;
    },
    closeDialog() {
      if (this.advancedWords !== (localStorage.advancedWords === "true")) {
        this.cards = this.advancedWords ? cards.concat(advancedCards) : [...cards];
        this.shuffleCards();
        this.usedCards = [];
        this.getNewWords();
      }
      localStorage.advancedWords = this.advancedWords;
      this.dialog = false;
    }
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
  margin: 0;
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
  width: 240px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.settings-button {
  position: absolute;
  top: -48px;
  right: 0;
  opacity: 0.5;
}
</style>
