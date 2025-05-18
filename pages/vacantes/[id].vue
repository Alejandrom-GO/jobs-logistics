<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center text-sm text-gray-600">
        <a href="#" class="hover:text-blue-700">Inicio</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" class="hover:text-blue-700">Vacantes</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-800 font-medium">{{ job.title }}</span>
      </div>
    </div>

    <!-- Job Detail Header -->
    <section class="container mx-auto px-4 py-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="md:flex md:items-start md:justify-between">
          <div class="flex items-start">
            <div class="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mr-4">
              <img :src="job.companyLogo" :alt="job.company" class="max-w-full max-h-full" />
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900 mb-1">{{ job.title }}</h1>
              <p class="text-lg text-blue-700 mb-2">{{ job.company }}</p>
              <div class="flex flex-wrap items-center text-gray-600 text-sm gap-4 mb-3">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ job.location }}
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ job.posted }}
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ job.salary }}
                </div>
                <span :class="[
                  'text-xs font-medium px-2 py-1 rounded-full', 
                  job.type === 'Tiempo completo' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                ]">
                  {{ job.type }}
                </span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="(skill, index) in job.skills" :key="index" class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-6 md:mt-0 flex flex-col items-center">
            <button class="w-full md:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors mb-3">
              Aplicar ahora
            </button>
            <button class="w-full md:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Job Content -->
    <section class="container mx-auto px-4 py-6">
      <div class="md:flex md:gap-8">
        <!-- Main Content -->
        <div class="md:w-2/3">
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Descripción del puesto</h2>
            <div class="prose max-w-none text-gray-700">
              <p class="mb-4">{{ job.description }}</p>
              <p class="mb-4">Somos una empresa líder en el sector logístico con más de 15 años de experiencia. Actualmente, estamos en búsqueda de un {{ job.title }} para unirse a nuestro equipo en {{ job.location }}.</p>
              
              <h3 class="text-lg font-medium text-gray-900 mt-6 mb-3">Responsabilidades:</h3>
              <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Operar equipos de montacargas de manera segura y eficiente en el almacén.</li>
                <li>Cargar y descargar mercancías de camiones y contenedores.</li>
                <li>Organizar y almacenar productos según los procedimientos establecidos.</li>
                <li>Realizar inventarios periódicos y mantener registros precisos.</li>
                <li>Verificar la calidad y cantidad de los productos recibidos y enviados.</li>
                <li>Mantener el área de trabajo limpia y ordenada.</li>
                <li>Cumplir con todas las normas de seguridad y procedimientos operativos.</li>
              </ul>

              <h3 class="text-lg font-medium text-gray-900 mt-6 mb-3">Requisitos:</h3>
              <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Experiencia mínima de 2 años como operador de montacargas en entorno logístico.</li>
                <li>Carnet de carretillero vigente.</li>
                <li>Conocimientos de sistemas de gestión de almacenes (WMS).</li>
                <li>Capacidad para trabajar en equipo y bajo presión.</li>
                <li>Disponibilidad para trabajar en turnos rotativos.</li>
                <li>Valorable experiencia en manejo de radiofrecuencia.</li>
              </ul>

              <h3 class="text-lg font-medium text-gray-900 mt-6 mb-3">Ofrecemos:</h3>
              <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Contrato indefinido tras periodo de prueba.</li>
                <li>Salario competitivo: {{ job.salary }}</li>
                <li>Jornada completa de lunes a viernes.</li>
                <li>Formación continua y posibilidades de desarrollo profesional.</li>
                <li>Beneficios sociales: seguro médico, ticket restaurante.</li>
                <li>Buen ambiente laboral en empresa en crecimiento.</li>
              </ul>

              <p class="mt-6 text-gray-700">Si cumples con los requisitos y estás interesado en formar parte de nuestro equipo, ¡esperamos tu candidatura!</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Ubicación</h2>
            <div class="h-64 bg-gray-200 rounded-lg mb-4">
              <!-- Aquí iría un mapa real -->
              <div class="w-full h-full flex items-center justify-center text-gray-500">
                <span>Mapa de ubicación</span>
              </div>
            </div>
            <p class="text-gray-700">{{ job.company }} - {{ job.location }}</p>
            <p class="text-gray-700">Polígono Industrial Norte, Calle Logística 23</p>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="md:w-1/3">
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Resumen</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-sm font-medium text-gray-500">Fecha de publicación</h3>
                <p class="text-gray-900">15 de mayo de 2025</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500">Tipo de contrato</h3>
                <p class="text-gray-900">{{ job.type }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500">Salario</h3>
                <p class="text-gray-900">{{ job.salary }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500">Experiencia requerida</h3>
                <p class="text-gray-900">2+ años</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500">Educación</h3>
                <p class="text-gray-900">Formación Profesional</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500">Idiomas</h3>
                <p class="text-gray-900">Español (Nativo)</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Sobre la empresa</h2>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                <img :src="job.companyLogo" :alt="job.company" class="max-w-full max-h-full" />
              </div>
              <div>
                <h3 class="font-medium text-gray-900">{{ job.company }}</h3>
                <a href="#" class="text-blue-700 text-sm hover:underline">Ver perfil</a>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Empresa líder en el sector logístico con más de 15 años de experiencia. Ofrecemos soluciones integrales de almacenamiento, transporte y distribución a nivel nacional e internacional.
            </p>
            <div class="flex items-center text-gray-600 text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Logística y Transporte
            </div>
            <div class="flex items-center text-gray-600 text-sm mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              50-200 empleados
            </div>
            <div class="flex items-center text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              www.logisticaglobal.com
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Empleos similares</h2>
            <div class="space-y-4">
              <div v-for="(similarJob, index) in similarJobs" :key="index" class="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h3 class="font-medium text-gray-900 mb-1">{{ similarJob.title }}</h3>
                <p class="text-gray-600 text-sm mb-1">{{ similarJob.company }}</p>
                <div class="flex items-center text-gray-600 text-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ similarJob.location }}
                </div>
                <a href="#" class="text-blue-700 text-sm hover:underline">Ver oferta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section class="container mx-auto px-4 py-6 mb-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Aplicar a esta oferta</h2>
        <form class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input type="tel" id="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
              <input type="text" id="location" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          
          <div>
            <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">Experiencia relevante</label>
            <textarea id="experience" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">CV / Currículum</label>
            <div class="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-sm text-gray-600 mb-1">Arrastra y suelta tu CV aquí o</p>
              <button type="button" class="text-blue-700 font-medium text-sm hover:text-blue-800">selecciona un archivo</button>
              <p class="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max. 5MB)</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="terms" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            </div>
            <div class="ml-3 text-sm">
              <label for="terms" class="text-gray-700">Acepto que mis datos sean almacenados y procesados según la <a href="#" class="text-blue-700 hover:underline">política de privacidad</a></label>
            </div>
          </div>
          
          <div class="flex justify-end">
            <button type="submit" class="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors">
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref } from 'vue'

// UI state
const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const goBack = () => {
  // Aquí iría la lógica para volver atrás
  console.log('Volver atrás')
}

// Datos de ejemplo para la vacante
const job = ref({
  id: 1,
  title: 'Operador de Montacargas',
  company: 'Logística Global S.A.',
  companyLogo: '/placeholder.svg?height=50&width=50&query=company+logo',
  type: 'Tiempo completo',
  location: 'Madrid, España',
  posted: 'Hace 2 días',
  salary: '24.000€ - 28.000€ anuales',
  description: 'Buscamos operador de montacargas con experiencia mínima de 2 años en almacén logístico. Responsable de carga, descarga y organización de mercancías.',
  skills: ['Montacargas', 'Almacén', 'Logística', 'Carnet de carretillero']
})

// Datos de ejemplo para trabajos similares
const similarJobs = ref([
  {
    title: 'Operador de Montacargas Senior',
    company: 'Distribuciones Express',
    location: 'Madrid, España'
  },
  {
    title: 'Auxiliar de Almacén',
    company: 'Logística Rápida',
    location: 'Getafe, Madrid'
  },
  {
    title: 'Mozo de Almacén',
    company: 'Transportes Internacionales',
    location: 'Alcalá de Henares, Madrid'
  }
])
</script>