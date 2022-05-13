import React from 'react'

const Portfoli = () => {
  return (
    <div>
        {/* portfolio */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Portfolio</h2>
            </div>
          </div>
          <div className="row shuffle-wrapper">
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img src="images/portfolio/item-1.png" alt="portfolio-image" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img src="images/portfolio/item-2.png" alt="portfolio-image" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img src="images/portfolio/item-3.png" alt="portfolio-image" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img src="images/portfolio/item-4.png" alt="portfolio-image" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img src="images/portfolio/item-5.png" alt="portfolio-image" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfoli