import React from "react";
import Navbar from "./Navbar";
import back from "./images/OIP.jpg" 
import CustFooter from "./CustFooter";
function ContactUS()
{
  return(
    <>
    <Navbar></Navbar> 
    <div style={{backgroundColor:"#343a40"}}>
    <div className="row" style={{marginLeft:2+'em'}}>
    <div class="col-md-8" style={{marginTop:45}}>
							<p class="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="100" style={{color:"white"}}><span class="line-pre-title bg-color-primary"></span>Free to tell</p>
							<h2 class="text-color-secondary font-weight-bolder text-capitalize mb-2 custom-letter-spacing-2 custom-text-1 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" style={{color:"coral"}}>Send Us a Message</h2>
							<p class="mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="300"></p>

							<form action="" method="POST">
																<div class="form-row">
									<div class="form-group col-lg-4">
										<input type="text" placeholder="Your Name" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" required=""/>
									</div>
									<div class="form-group col-lg-4">
										<input type="email" placeholder="Your E-mail" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" required=""/>
									</div>
										<div class="form-group col-lg-4">
										<input placeholder="Contact Number" type="number" value="" data-msg-required="Please enter Contact Number." maxlength="100" class="form-control" name="mobile" required=""/>
									</div>
								</div>
								<div class="form-row">
									<div class="form-group col">
										<input placeholder="Subject" type="text" value="" data-msg-required="Please enter the subject." maxlength="100" class="form-control" name="subject" required=""/>
									</div>
								</div>
								<div class="form-row">
									<div class="form-group col">
										<textarea placeholder="Your Message..." maxlength="5000" data-msg-required="Please enter your message." rows="10" class="form-control" name="message" required=""></textarea>
									</div>
								</div>
								<div class="form-row">
									<div class="form-group col">
									    <button type="submit" class="btn btn-primary btn-modern" name="submit"> Submit</button>
									</div>
								</div>
							</form>
						</div>
            <div class="col-md-4">
						    <img src={back} width="100%" height="100%"/>
						</div>
    </div>
    </div>
    <CustFooter></CustFooter>
    </>
  );

}

export default ContactUS;