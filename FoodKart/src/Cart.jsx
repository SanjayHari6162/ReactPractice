import './Cart.css'

export const Cart = () =>{
    
    return(
        <div className="cart-container">
            <h2>Cart Product</h2>
            
            <div className="cart-product-container">

                <div className="product-img">
                    <img src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw" alt="product image" />
                </div>

                <div className="product-detail">
                    <h4>Product Name</h4>
                    <p>Price: Rs. 50</p>
                </div>

            </div>

            <div className="cart-product-container">

                <div className="product-img">
                    <img src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw" alt="product image" />
                </div>

                <div className="product-detail">
                    <h4>Product Name</h4>
                    <p>Price: Rs. 50</p>
                </div>

            </div>

             <div className="cart-product-container">

                <div className="product-img">
                    <img src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw" alt="product image" />
                </div>

                <div className="product-detail">
                    <h4>Product Name</h4>
                    <p>Price: Rs. 50</p>
                </div>

            </div>

            <div className="product-total-cost">
                <h2>Total : Rs.150</h2>
            </div>
        
            
        </div>
    )
}