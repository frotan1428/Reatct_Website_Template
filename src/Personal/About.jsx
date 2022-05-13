import React from 'react'

const About = () => {
  return (
    <div>
        
      <section className="section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.</p>
              <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
            </div>
            <div className="col-md-4 text-center drag-lg-top">
              <div className="shadow-down mb-4">
                <img src="images/about/author.jpg" alt="author" className="img-fluid w-100 rounded-lg border-thick border-white" />
              </div>
              <img src="images/about/signature.png" alt="signature" className="img-fluid" />
              <h4>Johnathan Smith</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About