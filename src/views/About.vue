<template lang="pug">
  .home
    a-scene(vr-mode-ui="enabled: false", embedded, raycaster="objects: [gps-entity-place];")
      a-camera(gps-camera, rotation-header)
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
      const icon = document.createElement('a-image')
      icon.setAttribute('gps-entity-place', `latitude: ${0}; longitude: ${10}`)
      icon.setAttribute('name', 'test1')
      icon.setAttribute('src', '../img/icons/logo.png')
      icon.setAttribute('scale', '20, 20')
      icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))
      scene.appendChild(icon)
      const icon2 = document.createElement('a-image')
      icon2.setAttribute('gps-entity-place', `latitude: ${10}; longitude: ${0}`)
      icon2.setAttribute('name', 'test2')
      icon2.setAttribute('src', '../img/icons/logo.png')
      icon2.setAttribute('scale', '20, 20')
      icon2.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')))
      scene.appendChild(icon2)
    }    
  },
}
</script>
