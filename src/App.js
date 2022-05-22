import React from "react";
import "./App.css";
import Data1 from "./models/data.json";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Basket from "./components/Basket";
import Search from "./components/Search";

function App() {
  const [basket, setBasket] = React.useState([]);
  let items = [...Data1];
  function search() {
    // const []
    //implement here function to search from iTunes
    //copy example from Bookstore
    //not important but remind to use the itunes AP
    // pass functioonto Search component props
  }

  const addToBasket = (id) => {
    const foundItem = Data1.find((item) => item.trackId === id)
    foundItem.inBasket = true
    const newBasket = [...basket, foundItem]
   
    setBasket(newBasket);
    console.log(basket);
  };
  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item.trackId !== id);

    setBasket(newBasket);
  };
  //this function is wrong. Need to use the same pattern as 'add to basket'

  return (
    <Router>
      <Header classname="App" />

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/basket">
          <Basket basket={basket} basketCount={basket.length} removeFromBasket = {removeFromBasket} />
        </Route>
        <Route path="/">
          <Search search={search} term={"/"} />
          (
          <ProductList
            product={items}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
          )
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
