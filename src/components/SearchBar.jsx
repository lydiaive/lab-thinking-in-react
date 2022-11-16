
function SearchBar (props) {

  const {searchHandler, checkStockHandler} = props

  return(
      <div>
        <p>SearchBar</p>
        <label>Search</label>
        <input type="text" onChange={(event) =>searchHandler(event.target.value)} />
        <input type="checkbox" onChange={(event) =>checkStockHandler(event.target.checked)}/>
        <label>Only Show Products in Stock</label>
      </div>    
  )
}

export default SearchBar;