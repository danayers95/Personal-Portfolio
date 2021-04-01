import React from 'react';

const About = (props) => (
    <div className="about">
    <div className="about-main" id={props.id}>
      <div className="content-container">
        <div className="about-all">
          <div className="section-heading--about">
            <h1>About Me</h1>
          </div>
          <h3>
            <i>Hi, I'm Dan</i>
          </h3>
          <p>
            I recently graduated from The Coding Boot Camp at UNC-Chapel Hill - a rigorous 6 month course that covers everything from HTML to maintaining servers and databases.
            It was here where I recieved a professional certificate in Full Stack Web Development. In my free time I've enjoyed writing, recording and performing music 
            since high school. 
            Previously a full time server at Raleigh Times in Raleigh, I used the unfortunate situation of 2020 to go back to school and learn some new skills that could open the door to future opportunities.         
          </p>
          <h3>
            <i>Where I'm From</i>
          </h3>
          <p>
            I was born in Ottawa, Canada, where my family lived for a short time before moving to Cary, North Carolina. With a father in 
            software engineering and a very early interest in video games, I became interested in computers early on in life. While I attended classes at 
            Wake Technical Community College right out of high school, I mostly used that time to save up money and tour/play shows in various 
            bands. While the traveling and the new experiences were always great, I felt that I needed to find something 
            more fulfilling.            
          </p>
          <h3>
            <i>Where I'm Headed</i>
          </h3>
          <p>
            As I am at an early stage in my career, I'm keen on gaining experience 
            in all fields of web development and software engineering, however, I've
            really grown to love <b>front end development</b>. To me, the most satisfying part
            about putting together lines of code is seeing your work reflect back at you in a satisfying and 
            charming way.            
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;