import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMount = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMount = false;
      };
    };

    getProducts();
  }, []);

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

  const FilterProduct = (cat) => {
    const updateProduct = data.filter((item) => item.category == cat);
    setFilter(updateProduct);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 flex-wrap">
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => FilterProduct("men's clothing")}
          >
            Man`s Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => FilterProduct("women's clothing")}
          >
            Woman`s Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => FilterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => FilterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((Product) => {
          return (
            <Fragment key={Product.id}>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="card p-4 text-center h-100 ">
                  <img
                    src={Product.image}
                    className="card-img-top"
                    alt={Product.title}
                    height="270px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {Product.title.slice(0, 12)}...{" "}
                    </h5>
                    <p className="card-text lead fw-bold">${Product.price}</p>
                    <NavLink
                      to={`/products/${Product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className=" display-6 fw-bolder text-center">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
