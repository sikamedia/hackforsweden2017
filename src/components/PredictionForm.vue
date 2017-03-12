<template>
  <div>
    <ul>
      <li>
        <select v-model="kommunSelected">
          <option v-for="option in kommunOptions" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Kummun Selected: {{ kommunSelected }}</span>
      </li>
      <select v-model="yearSelected">
        <option v-for="option in yearOptions" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Year Selected: {{ yearSelected }}</span>
      <select v-model="houseTypeSelected">
        <option v-for="option in houseOptions" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>House Selected: {{ houseTypeSelected }}</span>
      <li>
      <li>
        <button @click.prevent="predict">Predict</button>
      </li>
    </ul>
    <predictionDisplay></predictionDisplay>
  </div>
</template>

<script>
  import store from '../store'
  import predictionDisplay from './PredictionDisplay'
  export default {
    name: 'PredictionForm',
    data () {
      return {
        kommunSelected: 'Lidingö',
        kommunOptions: [
          { text: 'Lidingö', value: 'Lidingö' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        yearSelected: '2016',
        yearOptions: [
          { text: '2016', value: '2016' },
          { text: '2017', value: '2017' },
          { text: '2018', value: '2018' }
        ],
        houseTypeSelected: 'house',
        houseOptions: [
          { text: 'house', value: 'house' },
          { text: 'apartment', value: 'apartment' }
        ]

      }
    },
    methods: {
      predict: function () {
        console.log('clicked predict')
        store.commit('PREDICTION', 'sos')
      }
    },
    components: {
      predictionDisplay
    }

  }
</script>

<style>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
   h1, h2 {
     font-weight: normal;
   }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

</style>
