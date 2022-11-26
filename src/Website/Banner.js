
import React from 'react';


function Banner() {
  return (
 
   <>
    <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <div class="banner__content">
              <h2 class="title">
                A trusted and secure cryptocurrency exchange.
              </h2>
              <p class="fs-20 desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="btn-action"><span>Trading Now</span></a>
            </div>
          </div>
          <div class="col-xl-6 col-md-12">
            <div class="banner__image">
              <img src="assets/images/layout/banner-02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
}

export default Banner;
