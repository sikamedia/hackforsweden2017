<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import Demo from './demo'
  export default {
    name: 'main',
    data () {
      return {
        msg: 'Real estate price analysis & prediction in Stockholm'
      }
    },
    components: {
      Demo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
