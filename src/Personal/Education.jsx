import React from 'react'

const Education = () => {
  return (
    <div>
         <div>
        {/* education */}
        <section className="section position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-title">Education</h2>
              </div>
              <div className="col-lg-6 col-md-6 mb-80">
                <div className="d-flex">
                  <div className="mr-lg-5 mr-3">
                    <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                  </div>
                  <div>
                    <p className="text-dark mb-1">2006</p>
                    <h4>Marters in UX Design</h4>
                    <p className="mb-0 text-light">Masassusets Institute of Technology</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-80">
                <div className="d-flex">
                  <div className="mr-lg-5 mr-3">
                    <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                  </div>
                  <div>
                    <p className="text-dark mb-1">2004</p>
                    <h4>Honours in Fine Arts</h4>
                    <p className="mb-0 text-light">Harvard University</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-80">
                <div className="d-flex">
                  <div className="mr-lg-5 mr-3">
                    <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                  </div>
                  <div>
                    <p className="text-dark mb-1">2000</p>
                    <h4>Higher Secondary Certificat</h4>
                    <p className="mb-0 text-light">Cardiff School</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-80">
                <div className="d-flex">
                  <div className="mr-lg-5 mr-3">
                    <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                  </div>
                  <div>
                    <p className="text-dark mb-1">1998</p>
                    <h4>Secondary School Certificate</h4>
                    <p className="mb-0 text-light">Cardiff School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bg image */}
          <img className="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image" />
        </section>
        {/* /education */}
        {/* services */}
      </div>
    </div>
  )
}

export default Education