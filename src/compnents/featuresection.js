

export default function FeatureSection() {
    return(
        <main className="overflow-hidden bg-slate-50 py-16 lg:py-24">
            <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <svg className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                    <defs>
                        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>
                <div className="relative">
                    <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Ready to serve the alamo city
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                        Born and raised in the alamo city, our mission is provide a creative platform for our team of welders while also giving our clients the best welding experience available to the growing San Antonio community.
                    </p>
                </div>
                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div className="relative">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            For the local community
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            We are a local business that is dedicated to providing the best welding experience to our community. We are a small team of welders that are passionate about our craft and are excited to share our passion with you.
                        </p>
                        <dl className="mt-10 space-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        {/*  <!-- Heroicon name: home --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                        Residential
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Welding services for all your home needs. From custom gates to custom furniture, we can help you bring your vision to life.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        {/* <!-- Heroicon name: building-storefront --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                        Commercial
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    We provide welding services for all your commercial needs. From custom gates to custom furniture, we can help you bring your vision to life.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        {/* <!-- Heroicon name: business-office-2 --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                        Multi-Family
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Welding services for multi-family dwellings. From custom gates to custom furniture, we can help you bring your vision to life.
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                        <svg className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                            <defs>
                                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                        </svg>
                        <img 
                            className="relative mx-auto w-96 rounded-lg shadow-lg" 
                            src="./welder4.jpg" 
                            alt=""
                        />
                    </div>
                </div>
                <svg className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                    <defs>
                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                More than just a welder
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                We're a team of welders and fabricators that are passionate about what we do. We love to create custom pieces that are unique and functional. We're here to help you bring your vision to life.
                            </p>
                            <dl className="mt-10 space-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                            {/* <!-- Heroicon name: rocket --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                            Creative Community
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        We love to create custom pieces that are unique and functional. We're here to help you bring your vision to life.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                            {/*  <!-- Heroicon name: puzzle-piece --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                            Custom Projects
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        We love to create custom pieces that are unique and functional. We're here to help you bring your vision to life.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <svg className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                                <defs>
                                    <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                            </svg>
                            <img 
                                className="relative mx-auto w-96 rounded-lg shadow-lg" 
                                src="./welder1.jpg" 
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}