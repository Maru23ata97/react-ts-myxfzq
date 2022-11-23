import * as React from 'react';

const Card = ({ title, description, image }) => (
  <div className="col-lg-4 col-sm-12">
    <div className="card mb-5 shadow-sm">
      <img src={image} className="img-fluid" />

      <div className="card-body">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-text">
          <p>{description}</p>
          <a href="#" className="btn btn-outline-info rounded-0 float-end">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
