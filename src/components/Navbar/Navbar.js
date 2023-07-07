import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = ({id, floor, block, room}) => {
  return (
    <>
 
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
        <a className="navbar-brand ps-4" href="#">
          <img src='/rgukt-logo.png' width="50" height="50"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav'>
            <li className="nav-item"><NavLink to='/home' className={({isActive})=>"nav-link text-light"+(isActive ? " active" : "")}  state={{ id:{id}, floor:{floor}, block:{block}, room:{room} }}>Home</NavLink></li>
            <li className="nav-item"><NavLink to='/ComplaintForm' className={({isActive})=>"nav-link text-light"+(isActive ? " active" : "")} state={{ id:{id}, floor:{floor}, block:{block}, room:{room} }} >Complaint Form</NavLink></li>
            {/* <li className="nav-item"><a href='#footer' className='nav-link'> Contact </a></li> */}
          </ul>
          <li className="btn btn-light" type="submit"><Link to='/' className='nav-link text-dark'>LogOut</Link></li>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar