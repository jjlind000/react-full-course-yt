import React, { useState } from 'react';

export default function () {

    const [ name, setName ] = useState("Guest");
    const [ quantity, setQuantity ] = useState();
    const [ comment, setComment ] = useState("");
    const [ payment, setPayment ] = useState("");
    const [ shippingMethod, setShippingMethod ] = useState("Please choose method");

    function handleNameChange(event){
        setName(event.target.value);
    } 
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingMethodChange(event){
        setShippingMethod(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>
            <input value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></input>
            <p>Comment: {comment}</p>  

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gift Card">Gift Card</option>
            </select>         
            <p>Payment: {payment}</p> 

            <label>
                <input type="radio" 
                       value="Pick-Up" 
                       checked={shippingMethod === "Pick-Up"} 
                       onChange={handleShippingMethodChange}></input>
                Pick-Up
            </label><br/>
            <label>
                <input type="radio" 
                        value="Delivery" 
                        checked={shippingMethod === "Delivery"} 
                        onChange={handleShippingMethodChange}></input>
                Delivery
            </label>
            <p>Shipping: {shippingMethod}</p>
        </div>
    )
}


