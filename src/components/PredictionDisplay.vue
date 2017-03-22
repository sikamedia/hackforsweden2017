<template>
  <div>
    <h3> Prediction result for kommun: {{ kommun }}, year: {{ year }}, Type: {{houseType}} is  {{ price }}</h3>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    computed: {
      kommun () {
        return store.state.result.kommun
      },
      year () {
        return store.state.result.year
      },
      houseType () {
        return store.state.result.houseType
      },
      price () {
        return store.state.result.price
      }
    }
  }
</script>

<style>
</style>
