<template>
    <form v-on:submit.prevent="submitForm">
        <div class="form-control">
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
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
        <button @click="userLogin" type="submit" class="btn btn-outline-warning">Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            isValid: true,
            mode: 'login'
        }
    },

    methods: {
        submitForm() {
            this.isValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password === '' || this.password.length < 6) {
                this.isValid = false;
                return;
            }
            this.$router.replace('/market');
            
            if (this.mode === 'login') {
                 this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            }
        },
        userLogin() {
            fetch('https://menu-app-791cf-default-rtdb.europe-west1.firebasedatabase.app/login.json', {
                method: 'POST',
                headers: {
                    'Contact-Type': 'application/json'
                },
                body: JSON.stringify({
                    userEmail: this.email,
                    userPassword: this.password,
                })
            });
        }      
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