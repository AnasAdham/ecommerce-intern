import './App.css';
import {carts, items} from './items';
import { useState } from 'react';


const one = 
{
  "item_id": 3,
  "item_name": "Testing",
  "item_price": 100,
  "item_quantity": 0
}

function App() {
  
const [myCarts, setMyCarts] = useState([]);



const updateItem = (event) => {
  const newCarts = myCarts.map(cart => {
    if (event.target.id == cart.item_id) {
      return { ...cart, item_quantity: event.target.value}
    }
    return cart;
  });
  setMyCarts(newCarts);
}

const handleDelete = (id) => setMyCarts(myCarts.filter(cart => cart.item_id != id))

const addItem = (item) => {
  const exist = myCarts.filter( cart => cart.item_id === item.id)
    
  console.log(exist)
  if(exist.length <= 0){
    setMyCarts([...myCarts, 
    {
      item_id: item.id,
      item_name: item.name,
      item_quantity: 1,
      item_price: item.price
    }]);
  }else{
    alert("You have added the item to your cart");
  }
}
  


  return (
    <div className="main-container">
      <header>
          <div className='logo'>Logo</div>
        <nav className="nav_links">
          <ul>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
          </ul>
        </nav>
        <a className='' href=""><button >Contact</button></a>
      </header>
      <div className="main">
    {
      items.map((item) =>  
        (
          <div key={item.id} className='card' onClick={() => addItem(item)}>
            <p className='card-detail'>{`Item with id: ${item.id} is ${item.name} with price ${item.price}`}</p>
          </div>
        )
      )
      }

      </div>
      <div className="cart">
        {
        myCarts.length > 0 ?
       (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price </th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          { myCarts.map((cart) => 
            (
              <tr key={cart.item_id}>
                <td>{cart.item_name}</td>
                <td>{cart.item_price}</td>
                {/* <td><input type="text" value={cart.item_quantity} onChange={() => handleOnChange(cart.item_id)}/> </td>*/}
                <td><input id={cart.item_id} type="number" value={cart.item_quantity} onChange={updateItem}/> </td>
                <td><button className='delete' onClick={() => handleDelete(cart.item_id)}>Delete</button></td>
              </tr>
            )
          )}
          </tbody>
        </table>)
        :(
          <div><h1>Click any item to add to cart</h1></div>
        )
        }
      </div>
    </div>
  );
}

export default App;
