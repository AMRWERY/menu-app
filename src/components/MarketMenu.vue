<template>
  <div class="container">
  <div class="card" v-for="item in market.items" :key="item.id">
    <div class="card-body">
      <div class="product__data">
        <div class="product__image">
            <img :src="item.image">
        </div>
        <div class="product__text">
            <h3>{{ item.title }}</h3>
            <h4>${{ item.price }}</h4>
        </div>
      </div>
      <button @click="addToCart(item)" type="click" class="btn btn-outline-success">Add To Cart</button>
    </div>
  </div>
</div>
</template>

<script>
import marketData from '../assets/db.json';

export default {
  data() {
    return {
      market: null,
      cart: JSON.parse(localStorage.getItem("cartData")) || [],
      qty: 0
    }
  },

  created() {
    debugger

    const marketId = this.$route.params.marketId;
    this.market = marketData.markets.find(market=> market.id == marketId)
  },

    methods: {
    addToCart(item) {
      let indx = this.cart.indexOf(item);
      if (indx >- 1) {
        this.cart[indx]['qty']++
         this.cart[indx]['itemTotal'] = this.cart[indx]['qty'] * this.cart[indx]['price']
      } else {
         item['itemTotal']= item.qty * item.price 
         this.cart.push(item);
      }
     
      localStorage.setItem("cartData",JSON.stringify(this.cart))
    }
  },
}
</script>

<style scoped>
.container {
  display: inline;
  position: relative;
  margin: 10px;
}
.card {
  width: 18rem;
  background-color: white;
  border-radius: 15px;
  margin: 15px auto;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}

li {
  margin: 1.5rem auto;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  list-style: none;
}

.product__data {
  display: inherit;
}

.product__image {
  margin: auto;
  width: 100%;
}

.product__image img {
  width: 50%;
  object-fit: cover;
  border-radius: 20%;
}

.product__text h3 {
  margin: 1rem 0 0.5rem 0;
  font-size: 20px;
  color: red;
}

.product__text h4 {
  margin: 0;
  font-size: 18px;
}

.btn {
  font-size: 16px;
  margin: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
</style>
