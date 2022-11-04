import Nav from "../compnents/nav"
import Footer from "../compnents/footer" 
import { Player } from '@lottiefiles/react-lottie-player';

export default function CareersPage() {
    return (
        <>
        <Nav />

        <main className="bg-white relative lg:-mt-16">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg bg-slate-900 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className="block">We're hiring</span>
                                <span className="block">Let's build together</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-indigo-200">
                                We're always looking for talented people to join our team. If you're interested in working with us, please send us a message.
                            </p>
                            <a href="/contact" className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
                                > Contact us
                            </a>
                        </div>
                    </div>
                    <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <div className=''> 
                            <Player
                                src='https://assets9.lottiefiles.com/packages/lf20_pbja3c1s.json'
                                className='md:w-96'
                                background='transparent'
                                loop={true}
                                autoplay={true} >
                            </Player>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </>
  )
}