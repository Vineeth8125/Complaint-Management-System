import React from 'react'
import './Home.css'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const location=useLocation()
  if(location.state===null){
    window.location.href='/'
  }
  const records=[
    {
      id:1,
      complaint:'cse 1',
      type:'lan problem',
      description:'having lan problem',
      publish:'23-05-2023',
      status:'pending',
      statusdesc:'will be solved soon'
    },
    {
      id:2,
      complaint:'cse 2',
      type:'lan problem',
      description:'having lan problem',
      publish:'23-05-2023',
      status:'solved',
      statusdesc:'will be solved soon'
    },
    {
      id:3,
      complaint:'cse 2',
      type:'lan problem',
      description:'having lan problem',
      publish:'23-05-2023',
      status:'pending',
      statusdesc:'will be solved soon'
    },
  ]
  return (
    <div>
      {/* <div className='d-flex justify-content-center'>
        <div className='header justify-content-center p-5 '>
          <img src='/rgukt.jpeg' className='img-fluid p-4'/>
          <h5 className='d-flex align-items-center text-center'> RGUKT-NUZVID <br/>DEPARTMENT OF IT</h5>
        </div>
      </div> */}


      {/* Carousel in home page */}
      <section className='container mt-5 mb-5'>
      <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="true">
        <div className='transp'>
        <img src='/rgukt-logo.png' className='img-fluid p-4 d-block'/>
          <p><h5> RGUKT-NUZVID <br/>DEPARTMENT OF IT</h5></p>
        </div>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/home1.jpg" class="d-block"/>
          </div>
          <div class="carousel-item">
            <img src="/home3.jpg" class="d-block " />
          </div>
          <div class="carousel-item">
            <img src="/home2.jpg" class="d-block" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </section>



      {/* Table for complaint status */}
      <section className='complaints w-100'>
        <div className='container'>
        <h3 className='text-center m-2 p-3'>Complaints</h3>
      <table className=' table table-sm m-2 mb-5 text-center table-responsive'>
        <thead className='bg-primary text-light'>
        <tr >
                <th>ID</th>
                <th>Complaint</th>
                <th>Complaint Type</th>
                <th>Description</th>
                <th>Publish Date</th>
                <th>Status</th>
                <th>Status Description</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record,i) => (
                <tr key={i}>
                  <td>{record.id}</td>
                  <td>{record.complaint}</td>
                  <td>{record.type}</td>
                  <td>{record.description}</td>
                  <td>{record.publish}</td>
                  <td>{record.status}</td>
                  <td>{record.statusdesc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </section>
    </div>
    
  )
}

export default Home