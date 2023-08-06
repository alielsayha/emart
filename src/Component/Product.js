import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AddCart, DeleteCart } from "../redux/action";
import { useDispatch } from "react-redux";
import Products from "./Products";

function Product() {
  const { id } = useParams();
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const [Product, setProduct] = useState([]);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      const responseProducts = await fetch("https://fakestoreapi.com/products");
      setProducts(await responseProducts.json());
      console.log(Products);
      setLoading(false);
    };
    getProduct();
  }, []);

  const handelCart = (Product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(AddCart(Product));
      setCartBtn("Remove To Cart");
    } else {
      dispatch(DeleteCart(Product));
      setCartBtn("Add To Cart");
    }
  };
  const Loading = () => {
    return (
      <>
        <div className="spinner">
          <span className="crical one"></span>
          <span className="crical two"></span>
          <span className="crical three"></span>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <img
              src={Product.image}
              height="500px"
              width="400px"
              alt={Product.title}
              className="my-5"
            />
          </div>
          <div className="col-md-6 d-flex my-5 flex-column justify-content-center p-5 border">
            <h4 className="text-uppercase text-black-50">{Product.category}</h4>
            <h1 className=" display-5 my-2">{Product.title}</h1>
            <p className=" fw-bold">
              Rating {Product.rating && Product.rating.rate}
              <i className="ms-2 fa fa-star" style={{ color: "#fffb00" }}></i>
            </p>
            <h3 className="display-6 fw-bold my-3">$ {Product.price}</h3>
            <p className="lead my-3">{Product.description}</p>
            <div className="button mt-3">
              <button
                className="btn btn-outline-dark me-3 mb-2"
                onClick={() => {
                  handelCart(Product);
                }}
              >
                {cartBtn}
              </button>
              <NavLink to="/cart" className="btn btn-dark">
                Go To Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default Product;
