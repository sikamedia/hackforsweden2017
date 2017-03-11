<template>
  <div>
    <button @click.prevent="increment">+1</button>
    <button @click.prevent="decrement">-1</button>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    methods: {
      increment: function () {
        console.log('+1 pressed')
        store.commit('INCREMENT')
      },
      decrement: function () {
        console.log('-1 pressed')
        store.commit('DECREMENT')
      }
    }
  }
</script>

<style>

</style>
