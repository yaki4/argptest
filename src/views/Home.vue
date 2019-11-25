<template lang="pug">
  .home
    a-scene
      a-camera(gps-camera, rotation-header)
</template>

<script>
import 'aframe'
export default {
  name: 'home',
  data () {
    return {
      places: null
    }
  },
  components: {
  },
  apollo: {
    query: require('@/apollo/queries/places.gql'),
    variables () {
      return {
        id: 'saguenay-lac-saint-jean-saguenay'
      }
    },
    update (data) {
      return data.zone
    }
  },
  mounted () {

  }
}
</script>
