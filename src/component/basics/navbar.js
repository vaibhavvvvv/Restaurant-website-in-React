import React from "react"

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currentElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currentElement)}
              >
                {currentElement}
              </button>
            )
          })}

          {/* <div
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </div>
          <div className="btn-group__item" onClick={() => filterItem("lunch")}>
            Lunch
          </div>
          <div
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            Evening
          </div>
          <div className="btn-group__item" onClick={() => filterItem("dinner")}>
            Dinner
          </div> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
