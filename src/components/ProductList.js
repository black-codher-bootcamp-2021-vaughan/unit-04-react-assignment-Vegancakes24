import Product from "./Product";
const ProductList = ({products, addToBasket, removeFromBasket,...props}) => {
if (products.length ===0) {
  return <div className="empty" >No items found...</div>
}
      return products.map((item) => (
           <Product
      item = {item}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
        />
    ));
        
}
export default ProductList




