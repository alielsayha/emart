import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, DeleteCart } from "../redux/action";
import { NavLink } from "react-bootstrap";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const handleClose = (item) => {
    dispatch(DeleteCart(item));
  };
  let total = 0;

  const itemList = (item) => {
    total = total + item.qty * item.price;
    return (
      <>
        <div className=" d-flex justify-content-between list-group-item">
          <span className=" fst-italic text-uppercase">
            {item.title.slice(0, 12)}
          </span>
          <span className="fs-6 fw-bold text-muted"> ${item.qty * item.price}</span>
        </div>
      </>
    );
  };

  const increase = (item) => {
    dispatch(AddCart(item));
  };

  const cartItems = (item) => {
    return (
      <div key={item.id}>
        <div className=" py-5 mb-4">
          <div className=" container">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={item.image}
                  alt={item.description}
                  width="50%"
                  height="170px"
                  className=" rounded-5"
                />
              </div>
              <div className="col-md-8">
                <h3 className="my-3">{item.title}</h3>
                <p className="lead fs-4">Price : $ {item.price}</p>
                <p className="fw-bold fs-4">
                  {item.qty} * {item.price} = {item.qty * item.price}$
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <button
                      className="increase"
                      onClick={() => {
                        handleClose(item);
                      }}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="increase "
                      onClick={() => {
                        increase(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <>
        <div
          className=" bg-body-secondary d-flex align-items-center"
          style={{ height: "86vh", width: "100%" }}
        >
          <div className=" container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="fs-1 fw-bold text-center">Your Cart is Empty</h3>
              </div>
            </div>
          </div>
        </div>
        ;
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {state.length === 0 && emptyCart()}
              {state.length != 0 && state.map(cartItems)}
            </div>
            <div className="col-md-3 my-5 position-sticky">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  {state.length}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {state.map(itemList)}

                <li className="list-group-item d-flex justify-content-between">
                  <h5 className="text-primary fw-bold">Total (USD)</h5>
                  <strong>${total}</strong>
                </li>
              </ul>

              <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button type="button" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
