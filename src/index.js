import React, { useState } from 'react'
import { render } from 'react-dom'
import useSWR from 'swr'

export const App = props => {
  const [search, setSearch] = useState('')

  const { data: src, error } = useSWR(search, (key) => {
    return fetch(`http://www.omdbapi.com/?apikey=276414e9&&t=${key}`)
      .then(res => res.ok ? res.json() : res.text())
      .then(json => json.Poster)
  })

  return <main>
    <input type='text' value={search} onChange={e => setSearch(e.target.value || '')} />
    <button type='submit' >submit</button>
    <img src={src || ''} alt='movie poster' />
  </main>
}

render(<App />, document.getElementById('app'))
