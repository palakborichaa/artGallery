import React from 'react';
import './Paint.css';
import data_product from '../Assets/paintings';
import Item from '../Items/Item';


const Paint = () => {
  return (
    <> 
    <div className='paintings'>

    <h1>Bengal art </h1>
      <div className="paintings-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
       
      </div>
    </div>
    </>
  )
}

export default Paint

