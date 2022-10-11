import React from 'react';

export function BMW() {

    const linkStyles = {
        "text-decoration": "none",
        "list-style": "none",
      }

const linkURL = "https://www.harley-davidson.com/gb/en/motorcycles";

    return(
        <div >

        <p className="d-flex justify-content-center ">
                  This application contains snippets from various Codecademy articles. You can browse all our articles and read them in their entirety <a href="https://www.codecademy.com/articles">here</a>.
                </p>
        <section className="py-2 text-center bg-dark shadow rounded-1 ">
                <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light text-white">Make your choice</h1>
                <p className="lead text-white">Here at Harley-Davidson we create the ultimate combination of performance and style, the very life blood of motor engines we don't just build motorcycles, we are creating life through cold hard metal. </p>
                <div className="position-relative">
                  <a href="#" className="btn btn-primary mx-2 col">COLLECTION</a>
                  <a href="#" className="btn btn-outline-light mx-2 col" >Make enquires</a>
                </div>
              </div>
                </div>
              </section>
          <main>
        
            
            <div>
          
        
          
          <div className="album py-5">
            <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm" id="card">
                <img className='rounded-top' src="https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/publicPools/teaser-pool/large-teasers/home/New-car-locator_1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1657894351897.jpg"/>
                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <div className="card-body border-top">
                  <h3>2022 NIGHTSTER&trade;</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum eum veritatis maiores minus est cupiditate culpa aperiam eligendi.
                    </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button"  className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="_blank" href={`${linkURL}/nightster.html`}>Order</a></button>
                    </div>
                    <small className="text-muted">10 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" id="card">
                <img className="border-bottom rounded-top" src='https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/bmw-cars/m-models/m240i-coupe/bmw-2-series-m240i-xdrive-coupe-1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1660922327057.jpg'/>
                <div className="card-body">
                  <h3>2022 SPORTSTER -S&trade;</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum fuga laboriosam ad harum incidunt quidem, porro veniam! Officia, adipisci?
                   </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="blank_" href={`${linkURL}/sportster-s.html`}>Order</a></button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" id="card">
                <img  className="border-bottom "src="https://www.bmw.co.uk/content/dam/bmw/common/all-models/1-series/5-door/2021/highlights/bmw-1-series-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1631778257356.jpg"/>
                <div className="card-body">
                <h3>2022 FATBOB&trade;</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti porro sunt suscipit neque, quidem odit ducimus harum delectus aspernatur?
                   </p>              <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="_blank" href={`${linkURL}/fat-bob.html`}>Order</a></button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/events-black-deer-festival-gb-ie-calendar-listing.jpg" />
                <div className="card-body">
                  <h3>Daytona Bike Week</h3>
                  <p className="card-text">Join us down south at the 81st year of this world-famous bike week. Featuring live entertainment, races, bike shows, demo rides, and more. 
    </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Attend</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/events-daytona-calendar-listing.jpg"/>
                <div className="card-body">
                  <h3>MCN Festival</h3>
                  <p className="card-text">
    A must for any two-wheel enthusiast. MCN Festival provides a perfect opportunity to try the Harley of your dreams. Join us there for demo rides, rolling road experiences and the chance to grab some merch!
    </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Attend</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/events-motorcycle-live-gb-ie-calendar-listing.jpg" />
                <div className="card-body">
                  <h3>Motorcycle Live</h3>
                  <p className="card-text">Visit the Harley-Davidson stand at the UK's largest motorcycle show, swing your leg over a comprehensive selection of the H-D line-up and fall in love with your next motorcycle.
    </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Attend</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
            </div>
          </div>
          
          </div>
         {/* <AdvertPopup trigger={timedPop} setTrigger={setTimedPop} /> */}
          </main>
        </div>
    )
}