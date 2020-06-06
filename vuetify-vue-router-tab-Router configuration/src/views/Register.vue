<template>
  <div class="register text-center mt-3">
    <h1>Regsiter Here</h1>

    <v-row class="align-center justify-center mx-0">
      <v-col cols="6">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :error-messages="nameErrors"
            :counter="10"
            label="Password"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password_confirmation"
            :error-messages="nameErrors"
            :counter="10"
            :type="password"
            label="Confirm Password"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select> -->
          <!-- <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox> -->

          <v-btn class="mr-4" @click="submit">Register</v-btn>
          <v-btn @click="clear">clear</v-btn>
          <router-link to="/signin" class="mx-4">
            <v-btn flat>
              Sign In
            </v-btn>
          </router-link>
        </form>
      </v-col>
    </v-row>

    <!-- <v-row>
      <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>

      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>

      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
    </v-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      is_admin: null
    }
  },

  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      }
      this.$store
        .dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: left;
}
</style>
