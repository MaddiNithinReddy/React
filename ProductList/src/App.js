import './App.css';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  let [products,updateProducts]=useState([]);
  useEffect(()=>{
    fetchProducts();
  },[]);
  async function fetchProducts(){
    let res=await fetch('https://fakestoreapi.com/products');
    let prodlst=await res.json();
    updateProducts(prodlst)
  }
  if(products.length===0)
    return <h3>Fetching...</h3>
  else
    return( 
      <div className='product-list'>
        {products.map((product)=> <ProductCard key={product.id} {...product}/>)}
      </div>
    )
}

export default App;
