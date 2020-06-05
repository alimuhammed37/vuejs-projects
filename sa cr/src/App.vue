<template>
  <v-app id="inspire">


    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
     
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Google Contacts</span>
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
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img></v-avatar>
      </v-btn>
    </v-app-bar>


     <v-content>
       <v-row class="ma-0">
       <v-col cols="2">
       <NavigationDrawer/>
     </v-col>

     <v-col cols="10">
       <v-content>
      <RecordsTable/>
    </v-content>
     </v-col>

     </v-row>
    </v-content>

    <!-- <v-content>
      <PostForm/>
    </v-content> -->

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import NavigationDrawer from './components/NavigationDrawer';
import RecordsTable from './components/RecordsTable';
// import PostForm from './components/PostForm';


export default {
  name: 'App',

  components: {
    //HelloWorld,
    RecordsTable,
    // PostForm,
    NavigationDrawer,
  },

  data: () => ({
      // dialog: false,
      drawer: null,
      
    }),
};
</script>

