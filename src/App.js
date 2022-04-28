import { useState, useEffect } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import UserBar from "./components/UserBar"
import Products from "./components/Products"
import productsDB from "./products.json"
import typesDB from "./types.json"

function App() {
  let productArr = []
  for (let i in productsDB) productArr.push(productsDB[i])

  let typeArr = []
  for (let i in typesDB) typeArr.push(typesDB[i])

  const [products, setProducts] = useState(productArr)
  const [types, setTypes] = useState(typeArr)
  const [totalMoney, setTotalMoney] = useState(128000000000)
  const [cart, setCart] = useState("")
  const [lang, setLang] = useState(true)
  const [dark, setDark] = useState(true)
  const [type, setType] = useState("")
  const [text, setText] = useState("")

  useEffect(() => {
    if (lang) {
      setProducts(
        productArr.filter((product) =>
          product.title.tr.toLowerCase().includes(text.toLowerCase())
        )
      )
    } else {
      setProducts(
        productArr.filter((product) =>
          product.title.en.toLowerCase().includes(text.toLowerCase())
        )
      )
    }
    // eslint-disable-next-line
  }, [text])

  useEffect(() => {
    if (type !== "") {
      if (lang) {
        setProducts(productArr.filter((product) => product.type.tr === type))
      } else {
        setProducts(productArr.filter((product) => product.type.en === type))
      }
    } else {
      setProducts(productArr)
    }
    // eslint-disable-next-line
  }, [type])

  useEffect(() => {
    if (cart !== "") {
      let cartCost = cart?.reduce(
        (acc, item) => acc + item.qty * item.item.price,
        0
      )
      setTotalMoney(128000000000 - cartCost)
    }
    if (cart === "") {
      setTotalMoney(128000000000)
    }
  }, [cart])

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <UserBar
        cart={cart}
        setCart={setCart}
        totalMoney={totalMoney}
        dark={dark}
        lang={lang}
        setTotalMoney={setTotalMoney}
      />
      <div className={dark ? "home" : "home-light"}>
        <Sidebar
          dark={dark}
          lang={lang}
          setLang={setLang}
          text={text}
          setText={setText}
          setProducts={setProducts}
          products={products}
          setType={setType}
          type={type}
          types={types}
        />
        <Products
          products={products}
          dark={dark}
          lang={lang}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  )
}

export default App
