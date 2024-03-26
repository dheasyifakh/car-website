import React from 'react'
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
  return (
    <div>
        <Hero/>
        <ListCars carData={carData}/>
    </div>
  )
}

export default Home