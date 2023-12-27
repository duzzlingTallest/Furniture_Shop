import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  let products = [
    {
      id: 1,
      image: '../../images/product-1.jpg',
      name: 'Hauteville Concrete Rocking Chair',
      price: '$350',
    },
    {
      id: 2,
      image: '../../images/product-2.jpg',
      name: 'PAVILION SPEAKER',
      price: '$600',
    },
    {
      id: 3,
      image: '../../images/product-3.jpg',
      name: 'LIGOMANCER',
      price: '$780',
    },
    {
      id: 4,
      image: '../../images/product-4.jpg',
      name: 'ALATO CABINET',
      price: '$800',
    },
    {
      id: 5,
      image: '../../images/product-5.jpg',
      name: 'EARING WIRELESS',
      price: '$100',
    },
    {
      id: 6,
      image: '../../images/product-6.jpg',
      name: 'SCULPTURAL COFFEE TABLE',
      price: '$960',
    },
    {
      id: 7,
      image: '../../images/product-7.jpg',
      name: 'THE WW CHAIR',
      price: '$540',
    },
    {
      id: 8,
      image: '../../images/product-8.jpg',
      name: 'HIMITSU MONEY BOX',
      price: '$55',
    },
    {
      id: 9,
      image: '../../images/product-9.jpg',
      name: 'ARIANE PRIN',
      price: '$99',
    },
  ];

  return (
    <div>
      <div id="fh5co-product">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Cool Stuff</span>
              <h2>Products.</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            {products.map((e) => (
              <div className="col-md-4 text-center animate-box">
                <div className="product">
                  <div
                    className="product-grid"
                    style={{ backgroundImage: `url(${e.image})` }}
                  >
                    <div className="inner">
                      <p>
                        <Link to={"/cart"} className="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                        <Link to={"/details"} className="icon">
                        <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>
                      <a href="single.html">{e.name}</a>
                    </h3>
                    <span className="price">{e.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
