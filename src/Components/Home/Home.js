import React from 'react';
import './Home.css';
// import '../../index.css';
import '../../App.css';

function Home() {
  return (
    <section id="home" class="d-flex">
      <div class="container-fluid py-5">
        <div class="container h-100">
          <div class="row d-flex h-100">
            <div class="col d-none d-lg-block mt-5 align-self-start">
              <h5 class="text-fade-out-arch text-dark text-right">Architectural</h5>
            </div>
            <div class="col align-self-center">
              <div class="container d-flex flex-column align-items-center justify-content-center">
                {/* <h5 class="text-dark">Mesa Creative</h5> */}
                <img class="logo-img-color" src="../assets/img/Mesa_Creative_Gold on Black_Web.png" alt="mesacllogo" />
                <img class="logo-img-bw" src="../assets/img/Mesa_Creative_Black_Web.png" alt="mesabwlogo" />
              </div>
            </div>
            <div class="col d-none d-lg-block mb-5 align-self-end">
              <h5 class="text-fade-out-tech text-dark text-left">Technology</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;