import SingleProduct from "./SingleProduct"

const Products = ({ products, dark, lang, cart, setCart }) => {
  return (
    <div className={dark ? "products-wrapper" : "products-light"}>
      {products?.map((product, idx) => (
        <SingleProduct
          key={idx}
          product={product}
          lang={lang}
          dark={dark}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  )
}
export default Products
