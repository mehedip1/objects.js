import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>Borolooxx</h3>
            <p>Thanks for giving your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue': 'red'}>Order summary : {cart.length}</h2>
            <p className={ `bold ${cart.length===3 ? 'yellow' : 'green'}`}>Something added now</p>
            {
                cart.length > 2 ? <span className=''>Aro kinboo</span> : <span>Fokir</span>
            }
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                 <button onClick={() =>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double get!!!</p>
            }
            {
              cart.length === 3 || <h3>Tinta to holo nah</h3>
            }
        </div>
    );
};

export default Cart;