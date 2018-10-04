<template>
  <div id="app">
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  padding: 50px;
  background-color: #FFF;
}
</style>
