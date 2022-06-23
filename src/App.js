import React, {useState} from "react";
import "./App.css";
import Data1 from "./models/data.json";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Basket from "./components/Basket";
import Search from "./components/Search";

function App() {
  const [basket, setBasket] = useState([]);
  const [keyword, setKeyword] = useState();
  let originalItems = [...Data1];
  const [items, setItems] = useState(originalItems);
 
  
  // function filteredItems(arr, query) {
  //   return arr.filter(function(el) {
  //     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1

  //   })}

  //   let newArray = arr.filter(callback(item.title[filteredItems, index[filter, array]]) {
  //     // return element for newArray, if true
  //   }[, thisArg]);



  function search(query) {
    const regExQuery =new RegExp(query)
   const filteredItems = items.filter(item => item.trackName.match(regExQuery))

   if(filteredItems.length ===0 ) {
     setItems(items)
  
   } else {setItems(filteredItems)}

    //declare an new variable called filtered items and assign a filtered array of items by Keyword(title)
  
    // dont use find but use filter and look in MDN on array filter - items.filter and inside that create my filtering conndition 
    //item.title === keyword
    //if filtered items is empty use setItems with items else do line 23
     // use setItems and pass to it the filtered items
    
  }

  const addToBasket = (id) => {
    const foundItem = Data1.find((item) => item.trackId === id);
    foundItem.inBasket = true;
    const newBasket = [...basket, foundItem];

    setBasket(newBasket);
    console.log(basket);
  };
  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item.trackId !== id);

    setBasket(newBasket);
  };
  const basketTotal = 123;

  return (
    <Router>
      <Header classname="App" />

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/basket">
          <Basket
            basket={basket}
            basketCount={basket.length}
            removeFromBasket={removeFromBasket}
            
          />
        </Route>
        <Route path="/">
          <Search search={search} term={keyword} setTerm={setKeyword} />
          
          <ProductList
            products={items}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
          
        </Route>
      </Switch>
    </Router>
  );


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
