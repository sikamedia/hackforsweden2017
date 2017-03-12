<template>
  <div>
    <h3> Prediction result is {{ kummun }}</h3>
  </div>
</template>

<script>
  //  import eventHub from './EventHub'
  import store from '../store'
  export default {
    computed: {
      kummun () {
        return store.state.result.kommun
      }
    }
  }
</script>

<style>
</style>
