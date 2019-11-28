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
  // apollo: {
  //   places: {
  //     query: require('@/apollo/queries/places.graphql'),
  //     variables: {
  //       id: 'saguenay-lac-saint-jean-saguenay'
  //     },
  //     update (data) {
  //       this.$nextTick(() => {
  //         this.renderPlaces()  
  //       })        
  //       return data.zone
  //     }
  //   }
  // },
  mounted () {
    this.$nextTick(() => {
      this.renderPlaces()  
    })      
  },
  methods: {
    renderPlaces () {
      let scene = document.querySelector('a-scene')
      const icon = document.createElement('a-image')
      icon.setAttribute('gps-entity-place', `latitude: ${0}; longitude: ${0}`)
      icon.setAttribute('name', 'test1')
      icon.setAttribute('src', '../img/icons/logo.png')
      icon.setAttribute('scale', '45.5030268, -73.5575061')
      icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))
      scene.appendChild(icon)
      const icon2 = document.createElement('a-image')
      icon2.setAttribute('gps-entity-place', `latitude: ${10}; longitude: ${0}`)
      icon2.setAttribute('name', 'test2')
      icon2.setAttribute('src', '../img/icons/logo.png')
      icon2.setAttribute('scale', '45.5013592, -73.5564616')
      icon2.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))
      scene.appendChild(icon2)
    }    
  },
}
</script>
