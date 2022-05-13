import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
        {/* contact */}
        <section className="section section-on-footer" data-background="images/backgrounds/bg-dots.png">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Contact Info</h2>
              </div>
              <div className="col-lg-8 mx-auto">
                <div className="bg-white rounded text-center p-5 shadow-down">
                  <h4 className="mb-80">Contact Form</h4>
                  <form action="#" className="row">
                    <div className="col-md-6">
                      <input type="text" id="name" name="name" placeholder="Full Name" className="form-control px-0 mb-4" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" id="email" name="email" placeholder="Email Address" className="form-control px-0 mb-4" required />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="message" className="form-control px-0 mb-4" placeholder="Type Message Here" required defaultValue={""} />
                    </div>
                    <div className="col-lg-6 col-10 mx-auto">
                      <button className="btn btn-primary w-100">send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /contact */}
        {/* footer */}
        <footer className="bg-dark footer-section">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h5 className="text-light">Email</h5>
                  <p className="text-white paragraph-lg font-secondary">steve.fruits@email.com</p>
                </div>
                <div className="col-md-4">
                  <h5 className="text-light">Phone</h5>
                  <p className="text-white paragraph-lg font-secondary">+880 2544 658 256</p>
                </div>
                <div className="col-md-4">
                  <h5 className="text-light">Address</h5>
                  <p className="text-white paragraph-lg font-secondary">125/A, CA Commercial Area, California, USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top text-center border-dark py-5">
            <p className="mb-0 text-light">Copyright © Designed &amp; Developed by <a className="text-white-50" href="Themefisher">Themefisher</a></p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contact