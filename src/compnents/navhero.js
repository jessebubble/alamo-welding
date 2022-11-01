import { ReactComponent as Logo} from '../alamowelding.svg'
import { Menu, Transition } from '@headlessui/react'

export default function NavHero() {
    return (

        <main className="relative overflow-hidden bg-slate-900 lg:mb-1">
            <div className="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
                <svg className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-white lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none" width="364" height="384" viewBox="0 0 364 384" fill="none">
                    <defs>
                        <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="364" height="384" fill="url(/eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24">
                <div>
                    <nav className="relative mx-auto flex max-w-7xl items-center justify-evenly px-4 sm:px-6" aria-label="Global">
                        <div className="flex flex-1 items-center justify-between">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <a href="/">
                                    <span className="sr-only">Your Company</span>
                                    <Logo className='w-60 lg:w-44 h-full'/> 
                                </a>
                            </div>
                            <div className="hidden space-x-10 md:ml-10 md:flex">
                                <a href="/" className="font-medium text-orange-500 hover:text-gray-300">Services</a>
                                <a href="/" className="font-medium text-white hover:text-gray-300">Custom Projects</a>
                                <a href="/" className="font-medium text-white hover:text-gray-300">Contact Us</a>
                                <a href="/" className="font-medium text-white hover:text-gray-300">About</a>
                            </div>
                        </div>
                    </nav>
            {/*         <!--
                        Mobile menu, show/hide based on menu open state.

                        Entering: "duration-150 ease-out"
                        From: "opacity-0 scale-95"
                        To: "opacity-100 scale-100"
                        Leaving: "duration-100 ease-in"
                        From: "opacity-100 scale-100"
                        To: "opacity-0 scale-95"
                    --> */}
                    <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                        <div className="overflow-hidden rounded-lg bg-slate-900 shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex flex-col items-center justify-center px-5 pt-4">
                                <div>
                                    <Logo className='w-60 h-full'/> 
                                </div>
                                <div className="-mr-2">
                                    <Menu>
                                        <Menu.Button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 -mt-6">
                                            <span className="sr-only">Open main menu</span>
                                            {/* <!-- Heroicon name: outline/bars-3 --> */}
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        </Menu.Button>
                                        <Transition
                                            enter='transition duration-150 ease-out'
                                            enterFrom='opacity-0 scale-95'
                                            enterTo='opacity-100 scale-100'
                                            leave='transition duration-100 ease-in'
                                            leaveFrom='opacity-100 scale-100'
                                            leaveTo='opacity-0 scale-95'
                                        >
                                            <Menu.Items className='flex items-start space-y-1 px-2 pt-2 pb-3 '>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-orange-300'>
                                                    {({ active }) => (
                                                        <a href="/" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>Services</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-300'>
                                                    {({ active }) => (
                                                        <a href="/" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>Custom Projects</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-300'>
                                                    {({ active }) => (
                                                        <a href="/" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>Contact Us</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-300'>
                                                    {({ active }) => (
                                                        <a href="/" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>About</a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="mt-16 sm:mt-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                <div>
                                    <a href="/" className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
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
                                    <p className="mt-8 text-base font-semibold text-white sm:mt-10">
                                        Used by
                                    </p>
                                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                        <div className="flex flex-wrap items-start justify-between">
                                            <div className="flex justify-center px-1">
                                                <img 
                                                    className="h-9 sm:h-10" 
                                                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" 
                                                    alt="Tuple"
                                                />
                                            </div>
                                            <div className="flex justify-center px-1">
                                                <img 
                                                    className="h-9 sm:h-10" 
                                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" 
                                                    alt="Workcation"
                                                />
                                            </div>
                                            <div className="flex justify-center px-1">
                                                <img 
                                                    className="h-9 sm:h-10" 
                                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" 
                                                    alt="StaticKit"
                                                />
                                            </div>
                                        </div>
                                    </div>
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
    );
}