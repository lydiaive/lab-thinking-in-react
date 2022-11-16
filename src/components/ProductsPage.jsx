import { useState } from 'react';
import productData from './../data.json';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {

  const [products, setProducts] = useState(productData);
  
  return(
    <div>
        <h1>IronStore</h1>
        <SearchBar></SearchBar>
        <ProductTable>
            {products.map((product) => {
                if (product.inStock === true) {
                return (
                    <ProductRow
                        product={product} key={product.id}
                    />
                ) } else {
                    return (
                    <ProductRow className="red-row"
                        product={product} key={product.id}
                    />
                    ) }
                })
            }
        </ProductTable>
    </div>    
  )
}

export default ProductsPage;