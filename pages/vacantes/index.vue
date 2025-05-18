<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Page Title and Breadcrumbs -->
    <div class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-900">Vacantes de Empleo en Logística</h1>
        <div class="flex items-center text-sm text-gray-600 mt-2">
          <NuxtLink to="/" class="hover:text-blue-700">Inicio</NuxtLink>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-800 font-medium">Vacantes</span>
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
              placeholder="Buscar por título, empresa o palabras clave"
            />
          </div>
          <div class="flex-1">
            <input 
              v-model="filters.location"
              type="text" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ciudad, provincia o trabajo remoto"
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
                v-model="filters.remote"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Remoto</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input 
                v-model="filters.urgent"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Urgentes</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input 
                v-model="filters.accessible"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Accesibles</span>
            </label>
          </div>
        </div>
        
        <!-- Advanced Filters -->
        <div v-if="showAdvancedFilters" class="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Tipo de contrato</label>
              <select 
                v-model="filters.jobType"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier tipo</option>
                <option value="full-time">Tiempo completo</option>
                <option value="part-time">Medio tiempo</option>
                <option value="contract">Contrato</option>
                <option value="temporary">Temporal</option>
                <option value="internship">Prácticas</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Experiencia</label>
              <select 
                v-model="filters.experience"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier nivel</option>
                <option value="entry">Sin experiencia</option>
                <option value="junior">1-2 años</option>
                <option value="mid">3-5 años</option>
                <option value="senior">Más de 5 años</option>
                <option value="expert">Más de 10 años</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Salario</label>
              <select 
                v-model="filters.salary"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier salario</option>
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
              <label class="block text-sm font-medium text-gray-700">Empresa</label>
              <input 
                v-model="filters.company"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre de la empresa"
              />
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Fecha de publicación</label>
              <select 
                v-model="filters.datePosted"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier fecha</option>
                <option value="today">Hoy</option>
                <option value="week">Últimos 7 días</option>
                <option value="month">Último mes</option>
                <option value="quarter">Últimos 3 meses</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Tamaño de empresa</label>
              <select 
                v-model="filters.companySize"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier tamaño</option>
                <option value="1-10">1-10 empleados</option>
                <option value="11-50">11-50 empleados</option>
                <option value="51-200">51-200 empleados</option>
                <option value="201-500">201-500 empleados</option>
                <option value="501+">Más de 500 empleados</option>
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
              <label class="block text-sm font-medium text-gray-700">Turno de trabajo</label>
              <select 
                v-model="filters.shift"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier turno</option>
                <option value="morning">Mañana</option>
                <option value="afternoon">Tarde</option>
                <option value="night">Noche</option>
                <option value="rotating">Rotativo</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mb-6">
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.remote"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Trabajo remoto</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.urgent"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Urgentes</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.accessible"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Accesibles</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.relocation"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Ayuda con reubicación</span>
            </label>
            <label class="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-md border border-gray-200">
              <input 
                v-model="filters.training"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Formación incluida</span>
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
          <h2 class="text-2xl font-bold text-gray-800">{{ jobs.length }} vacantes encontradas</h2>
          <p class="text-gray-600 text-sm">Mostrando {{ startItem }}-{{ endItem }} de {{ totalJobs }} resultados</p>
        </div>
        <div class="flex items-center space-x-2 mt-4 sm:mt-0">
          <span class="text-sm text-gray-600">Ordenar por:</span>
          <select 
            v-model="sortBy"
            class="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="relevance">Relevancia</option>
            <option value="date">Fecha: reciente primero</option>
            <option value="salary">Salario: mayor primero</option>
            <option value="company">Empresa</option>
          </select>
        </div>
      </div>

      <!-- Job Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="job in jobs" 
          :key="job.id" 
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="p-6">
            <div class="flex flex-col">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <img :src="job.companyLogo" :alt="job.company" class="max-w-full max-h-full" />
                </div>
                <div>
                  <NuxtLink :to="`/vacantes/${job.id}`" class="hover:text-blue-700">
                    <h3 class="font-semibold text-lg text-gray-900">{{ job.title }}</h3>
                  </NuxtLink>
                  <p class="text-gray-600">{{ job.company }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span :class="[
                  'text-xs font-medium px-2 py-1 rounded-full', 
                  job.type === 'Tiempo completo' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                ]">
                  {{ job.type }}
                </span>
                <span v-if="job.urgent" class="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                  Urgente
                </span>
              </div>
              
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ job.location }}
                </div>
                <div class="flex items-center text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ job.posted }}
                </div>
                <div class="flex items-center text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ job.salary }}
                </div>
              </div>
              
              <p class="text-gray-700 mb-4 line-clamp-2">{{ job.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(skill, index) in job.skills" :key="index" class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {{ skill }}
                </span>
              </div>
              
              <div class="flex justify-between items-center mt-auto">
                <NuxtLink :to="`/vacantes/${job.id}`" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Ver detalles</NuxtLink>
                <button class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition-colors">
                  Aplicar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="jobs.length === 0" class="bg-white rounded-lg shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
        <p class="text-gray-600">No hemos encontrado vacantes que coincidan con tus filtros de búsqueda.</p>
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
  category: '',
  jobType: '',
  experience: '',
  salary: '',
  company: '',
  datePosted: '',
  remote: false,
  urgent: false,
  accessible: false,
  companySize: '',
  certifications: '',
  languages: '',
  shift: '',
  relocation: false,
  training: false
})

// Sorting state
const sortBy = ref('relevance')

// Pagination state
const currentPage = ref(1)
const itemsPerPage = 10
const totalJobs = 68

// Computed properties
const totalPages = computed(() => Math.ceil(totalJobs / itemsPerPage))
const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, totalJobs))

// Sample job data
const jobs = ref([
  {
    id: 1,
    title: 'Operador de Montacargas',
    company: 'Logística Global S.A.',
    companyLogo: '/placeholder.svg?height=50&width=50&query=company+logo',
    type: 'Tiempo completo',
    location: 'Madrid, España',
    posted: 'Hace 2 días',
    salary: '24.000€ - 28.000€ anuales',
    description: 'Buscamos operador de montacargas con experiencia mínima de 2 años en almacén logístico. Responsable de carga, descarga y organización de mercancías.',
    skills: ['Montacargas', 'Almacén', 'Logística', 'Carnet de carretillero'],
    urgent: true
  },
  {
    id: 2,
    title: 'Coordinador de Logística',
    company: 'Transportes Rápidos',
    companyLogo: '/placeholder.svg?height=50&width=50&query=transport+company+logo',
    type: 'Tiempo completo',
    location: 'Barcelona, España',
    posted: 'Hace 1 semana',
    salary: '30.000€ - 35.000€ anuales',
    description: 'Empresa de transporte busca coordinador logístico para gestionar rutas, optimizar entregas y supervisar equipo de transportistas.',
    skills: ['Gestión de rutas', 'Coordinación', 'Excel avanzado', 'Logística'],
    urgent: false
  },
  {
    id: 3,
    title: 'Auxiliar de Almacén',
    company: 'Distribuciones Internacionales',
    companyLogo: '/placeholder.svg?height=50&width=50&query=warehouse+company+logo',
    type: 'Medio tiempo',
    location: 'Valencia, España',
    posted: 'Hace 3 días',
    salary: '12.000€ - 15.000€ anuales',
    description: 'Se requiere auxiliar de almacén para preparación de pedidos, inventario y apoyo en tareas generales de almacén.',
    skills: ['Picking', 'Inventario', 'Almacén', 'Trabajo en equipo'],
    urgent: false
  },
  {
    id: 4,
    title: 'Jefe de Operaciones Logísticas',
    company: 'Cadena de Suministro Express',
    companyLogo: '/placeholder.svg?height=50&width=50&query=supply+chain+logo',
    type: 'Tiempo completo',
    location: 'Sevilla, España',
    posted: 'Hace 5 días',
    salary: '40.000€ - 45.000€ anuales',
    description: 'Buscamos profesional con experiencia en gestión de operaciones logísticas para liderar equipo y optimizar procesos de distribución.',
    skills: ['Gestión de equipos', 'KPIs', 'Optimización', 'Supply Chain'],
    urgent: false
  },
  {
    id: 5,
    title: 'Conductor de Reparto',
    company: 'Entregas Express',
    companyLogo: '/placeholder.svg?height=50&width=50&query=delivery+company+logo',
    type: 'Tiempo completo',
    location: 'Madrid, España',
    posted: 'Hace 1 día',
    salary: '22.000€ - 24.000€ anuales',
    description: 'Se necesita conductor con carnet B para reparto de paquetería en zona centro de Madrid. Jornada completa de lunes a viernes.',
    skills: ['Carnet B', 'Reparto', 'Atención al cliente', 'Puntualidad'],
    urgent: true
  },
  {
    id: 6,
    title: 'Especialista en Comercio Internacional',
    company: 'Import-Export Solutions',
    companyLogo: '/placeholder.svg?height=50&width=50&query=international+trade+logo',
    type: 'Tiempo completo',
    location: 'Barcelona, España',
    posted: 'Hace 1 semana',
    salary: '32.000€ - 38.000€ anuales',
    description: 'Empresa de comercio internacional busca especialista para gestión de importaciones/exportaciones, trámites aduaneros y documentación.',
    skills: ['Aduanas', 'Incoterms', 'Comercio Internacional', 'Inglés'],
    urgent: false
  }
])

// Functions
const clearFilters = () => {
  filters.value = {
    keyword: '',
    location: '',
    category: '',
    jobType: '',
    experience: '',
    salary: '',
    company: '',
    datePosted: '',
    remote: false,
    urgent: false,
    accessible: false,
    companySize: '',
    certifications: '',
    languages: '',
    shift: '',
    relocation: false,
    training: false
  }
}

const applyFilters = () => {
  // Here you would implement the logic to filter the jobs based on the selected filters
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