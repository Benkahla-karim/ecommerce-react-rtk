import React from 'react'
import Searchbar from './Searchbar'
import products from '../data'
import {BsFillBagPlusFill } from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import { addProduct } from '../rtk/slices/bag-slice'

const Products = () => {
    const dispatch = useDispatch()
 

  return (
    <div className='products'>
      <Searchbar/>
      <div className='row'>
        {products.map((product) => {
            return (
              <div key={product.id} className="items-card" >
                <div className='itmes-img'>
                  <img src={product.img} alt={product.title} />
                </div>
                <div className='item-info'>
                  <h4>{product.title}</h4>
                  <p>{product.model}</p>
                  <div className='item-price'>
                    <span>{`$${product.price}`}</span>
                    <button className='add-to-cart'  onClick={() => dispatch(addProduct(product))}  >
                    <BsFillBagPlusFill/>
                    </button>
                  </div>
                </div>
              </div>
            )
        })}  

      </div>
    </div>
  )
}

export default Products