import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LogIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        <span className="fa fa-sign-in me-1"></span> LogIn
      </Button>

      <Modal
        className=" my-5"
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
              placeholder="Your email"
            />
            <span className=" text-muted mt-1 ms-1">We'll never share your email with anyone else.</span>
          </div>

          <div className="md-form mb-3 email">
            <input
              type="password"
              id="defaultForm-pass"
              className="form-control validate"
              placeholder="Your password"
            />
          </div>

          <div className="md-form mb-3 email fs-5 d-flex align-items-center py-3">
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
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogIn;
