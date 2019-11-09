import React from "react";

class Product extends React.Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <i>
              <div className="mask waves-light waves-effect waves-light"></div>
            </i>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <i>{product.name}</i>
              </strong>
            </h4>
            <ul className="rating">{this.showRating(product.rating)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}</span>
              <span className="right">
                <button
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showRating = rating => {
    let randomString = require("random-string");
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(
        <React.Fragment key={randomString({ length: 20 })}>
          <i className="fa fa-star"></i>
        </React.Fragment>
      );
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(
        <React.Fragment key={randomString({ length: 19 })}>
          <i className="fa fa-star-o"></i>
        </React.Fragment>
      );
    }
    return result;
  };
}

export default Product;
