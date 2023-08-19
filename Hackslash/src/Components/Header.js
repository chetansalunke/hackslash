import React from 'react'

export default function Header() {
  return (
    <>
   <div class="hero_area">
     <section class=" slider_section ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ">
            <div class="detail_box">
              <h1>
                Hack Slash <br/>
              </h1>
              <p>

               <h5> Are you ready to embark on a journey into the exciting world of technology, innovation, and problem-solving? Look no further than HackSlash, your ultimate destination for all things technical!
               </h5>  </p>
              <a href="Register.js" class="">Register Now</a>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 offset-lg-1">
            <div class="img_content">
              <div class="img_container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="img-box">
                        <img src="./assests/images/tech.png" alt=""/>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="img-box">
                        <img src="./assests/images/tech1.png" alt=""/>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}
