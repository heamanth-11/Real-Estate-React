import React from "react";
import "../Css/Home.css";




function Home() {
    return(
        // eslint-disable-next-line 
        <div className="imgage-cover hero-banner home-bg" >
            <div class="container">
					<div class="hero-search-wrap">
						<div class="hero-search">
							<h1><span className="h6">Find Your</span> Perfect Space</h1>
						</div>
						<div class="hero-search-content side-form" data-select2-id="12">
							
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12">
									<div class="form-group">
										<div class="input-with-icon">
											<input type="text" class="form-control" placeholder="Search for a location" />
											<img src="" width="18" alt="" />
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-6">
									<div class="form-group">
										<label>Min Price</label>
										<select id="minprice" class="form-control select2-hidden-accessible" data-select2-id="minprice" tabindex="-1" aria-hidden="true">
											<option value="" data-select2-id="6">&nbsp;</option>
											<option value="1" data-select2-id="22">$500</option>
											<option value="2" data-select2-id="23">$1000</option>
											<option value="3" data-select2-id="24">$1500</option>
											<option value="4" data-select2-id="25">$2000</option>
											<option value="5" data-select2-id="26">$3000</option>
										</select>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6">
									<div class="form-group">
										<label>Max Price</label>
										<select id="maxprice" class="form-control select2-hidden-accessible" data-select2-id="maxprice" tabindex="-1" aria-hidden="true">
											<option value="" data-select2-id="8">&nbsp;</option>
											<option value="1" data-select2-id="14">$1000</option>
											<option value="2" data-select2-id="15">$1500</option>
											<option value="3" data-select2-id="16">$2000</option>
											<option value="4" data-select2-id="17">$3000</option>
											<option value="5" data-select2-id="18">$5000</option>
										</select>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-6">
									<div class="form-group">
										<label>Property Type</label>
										<select id="ptypes" class="form-control select2-hidden-accessible" data-select2-id="ptypes" tabindex="-1" aria-hidden="true">
											<option value="" data-select2-id="4">&nbsp;</option>
											<option value="1" data-select2-id="29">Rental</option>
											<option value="2" data-select2-id="30">Villas</option>
											<option value="3" data-select2-id="31">Offices</option>
											<option value="4" data-select2-id="32">Condos</option>
											<option value="5" data-select2-id="33">Studios</option>
										</select>
                                        
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6">
									<div class="form-group">
										<label>Bed Rooms</label>
										<select id="bedrooms" class="form-control select2-hidden-accessible" data-select2-id="bedrooms" tabindex="-1" aria-hidden="true">
											<option value="" data-select2-id="2">&nbsp;</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12">
									<div class="form-group">
										<label>Property Location</label>
										<select id="cities" class="form-control select2-hidden-accessible" data-select2-id="cities" tabindex="-1" aria-hidden="true">
											<option value="" data-select2-id="10">&nbsp;</option>
											<option value="1">Los Angeles, CA</option>
											<option value="2">New York City, NY</option>
											<option value="3">Chicago, IL</option>
											<option value="4">Houston, TX</option>
											<option value="5">Philadelphia, PA</option>
											<option value="6">San Antonio, TX</option>
											<option value="7">San Jose, CA</option>
										</select>
									</div>
								</div>
							</div>
							
						</div>
						<div class="hero-search-action">
							<button class="btn search-btn">Search Result</button>
						</div>
					</div>
				</div>
			</div>
        
    );
}


export default Home;