import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="img.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>Hello EveryOne,
                    My Name is Krishna Murari Kumar.
                    I am From Nalanda, Bihar.
                    I Have Completed My Bachlor's Degree In Computer Science From Patliputra University, Bihar.
                    I Am Pursuing Master Of Computer Application (MCA) From a Galgotias University In Greater noida.
                    My Hobbies are I like Lerning new Things and Having a Great Passion For Technology.
                    I Have Deep Interest In Devlopment and I have made Many FullStack Project Using HTML, CSS, Javascript, React.js, Node.js, Express.js, Mongoose, Mongodb, tailwind, Django and Next.js.
                    My Short Term Goal is to get a job in Reputed Company and My long Term Goal is to a Achive a Higher Position in the same Company.
                    That all About Me.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
