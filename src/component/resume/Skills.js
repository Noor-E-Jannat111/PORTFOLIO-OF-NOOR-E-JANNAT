import React, { useEffect } from "react";
import graduationCap from "@iconify/icons-uil/graduation-cap";
import suitcaseAlt from "@iconify/icons-uil/suitcase-alt";
import Icon from "@iconify/react";

function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(".progress__wrapper .progress__bar");
    bars.forEach((bar) => {
      let percentage = bar.dataset.percent;
      let tooltip = bar.children[0];
      tooltip.innerText = percentage + "%";
      bar.style.width = percentage + "%";
    });
  }, []);

  const skills = [
    {
      name: "HTML & SCSS",
      percent: 80,
    },
    {
      name: "React.js",
      percent: 72,
    },
    {
      name: "Vanilla.js",
      percent: 78,
    },
    {
      name: "Django Backend",
      percent: 50,
    },
    {
      name: "UX/UI Design",
      percent: 50,
    },
  ];

  const education = [
    {
      duration: "2019 - Present",
      level: "BSC in CSE",
      school: "Daffodil International University",
    },
    {
      duration: "2014 - 2018",
      level: "Diploma In Computer",
      school: "Khulna Mohila Polytechnic Institute",
    },
    {
      duration: "2013 - 2014",
      level: "Secondary Education",
      school: "Govt. IqbalNagar Girls High School",
    },
  ];

  const experience = [
    {
      duration: "2018 - 2018",
      job: "Internship",
      location: "Softmax IT",
    },
    {
      duration: "2021 - Present",
      job: "Freasher",
      location: "Programming Hero",
    },
  ];

  return (
    <section className="resume__skills">
      <h1 className="section__heading">Education & Skills</h1>
      <div className="content">
        <div className="skills__left">
          <div className="inner__left">
            <div className="heading">
              <Icon icon={graduationCap} />
              <h5>Education</h5>
            </div>
            <div className="timeline__wrapper">
              {education?.map(({ duration, level, school }, idx) => (
                <div key={idx} className="timeline__item">
                  <p>{duration}</p>
                  <p className="center">{level}</p>
                  <p>{school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="inner__right">
            <div className="heading">
              <Icon icon={suitcaseAlt} />
              <h5>Experience</h5>
            </div>
            <div className="timeline__wrapper">
              {experience?.map(({ duration, job, location }, idx) => (
                <div key={idx} className="timeline__item">
                  <p>{duration}</p>
                  <p className="center">{job}</p>
                  <p>{location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills__right">
          <div className="skills__wrapper">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill__box">
                <h4>{skill.name}</h4>
                <div className="progress__wrapper">
                  <span data-percent={skill.percent} className="progress__bar">
                    <span className="tooltip">{skill.percent}%</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
