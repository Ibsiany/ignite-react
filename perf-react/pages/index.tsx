import axios from 'axios';
import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import {SearchResults} from '../components/SearchResults'

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if(!search.trim()){
      return;
    }

    const {data} = await axios.get(`http://localhost:3333/products?q=${search}`);

    setResults(data)
  }

  async function addToWishlist(id: number) {
    console.log(id)
  }

  return (
    <div>
     <h1>Search</h1>

     <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
     </form>

     <SearchResults results={results} onAddToWishlist={addToWishlist}/>
    </div>
  )
}

export default Home
