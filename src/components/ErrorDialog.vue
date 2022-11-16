<template>
  <v-dialog :value="flag" @input="$emit('value', false)" width="470">
    <v-card style="padding: 10px 0">
      <sweetalert-icon icon="success" />

      <h6 id="title">
        Your Product is added to cart
      </h6>
      <v-card-actions>
        <v-spacer />
        <v-btn color="#38872c" dark elevation="0" @click="viewCart">View Cart</v-btn>
        <v-btn color="#38872c" dark elevation="0" @click="$emit('value', false)">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ErrorDialog",

  methods: {
    viewCart() {
      this.$router.push('/cart')
    }
  },

  model: {
    prop: 'flag',
    event: 'value'
  },

  props: {
    flag: {
      type: Boolean,
      default: false
    },

    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
#title {
  font-family: google-sans, sans-serif;
  font-size: 18px;
  /* font-weight: 600; */
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  #title {
    font-size: 15px;
    padding-bottom: 10px;
  }
}
</style>
