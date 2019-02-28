<template>
  <div>
    <div class="row">
      <div v-for="symbol in items" :key="symbol.name" class="mb-2 col-12 col-md-6">
        <Ticker :symbol="symbol" />
      </div>
    </div>
  </div>
</template>

<script>
  import Ticker from './Ticker.vue'

  export default {
    name: 'Subscriptions',
    data() {
      return {
        items: this.$store.getters['symbols/subscribed']
      }
    },
    components: {
      Ticker
    }
  }
</script>

<style scoped>
</style>


