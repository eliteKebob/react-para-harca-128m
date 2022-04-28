import SingleCartItem from "./SingleCartItem"

const Cart = ({
  cart,
  setCart,
  totalMoney,
  setTotalMoney,
  dark,
  lang,
  setShowCart,
}) => {
  return (
    <div className={dark ? "cart-wrapper" : "cart-wrapper-light"}>
      <div className={dark ? "cart-content" : "cart-content-light"}>
        <h3 style={{ height: "5%" }}>{lang ? "Sepetin" : "Your Cart"}</h3>
        <button className="close-icon" onClick={() => setShowCart(false)}>
          x
        </button>
        <div className="cart-items">
          {cart !== "" ? (
            cart?.map((item, idx) => (
              <SingleCartItem
                key={idx}
                item={item}
                lang={lang}
                cart={cart}
                setCart={setCart}
              />
            ))
          ) : (
            <h3>{lang ? "Sepetiniz Boş.." : "Your Cart is Empty.."}</h3>
          )}
        </div>
        <button
          onClick={() => setCart("")}
          style={{ height: "5%", alignSelf: "center" }}
        >
          {lang ? "Sepeti Boşalt" : "Clear Cart"}
        </button>
      </div>
    </div>
  )
}
export default Cart
