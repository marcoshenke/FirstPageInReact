import React from "react"
import {HelloWorld} from "components"
import { useState } from "react"

import api from "service/api"
import LebronvsLuka from "images/LebronvsLuka.jpg"


const Home = () => {
  const [usuarios, setUsuarios] = useState()
  const getUsuarios = async () => {
    const response = await api.get('/users', { params: { per_page: 5}})
    
    setUsuarios(response?.data)
  }
  
  return (
    <div className="background">
      <button onClick={getUsuarios}>Carregar usuários</button>
      {
        usuarios?.map((usuario) => <HelloWorld name={usuario.login}/>)
      }

      <img src={LebronvsLuka} alt="lebron"/>   
    </div>    
  )
}

export default Home