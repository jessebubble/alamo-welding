import Nav from './nav'

export default function NavHero() {
    return (
        <>
        <Nav />

        <main className='bg-slate-900 lg:-mt-24'>
            <div className='relative pt-6 pb-16 sm:pb-24'>
                <main className="">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                <div>
                                    <a href="/careers" className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                                        <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">We're hiring</span>
                                        <span className="ml-4 text-sm">Visit our careers page</span>
                                        {/* <!-- Heroicon name: mini/chevron-right --> */}
                                        <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                                        Residential, Commercial and Custom Projects
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Alamo Welding is a family owned and operated business that serves the San Antonio community. We specialize in custom metal fabrication, welding, and repairs. We are also a licensed and insured contractor.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                                <div className="sm:mx-auto sm:w-full sm:max-w-2xl sm:overflow-hidden sm:rounded-lg">
                                    <div className="px-4 py-8 sm:px-10">
                                        <div>
                                            <img
                                                className="w-full hover:opacity-90 transition ease-in-out duration-150"
                                                src='./welderhero.jpg'
                                                alt='welder'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </main>
        </>
    );
}