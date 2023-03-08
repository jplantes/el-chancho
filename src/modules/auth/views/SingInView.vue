<template>
  <div class="w-full max-w-sm space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="../../../assets/images/chancho-alcancia.png" alt="El Chancho">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Ingesa tu cuenta</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Si no tenes una, podes solicitar una invitación desde 
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">acá</a>
      </p>
    </div>
    <form @submit.prevent="onSubmit" class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="space-y-3 rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email</label>
          <input v-model="infoUser.email" id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 sm:text-sm sm:leading-6" placeholder="Email">
        </div>
        <div>
          <label for="password" class="sr-only">Contraseña</label>
          <input v-model="infoUser.password" id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 sm:text-sm sm:leading-6" placeholder="Contraseña">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Recordar usuario</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</a>
        </div>
      </div>

      <div>
        <button v-if='!isLogin'  type="submit" class="btn btn-primary btn-block">
          Ingresar
        </button>

        <button v-else type="submit" class="btn btn-primary btn-block loading" disabled></button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    
    const isLogin = ref(false)
    const infoUser = ref({
      email: null,
      password: null
    })

    if( store.state.auth.status === 'autenticado' ) {
      router.push({ name: 'home' })
    }
    
    
    const onSubmit = async () => {

      isLogin.value = true
      const { ok, message } = await store.dispatch( 'auth/singInUser', infoUser.value )

      if( ok ){
        router.push({ name: 'home' })
      } else {
        Swal.fire('Datos incorrectos', 'Email o Contraseña incorrectos', 'error')
      }

      isLogin.value = false
      infoUser.value.email = null
      infoUser.value.password = null
    }

    return {
      infoUser,
      isLogin,

      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>

</style>