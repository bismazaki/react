import { useState } from "react"

export default function Examplestate(){

    const [cart , SetCart] = useState(0);
    function Addcart(){
        return SetCart(cart+1);
    }
    function Removecart(){
        return SetCart(cart-1);
    }
    const msg = cart === 0? "Cart is Empty" : 
    (cart <10 && cart >= 1)? "You have must 10 items in cart to avail in free delivery":
    "you have avail free delivery" ;
    const backchange = cart === 0? "red" : 
    (cart <10 && cart >= 1)? "blue":
    "green" ;
    const emoji = cart === 0? "bi bi-emoji-frown-fill" : 
    (cart <10 && cart >= 1)? "bi bi-emoji-smile-fill":
    "bi bi-hearts" ;

    const colorcode = cart>= 5 ? "green": "blue";
    return (
        <div className="container">
        <button className="btn btn-primary" onClick={Addcart} disabled={cart >= 10}>Add to Cart</button>
        <h1 style={{color : colorcode}}><i className="bi bi-cart-fill"></i> <span className="badge bg-secondary" style={{backgroundColor: colorcode , fontSize: cart}}>{cart}</span></h1>
        <button className="btn btn-danger" onClick={Removecart} disabled={cart <= 0}>Remove to Cart</button>
        <p style={{ fontSize: 30, color: `white`,backgroundColor : backchange}}>{msg}<i className={emoji}></i></p>
        </div>
    )
}