import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import WelcomeCards from './WelcomeCards'; // Import the child component

const WelcomeYellowCab = () => {
  // Define an array of card data objects
  const cardsData = [
    {
      title: 'About Us ',
      imageUrl: 'images/portfolio3.png',
      description: 'Yellow Cab Taxi is the largest Cab company in city of Trenton. We utilize safest most comfortable vehicles to provide passengers the highest quality of service. We are professionals and have been in business since 1920.      ',
      link: '/'
    },
    {
      title: 'Our Services',
      imageUrl: 'images/settings3.png',
      description: 'Description for Card 2',
      link:'/'
    },
    {
      title: 'Online Reservations',
      imageUrl: 'images/mess3.png',
      description: 'Description for Card 3',
      link:'/'
    },
    
  ];

  return (
    <div>
      <h1 className='text-3xl text-center'>
        WELCOME TO <span className='text-orange'>YELLOW CAB TRENTON</span>
      </h1>
      <p className='text-center font-light text-sm'>
        Welcome to the Yellow Cab of Trenton, NJ. We are committed to providing excellent, fast, secure, and reliable taxi service. To experience the best taxi <br /> service in Trenton, Call (609)396-8181 or 1-877-YLOWCAB(9569222) or Order a cab online
      </p>
      {/* Render the WelcomeCards component and pass the data */}
      <WelcomeCards data={cardsData} />
    </div>
  );
};

export default WelcomeYellowCab;
