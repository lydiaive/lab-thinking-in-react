function ProductRow (props) {

    const {name, price} = props.product
    const classes = "card " + props.className

    return(
        <tr className={classes}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>   
    )
  }
  
  export default ProductRow;

  //style={{color: 'red'}}