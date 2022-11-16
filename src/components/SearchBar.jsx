
function SearchBar (props) {

  const {searchHandler} = props

  return(
      <div>
        <p>SearchBar</p>
        <label>Search</label>
        <input type="text" onChange={(event) =>searchHandler(event.target.value)} />
      </div>    
  )
}

export default SearchBar;