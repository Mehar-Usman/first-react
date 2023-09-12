import React from 'react';
import { Link } from 'react-router-dom';
const WelcomeCards = ({ data }) => {
  return (
    <div>
      <div className='grid grid-cols-12 justify-items-center px-80'>
        {data.map((card, index) => (
          <div className='col-span-4' key ={index}>
            <div className='card'>
              <h2 className='font-bold text-center'>{card.title}</h2>
              <Link to={card.Link} className='flex justify-center'>
              <img  className='bg-orange hover:opacity-70 delay-400 ease-in-out transition-all' src={card.imageUrl} alt={card.title} />
              </Link>
              <div> 
                <div>
                <p className='text-[14px] text-center px-12 '>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeCards;
