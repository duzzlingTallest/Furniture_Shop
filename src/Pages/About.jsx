import React from 'react';
import { faDribbble, faFacebook, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  let personImg = [
    {
      id: '1',
      img: '../../images/person1.jpg',
      name: 'Jean Smith',
      status: 'Chief Executive Officer',
    },
    {
      id: '2',
      img: '../../images/person2.jpg',
      name: 'Hush Raven',
      status: 'Co-Owner',
    },
    {
      id: '3',
      img: '../../images/person3.jpg',
      name: 'Alex King',
      status: 'Co-Owner',
    },
  ];
  return (
    <>
      <div id="fh5co-about">
        <div className="container">
          <div className="about-content">
            <div className="row animate-box">
              <div className="col-md-6">
                <div className="desc">
                  <h3 className="text-4xl mb-[30px]">Company History</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quo est quis mollitia ratione magni assumenda repellat
                    atque modi temporibus tempore ex. Dolore facilis ex sunt ea
                    praesentium expedita numquam?
                  </p>
                  <p>
                    Quos quia provident consequuntur culpa facere ratione maxime
                    commodi voluptates id repellat velit eaque aspernatur
                    expedita. Possimus itaque adipisci rem dolorem nesciunt
                    perferendis quae amet deserunt eum labore quidem minima.
                  </p>
                </div>
                <div className="desc">
                  <h3 className="text-4xl mb-[30px]">Mission &amp; Vission</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quo est quis mollitia ratione magni assumenda repellat
                    atque modi temporibus tempore ex. Dolore facilis ex sunt ea
                    praesentium expedita numquam?
                  </p>
                  <p>
                    Quos quia provident consequuntur culpa facere ratione maxime
                    commodi voluptates id repellat velit eaque aspernatur
                    expedita. Possimus itaque adipisci rem dolorem nesciunt
                    perferendis quae amet deserunt eum labore quidem minima.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="img-responsive"
                  src="../../images/img_bg_1.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Productive Staff</span>
              <h2>Meet Our Team</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            {personImg.map((e) => (
              <div
                className="col-md-4 col-sm-4 animate-box"
                data-animate-effect="fadeIn"
              >
                <div className="fh5co-staff">
                  <img
                    className="ml-[160px]"
                    src={e.img}
                    alt="Free HTML5 Templates by gettemplates.co"
                  />
                  <h3>{e.name}</h3>
                  <strong className="role">{e.status}</strong>
                  <p>
                    Quos quia provident consequuntur culpa facere ratione maxime
                    commodi voluptates id repellat velit eaque aspernatur
                    expedita. Possimus itaque adipisci.
                  </p>
                  <ul className="fh5co-social-icons">
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faDribbble} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
