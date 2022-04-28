import { IoWallet, IoCart } from "react-icons/io5"
import { useState } from "react"
import Cart from "./Cart"

const UserBar = ({ cart, setCart, totalMoney, dark, lang, setTotalMoney }) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <div className={dark ? "userbar" : "userbar-light"}>
        <div className={dark ? "wallet" : "wallet-light"}>
          <IoWallet />
          <p style={{ fontWeight: "700" }}>
            {totalMoney?.toLocaleString()}{" "}
            <span style={{ fontWeight: "300" }}>TRY</span>
          </p>
        </div>
        <div
          className={dark ? "cart" : "cart-light"}
          onClick={() => setShowCart(!showCart)}
        >
          <IoCart />
          <p style={{ fontWeight: "700" }}>{lang ? "Sepetim" : "My Cart"}</p>
        </div>
      </div>

      {showCart ? (
        <Cart
          cart={cart}
          setCart={setCart}
          totalMoney={totalMoney}
          setTotalMoney={setTotalMoney}
          dark={dark}
          lang={lang}
          setShowCart={setShowCart}
        />
      ) : (
        ""
      )}
    </>
  )
}
export default UserBar
