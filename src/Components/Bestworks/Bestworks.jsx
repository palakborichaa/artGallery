import React from 'react';
import './bestworks.css';
import data_product from '../Assets/data'
import Item from '../Items/Item';


const Bestworks = () => {
  return (
    <> 
    <div className='bestworks'>

    <h1>The best work by rising talents is available now </h1>
      <div className="bestworks-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        <div className='footer-text'>
        <p>Browse our wide-ranging selection of original sculptures by artists working in a variety of mediums.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bestworks

