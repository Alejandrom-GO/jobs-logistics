<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center text-sm text-gray-600">
        <a href="#" class="hover:text-blue-700">Inicio</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" class="hover:text-blue-700">Empresas</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-800 font-medium">{{ company.name }}</span>
      </div>
    </div>

    <!-- Company Profile Header -->
    <section class="container mx-auto px-4 py-6">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-gradient-to-r from-blue-800 to-blue-900 h-32 relative">
          <img 
            :src="company.coverImage" 
            alt="Portada de la empresa" 
            class="w-full h-full object-cover opacity-30"
          />
        </div>
        <div class="px-6 pb-6">
          <div class="flex flex-col md:flex-row md:items-end -mt-16 mb-4">
            <div class="w-32 h-32 bg-white rounded-lg border-4 border-white flex items-center justify-center overflow-hidden">
              <img :src="company.logo" :alt="company.name" class="max-w-full max-h-full" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6 md:mb-2">
              <h1 class="text-2xl font-bold text-gray-900">{{ company.name }}</h1>
              <p class="text-lg text-blue-700">{{ company.industry }}</p>
            </div>
            <div class="mt-4 md:mt-0 md:ml-auto flex flex-col md:flex-row gap-3">
              <button class="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-medium transition-colors">
                Ver vacantes
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
              {{ company.location }}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {{ company.industry }}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {{ company.size }}
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <a href="#" class="hover:text-blue-700">{{ company.website }}</a>
            </div>
          </div>
          
          <p class="text-gray-700">
            {{ company.shortDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- Company Content -->
    <section class="container mx-auto px-4 py-6">
      <div class="md:flex md:gap-8">
        <!-- Main Content -->
        <div class="md:w-2/3">
          <!-- About Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sobre nosotros
            </h2>
            
            <div class="prose max-w-none text-gray-700">
              <p class="mb-4">{{ company.about }}</p>
              
              <h3 class="text-lg font-medium text-gray-900 mt-6 mb-3">Nuestra misión</h3>
              <p class="mb-4">{{ company.mission }}</p>
              
              <h3 class="text-lg font-medium text-gray-900 mt-6 mb-3">Nuestra visión</h3>
              <p class="mb-4">{{ company.vision }}</p>
              
              <h3 class="text-lg font-medium text-gray-900 mt-6 mb-3">Nuestros valores</h3>
              <ul class="list-disc pl-5 mb-4 space-y-2">
                <li v-for="(value, index) in company.values" :key="index">{{ value }}</li>
              </ul>
            </div>
          </div>
          
          <!-- Gallery Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Galería
            </h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(image, index) in company.gallery" :key="index" class="rounded-lg overflow-hidden h-48">
                <img :src="image" :alt="`Imagen ${index + 1} de ${company.name}`" class="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
              </div>
            </div>
          </div>
          
          <!-- Benefits Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Beneficios para empleados
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(benefit, index) in company.benefits" :key="index" class="flex items-start">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{{ benefit.title }}</h3>
                  <p class="text-sm text-gray-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonials Section -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Testimonios de empleados
            </h2>
            
            <div class="space-y-6">
              <div v-for="(testimonial, index) in company.testimonials" :key="index" class="border-l-4 border-blue-700 pl-4 py-2">
                <p class="text-gray-700 italic mb-2">{{ testimonial.text }}</p>
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-2">
                    {{ testimonial.initials }}
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">{{ testimonial.name }}</p>
                    <p class="text-sm text-gray-600">{{ testimonial.position }}</p>
                  </div>
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
                  <p class="text-gray-900">{{ company.email }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">Teléfono</p>
                  <p class="text-gray-900">{{ company.phone }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">Dirección</p>
                  <p class="text-gray-900">{{ company.address }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">Sitio web</p>
                  <a href="#" class="text-blue-700 hover:underline">{{ company.website }}</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Location Map -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Ubicación</h2>
            <div class="h-64 bg-gray-200 rounded-lg mb-4">
              <!-- Aquí iría un mapa real -->
              <div class="w-full h-full flex items-center justify-center text-gray-500">
                <span>Mapa de ubicación</span>
              </div>
            </div>
            <p class="text-gray-700">{{ company.address }}</p>
          </div>
          
          <!-- Open Positions -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Vacantes Abiertas</h2>
            <div class="space-y-4">
              <div v-for="(job, index) in company.openPositions" :key="index" class="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h3 class="font-medium text-gray-900 mb-1">{{ job.title }}</h3>
                <div class="flex items-center text-gray-600 text-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ job.location }}
                </div>
                <div class="flex items-center text-gray-600 text-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ job.posted }}
                </div>
                <a href="#" class="text-blue-700 text-sm hover:underline">Ver detalles</a>
              </div>
            </div>
            <div class="mt-4 text-center">
              <a href="#" class="text-blue-700 font-medium hover:underline">Ver todas las vacantes</a>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Redes Sociales</h2>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Similar Companies -->
    <section class="container mx-auto px-4 py-6 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Empresas similares</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(similarCompany, index) in similarCompanies" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-32 bg-gray-200 relative">
            <img 
              :src="similarCompany.coverImage" 
              alt="Portada de la empresa" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white rounded-md border border-gray-200 flex items-center justify-center mr-3 overflow-hidden">
                <img :src="similarCompany.logo" :alt="similarCompany.name" class="max-w-full max-h-full" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{ similarCompany.name }}</h3>
                <p class="text-sm text-gray-600">{{ similarCompany.industry }}</p>
              </div>
            </div>
            <p class="text-gray-700 text-sm mb-4 line-clamp-2">{{ similarCompany.description }}</p>
            <div class="flex items-center text-gray-600 text-xs mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ similarCompany.location }}
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-600">{{ similarCompany.openings }} vacantes abiertas</span>
              <a href="#" class="text-blue-700 text-sm font-medium hover:underline">Ver perfil</a>
            </div>
          </div>
        </div>
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

// Datos de ejemplo para la empresa
const company = ref({
  id: 1,
  name: 'Logística Global S.A.',
  industry: 'Logística y Transporte',
  logo: '/placeholder.svg?height=100&width=100&query=logistics+company+logo',
  coverImage: '/placeholder.svg?height=300&width=1200&query=logistics+warehouse+panorama',
  location: 'Madrid, España',
  size: '50-200 empleados',
  website: 'www.logisticaglobal.com',
  email: 'info@logisticaglobal.com',
  phone: '+34 912 345 678',
  address: 'Polígono Industrial Norte, Calle Logística 23, 28001 Madrid',
  shortDescription: 'Empresa líder en el sector logístico con más de 15 años de experiencia. Ofrecemos soluciones integrales de almacenamiento, transporte y distribución a nivel nacional e internacional.',
  about: 'Fundada en 2010, Logística Global S.A. se ha convertido en un referente en el sector logístico español. Comenzamos como una pequeña empresa de transporte local y hoy contamos con una flota de más de 50 vehículos y 3 centros logísticos estratégicamente ubicados en Madrid, Barcelona y Valencia. Nuestra experiencia y compromiso con la calidad nos han permitido crecer de manera sostenida, ofreciendo soluciones personalizadas a cada uno de nuestros clientes.',
  mission: 'Nuestra misión es proporcionar soluciones logísticas eficientes y de calidad que contribuyan al éxito de nuestros clientes, mediante un servicio personalizado y adaptado a sus necesidades específicas.',
  vision: 'Ser reconocidos como el socio logístico de referencia en España, destacando por nuestra innovación, eficiencia y compromiso con la excelencia en el servicio.',
  values: [
    'Compromiso con la calidad y la excelencia en cada servicio',
    'Innovación constante en procesos y tecnología',
    'Responsabilidad social y medioambiental',
    'Trabajo en equipo y desarrollo profesional',
    'Orientación al cliente y adaptabilidad'
  ],
  gallery: [
    '/placeholder.svg?height=300&width=400&query=logistics+warehouse+interior',
    '/placeholder.svg?height=300&width=400&query=logistics+trucks+fleet',
    '/placeholder.svg?height=300&width=400&query=logistics+workers+warehouse',
    '/placeholder.svg?height=300&width=400&query=logistics+office+team',
    '/placeholder.svg?height=300&width=400&query=logistics+forklift+operation',
    '/placeholder.svg?height=300&width=400&query=logistics+distribution+center'
  ],
  benefits: [
    {
      title: 'Formación continua',
      description: 'Programas de desarrollo profesional y formación especializada en el sector logístico.'
    },
    {
      title: 'Seguro médico privado',
      description: 'Cobertura médica completa para empleados y condiciones especiales para familiares.'
    },
    {
      title: 'Horario flexible',
      description: 'Posibilidad de adaptar horarios según necesidades personales y familiares.'
    },
    {
      title: 'Plan de carrera',
      description: 'Oportunidades de crecimiento y promoción interna basadas en el desempeño.'
    },
    {
      title: 'Ticket restaurante',
      description: 'Ayuda para comidas en días laborables mediante tarjeta de ticket restaurante.'
    },
    {
      title: 'Eventos de equipo',
      description: 'Actividades regulares para fomentar el compañerismo y buen ambiente laboral.'
    }
  ],
  testimonials: [
    {
      text: 'Llevo 5 años trabajando en Logística Global y lo que más valoro es el ambiente de trabajo y las oportunidades de crecimiento. He pasado de ser auxiliar de almacén a coordinador de operaciones gracias a la formación y apoyo recibidos.',
      name: 'Miguel Sánchez',
      initials: 'MS',
      position: 'Coordinador de Operaciones'
    },
    {
      text: 'La empresa realmente se preocupa por el bienestar de sus empleados. El horario flexible me permite conciliar mi vida laboral y familiar, algo que valoro enormemente.',
      name: 'Laura Martínez',
      initials: 'LM',
      position: 'Responsable de Administración'
    },
    {
      text: 'Lo que más me gusta de trabajar aquí es la constante innovación. Siempre estamos implementando nuevas tecnologías y mejorando procesos, lo que hace que el trabajo sea dinámico y nunca rutinario.',
      name: 'David García',
      initials: 'DG',
      position: 'Jefe de Almacén'
    }
  ],
  openPositions: [
    {
      title: 'Operador de Montacargas',
      location: 'Madrid, España',
      posted: 'Hace 2 días'
    },
    {
      title: 'Coordinador de Logística',
      location: 'Barcelona, España',
      posted: 'Hace 1 semana'
    },
    {
      title: 'Auxiliar de Almacén',
      location: 'Valencia, España',
      posted: 'Hace 3 días'
    },
    {
      title: 'Conductor de Reparto',
      location: 'Madrid, España',
      posted: 'Hace 1 día'
    }
  ]
})

// Datos de ejemplo para empresas similares
const similarCompanies = ref([
  {
    name: 'Transportes Rápidos',
    industry: 'Transporte y Distribución',
    logo: '/placeholder.svg?height=50&width=50&query=transport+company+logo',
    coverImage: '/placeholder.svg?height=150&width=300&query=transport+trucks+fleet',
    location: 'Barcelona, España',
    description: 'Empresa especializada en transporte urgente y distribución de mercancías a nivel nacional.',
    openings: 5
  },
  {
    name: 'Almacenes Express',
    industry: 'Almacenamiento',
    logo: '/placeholder.svg?height=50&width=50&query=warehouse+company+logo',
    coverImage: '/placeholder.svg?height=150&width=300&query=modern+warehouse+interior',
    location: 'Valencia, España',
    description: 'Soluciones de almacenamiento y gestión de inventario para empresas de todos los tamaños.',
    openings: 3
  },
  {
    name: 'Cadena de Suministro Integral',
    industry: 'Logística Integral',
    logo: '/placeholder.svg?height=50&width=50&query=supply+chain+logo',
    coverImage: '/placeholder.svg?height=150&width=300&query=supply+chain+management',
    location: 'Sevilla, España',
    description: 'Servicios completos de gestión de cadena de suministro, desde aprovisionamiento hasta distribución.',
    openings: 7
  }
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>