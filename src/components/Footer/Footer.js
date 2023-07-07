import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <section className="footer text-light" id='footer'>
  <div className="container footer text-light ">
      <div className="row">
          <div className="col-lg-5">
              
              <ul>
              <h4>About Us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque lectus, vestibulum et pharetra nec, elementum nec ipsum. Donec orci neque, dictum mollis ultrices elementum, venenatis sit amet turpis.</p>
              </ul>
          </div>
          <div className="col-lg-2">
              <ul>
              <h4>Usefull Links</h4>
              <li><a href="#">RGUKT WEB</a></li>
                  <li><a href="#">SMS</a></li>
                  <li><a href="">Intranet Nuzvid</a> </li>
              </ul>
          </div>
          <div className="col-lg-2">
              <ul>
              <h4>Our Services</h4>
                  <li><a href="">Home</a></li>
                  <li><a href="">Complaint Form</a></li>
              </ul>
          </div>
          <div className="col-lg-3">
              <ul>
              <h4>CONTACT US</h4>
                  <li>IT DEPARTMENT, RGUKT </li>
                  <li><a href="" class="href"><i class="bi bi-envelope-paper-fill text-light"></i> itdeparment@gmail.com</a></li>
                  <li><a href=""><i class="bi bi-telephone-fill text-light"></i> 0000-00-00</a></li>
                  <li><a href=""><i class="bi bi-telephone-fill text-light"></i> 0000-00-00</a></li>

              </ul>
          </div>
      </div>
      <div className="row justify-content-center pt-5">             
                <div className="col-auto">
                    <p>© Copyright 2023 IT Department RGUKT-NUZVID</p>
                </div>
            </div>
  </div>
</section> 
  )
}

export default Footer