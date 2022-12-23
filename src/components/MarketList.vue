
<template>
      <div v-if="isLoggedIn" class="container">
            <div class="card" v-for="market in markets" :key="market.id">
              <div class="card-body">
                <h3>{{ market.name }}</h3>
                <img :src="market.logo">
                  <router-link :to="{ name: 'MarketMenu', params:{ marketId: market.id } }">
                      <button type="button" class="btn btn-outline-danger">Check Menu</button>
                  </router-link>
              </div>
          </div>
          </div> 
</template>

<script>
import marketData from '../assets/db.json';

  export default {
    data() {
      return {
        markets : marketData.markets,
        loggedIn: true
      }
    },

    methods: {
      goToMarket() {
        this.$router.push('/menu')
      }
    },

    computed: {
      isLoggedIn() {
        return this.loggedIn
      }
    }
  }
</script>

<style scoped>
.container {
  display: inline;
  position: relative;
  margin: 10px;
}
.card {
  position: relative;
  width: 300px;
  height: 330px;
  margin: 15px auto;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}

  h3 {
    color: #810CA8;
    margin-bottom: 10px;
  }

  .btn {
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }
</style>
