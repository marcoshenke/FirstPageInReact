import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import {Home} from 'views'

const Routes = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/home" element={<h1><Home/></h1>}/>
      <Route path="*" element={<h1>Página não encontrada</h1>}/>      
    </Switch>
  </BrowserRouter>
  )
}

export default Routes
  
  
