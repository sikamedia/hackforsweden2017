<template>
  <div class="main">
    <h1>{{ msg }}</h1>


    <ul>
      <li><a href="https://youtu.be/yAIg6c0ug1k" target="_blank">Idea</a></li>
      <li><a href="/about">About us</a></li>
      <li><a href="/demo" target="_blank">Demo</a></li>
    </ul>
  </div>
</template>

<script>
  import Demo from './demo.vue'
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
