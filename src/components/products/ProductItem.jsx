
import "./products.scss";


const ProductItem = ({title, categories, description, price, photoUrl}) => {
  return (
    <div id="product">
        <img src={photoUrl} alt={photoUrl} />
        <h2>{title}</h2>
        <h5>{categories}</h5>
        <p>{description}</p>
        <h5>{price}</h5>
    </div>
  )
}

export default ProductItem;