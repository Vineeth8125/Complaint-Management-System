import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const AdminHome = () => {
      return (
        <div className='bg-light'> 
          <div className='d-flex justify-content-center'>
            <div className='header justify-content-center p-5 '>
              <img src='/rgukt.jpeg' className='img-fluid p-4'/>
              <h5 className='d-flex align-items-center text-center'> RGUKT-NUZVID <br/>DEPARTMENT OF IT</h5>
            </div>
          </div>
          <hr/>
        </div>
      )
}

export default AdminHome