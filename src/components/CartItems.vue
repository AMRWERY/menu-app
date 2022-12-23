<template>
  <li v-for="item in cart" :key="item.id">
        <div class="card">
        <div class="card-body">
          <h5>{{ item.title }}</h5>
            <img :src="item.image" :alt="title">
          <div class="price">
            <p>Price Per Item: ${{ item.price }}</p>
          </div>
          <div class="qty">Quantity: {{ item.qty }}</div>
          <button @click="removeFromCart" type="click" class="btn btn-outline-success">Remove</button>
        </div>
      </div>
      </li>

      <div class="card" style="width: 18rem;">
        <div class="container">
          <h4>Total:
            <span class="price" style="color:black">
              <i class="fa fa-shopping-cart"></i>
              <b>{{ totalItemsInCart }}</b>
            </span>
          </h4>
          <hr>
          <p>Total Amount <span class="price" style="color:black"><b>${{ totalAmount }}</b></span></p>
        </div>
      </div>
</template>

<script>
export default {
    data() {
        return {
          cart: JSON.parse(localStorage.getItem("cartData")) || [],
          total: null,
          totalItems: 0,
        }
    },

    props: ['id', 'title', 'image', 'price', 'qty'],

    methods: {
      removeFromCart(item) {
        this.cart.splice(item, 1)
      },
      totalPrice(item) {
          return item.price * item.qty;
      },
    },

    computed:{     
      totalItemsInCart() {
        return this.cart.reduce(function (sum, item) {
          return sum + (item.qty)
        }, 0);
      },
      totalAmount() {
        return this.cart.reduce(function (sum, item) {
          return sum + (item.price)
        }, 0);
      }
    },
}
</script>

<style scoped>
  .card {
    margin: 10px auto;
    width: 18rem;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }

  .container {
    display: grid;
  }

  img {
    width: 100px;
  }

  .price {
    color: brown;
    margin: 10px;
  }

  .qty {
    color: #CB1C8D;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .btn {
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }
</style>