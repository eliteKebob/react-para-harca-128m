import { useState } from "react"

const SingleProduct = ({ dark, lang, product, cart, setCart }) => {
  const [qty, setQty] = useState(1)

  const handleClick = () => {
    if (qty > 1) {
      setQty(qty - 1)
    } else {
      alert(
        lang ? "Ürün adedi en az 1 olmalıdır" : "Quantity must be atleast 1"
      )
      setQty(1)
    }
  }

  const addCart = () => {
    if (cart !== "") {
      for (let i in cart)
        if (cart[i]?.item.id === product?.id) {
          let cartCopy = [...cart]
          let item = {
            qty: cart[i].qty + qty,
            item: product,
          }
          let updatedCart = cartCopy.filter(
            (itemm) => itemm.item.id !== cart[i]?.item.id
          )
          updatedCart.push(item)
          setCart(updatedCart)
        } else {
          let updatedCart = [...cart]
          let item = {
            qty: qty,
            item: product,
          }
          updatedCart.push(item)
          setCart(updatedCart)
        }
    } else {
      let updatedCart = [...cart]
      let item = {
        qty: qty,
        item: product,
      }
      updatedCart.push(item)
      setCart(updatedCart)
    }
  }

  return (
    <div className={dark ? "single-product" : "single-product-light"}>
      <div className="sp-info">
        <h3 style={{ fontWeight: "400" }}>
          {lang ? product?.title.tr : product?.title.en}
        </h3>
        <span style={{ fontWeight: "700" }}>
          {product?.price.toLocaleString()}{" "}
          <span style={{ fontWeight: "300" }}>TRY</span>
        </span>
        <div className="qty">
          <span onClick={() => handleClick()}>-</span>
          <p style={{ fontWeight: "700" }}>{qty}</p>
          <span onClick={() => setQty(qty + 1)}>+</span>
        </div>
        <button onClick={() => addCart()}>
          {lang ? "Sepete Ekle" : "Add to Cart"}
        </button>
      </div>
      <img src={product?.image} alt="" />
    </div>
  )
}
export default SingleProduct
