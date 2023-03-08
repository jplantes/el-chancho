<template>
  <NavBar />
  <div class="container mx-auto">

    <RouterView />

  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'


export default {
  components: {
    NavBar
  },
  setup () {
    

    return {

    }
  }
}
</script>

<style lang="css" scoped>

</style>