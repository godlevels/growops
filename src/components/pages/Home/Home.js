import React from 'react'
import Hero from '../../Hero'
import { homeObjOne } from "./Data"

const Home = () => {
  return (
    <div>
        <Hero {...homeObjOne} />
    </div>
  )
}

export default Home