

export default function ContactHeader() {
    return (
        <main class="bg-white lg:-mt-10 ">
            {/* <!-- Header --> */}
            <div class="relative bg-gray-900 pb-32">
                <div class="absolute inset-0">
                    <img 
                        class="h-full w-full object-cover" 
                        src="./welder2.jpg" 
                        alt=""
                    />
                    <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Let's Connect
                    </h1>
                    <p class="mt-6 max-w-3xl text-xl text-gray-300">
                        We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
            </div>

            {/* <!-- Overlapping cards --> */}
            <section class="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
                <h2 class="sr-only" id="contact-heading">Contact us</h2>
                    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                        <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                            <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                                    {/*  <!-- Heroicon name: home --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">
                                    Residential
                                </h3>
                                <p class="mt-4 text-base text-gray-500">
                                    We offer a wide range of services for residential clients. From small repairs to complete home renovations, we can add the style and functionality you're looking for.
                                </p>
                            </div>
                            <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                                <a href="/contact" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                        <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                            <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 text-white p-5 shadow-lg">
                                {/* <!-- Heroicon name: building-storefront --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-medium text-gray-900">
                                Commercial
                            </h3>
                            <p class="mt-4 text-base text-gray-500">
                                We offer a wide range of services for our commercial clients. Let us add the safety, security and style you need for your business.
                            </p>
                        </div>
                        <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                            <a href="/contact" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                        <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                            <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 text-white p-5 shadow-lg">
                                {/*  <!-- Heroicon name: puzzle-piece --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-medium text-gray-900">
                                Custom Projects
                            </h3>
                            <p class="mt-4 text-base text-gray-500">
                                Let's have fun, get creative and build something together. We can help you with your custom project from start to finish and bring your idea to life.
                            </p>
                        </div>
                        <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                            <a href="/contact" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}