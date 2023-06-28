import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import "./products.scss"

const ProductList = () => {



    const [product, setProduct] = useState([])

    useEffect(()=> {
        const getProduct = () => {
            fetch("https://fakestoreapi.com/products")
              .then((response) => response.json())
              .then((data) => setProduct(data));
          };

          getProduct();
        
    }, []);

 


  return (
    <div className="allProducts">
        {
            product.map((item ,id) => {
                return (
                    <ProductItem key={id}
        title={item.title}
        category={item.category}
        description={item.description}
        photoUrl={item.image}
        price={item.price}
      />
                )
                })
        }
      
    </div>
  );
};

export default ProductList;
