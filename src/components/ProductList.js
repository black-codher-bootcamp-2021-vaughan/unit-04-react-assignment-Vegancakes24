import Product from "./Product";
const ProductList = ({product, addToBasket, removeFromBasket,...props}) => {

      return product.map((item) => (
   
        <Product
      item = {item}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
        />
    ));
        
}
export default ProductList




