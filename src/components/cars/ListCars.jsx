import React,{useState} from 'react'

const ListCars = (carData) => {
   const [selectedCarType, setSelectedCarType] = useState('');
  
    // Handle car type selection
   const handleCarTypeChange = (e) => {
      setSelectedCarType(e.target.value);
   };
  console.log(carData.carData)
  return (
    <div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
            <div className="mt-8 block lg:hidden">
                <button
                    className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                >
                    <span className="text-sm font-medium"> Filters & Sorting </span>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-4 rtl:rotate-180"
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                <div className="hidden space-y-4 lg:block">
                    <div>
                        <label for="SortBy" className="block text-xs font-medium text-gray-700">Select a Car Type:</label>
                        <select id="SortBy" value={selectedCarType} onChange={handleCarTypeChange} className="mt-1 rounded border-gray-300 text-sm">
                            <option value="">All Car</option>
                            <option value="electrical">Electrical Car</option>
                            <option value="twowheels">Two Wheels</option>
                            <option value="sport">Sport Car</option>
                        </select>
                    </div>
                <div>
            </div>
        </div>
        <div className="lg:col-span-3">       
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                { !selectedCarType ? Object.entries(carData.carData).map(([carType, carInfo])=>(
                    <li key={carType}>
                        <a href="#" className="group block overflow-hidden">
                            <img
                                src={carInfo.image}
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative bg-white pt-3">
                                <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    {carInfo.name} - {carType}
                                </h3>
                                <p className="mt-2">
                                    <span className="text-sm font-semibold">Parts:</span>
                                    <br />
                                    {carInfo.parts.map((part, index)=>(
                                            <span key={index}>
                                                <span className="tracking-wider text-xs text-gray-900">{part}</span>
                                                {index !== carInfo.parts.length - 1 && <span>, </span>}
                                            </span>
                                        
                                        ))
                                    }
                                </p>
                            </div>
                        </a>
                    </li>
                )) : (
                    <div>
                        <a href="#" className="group block overflow-hidden">
                            <img
                                src={carData.carData[selectedCarType].image}
                                alt={carData.carData[selectedCarType].image}
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                             <div className="relative bg-white pt-3">
                                <h3
                                className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                    {carData.carData[selectedCarType].name} 
                                </h3>
                                <p className="mt-2">
                                <span className="text-sm font-semibold">Parts:</span>
                                <br />
                                {carData.carData[selectedCarType].parts.map((part, index)=>(
                                    <span key={index}>
                                        <span className="tracking-wider text-xs text-gray-900">{part}</span>
                                        {index !== carData.carData[selectedCarType].parts.length - 1 && <span>, </span>}
                                    </span>
                                    
                                ))

                                }
                                </p>
                            </div>
                        </a>
                    </div>
                )

                }
                
            </ul>
        </div>
            </div>
        </div>
    </div>
  )
}

export default ListCars