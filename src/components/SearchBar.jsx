import React from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className= {style.completeSearchBar}>
      <input type="text" name="" id="" placeholder='Pesquisar produto...' />
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <circle cx="10.9479" cy="10.868" r="9.70764" stroke="#666666" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.6998 18.124L21.5057 21.9201" stroke="#666666" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default SearchBar