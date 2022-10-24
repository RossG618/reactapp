import React from 'react';

export function Lamborghini(){

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
                  <a href="/" className="btn btn-primary mx-2 col">COLLECTION</a>
                  <a href="/" className="btn btn-outline-light mx-2 col">Make enquires</a>
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
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-nightster/2022-nightster-f53/2022-nightster-f53-motorcycle.jpg?impolicy=myresize&rw=500" alt=''/>
                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <div className="card-body border-top">
                  <h3>2022 NIGHTSTER&trade;</h3>
                  <p className="card-text">The Harley-Davidson® Nightster™ motorcycle is the next chapter in the Harley-Davidson Sportster™ legacy – a leap forward in performance and design built on a foundation laid 65 years ago.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button"  className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="_blank" rel="noopener noreferrer" href={`${linkURL}/nightster.html`}>Order</a></button>
                    </div>
                    <small className="text-muted">10 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" id="card">
                <img className="border-bottom" src='https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-sportster-s/2022-sportster-s-f59/360/2022-sportster-s-f59-motorcycle-01.jpg?impolicy=myresize&rw=1600' alt=''/>
                <div className="card-body">
                  <h3>2022 SPORTSTER -S&trade;</h3>
                  <p className="card-text">
                  Sportster™ S is the first chapter of a whole new book of the Sportster saga. A legacy born in 1957 that outperformed the competition is now rebuilt to blow away the standards of today.
                   </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="_blank" rel="noreferrer" href={`${linkURL}/sportster-s.html`}>Order</a></button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" id="card">
                <img className="border-bottom"src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-fat-bob-114/2022-fat-bob-114-f57/360/2022-fat-bob-114-f57-motorcycle-01.jpg?impolicy=myresize&rw=1600" alt=''/>
                <div className="card-body">
                <h3>2022 FATBOB&trade;</h3>
                  <p className="card-text">
                  A street-eater with an appetite for power. Built with muscular style and performance.
                   </p>     
                   <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" >View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="_blank" rel="noreferrer" href={`${linkURL}/fat-bob.html`}>Order</a></button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/events-black-deer-festival-gb-ie-calendar-listing.jpg" alt=''/>
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
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/events-daytona-calendar-listing.jpg" alt='' />
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
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/events-motorcycle-live-gb-ie-calendar-listing.jpg" alt='' />
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