import logo from './logo.svg';
import './App.css';
import axios from "./axios.js";
import { useState,useEffect } from 'react';
import {ItemCard} from './components/ItemCard/ItemCard'
// import { element } from 'prop-types';



function App() {

  

  const [items, setItems] = useState([]);
  useEffect(() =>{
    axios.get('items')
          .then(res => {
            console.log(res.data);
            setItems(res.data);
          })
  }, [])

  const checkout = async () =>{
    console.log(Date.now());
    const req = {
      checkout_id: Date.now(),
      contact_email:"ygpalta@gmail.com",
      current_total_price: 135000,
      customer: {
        id: 12345,
        email: "ygpalta@gmail.com",
        first_name: "Yogesh",
        last_name: "Palta",
        name: "Yogesh Gopal Palta",
        phone: "+918699147595",
        city: "Noida",
        country: "India"
      },
      line_items:items
    }
    console.log(req);
    await axios.post('/checkout', req)
          .then(res=> console.log(res));
  }


  return (
    <div className="App">
      <div className="ItemList">
        <h2>Items in your Cart</h2>
          {items.map(item => {
            // return (<h1>{element.name}</h1>)
            return <ItemCard Item={item}></ItemCard>
          })}
          <button className="checkout-button" onClick={checkout}>Proceed to Checkout</button>
      </div>
      
    </div>
  );
}

export default App;
