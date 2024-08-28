import React from 'react';
import { IMAGES } from '../../images';
import "./style.css";

export default function Success({count}) {
  return (
    <>
      <div className='success-container'>
        <img src={IMAGES.successImg} alt="success-img" className='success-img' />
        <h3>Success!</h3>
        <p>Sent {count} invitation</p>
        <button onClick={()=> window.location.reload()} className='back-btn'>Back to Home</button>
      </div>
    </>
  )
}
