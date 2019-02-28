<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <h1>MarketSim</h1>
          <hr>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col-12 col-lg-8 offset-lg-2">
          <Subscriptions/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <Subscriber/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import Subscriber from './components/Subscriber.vue'
import Subscriptions from './components/Subscriptions.vue'

export default {
  name: 'app',
  components: {
    Subscriber,
    Subscriptions
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";
@import "~bootstrap/scss/bootstrap";
@import "./scss/bootswatch.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
