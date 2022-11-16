import { useState } from 'react';
import productData from './../data.json';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {

  const [products, setProducts] = useState(productData);

  const filterSearchHandler = (searchTerm) => {
    console.log(searchTerm)
    const newArr = [...productData].filter(product =>  {
      return product.name.toLowerCase().includes(searchTerm)
    })
    setProducts(newArr)
    } 
  
  return(
    <div>
        <h1>IronStore</h1>
        <SearchBar searchHandler={filterSearchHandler}/>
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