import { Link } from "react-router-dom"
import './Header.css'

export const Header = () =>{
    
    return(
        <div className="header-nav">
           <div className="logo">Food Kart</div>
           
           <div className="nav-bar">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/Cart"}>Cart</Link>
                </li>
            </ul>
           </div>
        </div>
    )
}