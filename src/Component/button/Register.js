import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" className=" ms-2" onClick={handleShow}>
        <span className="fa fa-user-plus me-1"></span> Register
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="ms-auto fs-2">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className=" btn btn-primary w-100 py-2 mb-3">
            <i class="fa-brands fa-google me-2"></i>
            Sign in With Google
          </button>
          <button className=" btn btn-primary w-100 py-2 mb-3">
            <i class="fa-brands fa-facebook me-2"></i>
            Sign in With Facebook
          </button>

          <div className="email flex-column my-4">
            <input
              type="email"
              id="defaultForm-email"
              className="form-control validate"
              placeholder="Your Name"
            />
          </div>

          <div className="email flex-column my-4">
            <input
              type="email"
              id="defaultForm-email"
              className="form-control validate"
              placeholder="Your Email"
            />
            <span className=" text-muted mt-1 ms-1">
              We'll never share your email with anyone else.
            </span>
          </div>

          <div className="md-form mb-3 email">
            <input
              type="password"
              id="defaultForm-pass"
              className="form-control validate"
              placeholder="Your Password"
            />
          </div>
          <div className="md-form mb-3 email">
            <input
              type="password"
              id="defaultForm-pass"
              className="form-control validate"
              placeholder="Repeat Your Password"
            />
          </div>

          <div className="md-form mb-3 email">
            <div className="me-3">
              <input
                type="radio"
                id="defaultForm-pass"
                className=" form-check-input validate mx-2"
                placeholder="Your Password"
                name = "type"
              />
              <label className="fw-bold"> Woman</label>
            </div>
            <div>
              <input
                type="radio"
                id="defaultForm-pass"
                className=" form-check-input validate mx-2"
                placeholder="Your Password"
                name = "type"
              />
              <label className="fw-bold"> Man</label>
            </div>
          </div>

          <div className="md-form my-2 email fs-5 d-flex align-items-center">
            <input
              type="checkbox"
              id="defaultForm-pass"
              className=" form-check-input mx-1"
              placeholder="Your password"
            />
            Check me out
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            className="m-auto py-2 px-5 my-3 w-100 fs-5 fw-bold"
            onClick={handleClose}
          >
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
