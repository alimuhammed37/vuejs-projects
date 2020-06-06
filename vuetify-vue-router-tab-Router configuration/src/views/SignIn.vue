<template>
  <div class="signin text-center mt-3">
    <h1>SignIn</h1>

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
          <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select> -->
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Keep me logged in ?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-btn class="mr-4" @click="submit">Sign In</v-btn>
          <v-btn @click="clear">clear</v-btn>
          <router-link to="/register" class="mx-4">
            <v-btn flat value="feed">
              Register
            </v-btn>
          </router-link>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.about {
  text-align: left;
}
</style>
