import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="d-flex">
      <div className="container-fluid  m-2">
        <div className="row h-100 d-flex justify-content-center">
          <div className="col-sm-5 bg-danger mr-2">
            <h5 className="text-dark">About</h5>
          </div>
          <div className="col-sm-5 bg-primary ml-2">
            <h5 className="text-dark">About</h5>
            <p>
              Many of you may have never heard of an Architectural Technologist, and are curious how this may differ from a licensed Architect. In short, an Architectural Tech is usually responsible for figuring out how to bring the Architects vision to life. This includes detailing things like building envelopes, wall + ceiling assemblies, connections, coordinating MEP sub consultants, and the list goes on.
              •
              As a freelance Architectural Tech, I’ve had the pleasure of wearing many hats with multiple clients, from creating millwork shop drawings to designing a full tenant fit up for a commercial space, and just about everything in between. The possibilities are endless.
              •
              If your project is under 600 sq.meters (6000 sq.ft) or if it is limited to interior fit up, I can likely assist with your design! If you need 3D views to convey an idea to a client, I’m your gal! Or if you simply need a drafting service to bring your vision to life, I can do that too! Next time you have a challenge to conquer, give me a shout; I’d be happy to help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;