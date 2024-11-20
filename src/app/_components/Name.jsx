import React, { useState, useEffect } from 'react';
import { doto } from '../page';

const Name = () => {
  const prenom = ['V', 'I', 'C', 'T', 'O', 'R'];
  const nom = ['A', 'U', 'B', 'R', 'Y'];

  return (
    <div className='flex gap-8'>
      <div className='flex'>
        {prenom.map((letter, index) => (
          <h1 key={index} data-scroll data-scroll-speed={index / prenom.length} data-scroll-css-progress className={`opacity-[calc(1-var(--progress))] text-8xl ${doto.className}`}>{letter}</h1>
        ))}
      </div>
      <div className='flex'>
        {nom.map((letter, index) => (
          <h1 key={index} data-scroll data-scroll-speed="-0.1" data-scroll-css-progress className={`opacity-[calc(1-var(--progress))] text-8xl ${doto.className}`}>{letter}</h1>
        ))}
      </div>
    </div>
  );
};

export default Name;
