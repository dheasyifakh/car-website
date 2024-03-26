import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Cars</h2>

                    <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
                    provident nulla error!
                    </p>
                </header>

                <a
                    href="#"
                    className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                    Shop All
                </a>
                </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
                <ul className="grid grid-cols-2 gap-4">
                <li>
                    <a href="#" className="group block">
                    <img
                        src="https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                        <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                        >
                        Tesla 
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">Electrical Car</p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block">
                    <img
                        src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                        <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                        >
                        Lamborghini
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">Sport Car</p>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero