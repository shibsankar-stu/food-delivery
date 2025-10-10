import React, { use, useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

const Home = () => {

  const [category, setCategory] = useState("all")

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
