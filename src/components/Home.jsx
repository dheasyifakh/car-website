import React, {useState} from 'react'
import Hero from './Hero'
import ListCars from './cars/ListCars';
const carData = {
    electrical: {
      name: 'Tesla',
      parts: ['Battery', 'Electric Motor', 'Charging Port'],
      image: 'https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    twowheels: {
      name: 'Vespa',
      parts: ['Engine', 'Wheels', 'Handlebars'],
      image:'https://images.pexels.com/photos/19642091/pexels-photo-19642091/free-photo-of-red-and-white-vintage-scooter-in-the-streets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    sport: {
      name: 'Lamborghini',
      parts: ['Engine', 'Transmission', 'Body Kit'],
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  };
const Home = () => {
    const [selectedCarType, setSelectedCarType] = useState('');
  
    // Handle car type selection
    const handleCarTypeChange = (event) => {
      setSelectedCarType(event.target.value);
    };
  return (
    <div>
        <Hero/>
        <div className="mt-10">
        <div>
        <h1>Select a Car Type:</h1>
            <select value={selectedCarType} onChange={handleCarTypeChange}>
                <option value="">Select</option>
                <option value="electrical">Electrical Car</option>
                <option value="twowheels">Two Wheels Car</option>
                <option value="sport">Sport Car</option>
            </select>

      {selectedCarType && (
        <div>
          <h2>{carData[selectedCarType].name}</h2>
          <h3>Parts:</h3>
          <ul>
            {carData[selectedCarType].parts.map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
          <img src={carData[selectedCarType].image}/>
        </div>
      )}
    </div>
        </div>
        <ListCars carData={carData}/>
    </div>
  )
}

export default Home