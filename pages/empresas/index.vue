<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <div class="flex flex-col space-y-4 mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Empresas Registradas</h1>
          <p class="text-gray-600 mt-2">Encuentra las mejores empresas del sector logístico</p>
        </div>
        
        <!-- Advanced Search Section -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Search Input -->
            <div class="relative">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Buscar empresas..." 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <!-- Industry Filter -->
            <select 
              v-model="selectedIndustry"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas las industrias</option>
              <option v-for="industry in industries" :key="industry" :value="industry">
                {{ industry }}
              </option>
            </select>

            <!-- Location Filter -->
            <select 
              v-model="selectedLocation"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas las ubicaciones</option>
              <option v-for="location in locations" :key="location" :value="location">
                {{ location }}
              </option>
            </select>

            <!-- Company Size Filter -->
            <select 
              v-model="selectedSize"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos los tamaños</option>
              <option value="1-50">1-50 empleados</option>
              <option value="51-250">51-250 empleados</option>
              <option value="251-500">251-500 empleados</option>
              <option value="501+">Más de 500 empleados</option>
            </select>
          </div>

          <!-- Additional Filters -->
          <div class="mt-4 flex flex-wrap gap-4">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="hasVacancies" 
                v-model="hasVacancies"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label for="hasVacancies" class="ml-2 text-sm text-gray-700">
                Solo empresas con vacantes
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="verifiedOnly" 
                v-model="verifiedOnly"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label for="verifiedOnly" class="ml-2 text-sm text-gray-700">
                Solo empresas verificadas
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Companies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="company in filteredCompanies" :key="company.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <img :src="company.logo" :alt="company.name" class="max-w-full max-h-full" />
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">{{ company.name }}</h3>
                <p class="text-gray-600">{{ company.industry }}</p>
              </div>
            </div>
            
            <div class="space-y-3 mb-4">
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ company.location }}
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ company.employees }} empleados
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {{ company.vacancies }} vacantes activas
              </div>
            </div>
            
            <p class="text-gray-700 mb-4 line-clamp-2">{{ company.description }}</p>
            
            <div class="flex justify-between items-center">
              <NuxtLink :to="'/empresas/' + company.id" class="text-blue-700 hover:text-blue-900 text-sm font-medium">
                Ver detalles
              </NuxtLink>
              <button class="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm font-medium">
                Seguir
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <nav class="inline-flex rounded-md shadow">
          <a href="#" class="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Anterior
          </a>
          <a href="#" class="px-3 py-2 border-t border-b border-gray-300 bg-white text-blue-700 font-medium">
            1
          </a>
          <a href="#" class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            2
          </a>
          <a href="#" class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            3
          </a>
          <a href="#" class="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Siguiente
          </a>
        </nav>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// User state
const isLoggedIn = ref(false)
const userName = ref('Juan Pérez')
const userInitials = ref('JP')
const showUserMenu = ref(false)

// Toggle functions
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const logout = () => {
  isLoggedIn.value = false
  showUserMenu.value = false
}

// Search and filter state
const searchQuery = ref('')
const selectedIndustry = ref('')
const selectedLocation = ref('')
const selectedSize = ref('')
const hasVacancies = ref(false)
const verifiedOnly = ref(false)

// Extract unique industries and locations from companies data
const industries = computed(() => {
  return [...new Set(companies.map(company => company.industry))]
})

const locations = computed(() => {
  return [...new Set(companies.map(company => company.location))]
})

// Filtered companies
const filteredCompanies = computed(() => {
  return companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesIndustry = !selectedIndustry.value || company.industry === selectedIndustry.value
    const matchesLocation = !selectedLocation.value || company.location === selectedLocation.value
    
    const matchesSize = !selectedSize.value || {
      '1-50': company.employees.includes('1-50'),
      '51-250': company.employees.includes('51-250'),
      '251-500': company.employees.includes('251-500'),
      '501+': company.employees.includes('501+')
    }[selectedSize.value]
    
    const matchesVacancies = !hasVacancies.value || company.vacancies > 0
    
    return matchesSearch && matchesIndustry && matchesLocation && matchesSize && matchesVacancies
  })
})

// Sample companies data
const companies = [
  {
    id: 1,
    name: 'Logística Global S.A.',
    logo: '/placeholder.svg?height=50&width=50&query=company+logo',
    industry: 'Logística y Transporte',
    location: 'Madrid, España',
    employees: '250-500',
    vacancies: 12,
    description: 'Empresa líder en soluciones logísticas integrales, especializada en almacenamiento, distribución y transporte de mercancías.'
  },
  {
    id: 2,
    name: 'Transportes Rápidos',
    logo: '/placeholder.svg?height=50&width=50&query=transport+company+logo',
    industry: 'Transporte',
    location: 'Barcelona, España',
    employees: '100-250',
    vacancies: 8,
    description: 'Compañía especializada en transporte urgente y distribución de última milla en toda España.'
  },
  {
    id: 3,
    name: 'Distribuciones Internacionales',
    logo: '/placeholder.svg?height=50&width=50&query=warehouse+company+logo',
    industry: 'Logística Internacional',
    location: 'Valencia, España',
    employees: '500-1000',
    vacancies: 15,
    description: 'Empresa líder en distribución internacional y gestión de la cadena de suministro global.'
  },
  {
    id: 4,
    name: 'Cadena de Suministro Express',
    logo: '/placeholder.svg?height=50&width=50&query=supply+chain+logo',
    industry: 'Supply Chain',
    location: 'Sevilla, España',
    employees: '100-250',
    vacancies: 6,
    description: 'Especialistas en optimización de la cadena de suministro y gestión de inventarios.'
  },
  {
    id: 5,
    name: 'Entregas Express',
    logo: '/placeholder.svg?height=50&width=50&query=delivery+company+logo',
    industry: 'Mensajería',
    location: 'Madrid, España',
    employees: '50-100',
    vacancies: 4,
    description: 'Empresa de mensajería y paquetería urgente con cobertura nacional.'
  },
  {
    id: 6,
    name: 'Import-Export Solutions',
    logo: '/placeholder.svg?height=50&width=50&query=international+trade+logo',
    industry: 'Comercio Internacional',
    location: 'Barcelona, España',
    employees: '100-250',
    vacancies: 9,
    description: 'Especialistas en importación y exportación, gestión aduanera y comercio internacional.'
  }
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 