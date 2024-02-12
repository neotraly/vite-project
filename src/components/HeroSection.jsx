import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      

      <h1>САНЯ ПИНУС</h1>
      <p>ПОЧЕМУ НАСТЮ БУЛИШЬ</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          НЕ БУЛЬ
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ПОЖАЛУЙСТА <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;