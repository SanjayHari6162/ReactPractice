import { Link } from "react-router-dom"

export const Header = () =>{
    
    return(
        <div>
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