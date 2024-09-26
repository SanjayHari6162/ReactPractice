

export const Product = ({data}) =>{
    
    return(
        <div className="container">
            {data.map((item)=>(<div className='home-product' key={item.id}>
                <div className="home-product-img">
                    <img src={item.pic}></img>
                </div>

                <div className="home-product-detail">
                <h2>{item.name}</h2>
                <p>Price: Rs.{item.price}</p>
                <button>Add to cart</button>
                </div>
            </div>))}
        </div>
    )
}