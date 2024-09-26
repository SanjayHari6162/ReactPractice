import './Product.css'

export const Product = ({data}) =>{
    
    return(
        <div className="product-container">
            {data.map((item)=>(<div className='home-product' key={item.id}>
                <div className="home-product-img">
                    <img src={item.pic}></img>
                </div>

                <div className="home-product-detail">
                <h4>{item.name}</h4>
                <p>Price: Rs.{item.price}</p>
                <button>Add to cart</button>
                </div>
            </div>))}
        </div>
    )
}