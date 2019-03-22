'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
      <input 
        type='search' 
        placeholder='Digite o nome do usuário no github'
        onKeyUp={handleSearch}  
        disabled={isDisabled}
      />
    </div>
)

Search.propTypes = {
  isDisabled: React.PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired
}

export default Search