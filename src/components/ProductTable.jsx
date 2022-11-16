
function ProductTable (props) {
  
  return(
      <table>
        <theader>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </theader>
        <tbody>
        {props.children}
        </tbody>
      </table>   
  )
}

export default ProductTable;