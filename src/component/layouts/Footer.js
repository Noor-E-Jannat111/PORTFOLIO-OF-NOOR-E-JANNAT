import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Designed &amp; Built by Noor-E-Jannat </p>
        <a href="https://portfolio-of-noor-e-jannat.netlify.app/"target="_blank">
          <small style={{color:"#64ffda"}}>Souce Code</small>{" "}<i className="fa fa-code"></i>
        </a>
        <small style={{ fontStyle: "italic" }}>
          Copyright &copy; 2020
        </small>
      </footer>
    );
  }
}

export default Footer;
