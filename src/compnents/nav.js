import { ReactComponent as Logo} from '../alamowelding.svg'
import { Menu, Transition } from '@headlessui/react'

export default function Nav() {
    return (

        <main className="relative bg-black">
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
                                    <span className="sr-only">company logo</span>
                                    <Logo className='w-60 lg:w-44 h-full'/> 
                                </a>
                            </div>
                            <div className="hidden space-x-10 md:ml-10 md:flex">
                                <a href="/services" className="font-medium text-white hover:text-gray-300">Services</a>
                                <a href="/projects" className="font-medium text-white hover:text-gray-300">Custom Projects</a>
                                <a href="/contact" className="font-medium text-white hover:text-gray-300">Contact Us</a>
                                <a href="/about" className="font-medium text-white hover:text-gray-300">About</a>
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
                                    <a href="/">
                                        <Logo className='w-60 h-full'/> 
                                    </a>
                                </div>
                                <div className="-mr-2 flex items-center">
                                    <Menu>
                                        <Menu.Button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100">
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
                                            <Menu.Items className='flex flex-col items-start space-y-1 px-2 pt-2 pb-3'>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-orange-300'>
                                                    {({ active }) => (
                                                        <a href="/services" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>Services</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-300'>
                                                    {({ active }) => (
                                                        <a href="/projects" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>Custom Projects</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-300'>
                                                    {({ active }) => (
                                                        <a href="/contact" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>Contact Us</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-300'>
                                                    {({ active }) => (
                                                        <a href="/about" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>About</a>
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
            </div>
        </main>
    )
}