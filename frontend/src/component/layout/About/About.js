import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/gaurav-ratnaparkhi-54668122b/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "12vmax", height: "14vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/ddtxzlyen/image/upload/v1689867943/avatars/professional_photo_me-removebg-preview_1_hjbse6.jpg"
              alt="Founder"
            />
            <Typography>Gaurav Ratnaparkhi</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow me </Typography>
            <a
              href="https://github.com/gauravratnaparkhi"
              target="blank"
            >
              <GitHub className="GitHubSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/gaurav-ratnaparkhi-54668122b/" target="blank">
              <LinkedIn className="LinkedInSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
