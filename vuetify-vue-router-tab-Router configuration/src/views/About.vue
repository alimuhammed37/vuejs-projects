<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center">
            <base-subheading
              class="text-center"
              subheading="Snackbar Locations"
            />

            <v-row class="mt-n12" justify="center">
              <v-col cols="10" lg="8">
                <v-row>
                  <v-col v-for="dir in directions" :key="dir" cols="4">
                    <v-btn
                      color="secondary"
                      default
                      class="v-btn--block"
                      @click="
                        randomColor(), (direction = dir), (snackbar = true)
                      "
                    >
                      {{ dir }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <base-subheading class="text-center" subheading="Dialogs" />

            <v-row class="mt-n12" justify="center">
              <v-col cols="10" lg="8">
                <v-row>
                  <v-col cols="4">
                    <v-btn
                      color="secondary"
                      default
                      rounded
                      @click="dialog = true"
                    >
                      Classic Dialog
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn color="info" default rounded @click="dialog2 = true">
                      Notice Modal
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn
                      color="pink darken-1"
                      dark
                      default
                      rounded
                      @click="dialog3 = true"
                    >
                      Small Alert Modal
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.about {
  text-align: center;
}
</style>

<script>
export default {
  name: 'DashboardNotifications',

  data: () => ({
    snackbar: false,
    color: 'info',
    colors: ['info', 'success', 'warning', 'error'],
    dialog: false,
    dialog2: false,
    dialog3: false,
    direction: 'top center',
    directions: [
      'top left',
      'top center',
      'top right',
      'bottom left',
      'bottom center',
      'bottom right'
    ]
  }),

  computed: {
    parsedDirection() {
      return this.direction.split(' ')
    }
  },

  methods: {
    randomColor() {
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    }
  }
}
</script>
