import React, { useState } from "react"
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from "./navbar"

const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return currentElement.category
    })
  ),
  "All",
]
// new set only returns elements once even tho they occur multiple times.
console.log(uniqueList)

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu)
      return
    }

    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category
    })
    setMenuData(updatedList)
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant
