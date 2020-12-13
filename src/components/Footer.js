import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import { FaInstagram } from "react-icons/fa";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt="Kaldi"
                    style={{ width: "5em", height: "5em" }}
                  />
                </div>
              </div>
              <div className="column is-4 social">
                <a
                  title="instagram"
                  href="https://www.instagram.com/kenyanwomenandchildren/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
