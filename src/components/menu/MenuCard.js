import React from 'react'
import "./style.css";

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <div className="main-card-container" >
                {
                    menuData.map((currentElment) => {
                        const {id,name,dsc,img,price} =currentElment;
                        return (
                            <>
                                <div className="card-container" key={currentElment.id}>
                                    <div className="card-id">{id}</div>
                                    <h2 className="card-title">{name}</h2>
                                    <div className="imag-body">
                                        <img src={img} />
                                    </div>
                                    <div className="card-discraption">{dsc}</div>
                                    <span className="price">Rs {price}</span>
                                    <div className="rate-star">**</div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
            <div className="footer">
                this is footer
            </div>
        </>
    )
}

export default MenuCard
