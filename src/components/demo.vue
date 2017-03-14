<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <PredictionForm></PredictionForm>
  </div>
</template>

<script>
  import PredictionForm from './PredictionForm'
  export default {
    name: 'demo',
    data () {
      return {
        msg: 'Demo'
      }
    },
    components: {
      PredictionForm
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
