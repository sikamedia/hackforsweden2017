<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <CitySelection></CitySelection>

    <footer>
    <ul>
      <li><a href="https://youtu.be/yAIg6c0ug1k" target="_blank">Idea</a></li>
      <li><a href="/about">About us</a></li>
      <li><a>Demo</a></li>
    </ul>
    </footer>
  </div>
</template>

<script>
  import CitySelection from './PredictionForm'
  export default {
    name: 'demo',
    data () {
      return {
        msg: 'Demo'
      }
    },
    components: {
      CitySelection
    }
  }
</script>

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
