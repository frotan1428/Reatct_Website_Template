import React from 'react'

const Blog = () => {
  return (
    <div>
         <div>
        {/* client logo slider */}
        <section className="section pb-0">
          <div className="container">
            <div className="client-logo-slider d-flex align-items-center">
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-1.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-2.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-3.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-4.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-5.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-1.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-2.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-3.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-4.png" alt="client-logo" /></a>
              <a href="contact.html" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-5.png" alt="client-logo" /></a>
            </div>
          </div>
        </section>
        {/* /client logo slider */}
        {/* blog */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Blogs</h2>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <article className="card shadow">
                  <img className="rounded card-img-top" src="images/blog/post-3.jpg" alt="post-thumb" />
                  <div className="card-body">
                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                    </h4>
                    <p className="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et
                      dolore magna aliqua.</p>
                    <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <article className="card shadow">
                  <img className="rounded card-img-top" src="images/blog/post-4.jpg" alt="post-thumb" />
                  <div className="card-body">
                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                    </h4>
                    <p className="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et
                      dolore magna aliqua.</p>
                    <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <article className="card shadow">
                  <img className="rounded card-img-top" src="images/blog/post-2.jpg" alt="post-thumb" />
                  <div className="card-body">
                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                    </h4>
                    <p className="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et
                      dolore magna aliqua.</p>
                    <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* /blog */}
      </div>
    </div>
  )
}

export default Blog