import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart,removeFromCart } = useContext(ShopContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id);
    setAddedToCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setAddedToCart(false);
  };

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>Rs.{product.old_price}</div>
          <div className='productdisplay-right-price-new'>Rs.{product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
        "Echoes of Eternity" is a mesmerizing sculpture that captures the essence of cosmic wonder and existential contemplation. Standing tall and proud, the sculpture features a central figure reaching out towards the heavens, their hand outstretched as if grasping for the secrets of the universe.
        </div>
        {addedToCart ? (
          <button onClick={() => removeFromCart(product.id)}>
            REMOVE
          </button>
        ) : (
          <button onClick={handleAddToCart}>ADD TO CART</button>
        )}
        <p className='productdisplay-right-category'>
          <span>Category :</span>Sculptures,potrait
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
