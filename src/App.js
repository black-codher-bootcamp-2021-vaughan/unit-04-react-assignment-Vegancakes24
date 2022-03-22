import './App.css';
import Data1 from './models/data.json';
import ProductList from './components/ProductList'
import Product from './components/Product';

function App() {
let basket = []
let items = [...Data1]
// function removeFromBasket() {}
function search() {}

const addToBasket = (id) => {
basket=basket.concat(Data1.filter(item => item.trackId === id));
  
console.log(basket)
  }
 
  return (<ProductList product={items} addToBasket={addToBasket} />);

  

//   return (<ProductList product={Data1} removeFromBasket={removeFromBasket} />);
  
//   const removeFromBasket = (id) => {
//     setBasket(basket.filter(item => item.trackId !== id));
//     setItems([...items.map(item => {
//       if (item.trackId === id) {
//         item.inBasket = false;
//         setTotal(total - item.trackPrice);
//       }
//       return item;
//     }
//     )]);
//     setCount(count-1);
//   }


// }

}
  export default App;
