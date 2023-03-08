<script setup>
  import { RouterView } from 'vue-router'
  import { useStore } from 'vuex'



  const store = useStore()
  const resp = store.dispatch('auth/chechUser')
  

</script>


<template>
  <RouterView />
</template>

<style scoped>

</style>
