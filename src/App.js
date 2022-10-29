import './App.css';
import axios from "./axios.js";
import { useState,useEffect } from 'react';
import {ItemCard} from './components/ItemCard/ItemCard';
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

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
      contact_email:email.at,
      current_total_price: 135000,
      customer: {
        id: 12345,
        email: email,
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
          .then(res => navigate(`/checkout/${req.checkout_id}`));
  }

  const [email, setEmail] = useState("");
  const emailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    console.log(email);

  }


  return (
    <div className="App">
      <div className="ItemList">
        <h2>Items in your Cart</h2>
          {items.map(item => {
            // return (<h1>{element.name}</h1>)
            return <ItemCard Item={item}></ItemCard>
          })}
          <label for="email">Enter your email: </label>
          <input type="email" id="email" name="email" onChange={e =>  emailChange(e)}></input><br/>
          <button className="checkout-button" onClick={checkout}>Proceed to Checkout</button>
      </div>
      
    </div>
  );
}

export default App;
