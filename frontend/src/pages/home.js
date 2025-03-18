import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/productCard';



export default function Home() {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+'/products')
    .then(res => res.json())
    .then(res => setproducts(res.products))

  },[])
    return <Fragment>
    

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product => <ProductCard /> )}
        
      </div>
    </section>
    </Fragment>
}
