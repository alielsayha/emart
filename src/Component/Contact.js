import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container">
        <h1 className="fs-1 fw-bold text-center my-5">Have Some Question?</h1>
        <hr />
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center my-4">
            <div style={{ width: "100%" }}>
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Calculate population in area
                </a>
              </iframe>
            </div>
          </div>
          <div className="col-md-6 border">
            <form className="h-100 d-flex flex-column justify-content-center p-4 my-3">
              <div className="mb-3">
                <label htmlFor="inputName" className="mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="inputName"
                  className=" form-control"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  id="inputEmail"
                  className=" form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputTextareaa" className="mb-2">
                  Email Address
                </label>
                <textarea
                  idinputTextareaa
                  cols="30"
                  rows="6"
                  className=" form-control"
                ></textarea>
              </div>
              <NavLink to="#" className="btn btn-outline-dark">
                Send Massage{" "}
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
