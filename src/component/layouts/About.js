import React, { Component } from "react";
import Title from "../common/Title";
import img from "../../img/noor.jpg";
import AOS from "aos";
import { skillsOne, skillsTwo } from "../../data";

export class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <section className="about" id="about">
        <div className="about-inner">
          <h1 className="blur-text">About</h1>
          <Title title="About Me"  />
          <div className="info">
            <div className="summary">
              <p>
                Hello! I'm Noor-E-Jannat, a self taught developer(Fullstack) based in
                Dhaka, Bangladesh.
              </p>
              <p>
                I enjoy creating things that live on the internet, websites,
                applications or anything in between. My main goal is to always
                build products that provide pixel-perfect, 
                experiences.
              </p>
              <p>
                Shortly after my fourth year in{" "}
                <a
                  href="https://daffodilvarsity.edu.bd/"
                  rel="noopener noreferrer"
                  target="_blank">
                  Daffodil International University
                </a>
                , I gained a lot of interest in programming and spent most of my
                time reading programming materials and watching tutorials which
                has equipped me with lots of skills that i have used to work on
                a wide variety of interesting and meaningful projects on a daily
                basis.
              </p>
              <p>
                Here are a few of technologies I've been working with recently:
              </p>
              <div className="skills">
                <ul>
                  {skillsOne?.map((skill, idx) => (
                    <li key={idx}>
                      <i className="fa fa-angle-double-right" />
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul>
                  {skillsTwo?.map((skill, idx) => (
                    <li key={idx}>
                      <i className="fa fa-angle-double-right" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="img">
              <div className="img-file">
                <img src={img} alt="MyImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
