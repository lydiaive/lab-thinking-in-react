
function ProductTable (props) {
  
  return(
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {props.children}
        </tbody>
      </table>   
  )
}

export default ProductTable;