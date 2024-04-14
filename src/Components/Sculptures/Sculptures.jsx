import React from 'react';
import './Sculptures.css';
import data_product from '../Assets/sculptures';
import Item from '../Items/Item';

const Sculptures = () => {
    return (
        <> 
        <div className='sculptures'>
    
        <h1>Original Sculptures for sale </h1>
          <div className="sculptures-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
             <div className='footer-text'>
        <p>Suitable for both the interior home and outdoor spaces, sculptures anchor a space and are available in numerous textures and colors.</p>
        </div>
          </div>
        </div>
        </>
      )
    }

export default Sculptures
