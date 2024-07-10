import React from 'react'
import './NewLetter.css'

function NewsLetter(){
  return (
    <div className='newsletter'>
        <h2>Get Exclusive Offers On Your Email </h2>
        <p>Subcribe to our NewLetter and stay updated</p>
        <div>
        <input type='email' placeholder='Your Email Id'/>
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter;