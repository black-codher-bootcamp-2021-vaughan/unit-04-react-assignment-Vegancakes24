import './App.css';
import Data1 from './models/data.json';
import ProductList from './components/ProductList'
import Product from './components/Product';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Basket from './components/Basket';

function App() {
let basket = []
let items = [...Data1]
function search() {}

const addToBasket = (id) => {
basket=basket.concat(Data1.filter(item => item.trackId === id));
  
console.log(basket)
  }
 

  const removeFromBasket = (id) => {
    basket=basket.filter(item => item.trackId !== id);
    
  }

 
  return (
 <Router>
   <Header classname="App"/>
  
   <Switch>
    

      < Route path="/about">
        <About/>
      </Route>

      < Route path="/basket">
        <Basket/>
      </Route>
      <Route path="/">
      

      (<ProductList product={items} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>)

    </Route>

   </Switch>
 </Router>)
  

}
 
  export default App;

  // setItems([...items.map(item => {
    //   if (item.trackId === id) {
    //     item.inBasket = false;
    //     setTotal(total - item.trackPrice);
    //   }
    //   return item;
    // }
    // )]);
    // setCount(count-1);
