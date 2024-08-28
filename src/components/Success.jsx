import React from 'react'
import { IMAGES } from '../images'

export default function Success({count}) {
  return (
    <>
      <div>
        <img src={IMAGES.successImg} alt="success-img" />
        <h3>Success!</h3>
        <p>All users send {count} invitation</p>
        <button onClick={()=> window.location.reload()}>Back</button>
      </div>
    </>
  )
}
