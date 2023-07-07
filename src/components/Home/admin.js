import React, { useContext, useState } from 'react'
import Footer from '../Footer/Footer'
import AdminHome from './AdminHome'
import Users from './Users'
import Complaints from './complaints'
import AdminNav from './AdminNav'
import { Route,BrowserRouter as Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AdminComplaints from './AdminComplaints'
import { baseUrl } from '../../shared/baseUrl'
import Context from '../Context'
import { useEffect } from 'react'

function Admin (){
  const location=useLocation()
  const navigate=useNavigate()
  // const val=null
  // const id=null
  // const id=null
  // const floor=null
  // const room=null
  // const block=null
  // const password=null
  // <userContext.Consumer>
  console.log(location)
  // navigate("/")
  
    if(location.state===null){
      window.location.href='/'
    
     }
  
  const id=location.state.id.userId
     const floor=location.state.floor.floor
     const room=location.state.room.room
     const block=location.state.block.block
     const password=location.state.password.password
 
  // const id=data.id.userId
  // const   floor=data.floor.floor
  // const  room=data.room.room
  // const  block=data.block.block
  //  const password=data.password.password
  // const locationAssign=()=>{
 
  // }
//  {
//   (location.state.id.userId==null)?(
//     contextAssign()
//   )
//   :(
//     locationAssign()
//   )
//  }
  
  // fetch(baseUrl+"login/1")
  // .then(response=>response.json())
  // .then(data=>{
  //   setVal(data.value.value)
  // })
  // .catch(error=>{
  //   console.log("error")
  // })
  return (

    <div>
        {(id== '1' && password== '1234') ? (
          <>
            {/* <h1>id:{id},pass:{password}</h1> */}
            <AdminNav id ={id} floor={floor} room={room} block={block}/>
            {/* <h1>{id}</h1>
            <h1>{password}</h1> */}
            <AdminHome />
            <AdminComplaints id ={id} floor={floor} room={room} block={block} />
            <Footer/>
          </>
        )
        :
        (
          <>
            {/* <h1>id - {id}</h1>
            <h1>pwd - {password}</h1> */}
            {/* console.log(id)  */}
            {/* <h1>id:{id},pass:{password}</h1> */}
            <Navbar id ={id} floor={floor} room={room} block={block} />
            <AdminHome />
            <Complaints id ={id} floor={floor} room={room} block={block}/>
            <Footer/>
          </>
        )
      }


          {/* conditional render Navbar.js for users AdminNav.js for Admins */}
          

        {/* Conditional render AdminHome.js for admin no need to display anything for users  */}
          
          
    </div>
  )
}

export default Admin