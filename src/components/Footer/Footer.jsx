import { faDribbble, faFacebook, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row row-pb-md">
            <div className="col-md-4 fh5co-widget">
              <h3>Shop.</h3>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
              </p>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
              <ul className="fh5co-footer-links">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Meetups</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
              <ul className="fh5co-footer-links">
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Handbook</a>
                </li>
                <li>
                  <a href="#">Held Desk</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
              <ul className="fh5co-footer-links">
                <li>
                  <a href="#">Find Designers</a>
                </li>
                <li>
                  <a href="#">Find Developers</a>
                </li>
                <li>
                  <a href="#">Teams</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                  &copy; 2018 Free HTML5. All Rights Reserved.
                </small>
                <small className="block">
                  Designed by{' '}
                  <a href="http://freehtml5.co/" target="_blank">
                    FreeHTML5.co
                  </a>{' '}
                  Demo Images:{' '}
                  <a href="http://blog.gessato.com/" target="_blank">
                    Gessato
                  </a>{' '}
                  &amp;{' '}
                  <a href="http://unsplash.co/" target="_blank">
                    Unsplash
                  </a>
                </small>
              </p>
              <p>
                <ul className="fh5co-social-icons">
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
