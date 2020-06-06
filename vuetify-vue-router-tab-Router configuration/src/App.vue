/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-col class="pa-0 fill-height">
        <div id="nav" class="text-left pa-0">
          <v-list shaped dense>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/">Home</router-link>
                </v-list-item-content>
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-content>
                  <router-link to="/about">About</router-link>
                </v-list-item-content>
              </v-list-item> -->

              <v-list-group sub-group no-action value="true">
                <v-list-tile slot="activator">
                  <v-list-tile-title>Admin</v-list-tile-title>
                </v-list-tile>
                <!-- <v-list-tile>
                  <v-list-tile-title>Some menu text</v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon>mdi-admin</v-icon>
                  </v-list-tile-action>
                </v-list-tile> -->
              </v-list-group>

              <!-- <v-list-group prepend-icon="mdi-account_circle" value="true">
                <v-list-tile slot="activator">
                  <v-list-tile-title>Users</v-list-tile-title>
                </v-list-tile>
                
              </v-list-group> -->

              <!-- <v-list-item>
                <v-list-item-content>
                  <router-link to="/about">About</router-link>
                </v-list-item-content>
              </v-list-item> -->

              <v-list-item>
                <v-list-item-content>
                  <a
                    href="javascript: void(0)"
                    class="hightLight"
                    @click="
                      $routerTab.openIframe(
                        'https://bhuh12.github.io/vue-router-tab/',
                        'RouterTab'
                      )
                    "
                  >
                    RouterTab
                  </a>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/signin">Sign In</router-link>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <router-link to="/register">Register</router-link>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <router-link to="/profile">Profile</router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </v-col>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">S Abdullahome</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon small v-on="on">
            <v-avatar size="28px" item>
              <v-img
                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                alt="Vuetify"
              ></v-img
            ></v-avatar>
          </v-btn>
        </template>

        <v-card max-width="300" tile class="mx-auto">
          <v-list dense>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/profile">
                  Profile
                </router-link></v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                ><router-link to="/signin">
                  Sign In
                </router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/register">
                  Register
                </router-link></v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                ><router-link to="/logout">
                  logout
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container class="pa-0 mx-0 fill-height align-start justify-start">
        <v-row class="mx-0 fill-height d-flex flex-grow-1">
          <router-view />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      drawer: null
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#nav {
  box-sizing: border-box;
  padding: 30px 15px;
  // width: 200px;
  border-right: 1px solid #eaecef;
  text-align: center;

  a {
    display: block;
    margin: 1em 0;
    font-weight: bold;
    color: #2c3e50;

    &:hover,
    &.router-link-exact-active {
      color: #42b983;
    }

    &.hightLight {
      color: #ff5b77;

      &:hover,
      &.router-link-exact-active {
        color: red;
      }
    }
  }
}

.router-tab {
  flex: 1 1 0;
}

.container {
  position: relative;
  z-index: 4;
}
</style>
