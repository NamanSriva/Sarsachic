import React, { useState } from 'react';
import './ProductDetails.css';
import tshirtFront from '../../images/tshirt1.png';  // Update the path to your image
import tshirtBack from '../../images/tshirt3.png';    // Update the path to your image
import demonLogo from '../../images/tshirt2.png';      // Update the path to your image
import demonArt from '../../images/tshirt4.png';        // Update the path to your image
import { FaPlus, FaRegHeart } from 'react-icons/fa';
import Poster from '../Hero/Poster';
import TestimonialSlider from '../Review/TestimonialSlider.jsx'
import Products from '../Products/Products.jsx'
import JustDrop from '../Products/JustDrop.jsx'

const ProductDetails = () => {
  const [size, setSize] = useState('XS');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [clicked, setclicked] = useState(false);

  const plusHandle = () => {
    const description = document.querySelector('.description-info-2');

    if (clicked == false) {
      description.style.display = "flex";
      setclicked(true);
    }
    else if (clicked == true) {
      description.style.display = "none";
      setclicked(false);
    }

  }

  return (
    <>
      <Poster />
      <div className="product-details">


        <div className="image-gallery">
          <img src={tshirtFront} alt="T-shirt front" className="product-image" />
          <img src={demonLogo} alt="Demon logo" className="product-image" />
          <img src={tshirtBack} alt="T-shirt back" className="product-image" />
          <img src={demonArt} alt="Demon art" className="product-image" />
        </div>
        <div className="product-info">
          <div className='prod'>
            <div className='prod-name'>
              <h1 className="product-title">DEMON SLAYER</h1>
              <p className="product-fit">OVERSIZED FIT</p>
              <p className="product-rating">★★★★☆</p>
            </div>
            <div className="product-price">
              <span className="original-price">RS 1099.00</span>
              <span className="discounted-price">RS 699.00</span>
            </div>
          </div>


          <p>CHOOSE SIZE: {size}</p>
          <div className="size-selector">

            <div className="sizes" >
              {sizes.map(s => (
                <button
                  key={s}
                  className={`size-button ${s === size ? 'selected' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <button className="add-to-cart">ADD TO CART - RS 699</button>
          <div className='butto'>
            <button className='size-chart'>Size Chart</button>
            <button className="add-to-wishlist"> <FaRegHeart className='heart' />ADD TO WISHLIST</button>
          </div>




          <div className="product-details-text">
            <h2>PRODUCT DETAILS</h2>
            <p>Composition: 100% cotton</p>
            <p>GSM: 220</p>
            <p>Colour: White</p>
            <p>Country of production: India</p>
            <p>Wash care: Machine wash cold with similar colours. Only non-chlorine. Tumble dry low. Warm iron if needed.</p>
            <p>Sizing: Garment measurement in inches</p>
            <p>Estimated order processing time: 48 hours</p>
          </div>
          <div className="additional-info">
            <div className="description-single">
              <h2>DESCRIPTION <FaPlus className='plus-icon' onClick={plusHandle} /></h2>
              <p className='description-info-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab provident iure error quas repellat recusandae, aliquid, quidem aspernatur distinctio culpa perspiciatis at sed aperiam, illo tempora aut dolores laudantium impedit?</p>
            </div>

            <h2>SHIPPING AND RETURN <FaPlus className='plus-icon' /></h2>
          </div>
        </div>
        <div className="slider-new">
          <TestimonialSlider />

        </div>

      </div>
    </>
  );
};

export default ProductDetails;
