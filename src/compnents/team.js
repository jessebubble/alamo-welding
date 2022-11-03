

export default function Team() {
    return (
        <main class="bg-gray-900">
            <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Meet our team
                        </h2>
                        <p class="text-xl text-gray-300">
                            We're a team of experienced, licensed and insured welding professionals with a wide range of skills and expertise. Let's collaborate and bring your vision to life.
                        </p>
                    </div>
                    <div role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        <div class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img 
                                    class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover" 
                                    src="./jupiter.jpg" 
                                    alt="ceo"
                                />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-white">Jupiter Hernandez</h3>
                                        <p class="text-indigo-400">CEO / Alamo Welding</p>
                                    </div>
                                    <div role="list" class="flex justify-center space-x-5">
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- More people... --> */}
                        <div class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img 
                                    class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover" 
                                    src="./welder1.jpg" 
                                    alt="ceo"
                                />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-white">Jorge Rodriguez</h3>
                                        <p class="text-indigo-400">Residential Team Lead</p>
                                    </div>
                                    <div role="list" class="flex justify-center space-x-5">
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img 
                                    class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover" 
                                    src="./welder2.jpg" 
                                    alt="ceo"
                                />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-white">Anthony </h3>
                                        <p class="text-indigo-400">Commercial Team Lead</p>
                                    </div>
                                    <div role="list" class="flex justify-center space-x-5">
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img 
                                    class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover" 
                                    src="./welder5.jpg" 
                                    alt="ceo"
                                />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-white">Fernando</h3>
                                        <p class="text-indigo-400">Custom Project Team Lead</p>
                                    </div>
                                    <div role="list" class="flex justify-center space-x-5">
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img 
                                    class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover" 
                                    src="./welder4.jpg" 
                                    alt="ceo"
                                />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-white">Javier</h3>
                                        <p class="text-indigo-400">Licensed Welder</p>
                                    </div>
                                    <div role="list" class="flex justify-center space-x-5">
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img 
                                    class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover" 
                                    src="./welder3.jpg" 
                                    alt="ceo"
                                />
                                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div class="space-y-1 text-lg font-medium leading-6">
                                        <h3 class="text-white">Alex</h3>
                                        <p class="text-indigo-400">Licensed Welder</p>
                                    </div>
                                    <div role="list" class="flex justify-center space-x-5">
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/" class="text-gray-400 hover:text-gray-300">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    )
  }
  