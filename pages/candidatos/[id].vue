<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center text-sm text-gray-600">
        <a href="#" class="hover:text-blue-700">Inicio</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" class="hover:text-blue-700">Candidatos</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-800 font-medium">{{ candidate.name }}</span>
      </div>
    </div>

    <!-- Candidate Profile Header -->
    <section class="container mx-auto px-4 py-6">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-gradient-to-r from-blue-800 to-blue-900 h-32"></div>
        <div class="px-6 pb-6">
          <div class="flex flex-col md:flex-row md:items-end -mt-16 mb-4">
            <div class="w-32 h-32 bg-blue-100 rounded-full border-4 border-white flex items-center justify-center text-blue-700 font-bold text-4xl">
              {{ candidate.initials }}
            </div>
            <div class="mt-4 md:mt-0 md:ml-6 md:mb-2">
              <h1 class="text-2xl font-bold text-gray-900">{{ candidate.name }}</h1>
              <p class="text-lg text-blue-700">{{ candidate.title }}</p>
            </div>
            <div class="mt-4 md:mt-0 md:ml-auto flex flex-col md:flex-row gap-3">
              <button class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors">
                Contactar
              </button>
              <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Compartir
              </button>
              <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Guardar
              </button>
            </div>
          </div>
          
          <div class="flex flex-wrap items-center text-gray-600 text-sm gap-4 mb-4">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ candidate.location }}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ candidate.experience }}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ candidate.salary }}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
              Disponibilidad inmediata
            </div>
          </div>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="(skill, index) in candidate.skills" :key="index" class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              {{ skill }}
            </span>
          </div>
          
          <p class="text-gray-700">
            {{ candidate.summary }}
          </p>
        </div>
      </div>
    </section>

    <!-- Candidate Content -->
    <section class="container mx-auto px-4 py-6">
      <div class="md:flex md:gap-8">
        <!-- Main Content -->
        <div class="md:w-2/3">
          <!-- Experience Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experiencia Laboral
            </h2>
            
            <div class="space-y-6">
              <div v-for="(job, index) in candidate.experience_list" :key="index" class="border-l-2 border-gray-200 pl-4 ml-2">
                <div class="relative">
                  <div class="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-blue-700"></div>
                  <h3 class="text-lg font-medium text-gray-900">{{ job.title }}</h3>
                  <p class="text-blue-700">{{ job.company }}</p>
                  <p class="text-sm text-gray-600 mb-2">{{ job.period }}</p>
                  <p class="text-gray-700">{{ job.description }}</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="(skill, skillIndex) in job.skills" :key="skillIndex" class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Education Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Educación
            </h2>
            
            <div class="space-y-6">
              <div v-for="(edu, index) in candidate.education" :key="index" class="border-l-2 border-gray-200 pl-4 ml-2">
                <div class="relative">
                  <div class="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-blue-700"></div>
                  <h3 class="text-lg font-medium text-gray-900">{{ edu.degree }}</h3>
                  <p class="text-blue-700">{{ edu.institution }}</p>
                  <p class="text-sm text-gray-600">{{ edu.period }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Certifications Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certificaciones
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(cert, index) in candidate.certifications" :key="index" class="border border-gray-200 rounded-md p-4">
                <h3 class="font-medium text-gray-900">{{ cert.name }}</h3>
                <p class="text-sm text-gray-600">{{ cert.issuer }} - {{ cert.date }}</p>
              </div>
            </div>
          </div>
          
          <!-- Languages Section -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Idiomas
            </h2>
            
            <div class="space-y-4">
              <div v-for="(lang, index) in candidate.languages" :key="index" class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium text-gray-900">{{ lang.language }}</h3>
                  <p class="text-sm text-gray-600">{{ lang.level }}</p>
                </div>
                <div class="w-32 bg-gray-200 rounded-full h-2.5">
                  <div class="bg-blue-700 h-2.5 rounded-full" :style="{ width: lang.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="md:w-1/3 mt-6 md:mt-0">
          <!-- Contact Information -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h2>
            <div class="space-y-3">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">Email</p>
                  <p class="text-gray-900">{{ candidate.email }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">Teléfono</p>
                  <p class="text-gray-900">{{ candidate.phone }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">Ubicación</p>
                  <p class="text-gray-900">{{ candidate.location }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">LinkedIn</p>
                  <a href="#" class="text-blue-700 hover:underline">linkedin.com/in/{{ candidate.linkedin }}</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- CV Download -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Currículum</h2>
            <div class="border border-gray-200 rounded-md p-4 flex items-center justify-between">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="font-medium text-gray-900">CV_CarlosRodriguez.pdf</p>
                  <p class="text-sm text-gray-600">PDF, 2.4 MB</p>
                </div>
              </div>
              <button class="text-blue-700 hover:text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Skills Assessment -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Habilidades</h2>
            <div class="space-y-4">
              <div v-for="(skill, index) in candidate.skill_assessment" :key="index">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-900 font-medium">{{ skill.name }}</span>
                  <span class="text-gray-600 text-sm">{{ skill.level }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-blue-700 h-2.5 rounded-full" :style="{ width: skill.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Similar Candidates -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Candidatos Similares</h2>
            <div class="space-y-4">
              <div v-for="(similar, index) in similarCandidates" :key="index" class="flex items-start">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                  {{ similar.initials }}
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{{ similar.name }}</h3>
                  <p class="text-sm text-gray-600">{{ similar.title }}</p>
                  <a href="#" class="text-blue-700 text-sm hover:underline">Ver perfil</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="container mx-auto px-4 py-6 mb-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Contactar con {{ candidate.name }}</h2>
        <form class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
              <input type="text" id="company" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input type="tel" id="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea id="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
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
            <button type="submit" class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors">
              Enviar mensaje
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

// Datos de ejemplo para el candidato
const candidate = ref({
  id: 1,
  name: 'Carlos Rodríguez',
  initials: 'CR',
  title: 'Operador de Montacargas Senior',
  location: 'Madrid, España',
  experience: '5 años de experiencia',
  salary: '25.000€ - 30.000€ anuales',
  email: 'carlos.rodriguez@email.com',
  phone: '+34 612 345 678',
  linkedin: 'carlosrodriguez',
  summary: 'Operador de montacargas con más de 5 años de experiencia en el sector logístico. Especializado en la gestión eficiente de almacenes y manejo de equipos de carga. Certificado en seguridad y manejo de mercancías peligrosas. Busco nuevas oportunidades para aplicar mi experiencia y habilidades en una empresa líder del sector.',
  skills: ['Montacargas', 'Almacén', 'Logística', 'Carnet de carretillero', 'Gestión de inventario', 'Mercancías peligrosas'],
  experience_list: [
    {
      title: 'Operador de Montacargas Senior',
      company: 'Logística Global S.A.',
      period: 'Enero 2022 - Presente',
      description: 'Responsable de la operación de montacargas en almacén de gran volumen. Coordinación de carga y descarga de mercancías. Gestión de inventario y optimización de espacios.',
      skills: ['Montacargas', 'Gestión de inventario', 'Coordinación de equipo']
    },
    {
      title: 'Operador de Montacargas',
      company: 'Distribuciones Express',
      period: 'Marzo 2019 - Diciembre 2021',
      description: 'Manejo de montacargas para carga y descarga de camiones. Organización de mercancías en almacén según procedimientos establecidos. Participación en inventarios periódicos.',
      skills: ['Montacargas', 'Almacén', 'Inventario']
    },
    {
      title: 'Auxiliar de Almacén',
      company: 'Transportes Rápidos',
      period: 'Junio 2017 - Febrero 2019',
      description: 'Apoyo en tareas generales de almacén. Preparación de pedidos y embalaje de mercancías. Verificación de albaranes y documentación.',
      skills: ['Picking', 'Packing', 'Control documental']
    }
  ],
  education: [
    {
      degree: 'Técnico Superior en Logística y Transporte',
      institution: 'Instituto de Formación Profesional Madrid',
      period: '2015 - 2017'
    },
    {
      degree: 'Bachillerato',
      institution: 'IES San Isidro',
      period: '2013 - 2015'
    }
  ],
  certifications: [
    {
      name: 'Carnet de Carretillero',
      issuer: 'AENOR',
      date: '2022'
    },
    {
      name: 'Manipulación de Mercancías Peligrosas',
      issuer: 'Instituto de Seguridad Laboral',
      date: '2021'
    },
    {
      name: 'Prevención de Riesgos Laborales',
      issuer: 'FREMAP',
      date: '2020'
    },
    {
      name: 'Gestión de Almacenes',
      issuer: 'Cámara de Comercio de Madrid',
      date: '2019'
    }
  ],
  languages: [
    {
      language: 'Español',
      level: 'Nativo',
      percentage: 100
    },
    {
      language: 'Inglés',
      level: 'Intermedio (B1)',
      percentage: 60
    },
    {
      language: 'Portugués',
      level: 'Básico (A2)',
      percentage: 30
    }
  ],
  skill_assessment: [
    {
      name: 'Operación de montacargas',
      level: 'Avanzado',
      percentage: 90
    },
    {
      name: 'Gestión de inventario',
      level: 'Intermedio',
      percentage: 75
    },
    {
      name: 'Coordinación de equipo',
      level: 'Intermedio',
      percentage: 70
    },
    {
      name: 'Software WMS',
      level: 'Intermedio',
      percentage: 65
    },
    {
      name: 'Mercancías peligrosas',
      level: 'Avanzado',
      percentage: 85
    }
  ]
})

// Datos de ejemplo para candidatos similares
const similarCandidates = ref([
  {
    name: 'Miguel Sánchez',
    initials: 'MS',
    title: 'Operador de Montacargas'
  },
  {
    name: 'Laura Martínez',
    initials: 'LM',
    title: 'Auxiliar de Almacén'
  },
  {
    name: 'David García',
    initials: 'DG',
    title: 'Operador Logístico'
  }
])
</script>