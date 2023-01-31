import React from 'react';
import Default from './results/Default';
import Light from './results/Light';
import Normal from './results/Normal';
import Large from './results/Large';
import ExtraLarge from './results/ExtraLarge';

const ShowInfo = ({ result }) => {

  if (!result) {
    return <div className='showInfo'><Default /></div>
    
  } else if (result < 18.5) {
    return <div className='showInfo light-color'><Light /></div>
    
  } else if (result >= 18.5 && result <= 24.9) {
    return <div className='showInfo normal-color'><Normal /></div>
    
  } else if (result >= 25 && result <= 29.9) {
    return <div className='showInfo large-color'><Large /></div>
    
  } else if (result >= 30) {
    return <div className='showInfo extra-color'><ExtraLarge /></div>
  }

}

export default ShowInfo;