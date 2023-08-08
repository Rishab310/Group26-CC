import React from 'react'
import '../components/SearchBar.css'

function SearchBar() {
  return (
    
            <div className="main">
  
 
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Search this blog"/>
    <div className="input-group-append">
      <button className="btn btn-secondary" type="button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
  
</div>


  )
}

export default SearchBar;