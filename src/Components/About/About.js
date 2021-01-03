import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="d-flex">
      <div className="container-fluid  m-2">
        <div className="row d-flex justify-content-center">
          <h5 className="text-dark text-left">About</h5>
        </div>

        <div className="row d-flex  justify-content-center align-items-stretch">
          <div className="col-sm-5 d-flex mr-2">
            <div className="row d-flex justify-content-around align-items-center">
              <img src="../assets/img/eleni/smp_standing.jpg" alt="mesacllogo" />
              <img src="../assets/img/eleni/eleni_bean.jpg" alt="mesacllogo" />
              <img src="../assets/img/eleni/eleni_bldg_entrance.jpg" alt="mesacllogo" />
              <img src="../assets/img/eleni/eleni_morainelake.jpg" alt="mesacllogo" />
              <img src="../assets/img/eleni/eleni_site.jpg" alt="mesacllogo" />

            </div>
          </div>
          <div className="col-sm-6 ml-2">
            {/* <div className="row d-flex justify-content-center">
              <h5 className="text-dark text-left">About</h5>
            </div> */}

            <p className="text-left">
              Hi! Thanks for stopping by.
              <br />
              A little bit about me: I am a proud born and raised Calgarian; I come from a Big Fat Greek-Cypriot family; I have been working in the construction industry since 2013 and have loved every minute! I graduated from SAIT in 2013 with a diploma in Architectural Technology, and naturally got a job with an Electrical Engineering firm...wait. What?? Not sure how that happened but almost 8 years later I am still there and love it!
              </p>
            <p className="text-left">
              I recently decided to tap into my Architectural roots and have been flexing my creative muscle doing freelance design work since early 2019. My love of design any passion for architecture evolved from a hobby, to Mēsa Creative in early 2020. I am lucky to have many friends and collaborators in the industry who can lean on me to help bring their projects to life. My diverse construction background makes me an asset to any project. From drafting support to millwork shop drawings, full basement design/permit drawings and commercial space design, I can do just about anything. I dream big, I work hard, and I love a challenge.
              </p>
            <p className="text-left">
              When I’m not working, you can find me volunteering with the CCA’s Women in Construction Committee and on the Condo Board at my building planning and managing more construction projects. I’m a glutton for punishment, what can I say! But honestly I do have fun on occasion. I love to travel, I’m an avid explorer and huge foodie! Not only do I love trying new restaurants around this gorgeous city, I would also make Gordon Ramsey proud in the kitchen.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;