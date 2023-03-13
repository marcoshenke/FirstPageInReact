import React from "react"
import './styles.css'
import helpers from 'helpers'


const HelloWorld = ({name, email}) => {
  const nameUpper = helpers.upperCase(name)
  return (
  <>
    <h1>Hello {nameUpper} {email} </h1> 
    
  </>  
  )
}

export default HelloWorld