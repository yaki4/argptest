<template lang="pug">
  .home(id='home')
    a-scene(id='scene', cursor='rayOrigin: mouse; fuse: true; fuseTimeout: 0;', vr-mode-ui="enabled: false", embedded, raycaster="objects: [gps-entity-place];", arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;')
      a-camera(gps-camera="minDistance: 20;" , rotation-header)
</template>

<script>
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
    places: {
      query: require('@/apollo/queries/places.graphql'),
      variables: {
        id: 'saguenay-lac-saint-jean-saguenay'
      },
      update (data) {
        this.$nextTick(() => {
          this.renderPlaces()  
        })        
        return data.zone
      }
    }
  },
  mounted () {
  },
  methods: {
    renderPlaces () {
      let scene = document.querySelector('a-scene')
      this.places.activites.forEach(element => {
        const lat = element.lat
        const long = element.long
        const icon = document.createElement('a-image')
        icon.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`)
        icon.setAttribute('name', element.titre)
        icon.setAttribute('src', '../img/icons/logo.png')
        icon.setAttribute('scale', '20, 20')
        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))
        scene.appendChild(icon)
      })
    }    
  },
}
</script>
