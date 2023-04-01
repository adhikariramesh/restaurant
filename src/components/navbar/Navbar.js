import React from 'react'
import "./style.css";
const Navbar = ({filterItem,menuList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-group">
          {
            menuList.map((list)=>{
              return(
                <button className="nav-group-item" onClick={()=>filterItem(list)}>{list}</button>
              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar
