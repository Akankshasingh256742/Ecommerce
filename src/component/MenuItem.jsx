import React from 'react'
import './menu-item.scss'
function MenuItem({product}) {
    const {title,price,imageUrl}=product
    return (
          <div className="menu-item">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="content">
              <h1 className="title">{title}</h1>
              <span className="subtitle">Shop now</span>
            </div>
          </div>
    )
  }
  
export default MenuItem