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
                            <li>Firebase</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>DigitalOcean</li>
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
                        <p>If you don't know what IMDb is, it stands for Internet Movie Database. 
                        It provides information about movies or shows, including data about the cast, box office value, plot summaries and more! 
                        It was developed in the early 1990s and as you can guess, some of the design choices from that decade are still noticeable. 
                        My project, IMnotDb, aims to simplify IMDb by giving a more modern and clean user interface.</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://imnotdb.alex-pham.com/" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/baapham/IMnotDb" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>OMDb API</li>
                            <li>Bootstrap</li>
                            <li>DigitalOcean</li>
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
                        <p>This project aimed to promote a culture that values the importance of equity, diversity and inclusion in emerging scientists.
                        The project goal was to create a novel approach to addressing technology at conferences held at UNSW,
                        by developing an interactive app/mobile webpage for a student-led event and that can be up-scaled and adapted for future events across UNSW.
                        Its main goals were:
                        </p>
                        <ul>
                            <li>Provide information and support to attendees of conferences from diverse backgrounds to ensure that they feel included and that their needs are met.</li>
                            <li>Provide a platform to allow students who feel excluded during the conference find support in real-time</li>
                            <li>Provide easily accessible information, including text to speech and plain language (easy English) for symposium information and abstracts</li>
                        </ul>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://accessgesss.com/" class="demo">Demo (no longer available)</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Wordpress</li>
                            <li>DigitalOcean</li>
                            <li>Google Maps API</li>
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
                        <p>My previous website portfolio was boring and I wanted a change. It was running on Wordpress and I wanted to develop a new website from the ground up (i.e. no themes) to gain some experience.
                         As I want to go into front end development, this project was mainly to get me familiar with React. For a portfolio website, it may be overkill but I wanted to experiment and have fun.</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://alex-pham.com/" class="demo">Demo</a>
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
