<template>
  <div class="min-h-screen bg-gray-50 py-4">

    
    <!-- Hero Section -->
    <section class="min-h-screen flex items-start justify-center relative pt-12">
      <div class="container h-[80vh] relative mx-auto pt-12 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg shadow-md">
        

            <!-- Elementos decorativos de fondo -->
            <div class="absolute inset-0 overflow-hidden opacity-10 z-0">
              <div class="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full"></div>
              <div class="absolute top-60 -left-20 w-60 h-60 bg-blue-400 rounded-full"></div>
              <div class="absolute bottom-0 right-20 w-40 h-40 bg-orange-400 rounded-full"></div>
              <svg class="absolute bottom-0 left-0 w-full h-32 text-white/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
              </svg>
            </div>


      <div class="container mx-auto px-4 z-10 relative">
        <div class="bg-white rounded-lg shadow-sm p-2 inline-flex mb-6">
          <button 
            @click="() => setUserType('candidate')" 
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer', 
              userType === 'candidate' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
            ]"
            type="button"
          >
            Soy Candidato
          </button>
          <button 
            @click="() => setUserType('company')" 
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer', 
              userType === 'company' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
            ]"
            type="button"
          >
            Soy Empresa
          </button>
        </div>

        



        <div class="md:flex md:items-center md:justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">



                    <!-- Título principal con animación -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Conectando <span class="text-orange-400 relative">
              Talento<br/>Logístico
              <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 5 C 50 0, 150 0, 200 5" stroke="currentColor" stroke-width="3" fill="none" class="text-orange-400"/>
              </svg>
            </span> con <span class="text-white">Empresas Líderes</span>
          </h1>
          
          <!-- Subtítulo mejorado -->
          <p class="text-white/90 mt-6 text-lg max-w-lg leading-relaxed animate-fade-in-delay">
            Conectamos profesionales con las mejores empresas del sector logístico. Encuentra tu próxima oportunidad y forma parte de la cadena que mueve al mundo
          </p>






                      <!-- Botones de acción mejorados -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button class="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-medium hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              {{ userType === 'candidate' ? 'Buscar Empleos' : 'Publicar Vacante' }}
            </button>
            <button class="px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              Subir CV
            </button>
          </div>



    <!-- Estadísticas mejoradas -->
    <div class="mt-10 grid grid-cols-3 gap-8 animate-fade-in-delay-4">
      <div class="relative">
        <div class="absolute -top-3 -left-3 w-12 h-12 bg-orange-400/20 rounded-full"></div>
        <p class="text-orange-400 text-3xl font-bold relative z-10">+1,500</p>
        <p class="text-white/80 text-sm">Empleos activos</p>
      </div>
      <div class="relative">
        <div class="absolute -top-3 -left-3 w-12 h-12 bg-orange-400/20 rounded-full"></div>
        <p class="text-orange-400 text-3xl font-bold relative z-10">+500</p>
        <p class="text-white/80 text-sm">Empresas</p>
      </div>
      <div class="relative">
        <div class="absolute -top-3 -left-3 w-12 h-12 bg-orange-400/20 rounded-full"></div>
        <p class="text-orange-400 text-3xl font-bold relative z-10">+10,000</p>
        <p class="text-white/80 text-sm">Profesionales</p>
      </div>
    </div>
        


          </div>
          <!-- Imagen derecha mejorada -->
          <div class="md:w-1/2 mb-8 md:mb-0 min-h-100vh">
            <div class="relative">
                <NetworkAnimation />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="container mx-auto px-0 py-0 mb-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          {{ userType === 'candidate' ? 'Buscar Vacantes' : 'Buscar Candidatos' }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Palabra clave</label>
            <input 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :placeholder="userType === 'candidate' ? 'Ej: Operador de montacargas' : 'Ej: Experiencia en almacén'"
            />
          </div>
          
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Ubicación</label>
            <input 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ej: Madrid, Barcelona"
            />
          </div>
          
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">
              {{ userType === 'candidate' ? 'Categoría' : 'Especialidad' }}
            </label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Todas las categorías</option>
              <option value="warehouse">Almacén</option>
              <option value="transport">Transporte</option>
              <option value="supply-chain">Cadena de Suministro</option>
              <option value="inventory">Gestión de Inventario</option>
              <option value="customs">Aduanas</option>
            </select>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-4 mb-4">
          <div class="flex items-center">
            <input type="checkbox" id="fulltime" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="fulltime" class="ml-2 text-sm text-gray-700">Tiempo completo</label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="parttime" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="parttime" class="ml-2 text-sm text-gray-700">Medio tiempo</label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="remote" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="remote" class="ml-2 text-sm text-gray-700">Remoto</label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="experience" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="experience" class="ml-2 text-sm text-gray-700">Con experiencia</label>
          </div>
        </div>
        
        <div class="flex justify-end">
          <button class="w-[200px] px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors " >
            Buscar
          </button>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="container mx-auto px-4 py-8 mb-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold"> {{ userType === 'candidate' ? 'Vacantes Destacadas' : 'Candidatos Destacados' }}</h2>
        <NuxtLink to="/vacantes" class="btn btn-ghost text-orange-500 font-bold flex items-center gap-1 text-lg ">
          {{ userType === 'candidate' ? 'Ver todas' : 'Ver todos' }}  <ArrowRightIcon class="w-5 h-5" />
        </NuxtLink>
      </div>



      <!-- Job Listings -->
      <div v-if="userType === 'candidate'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="job in jobs" :key="job.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <img :src="job.companyLogo" :alt="job.company" class="max-w-full max-h-full hidden" />
                  <BriefcaseIcon class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-gray-900">{{ job.title }}</h3>
                  <p class="text-gray-600">{{ job.company }}</p>
                </div>
              </div>
              <span :class="[
                'text-xs font-medium px-2 py-1 rounded-full', 
                job.type === 'Tiempo completo' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              ]">
                {{ job.type }}
              </span>
            </div>
            
            <div class="space-y-3 mb-4">
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ job.location }}
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ job.posted }}
              </div>
              <div class="flex items-center text-gray-600">
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
            
            <div class="flex justify-between items-center">
              <button class="text-blue-700 hover:text-blue-900 text-sm font-medium">Ver detalles</button>
              <button class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition-colors">
                Aplicar ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Candidate Listings -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="candidate in candidates" :key="candidate.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-700 font-bold text-xl">
                {{ candidate.initials }}
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">{{ candidate.name }}</h3>
                <p class="text-gray-600">{{ candidate.title }}</p>
              </div>
            </div>
            
            <div class="space-y-3 mb-4">
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ candidate.location }}
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ candidate.experience }}
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ candidate.salary }}
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(skill, index) in candidate.skills" :key="index" class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {{ skill }}
              </span>
            </div>
            
            <div class="flex justify-between items-center">
              <button class="text-blue-700 hover:text-blue-900 text-sm font-medium">Ver perfil</button>
              <button class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>

        <!-- Testimonials -->
        <section class="py-20">
          <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold mb-4 text-gray-900">Lo Que Dicen Nuestros Usuarios</h2>
              <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre cómo LogiTalent ha transformado la forma de encontrar talento y oportunidades en el sector logístico.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Testimonial 1 -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="flex items-center mb-6">
                  <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" alt="Carlos Méndez" class="h-16 w-16 rounded-full object-cover mr-4 border-4 border-blue-100">
                  <div>
                    <h4 class="font-semibold text-lg text-gray-900">Carlos Méndez</h4>
                    <p class="text-blue-600 text-sm">Director de Operaciones</p>
                    <p class="text-gray-500 text-sm">FastShip Logistics</p>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="flex text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-600 italic leading-relaxed">
                  "LogiTalent nos ha permitido encontrar personal capacitado para nuestros almacenes en tiempo récord. La plataforma es intuitiva y nos conecta solo con candidatos que realmente cumplen con nuestros requisitos. Hemos reducido nuestro tiempo de contratación en un 40%."
                </p>
              </div>
              
              <!-- Testimonial 2 -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="flex items-center mb-6">
                  <img src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg" alt="Ana Gutiérrez" class="h-16 w-16 rounded-full object-cover mr-4 border-4 border-blue-100">
                  <div>
                    <h4 class="font-semibold text-lg text-gray-900">Ana Gutiérrez</h4>
                    <p class="text-blue-600 text-sm">Coordinadora de Almacén</p>
                    <p class="text-gray-500 text-sm">Logística Pro</p>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="flex text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-600 italic leading-relaxed">
                  "Gracias a LogiTalent encontré una oportunidad laboral que realmente se ajusta a mi experiencia en el sector logístico. La plataforma me permitió destacar mis habilidades específicas y conectarme con empresas que valoraban mi experiencia con WMS y manejo de inventarios."
                </p>
              </div>
    
              <!-- Testimonial 3 -->
              <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="flex items-center mb-6">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Miguel Sánchez" class="h-16 w-16 rounded-full object-cover mr-4 border-4 border-blue-100">
                  <div>
                    <h4 class="font-semibold text-lg text-gray-900">Miguel Sánchez</h4>
                    <p class="text-blue-600 text-sm">Jefe de Operaciones</p>
                    <p class="text-gray-500 text-sm">Global Logistics</p>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="flex text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-600 italic leading-relaxed">
                  "La calidad de los candidatos que encontramos a través de LogiTalent es excepcional. El sistema de filtrado y matching nos permite encontrar exactamente el perfil que necesitamos, lo que ha mejorado significativamente nuestra eficiencia en el proceso de selección."
                </p>
              </div>
            </div>
    
    
          </div>
        </section>


    <section class="how-it-works">
      <div class="container mx-auto px-4">
        <h2 class="section-title">¿Cómo Funciona?</h2>
        <p class="section-description">
          Nuestra plataforma está diseñada para que encuentres exactamente lo que buscas,
          ya sea talento logístico calificado o el trabajo perfecto en el sector.
        </p>
  
        <div class="steps-container">
          <div class="step" v-for="(step, index) in steps" :key="index"
               :class="{ 'active': activeStep === index }"
               @mouseenter="activeStep = index">
            <div class="step-icon-container">
              <div class="step-icon" v-html="step.icon"></div>
            </div>
            <div class="step-number">{{ index + 1 }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
  
        <div class="cta-container">
          <div class="cta-content">
            <h2 class="cta-title">¿Listo para dar el siguiente paso en tu carrera?</h2>
            <p class="cta-description">
              Crea tu perfil hoy y comienza a aplicar a cientos de ofertas en el sector logístico.
            </p>
            <button class="cta-button" @click="createProfile">
              <span>Crear mi perfil</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>




  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import {
  MenuIcon,
  SearchIcon,
  MapPinIcon,
  FilterIcon,
  XIcon,
  BriefcaseIcon,
  BookmarkIcon,
  InboxIcon,
  UserPlusIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  ChevronRightIcon
} from 'lucide-vue-next'

// User state
const isLoggedIn = ref(false)
const userName = ref('Juan Pérez')
const userInitials = ref('JP')
const userType = ref('candidate')

// Función para cambiar el tipo de usuario
function setUserType(type) {
  console.log('Intentando cambiar userType a:', type)
  userType.value = type
  console.log('userType actualizado a:', userType.value)
}

// Watch para debuggear
watch(userType, (newValue, oldValue) => {
  console.log('userType cambió de', oldValue, 'a', newValue)
})

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

// Sample data for jobs
const jobs = [
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
    skills: ['Montacargas', 'Almacén', 'Logística', 'Carnet de carretillero']
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
    skills: ['Gestión de rutas', 'Coordinación', 'Excel avanzado', 'Logística']
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
    skills: ['Picking', 'Inventario', 'Almacén', 'Trabajo en equipo']
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
    skills: ['Gestión de equipos', 'KPIs', 'Optimización', 'Supply Chain']
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
    skills: ['Carnet B', 'Reparto', 'Atención al cliente', 'Puntualidad']
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
    skills: ['Aduanas', 'Incoterms', 'Comercio Internacional', 'Inglés']
  }
]

// Sample data for candidates
const candidates = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    initials: 'CR',
    title: 'Operador de Montacargas Senior',
    location: 'Madrid, España',
    experience: '5 años de experiencia',
    salary: '25.000€ - 30.000€ anuales',
    skills: ['Montacargas', 'Almacén', 'Logística', 'Carnet de carretillero']
  },
  {
    id: 2,
    name: 'Laura Martínez',
    initials: 'LM',
    title: 'Coordinadora de Logística',
    location: 'Barcelona, España',
    experience: '7 años de experiencia',
    salary: '35.000€ - 40.000€ anuales',
    skills: ['Gestión de rutas', 'Coordinación', 'Excel avanzado', 'SAP']
  },
  {
    id: 3,
    name: 'Miguel Sánchez',
    initials: 'MS',
    title: 'Jefe de Almacén',
    location: 'Valencia, España',
    experience: '10 años de experiencia',
    salary: '40.000€ - 45.000€ anuales',
    skills: ['Gestión de equipos', 'Inventario', 'Optimización', 'WMS']
  },
  {
    id: 4,
    name: 'Ana López',
    initials: 'AL',
    title: 'Especialista en Comercio Internacional',
    location: 'Sevilla, España',
    experience: '6 años de experiencia',
    salary: '32.000€ - 38.000€ anuales',
    skills: ['Aduanas', 'Incoterms', 'Inglés', 'Francés']
  },
  {
    id: 5,
    name: 'David García',
    initials: 'DG',
    title: 'Conductor de Reparto',
    location: 'Madrid, España',
    experience: '4 años de experiencia',
    salary: '22.000€ - 26.000€ anuales',
    skills: ['Carnet B', 'Carnet C', 'Reparto', 'Mantenimiento']
  },
  {
    id: 6,
    name: 'Elena Fernández',
    initials: 'EF',
    title: 'Analista de Cadena de Suministro',
    location: 'Barcelona, España',
    experience: '8 años de experiencia',
    salary: '38.000€ - 45.000€ anuales',
    skills: ['Supply Chain', 'KPIs', 'Power BI', 'Inglés']
  }
]



const activeStep = ref(0);

// Iconos como strings HTML en lugar de componentes JSX
const userPlusIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <line x1="19" y1="8" x2="19" y2="14"></line>
  <line x1="16" y1="11" x2="22" y2="11"></line>
</svg>`;

const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`;

const checkCircleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>`;

const steps = [
  {
    icon: userPlusIcon,
    title: 'Crea tu Perfil',
    description: 'Regístrate y completa tu perfil profesional con experiencia, habilidades y preferencias.'
  },
  {
    icon: searchIcon,
    title: 'Explora Oportunidades',
    description: 'Busca empleos que coincidan con tus habilidades y experiencia en logística.'
  },
  {
    icon: checkCircleIcon,
    title: 'Aplica y Conecta',
    description: 'Aplica a las vacantes y conecta directamente con empresas del sector logístico.'
  }
];

const createProfile = () => {
  // Implementar lógica para crear perfil
  console.log('Crear perfil');
};

</script>

<style scoped>
/* Estilos adicionales específicos si son necesarios */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0% { transform: translateY(0px) rotate(6deg); }
  50% { transform: translateY(-10px) rotate(6deg); }
  100% { transform: translateY(0px) rotate(6deg); }
}

@keyframes floatDelay {
  0% { transform: translateY(0px) rotate(-3deg); }
  50% { transform: translateY(-8px) rotate(-3deg); }
  100% { transform: translateY(0px) rotate(-3deg); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
}

.animate-fade-in-delay-2 {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.6s forwards;
}

.animate-fade-in-delay-3 {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.9s forwards;
}

.animate-fade-in-delay-4 {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 1.2s forwards;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delay {
  animation: floatDelay 4s ease-in-out 1s infinite;
}


.how-it-works {
  padding: 5rem 1.5rem;
  font-family: 'Inter', system-ui, sans-serif;
  color: #333;
  background-color: #f8fafc;
}


.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e3a8a;
  letter-spacing: -0.025em;
}

.section-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: #64748b;
  font-size: 1.125rem;
  line-height: 1.6;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.step.active .step-icon-container {
  background-color: #3b82f6;
  color: white;
}

.step-icon-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0f2fe;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  transition: all 0.3s ease;
}

.step-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #3b82f6;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.step-description {
  color: #64748b;
  line-height: 1.6;
}

.cta-container {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 1rem;
  padding: 3rem 2rem;
  color: white;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2);
  margin: 0 auto;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background-color: #f97316;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-button:hover {
  background-color: #ea580c;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .steps-container {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-title {
    font-size: 1.75rem;
  }
}
</style>

