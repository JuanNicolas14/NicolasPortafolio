import React, { useState } from 'react';

const Slider = ({serviceCard, listado}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? listado.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === listado.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full text-black">
    <ServiceCard key={listado[currentIndex].title} index={index} {...listado[currentIndex]} />
      
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
};

export default Slider;