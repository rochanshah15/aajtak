import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import NewsBoard from './components/newsBoard'
import NewsCard from './components/newsCard'
import Footer from './components/footer'

function App() {
  const[category,setCategory] = useState("general")
  return (
    <>
    <Nav setCategory={setCategory}/>
    <NewsBoard category={category}/>
    <Footer/>
    </>
  )
}

export default App
