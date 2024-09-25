
import './App.css'
import { Header } from './Header'
import { Home } from './Home'
import { Cart } from './Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    
     < Header />
     <div className="container">
      <Routes>
        <Route path={"/"} element={< Home />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>

     </div>
    </BrowserRouter>
  )
}

export default App
