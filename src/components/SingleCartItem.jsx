const SingleCartItem = ({ item, lang, cart, setCart }) => {
  const handleClick = () => {
    let cartCopy = [...cart]
    let updatedCart = cartCopy.filter(
      (itemm) => itemm.item.id !== item?.item?.id
    )
    setCart(updatedCart)
  }

  return (
    <div className="single-cart-item">
      <span onClick={() => handleClick()} className="delete-item">
        -
      </span>
      <p>
        {item?.qty}{" "}
        <span style={{ fontWeight: "300" }}>{lang ? "adet" : "pcs"}</span>
      </p>
      <p style={{ fontWeight: "300" }}>
        {lang ? item?.item?.title.tr : item?.item?.title.en}
      </p>
      <p>
        {(item?.item?.price * item?.qty).toLocaleString()}{" "}
        <span style={{ fontWeight: "300" }}>TRY</span>
      </p>
      <img src={item?.item?.image} alt="" />
    </div>
  )
}
export default SingleCartItem
