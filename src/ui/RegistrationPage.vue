<template>
    <form v-on:submit.prevent="submitForm">
        <div class="form-control">
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" v-model.trim="fullName">
                <p v-if="!isValid" class="errors">Name is required</p>
              </div>
        </div>
        <div class="form-control">
            <div class="mb-3">
                <label for="email" class="form-label">E-mail Address</label>
                <input type="email" class="form-control" id="email" v-model.trim="email">
                <p v-if="!isValid" class="errors">E-mail is required</p>
              </div>
        </div>
        <div class="form-control">
          <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model.trim="password">
              <p v-if="!isValid" class="errors">Password is required</p>
            </div>
      </div>
        <button v-on:click="userRegistration" type="submit" class="btn btn-outline-danger">Register</button>
    </form>
</template>
  
  <script>
  export default {  
    data() {
      return {
        fullName: '',
        email: '',
        password: '',
        isValid: true,
        mode: 'signup'
      }
    },
  
    methods: {
      submitForm() {
        this.isValid = true;
        if (this.fullName === '' || this.email === '' || !this.email.includes('@') || this.password === '' || this.password.length < 6) {
          this.isValid = false;
          return;
        } else {
            this.$router.replace('/login');
        }
  
        if (this.mode === 'signup') {
          this.$store.dispatch('signup', {
            name: this.fullName,
            email: this.email,
            password: this.password,
          })
        }
      },
    },
  }
  </script>


  <style scoped>
* {
    text-align: center;
    border: 0;
}

form {
    margin: 14%;
}
  .form-control {
    border: 0;
  }

  label {
    color: black;
  }

  input {
    background-color: aliceblue !important;
    width: 300px;
    text-align: center;
    margin: auto;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }

  input[type="text"] {
    display: block;
    margin : 0 auto;
}

.errors {
    color:  red;
}

.btn {
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
</style>