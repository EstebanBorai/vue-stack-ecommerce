<template>
  <div>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
          </div>
          <div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button @click="login()" type="submit" class="btn btn-primary btn-block">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions('account', ['login']),
  },
};
</script>

<style>
  .form-control {
    border-radius: 0%;
    height: 50px;
  }
  .login-form-container {
    padding: 20px;
    box-shadow: 0px 2px 5px 2px #888888;
  }
  .btn {
    border-radius: 0%;
    font-weight: bold;
    background: #016b6b;
    border: #016b6b;
  }
  .btn:hover {
    background: #00b4b4;
  }
  .btn:focus {
    background: #016b6b;
  }
</style>