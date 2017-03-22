<template>
  <div>
    <form id="predictionForm">
      <ul>
        <li>
          <select v-model="kommunSelected">
            <option v-for="option in kommunOptions" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <span>Kommun Selected: {{ kommunSelected }}</span>
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
          <b-button type="button" size='sm' variant="primary" v-on:click="predict">Predict</b-button>
        </li>
      </ul>
      <predictionDisplay></predictionDisplay>
    </form>
  </div>
</template>

<script>
  import store from '../store'
  import predictionDisplay from './PredictionDisplay'
  import AWSServices from '@/lib/aws'
  const aws = new AWSServices('ml-CI66XJDYBUQ', {
    CoApplication: '0',
    AppTypeId: '2',
    Age: '37',
    Gender: 'F',
    EmploymentTypeId: '1',
    MonthsEmployed: '129',
    MaritalStatusId: '2',
    Children: '2',
    MonthlyIncome: '25417',
    ResidenceTypeId: '3',
    Rent: '7100',
    AnnualIncome: '295100',
    LostId: '0',
    TradeBan: '0',
    AmountApplied: '14000',
    LoanAmount: '0',
    MonthlyMortgageCost: '0',
    MonthlyLoanCost: '0',
    monthlyRemained: '2967',
    paymentRemark: '0',
    previousEnquiry: '1'
  })
  export default {
    name: 'PredictionForm',
    data () {
      return {
        kommunSelected: 'Lidingö',
        kommunOptions: [
          {text: 'Lidingö', value: 'Lidingö'},
          {text: 'Two', value: 'B'},
          {text: 'Three', value: 'C'}
        ],
        yearSelected: '2016',
        yearOptions: [
          {text: '2016', value: '2016'},
          {text: '2017', value: '2017'},
          {text: '2018', value: '2018'}
        ],
        houseTypeSelected: 'house',
        houseOptions: [
          {text: 'house', value: 'house'},
          {text: 'apartment', value: 'apartment'}
        ]

      }
    },
    methods: {
      predict: function (e) {
        console.log(e)
        console.log(aws.binaryPredictionResult())
        store.commit('PREDICTION', {'kommun': this.kommunSelected, 'year': this.yearSelected, 'houseType': this.houseTypeSelected})
      }
    },
    components: {
      predictionDisplay
    }
  }
</script>

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

