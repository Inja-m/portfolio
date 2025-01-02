<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500/75 transition-opacity"
      aria-hidden="true"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-16 w-auto mt-16"
              src="@/assets/logo.svg"
              alt="Logo-IM"
            />
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="login" class="space-y-6">
              <div v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="email"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Passwort</label
                  >
                </div>
                <div class="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 mb-16"
                >
                  Anmelden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StrapiApi from '../../../services/StrapiApi'
import { useRouter } from "vue-router"

const router = useRouter()


const email = ref('')
const password = ref('')
const errorMessage = ref('')

onMounted(() => {
  window.localStorage.removeItem('jwt')
  window.localStorage.removeItem('userData')
})

const login = async () => {
  try {
    const response = await StrapiApi().post('/api/auth/local', {
      identifier: email.value,
      password: password.value
    })

    // Save JWT and user data to localStorage
    window.localStorage.setItem('jwt', response.data.jwt)
    window.localStorage.setItem('userData', JSON.stringify(response.data.user))
		router.push({name:'dashboard'})
    console.log('erfolgreich angemeldet')
  } catch (err) {
    console.error('Login error:', err)

    errorMessage.value = 'Invalid username or password. Please try again.'
  }
}
</script>
