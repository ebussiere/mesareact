import React from 'react';
import './Instagram.css';
import '../../App.css';

function Instagram() {
  return (
    <section id="instagram" className="d-flex">
      <div className="container-fluid  m-2">
        <div className="row d-flex justify-content-center">
          <h5 className="text-dark text-left">Instagram</h5>
        </div>
        {/* <div className="elfsight-app-561c49cc-4bf6-4ba7-a0fc-1656987b3360" style={{ height: 500 }}></div> */}
        {/* <div className="powr-social-feed" id="c1bffb8b_1609715292"></div><script src="https://www.powr.io/powr.js?platform=react"></script> */}
        <iframe src="https://www.powr.io/social-feed/u/c1bffb8b_1609715292#platform=iframe" title="test" width="80%" height="700px" frameborder="0"></iframe>
      </div>
    </section>
  );
}
export default Instagram;