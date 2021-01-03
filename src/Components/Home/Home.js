import React from 'react';
import './Home.css';
// import '../../index.css';
import '../../App.css';

function Home() {
  return (
    <section id="home" className="d-flex">
      <div className="container-fluid py-5">
        <div className="container h-100">
          <div className="row d-flex h-100">
            <div className="col d-none d-lg-block mt-5 align-self-start">
              <h5 className="text-fade-out-arch text-dark text-right">Architectural</h5>
            </div>
            <div className="col align-self-center">
              <div className="container d-flex flex-column align-items-center justify-content-center">
                {/* <h5 class="text-dark">Mesa Creative</h5> */}
                <img className="logo-img-color" src="../assets/img/brand/Mesa_Creative_Gold_on_clear_Web_full.png" alt="mesacllogo" />
                <img className="logo-img-bw" src="../assets/img/brand/Mesa_Creative_Black_Web_full.png" alt="mesabwlogo" />
              </div>
            </div>
            <div className="col d-none d-lg-block mb-5 align-self-end">
              <h5 className="text-fade-out-tech text-dark text-left">Technology</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;