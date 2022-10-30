import React from 'react';
import './checkout.css';
import axios from "../../axios.js";
import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react';

  function Checkout () {
    let { checkout_id} = useParams();
    const[checkout, setCheckout] = useState({});

    const getCheckoutDetails = async (checkout_id) => {
      axios.get(`checkout/${checkout_id}`)
      .then(res => {
        console.log(res.data[0]);
        setCheckout(res.data[0]);
      })
    }

    useEffect(()=>{
      getCheckoutDetails(checkout_id)
    },[])

    const checkoutAbandoned = async () =>{
      const req = {
        checkout_id: checkout_id
      };
      await axios.post('/abandonedCheckout', req)
          .then(res => window.alert("Oh! Sorry to hear that. Your order was cancelled."));
          await getCheckoutDetails(checkout_id);
    }

    const order = async () => {
      const req = {
        id: Date.now(),
        checkout_id: checkout_id,
        customer_id: 12345,
        placed: new Date(Date.now()),
        payment_id: Date.now()-10000,
        customer_name: checkout.customer.first_name,
        email: checkout.customer.email,
        wasAbandoned: checkout.isAbandoned
      };
      await axios.post('/orders', req)
          .then(res => window.alert("Yay! Your Order was placed successfully"));
    }

    return (
            <div className='container'>
                <h3>Great! You are just one step away!</h3>
                <p>Please complete the Payment to Order</p>
                <h5>Order Summary:</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>Total Items:</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Total Amout:</td>
                      <td>₹ 135000</td>
                    </tr>
                  </tbody>
                </table>
                <div className='actionItems'>
                  <button className='button' onClick={checkoutAbandoned}>Cancel</button>
                  <button className='button' onClick={order}>Pay</button>
                </div>
            </div>
    )
  };

  export default Checkout;