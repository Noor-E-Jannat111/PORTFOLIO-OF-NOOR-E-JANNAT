import React from "react";
import AOS from "aos";

function About() {
  const right = [
    {
      title: "Name",
      value: "Noor-E-Jannat",
    },
    {
      title: "Date of Birth",
      value: "04 December 1998",
    },
    {
      title: "Spoken Languages",
      value: "English - Bengali",
    },
    {
      title: "Nationality",
      value: "Bangladeshi",
    },
    {
      title: "Interest",
      value: "Music, Dancing, Travel",
    },
  ];

  const name = "I'm Noor-E-Jannat";

  const info = `A self-taught developer who enjoys creating things that live on
  the internet, websites, applications or anything in between. My main
  goal is to always build products that provide pixel-perfect,
  perfomant experiences.`;

  return (
    <section className="resume__about">
      <h1 className="section__heading">About Me !</h1>
      <div className="resume__content">
        <div className="content__left">
          <h2>{name}</h2>
          <p>{info}</p>
          <button>Downlod CV</button>
        </div>
        <div className="content__right">
          {right?.map(({ title, value }, idx) => (
            <p key={idx}>
              <span>{title}</span>
              <span>{value}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
