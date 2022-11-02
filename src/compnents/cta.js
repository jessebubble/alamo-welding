

export default function CTA() {
    return (
        <main className="relative bg-gray-800">
            <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img 
                    className="h-full w-full object-cover" 
                    src="./welder2.jpg" 
                    alt="welder"
                />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-lg font-semibold text-gray-300">
                        Texas sized support
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        We're here to help
                    </p>
                    <p className="mt-3 text-lg text-gray-300">
                        We're here to help bring your vision to life.
                        Let's collaborate and build something great together.
                        Contact us today to get started.
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                            <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                Contact us today
                                {/* <!-- Heroicon name: mini/arrow-top-right-on-square --> */}
                                <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}