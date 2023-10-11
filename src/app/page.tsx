"use client"
import Hero from '../Components/Hero/page'
import Article from '../Components/Articles/page'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  console.log(searchTerm)
  return (
    <main>
      <Hero onSearch={handleSearch} />
      <Article searchTerm={searchTerm} />
    </main>
  )
}
