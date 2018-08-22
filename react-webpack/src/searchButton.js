import React from 'react'
import Button from './button'

const SearchButton = () => (
    <Button className='search-button' handleClick={ () => alert('search button') }>Search</Button>
)

export default SearchButton