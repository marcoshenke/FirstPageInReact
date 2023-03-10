import React from "react"
import './styles.css'
import LebronvsLuka from "images/LebronvsLuka.jpg"

const HelloWorld = ({name, email}) => {
  return (
  <>
    <h1>Hello {name} {email} </h1> 
    <img src={LebronvsLuka} alt="lebron"/>   
  </>  
  )
}

export default HelloWorld