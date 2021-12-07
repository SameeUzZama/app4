import { products } from "./services";
import { Products } from "./services";


export const ProductList = () => {
    console.log(products);
    return (
        <div>
            <h1>Product List</h1>
            {products.map((item) =>
                <ProductItem
                    title={item.title}
                    price={item.price}
                    cat={item.cat}
                    desc={item.desc}
                    url={item.url}
                />
            )}
        </div>
    )
}