<template>
<div>
          <!-- Header/Navigation -->
          <header class="bg-white  sticky top-0 z-10">
            <div class="container mx-auto px-4 py-3 flex items-center justify-between">
              <div class="flex items-center">
                <NuxtLink to="/" class="flex items-center">
                  <TruckIcon class="h-8 w-8 text-blue-600" />
                  <span class="ml-2 text-xl font-bold text-blue-800 hidden md:block">LogiJobs</span>
                </NuxtLink>
              </div>
              
              <div class="hidden md:flex items-center space-x-6">
                <NuxtLink to="/" class="text-gray-600 hover:text-blue-700">Inicio</NuxtLink>
                <NuxtLink to="/vacantes" class="text-gray-600 hover:text-blue-700">Vacantes</NuxtLink>
                <NuxtLink to="/candidatos" class="text-gray-600 hover:text-blue-700">Candidatos</NuxtLink>
                <NuxtLink to="/empresas" class="text-gray-600 hover:text-blue-700">Empresas</NuxtLink>
              </div>
              
              <div class="flex items-center space-x-3">
                <button v-if="!isLoggedIn" @click="toggleLoginModal" class="px-4 py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50">
                  Iniciar Sesión
                </button>
                <button v-if="!isLoggedIn" @click="toggleRegisterModal" class="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                  Registrarse
                </button>
                <div v-else class="relative">
                  <button @click="toggleUserMenu" class="flex items-center space-x-2">
                    <div class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700">
                      {{ userInitials }}
                    </div>
                    <span class="hidden md:inline-block">{{ userName }}</span>
                  </button>
                  <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mis Aplicaciones</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a>
                    <a href="#" @click="logout" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Cerrar Sesión</a>
                  </div>
                </div>
                <button @click="toggleMobileMenu" class="md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Mobile Menu -->
            <div v-if="showMobileMenu" class="md:hidden bg-white border-t border-gray-200 py-2">
              <div class="container mx-auto px-4">
                <NuxtLink to="/" class="block py-2 text-gray-600 hover:text-blue-700">Inicio</NuxtLink>
                <NuxtLink to="/vacantes" class="block py-2 text-gray-600 hover:text-blue-700">Vacantes</NuxtLink>
                <NuxtLink to="/candidatos" class="block py-2 text-gray-600 hover:text-blue-700">Candidatos</NuxtLink>
                <NuxtLink to="/empresas" class="block py-2 text-gray-600 hover:text-blue-700">Empresas</NuxtLink>
              </div>
            </div>
          </header>


          
    <!-- Login Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showLoginModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-900">Iniciar Sesión</h2>
            <button @click="toggleLoginModal" class="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input type="password" id="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input type="checkbox" id="remember" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label for="remember" class="ml-2 text-sm text-gray-700">Recordarme</label>
              </div>
              <a href="#" class="text-sm text-blue-700 hover:text-blue-900">¿Olvidaste tu contraseña?</a>
            </div>
            
            <button type="submit" class="w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Iniciar Sesión
            </button>
          </form>
          
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              ¿No tienes una cuenta? 
              <a href="#" @click="switchToRegister" class="text-blue-700 hover:text-blue-900">Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Register Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showRegisterModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-900">Crear Cuenta</h2>
            <button @click="toggleRegisterModal" class="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form class="space-y-4">
            <div class="flex space-x-4">
              <div class="w-1/2">
                <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" id="first-name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div class="w-1/2">
                <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input type="text" id="last-name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            
            <div>
              <label for="register-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="register-email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            
            <div>
              <label for="register-password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input type="password" id="register-password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            
            <div>
              <label for="account-type" class="block text-sm font-medium text-gray-700 mb-1">Tipo de cuenta</label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input type="radio" name="account-type" value="candidate" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" checked />
                  <span class="ml-2 text-sm text-gray-700">Candidato</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="account-type" value="company" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <span class="ml-2 text-sm text-gray-700">Empresa</span>
                </label>
              </div>
            </div>
            
            <div class="flex items-center">
              <input type="checkbox" id="terms" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="terms" class="ml-2 text-sm text-gray-700">
                Acepto los <a href="#" class="text-blue-700 hover:text-blue-900">Términos y Condiciones</a> y la <a href="#" class="text-blue-700 hover:text-blue-900">Política de Privacidad</a>
              </label>
            </div>
            
            <button type="submit" class="w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Crear Cuenta
            </button>
          </form>
          
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              ¿Ya tienes una cuenta? 
              <a href="#" @click="switchToLogin" class="text-blue-700 hover:text-blue-900">Inicia Sesión</a>
            </p>
          </div>
        </div>
      </div>
    </Transition>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { TruckIcon } from 'lucide-vue-next'

// User state
const isLoggedIn = ref(false)
const userName = ref('Juan Pérez')
const userInitials = ref('JP')
const userType = ref('candidate') // 'candidate' or 'company'

// UI state
const showMobileMenu = ref(false)
const showUserMenu = ref(false)
const showLoginModal = ref(false)
const showRegisterModal = ref(false)

// Toggle functions
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const toggleLoginModal = () => {
  showLoginModal.value = !showLoginModal.value
  if (showLoginModal.value) {
    showRegisterModal.value = false
  }
}

const toggleRegisterModal = () => {
  showRegisterModal.value = !showRegisterModal.value
  if (showRegisterModal.value) {
    showLoginModal.value = false
  }
}

const switchToRegister = () => {
  showLoginModal.value = false
  showRegisterModal.value = true
}

const switchToLogin = () => {
  showRegisterModal.value = false
  showLoginModal.value = true
}

const logout = () => {
  isLoggedIn.value = false
  showUserMenu.value = false
}
</script>