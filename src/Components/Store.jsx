import React from "react";

function Store()
{
    return(
        <>
        <section className="section cta-section">
      <div className="container col-md-10">
        <div className="row align-items-center">
          <div className="col-md-6 me-auto text-center text-md-start my-5 py-5 ">
            <h2>Download App Free App For Android And IPhone</h2>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p ><a href="/" className="btn d-inline-flex align-items-center ml-4"><i className="fab fa-apple btnn  h4 "></i><span className="h4 ml-5">App store</span></a> <a href="/" className="btn d-inline-flex align-items-center ml-4 "><i className="fab fa-google-play h4 pt-1"></i><span className="h4 ml-3">Google play</span></a></p>
          
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default Store;



