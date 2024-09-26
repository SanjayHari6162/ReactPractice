import { Product } from './Product.jsx'
import './Home.css'
import data from './data.json'

export const Home = () =>{

    
    
    return(
        <div className="home-container">

            
            < Product data={data} />
        </div>
    )
}