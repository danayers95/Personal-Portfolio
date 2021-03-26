import React from 'react';
import Parallax from 'parallax-js';
class SkillsParallax extends React.Component {
    componentDidMount() {
        const scene = document.getElementById('scene');
        new Parallax(scene);
    }
    render() {
        return(
            <div id="scene" className="parallax-scene" data-calibrate-y="true">
                <div className="layer" data-depth="0.8">
                    <div className="cloud-position-1">
                        <img src={require('../images/MySQL.svg')} className="cloud x1 cloud-shadow" alt="mysql"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.2">
                    <div className="cloud-position-3">
                        <img src={require('../images/mongodb.svg')} className="cloud x3 cloud-shadow" alt="mongo"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.6">
                    <div className="cloud-position-4">
                        <img src={require('../images/handlebars.svg')} className="cloud cloud-shadow" alt="handlebars"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.3">
                    <div className="cloud-position-6">
                        <img src={require('../images/CSS.svg')} className="cloud x2 cloud-shadow" alt="CSS"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.9">
                    <div className="cloud-position-7">
                        <img src={require('../images/bootstrap.svg')} className="cloud x2 cloud-shadow" alt="bootstrap"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.3">
                    <div className="cloud-position-8">
                        <img src={require('../images/HTML.svg')} className="cloud x5 cloud-shadow" alt="HTML"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.9">
                    <div className="cloud-position-9">
                        <img src={require('../images/javascript.svg')} className="cloud x9 cloud-shadow" alt="js"></img>
                    </div>
                </div>
                <div className="layer" data-depth="0.9">
                    <div className="cloud-position-2">
                        <img src={require('../images/React.svg')} className="cloud cloud-shadow" alt="react"></img>
                    </div>
                </div>
                <div className="layer" data-depth="1.5">
                    <div className="bird-position">
                        <img src={require('../images/sequelize.svg')} className="cloud x1 cloud-shadow" alt="sequelize"></img>
                    </div>
                </div>
            </div>
        )
    }
}



export default SkillsParallax;