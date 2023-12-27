import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rekamedis from "../../Assets/Projects/Rekamedis.png";
import Game from "../../Assets/Projects/Game.png";
import Wedding from "../../Assets/Projects/Wedding.png";
import perpus from "../../Assets/Projects/perpus.png";
import travel from "../../Assets/Projects/travel.png";
import kuliner from "../../Assets/Projects/kuliner.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rekamedis}
              isBlog={false}
              title="Medical Record System"
              description="Medical record system project built with Laravel Framework, Bootstrap framework, and MySql database. It has login, register, and logout features made with Laravel Breeze. It also has voice note and Google Maps API features. The project uses the MVC (Model-View-Controller) architectural pattern, which helps to keep the code organized and easy to maintain. It also uses the CRUD (Create, Read, Update, Delete) pattern to make it easy to add, edit, and delete patient records."
              ghLink="https://github.com/AldoAlghifari"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Game Website"
              description="Website dedicated to providing online games, such as War Game, Doodle Game, and Snake Game. Python, JavaScript, and CSS are used in its construction. It also contains features for integrating social media."
              ghLink="https://github.com/AldoAlghifari"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perpus}
              isBlog={false}
              title="Laravel Library System"
              description="Built with Laravel Framework that makes use of the CRUD (Create, Read, Update, Delete) and MVC architectural patterns. Users can manage library books and users with this web-based library system project."
              ghLink="https://github.com/AldoAlghifari"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wedding}
              isBlog={false}
              title="Wedding Invitation Web"
              description="A social media integration feature, background music, a countdown, and Google Maps API are all included in this Bootstrap-built wedding invitation website.  
              The RSVP form on the website is made with the jQuery RSVP plugin."
              ghLink="https://github.com/AldoAlghifari"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kuliner}
              isBlog={false}
              title="culinary Website"
              description="There are features call-to-action buttons, social network integration, and Google Maps API that was developed using HTML5, CSS, and Javascript."
              ghLink="https://github.com/AldoAlghifari"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Website"
              description="This website is an online travel resource that gives users access to data about Indonesian tourist destinations. With featuring a clock, a gallery of Indonesian natural history, text-to-speech with background video, and details about the tour guide team
              ."
              ghLink="https://github.com/AldoAlghifari"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
