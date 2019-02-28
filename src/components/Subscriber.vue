<template>
  <div>
    <b-form @submit="subscribe">
      <b-form-group id="symbolInput" label="Ticker Symbol" label-for="symbol">
        <b-form-input id="symbol" type="text" v-model="form.symbol" required placeholder="GOOG" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Subscriber',
  mounted() {
    this.$store.dispatch('companies/fetch')
  },
  data() {
    return {
      form: {
        symbol: 'NFLX,TRIP,AMD,ADBE,RHT,MU,AMZN,STX'
      },
      connected: false
    }
  },
  sockets: {
    connect() {
      this.connected = true
    },
    message(payload) {
      let trade = JSON.parse(payload)
      this.$store.dispatch('symbols/update', trade)
    }
  },
  methods: {
    subscribe: function(evt) {
      evt.preventDefault()
      let symbols = this.form.symbol.split(',')
      for (var i = 0; i < symbols.length; i++) {
        this.$store.dispatch('symbols/subscribe', symbols[i])
      }
      this.$socket.emit('subscribe', this.form.symbol)
    }
  },
  computed: {
    ready: function() {
      return !this.connected
    }
  }
}
</script>

<style scoped>
</style>
