import React from 'react'
import './index.css'
import logo from './../../assets/img/nike-logo.png'
const CardDetails = () => {
  return (
    <div className='detail-container'>
        <p className="card-text">NIKE AIR</p>
        <div className="horizontal-container">
            <h2 className="card-suptitle"> AIR JORDAN 1 MID SE GC</h2>
            <h2 className="card-suptitle"> 856</h2>
        </div>
        <div className="horizontal-container">
            <h2 className="card-suptitle"> YOU NEXT SHOES</h2>
            <button className="card-button"> bay</button>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
            </div>  
    </div>
  )
}

export default CardDetails