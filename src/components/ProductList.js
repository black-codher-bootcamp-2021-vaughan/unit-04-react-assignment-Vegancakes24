import Product from "./Product";
const ProductList = ({product, addToBasket, ...props}) => {

      return product.map((item) => (
    //    item.trackName + "jellybean"
        <Product
      item = {item}
      addToBasket={addToBasket}
        />
    ));
        
}
export default ProductList




