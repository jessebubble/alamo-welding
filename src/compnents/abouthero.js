
export default function AboutHero() {

    return (
        <div className="relative overflow-hidden bg-white pb-10 md:pb-16 lg:pb-20 lg:-mt-10">
            <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
                <svg className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform" width="640" height="784" fill="none" viewBox="0 0 640 784">
                    <defs>
                        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                </svg>
            </div>
            <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                        <h1>
                            <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">Alamo Welding</span>
                            <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                                <span className="block text-gray-900">Building | Creating</span>
                                <span className="block text-indigo-600 ">for the alamo city</span>
                            </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            We're a local team that is passionate about our craft and our growing community. We're dedicated to providing the best welding services for our city and bringing your vision to life.

                        </p> 
                    </div>
                    <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                        <svg className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                            <defs>
                                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                            <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                        </svg>
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <button type="button" className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span className="sr-only">Watch our video to learn more</span>
                                    <video
                                        autoPlay
                                        muted
                                        loop controls
                                        preload="auto"
                                        className="w-full">
                                        <source
                                            src="./welder.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}