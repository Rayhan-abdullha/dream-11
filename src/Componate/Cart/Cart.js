import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // total cost
    const totalSalary = cart.reduce((sum, playerSalary) => sum + playerSalary.salary, 0)
    return (
        <div className="buy-cart text-center">
            <ul>
                <li className="cart-font pb-4 cart-text">Players in Cart - <FontAwesomeIcon icon={faCartPlus}/> ({cart.length})</li>
                {
                    cart.map(playerInfo => <li className="name">{playerInfo.name} - {playerInfo.salary} $</li>)
                }
                <li className="total" >Total: {totalSalary} $</li>
            </ul>         
        </div>
    );
};

export default Cart;