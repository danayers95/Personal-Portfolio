import React from "react";
import Project from "./Project";
import game from '../images/game.png';
import EmployeeDirectory from '../images/EmployeeDirectory.png';
import ArtistSavor from '../images/ArtistSavor.png';
import ReactPortfolio from '../images/ReactPortfolio.png';
// represents the whole entire projects section
const Projects = (props) => (
  <div className="projects">
    <div className="projects-main">
      <div className="content-container">
        <div id={props.id} className="section-heading">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          <Project
            imgSrc={game}
            title="2048"
            shortDescription={
              <p>A simple recreation of the mobile game 2048.</p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>You need to move the tiles and every time you move one, another tile pops up in a random manner 
                        anywhere in the box. When two tiles with the same number on them collide with one another as you move them, they will merge into one 
                        tile with the sum of the numbers written on them initially.</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://lit-garden-06285.herokuapp.com/" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/danayers95/2048-Game" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>ReactJS</li>
                            <li>SCSS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Heroku</li>
                        </ul>
                        `}
          />
          <Project
            imgSrc={EmployeeDirectory}
            title="Employee Directory"
            shortDescription={
              <p>
                An application that generates a directory of fake employees to manage.
              </p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p></p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            
                        </ul>
                        `}
          />

          <Project
            imgSrc={ArtistSavor}
            title="Artist Savor"
            shortDescription={
              <p>
                Allows artists to stow away money for a rainy day!
              </p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>This project is primarily aimed at those who make income from music, art, or anything similar. Users 
                        create an account and can deposit money earned from performances. The application also allows the user to track 
                        any and all expenses for efficient money management.
                        </p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://morning-fortress-86194.herokuapp.com" class="demo">Demo</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>Handlebars</li>
                            <li>Heroku</li>
                        </ul>
                        `}
          />
          <Project
            imgSrc={ReactPortfolio}
            title="React Portfolio"
            shortDescription={
              <p>
                A portfolio to show my design skill as well as some of my projects. You are here.
              </p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>While I had already made myself a simple portfolio in React, I knew I wanted something that really showcased
                        not only my ability to code but my ability to create a charming and fun application. I had to learn how to implement a lot 
                        of new things for this project (such as the parallaxes and particle effects), and what resulted is a much better portfolio page than before.</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/danayers95/Personal-Portfolio" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>Heroku</li>
                        </ul>
                        `}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
