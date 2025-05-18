<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Page Title and Breadcrumbs -->
    <div class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-900">Candidatos en Logística</h1>
        <div class="flex items-center text-sm text-gray-600 mt-2">
          <NuxtLink to="/" class="hover:text-blue-700">Inicio</NuxtLink>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-800 font-medium">Candidatos</span>
        </div>
      </div>
    </div>

    <!-- Search and Filters Section -->
    <section class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 py-6">
        <!-- Search Bar -->
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input 
              v-model="filters.keyword"
              type="text" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Buscar por nombre, habilidades o experiencia"
            />
          </div>
          <div class="flex-1">
            <input 
              v-model="filters.location"
              type="text" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ciudad, provincia o disponibilidad de reubicación"
            />
          </div>
          <button class="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
            Buscar
          </button>
        </div>

        <!-- Quick Filters -->
        <div class="flex flex-wrap items-center gap-4 mt-4">
          <button 
            @click="toggleAdvancedFilters"
            class="text-sm text-gray-600 hover:text-blue-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtros avanzados
          </button>
          
          <div class="flex items-center space-x-2">
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input 
                v-model="filters.available"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible inmediatamente</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input 
                v-model="filters.relocation"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible para reubicación</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input 
                v-model="filters.remote"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible para remoto</span>
            </label>
          </div>
        </div>
        
        <!-- Advanced Filters -->
        <div v-if="showAdvancedFilters" class="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Experiencia laboral</label>
              <select 
                v-model="filters.experience"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier experiencia</option>
                <option value="entry">Sin experiencia</option>
                <option value="junior">1-2 años</option>
                <option value="mid">3-5 años</option>
                <option value="senior">5-10 años</option>
                <option value="expert">Más de 10 años</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Nivel educativo</label>
              <select 
                v-model="filters.education"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier nivel</option>
                <option value="high-school">Bachillerato</option>
                <option value="technical">Formación Profesional</option>
                <option value="bachelor">Grado Universitario</option>
                <option value="master">Máster</option>
                <option value="phd">Doctorado</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Expectativa salarial</label>
              <select 
                v-model="filters.salary"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier rango</option>
                <option value="0-20000">Hasta 20.000€</option>
                <option value="20000-30000">20.000€ - 30.000€</option>
                <option value="30000-40000">30.000€ - 40.000€</option>
                <option value="40000-50000">40.000€ - 50.000€</option>
                <option value="50000+">Más de 50.000€</option>
              </select>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Certificaciones</label>
              <select 
                v-model="filters.certifications"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier certificación</option>
                <option value="iso9001">ISO 9001</option>
                <option value="iso14001">ISO 14001</option>
                <option value="adr">ADR</option>
                <option value="carretillero">Carnet Carretillero</option>
                <option value="conductor">Carnet de Conducir</option>
                <option value="lean">Lean Six Sigma</option>
                <option value="scm">Supply Chain Management</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Idiomas</label>
              <select 
                v-model="filters.languages"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier idioma</option>
                <option value="english">Inglés</option>
                <option value="french">Francés</option>
                <option value="german">Alemán</option>
                <option value="italian">Italiano</option>
                <option value="portuguese">Portugués</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Habilidades técnicas</label>
              <select 
                v-model="filters.skills"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier habilidad</option>
                <option value="wms">Sistemas WMS</option>
                <option value="erp">ERP</option>
                <option value="excel">Excel Avanzado</option>
                <option value="powerbi">Power BI</option>
                <option value="sap">SAP</option>
                <option value="python">Python</option>
                <option value="sql">SQL</option>
              </select>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mb-6">
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.available"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible inmediatamente</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.relocation"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible para reubicación</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.remote"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible para remoto</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.vehicle"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Vehículo propio</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.travel"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Disponible para viajar</span>
            </label>
          </div>

          <div class="flex justify-end space-x-4">
            <button 
              @click="clearFilters" 
              class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              Limpiar filtros
            </button>
            <button 
              @click="applyFilters" 
              class="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="container mx-auto px-4 py-6">
      <!-- Results Header -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">{{ candidates.length }} candidatos encontrados</h2>
          <p class="text-gray-600 text-sm">Mostrando {{ startItem }}-{{ endItem }} de {{ totalCandidates }} resultados</p>
        </div>
        <div class="flex items-center space-x-2 mt-4 sm:mt-0">
          <span class="text-sm text-gray-600">Ordenar por:</span>
          <select 
            v-model="sortBy"
            class="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="relevance">Relevancia</option>
            <option value="experience">Experiencia</option>
            <option value="education">Nivel educativo</option>
            <option value="availability">Disponibilidad</option>
          </select>
        </div>
      </div>

      <!-- Candidate Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="candidate in candidates" 
          :key="candidate.id" 
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="p-6">
            <div class="flex flex-col">
              <div class="flex items-start mb-4">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img :src="candidate.avatar" :alt="candidate.name" class="w-full h-full object-cover" />
                </div>
                <div>
                  <NuxtLink :to="`/candidatos/${candidate.id}`" class="hover:text-blue-700">
                    <h3 class="font-semibold text-lg text-gray-900">{{ candidate.name }}</h3>
                  </NuxtLink>
                  <p class="text-gray-600">{{ candidate.title }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {{ candidate.experience }}
                </span>
                <span v-if="candidate.available" class="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                  Disponible
                </span>
              </div>
              
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ candidate.location }}
                </div>
                <div class="flex items-center text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ candidate.education }}
                </div>
              </div>
              
              <p class="text-gray-700 mb-4 line-clamp-2">{{ candidate.summary }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(skill, index) in candidate.skills" :key="index" class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {{ skill }}
                </span>
              </div>
              
              <div class="flex justify-between items-center mt-auto">
                <NuxtLink :to="`/candidatos/${candidate.id}`" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Ver perfil</NuxtLink>
                <button class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-sm font-medium transition-colors">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="candidates.length === 0" class="bg-white rounded-lg shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
        <p class="text-gray-600">No hemos encontrado candidatos que coincidan con tus filtros de búsqueda.</p>
        <button @click="clearFilters" class="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm font-medium">
          Limpiar filtros
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// UI state
const showMobileMenu = ref(false)
const showAdvancedFilters = ref(false)

// Toggle functions
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleAdvancedFilters = () => {
  showAdvancedFilters.value = !showAdvancedFilters.value
}

// Filter state
const filters = ref({
  keyword: '',
  location: '',
  experience: '',
  education: '',
  salary: '',
  certifications: '',
  languages: '',
  skills: '',
  available: false,
  relocation: false,
  remote: false,
  vehicle: false,
  travel: false
})

// Sorting state
const sortBy = ref('relevance')

// Pagination state
const currentPage = ref(1)
const itemsPerPage = 10
const totalCandidates = 42

// Computed properties
const totalPages = computed(() => Math.ceil(totalCandidates / itemsPerPage))
const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, totalCandidates))

// Sample candidate data
const candidates = ref([
  {
    id: 1,
    name: 'Carlos Rodríguez',
    title: 'Coordinador de Logística',
    avatar: '/placeholder.svg?height=64&width=64&query=profile',
    experience: '5 años de experiencia',
    available: true,
    location: 'Madrid, España',
    education: 'Grado en Logística y Transporte',
    summary: 'Profesional con amplia experiencia en coordinación de operaciones logísticas, gestión de almacenes y optimización de rutas de distribución.',
    skills: ['WMS', 'Excel Avanzado', 'Gestión de equipos', 'Supply Chain']
  },
  {
    id: 2,
    name: 'Ana Martínez',
    title: 'Especialista en Comercio Internacional',
    avatar: '/placeholder.svg?height=64&width=64&query=profile',
    experience: '3 años de experiencia',
    available: true,
    location: 'Barcelona, España',
    education: 'Máster en Comercio Internacional',
    summary: 'Experta en gestión de importaciones/exportaciones, trámites aduaneros y relaciones con proveedores internacionales.',
    skills: ['Aduanas', 'Incoterms', 'Inglés', 'Negociación']
  },
  {
    id: 3,
    name: 'Miguel Sánchez',
    title: 'Operador de Montacargas',
    avatar: '/placeholder.svg?height=64&width=64&query=profile',
    experience: '2 años de experiencia',
    available: false,
    location: 'Valencia, España',
    education: 'FP en Logística',
    summary: 'Operador certificado de montacargas con experiencia en almacenes de gran distribución y gestión de inventario.',
    skills: ['Montacargas', 'Inventario', 'Almacén', 'Picking']
  }
])

// Functions
const clearFilters = () => {
  filters.value = {
    keyword: '',
    location: '',
    experience: '',
    education: '',
    salary: '',
    certifications: '',
    languages: '',
    skills: '',
    available: false,
    relocation: false,
    remote: false,
    vehicle: false,
    travel: false
  }
}

const applyFilters = () => {
  // Here you would implement the logic to filter the candidates based on the selected filters
  console.log('Applying filters:', filters.value)
  // You can add your filtering logic here
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 