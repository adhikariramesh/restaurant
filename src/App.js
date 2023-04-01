import React, { useState } from 'react';
import MenuCard from './components/menu/MenuCard';
import Navbar from './components/navbar/Navbar';
import Menu from "./components/allApi/MenuApi";

 const menuList =[ ...new Set(Menu.map((currentElmnt)=>{
      return currentElmnt.category;
 })),"Home"];


const App = () => {
  const [menuData, setMenuDate] = useState(Menu);
  const [menuLists, setMenuLists] = useState(menuList);

  const filterItem = (active) => {
    // console.log(active);
    if(active === "Home"){
      setMenuDate(Menu);
      return;
    }
    const filterData = Menu.filter((currentElmnt) => {
      return currentElmnt.category === active;
    })
    setMenuDate(filterData);
  }

  return (
       <>
                   
        <Navbar filterItem={filterItem} menuList={menuLists}/>
        <MenuCard menuData={menuData} />
      </>
      )
}

      export default App
