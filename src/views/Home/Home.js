import React from "react"
import {HelloWorld} from "components"


const Home = () => {
  return (
    <div className="background">
      <HelloWorld name="Yoda" />
      <HelloWorld name="Lebron" email="lebron@nba.com" />
    </div>    
  )
}

export default Home