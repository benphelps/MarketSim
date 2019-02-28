<template>
  <div class="card">
    <div v-if="symbol.active">
      <div class="card-header">
        <h5 :title="companyName(symbol.name)" class=" mb-0 text-truncate">
          {{ companyName(symbol.name) }}
        </h5>
      </div>
      <div class="card-body">
        <div class="card-text">
          <div class="row">
            <div class="col-12 col-sm-6">
              <dl class="m-0 dl-horizontal">
                <dt>Bid</dt>
                <dd>{{ symbol.data.askPrice | money }}</dd>
                <dt>Last Sale</dt>
                <dd>{{ symbol.data.lastSalePrice | money }}</dd>
              </dl>
            </div>
            <div class="col-12 col-sm-6">
              <dl class="m-0 dl-horizontal">
                <dt>Ask</dt>
                <dd>{{ symbol.data.bidPrice | money }}</dd>
                <dt>Volume</dt>
                <dd>{{ symbol.data.volume | number }}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted text-right">
        <span class="d-none d-lg-block float-left"><small>{{ symbol.name }}</small></span>
        As of {{ symbol.data.lastUpdated | date }}
      </div>
    </div>
    <div v-else>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <strong>Loading ${{ symbol.name }}...</strong>
          <div class="spinner-border ml-auto" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import numeral from 'numeral'
  import moment from 'moment'

  export default {
    name: 'Ticker',
    props: {
      symbol: Object
    },
    methods: {
      companyName(symbol) {
        return this.$store.getters['companies/fetch'](symbol)['name']
      }
    },
    filters: {
      number: value => numeral(value).format('0,0'),
      money: value => numeral(value).format('$0,0.00'),
      date: value => {
        if (value == 0) {
          return 'N/A'
        } else {
          return moment(value).format('LTS')
        }
      }
    }
  }
</script>

<style scoped>
  small {
    font-size: 75%;
    opacity: 0.75;
  }
</style>


