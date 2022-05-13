import React from 'react'

const Experince = () => {
  return (
    <div>
         {/* experience */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="col-lg-3 col-md-4 text-center">
              <img src="images/experience/icon-1.png" alt="icon" />
              <p className="mb-0">Jan 2007 - Feb 2009</p>
              <h4>Junior UX Designer</h4>
              <h6 className="text-light">WEBEX</h6>
            </div>
            <div className="col-lg-3 col-md-4 text-center">
              <img src="images/experience/icon-2.png" alt="icon" />
              <p className="mb-0">Mar 2009 - Aug 2014</p>
              <h4>UX &amp; UI Designer</h4>
              <h6 className="text-light">AUGMEDIX</h6>
            </div>
            <div className="col-lg-3 col-md-4 text-center">
              <img src="images/experience/icon-3.png" alt="icon" />
              <p className="mb-0">Sep 2014 - Present</p>
              <h4>Senior UI Designer</h4>
              <h6 className="text-light">THEMEFISHER</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experince