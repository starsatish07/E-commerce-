import React from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const Productdisplay = (props) => {
  const {product}=props;
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='poductdisplay-img-list'>
      <img src={product.image} alt=''/> 
       <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
         
      </div>
      <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={product.image} alt=''/>
      </div>
      </div>
       <div className='productdisplay-right'>
       <h1>{product.name}</h1>
       <div className='productdisplay-right-star'>
        <img src={ star_icon} alt=''/>
         <img src={ star_icon} alt=''/>
          <img src={ star_icon} alt=''/>
           <img src= { star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
       </div>
       <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-price-old'>
          ${product.old_price}
        </div>
        <div className='productdisplay-right-price-new'>
          ${product.new_price}
        </div>
        <div className='productdisplay-right-descript'>
          A lightweight usually knitted, pullover shirt,clise-fitting and
        </div>
        <div className='productdisplay-right-size'>
        <h1>Select Size</h1>
         <div className='productdisplay-right-size'>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
         </div>
        </div>
        <button>AD TO CART</button>
        <p className='productdisplay-right-category'><span>Category: </span>Women,T-shirt,Crop Top</p>
         <p className='productdisplay-right-category'><span>Tag: </span>Mordern,Latest</p>
       </div>

      </div>
    </div>
  );
}

export default Productdisplay