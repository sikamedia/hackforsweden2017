<template>
  <div>
    <h3>Count is {{ counter }}</h3>
  </div>
</template>

<script>
  //  import eventHub from './EventHub'
  import store from '../store'
  export default {
    computed: {
      counter () {
        return store.state.counter
      }
    }
  }
</script>

<style>
</style>
