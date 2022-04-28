const Sidebar = ({
  dark,
  lang,
  setLang,
  text,
  setText,
  products,
  setProducts,
  type,
  setType,
  types,
}) => {
  const handleTR = () => {
    setLang(true)
    setType("")
    setText("")
  }

  const handleEN = () => {
    setLang(false)
    setType("")
    setText("")
  }

  const handleClear = () => {
    setText("")
    setText("")
  }

  return (
    <div className={dark ? "sidebar" : "sidebar-light"}>
      <button onClick={() => handleClear()} style={{ marginTop: "1vh" }}>
        {lang ? "Temizle" : "Clear"}
      </button>
      <div className="search">
        <p>{lang ? "Ürünleri arayın" : "Search products"}</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={lang ? "Ürün adı" : "Product name"}
        />
      </div>
      <div className="category">
        <p>{lang ? "Kategori seçin" : "Choose a Category"}</p>
        <span
          onClick={() => setType("")}
          className={type === "" ? "active-category" : "disabled-category"}
        >
          {lang ? "Hepsi" : "All"}
        </span>
        {types?.map((typee, idx) => (
          <span
            key={idx}
            onClick={() => setType(lang ? typee.title.tr : typee.title.en)}
            className={
              lang
                ? type === typee.title.tr
                  ? "active-category"
                  : "disabled-category"
                : type === typee.title.en
                ? "active-category"
                : "disabled-category"
            }
          >
            {lang ? typee.title.tr : typee.title.en}
          </span>
        ))}
      </div>
      <div className="lang">
        <p>{lang ? "Dil Seçin" : "Choose A Language"}</p>
        <p>
          <span
            className={lang ? "active-lang" : "disabled-lang"}
            onClick={() => handleTR()}
          >
            TR
          </span>{" "}
          <span
            className={!lang ? "active-lang" : "disabled-lang"}
            onClick={() => handleEN()}
          >
            EN
          </span>
        </p>
      </div>
    </div>
  )
}
export default Sidebar
