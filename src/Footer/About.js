import React from 'react';
import { Link } from 'react-router-dom';
import './FooterPages.css';


class AboutUs extends React.Component {
    render() { 
        return (
            <main className="about-main">
                <h3 className="meet">MEET ENTERTAINMENT720</h3>
                <div className="bios">
                <div className="team">
                    <h3>Ryan</h3>
                    <img alt="Ryan" src="http://placekitten.com/300/300" className="portrait" />
                    <p>I'm Ryan Diffensparkles, co-founder of Vaction720: the ultimate travel conglomerate.
                        I believe that our lowest points can be the most memorable. With Detestination, you can highlight the lowlights
                        and plan a trip you won't soon forget.</p>
                        <div className="bio-links">
                    <Link to="https://github.com/Ryan-Diff">
                    <img alt="github" src="github.png" className="githubIcon" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/ryan-diffenbaugh-a3552b1a8/">
                    <img alt="linked" src="linkedin.png" className="linkedinIcon" />
                    </Link>
                    </div>
                </div>
                
                <div className="team">
                    <h3>Josh</h3>
                    <img alt="Josh" src="http://placekitten.com/300/300" className="portrait" />
                    <p>Here's the stuff about Josh!</p>
                    <div className="bio-links">
                    <Link to="https://github.com/josholloqui">
                    <img alt="github" src="github.png" className="githubIcon" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/josholloqui/">
                    <img alt="linked" src="linkedin.png" className="linkedinIcon" />
                    </Link>
                    </div>
                </div>
                
                <div className="team">
                    <h3>Charlie</h3>
                    <img alt="Charlie" src="http://placekitten.com/300/300" className="portrait" />
                    <p>Here's the stuff about Charlie!</p>
                    <div className="bio-links">
                    <Link to="https://github.com/internetcharles">
                    <img alt="github" src="github.png" className="githubIcon" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/charles-smith-b7840b1a5/">
                    <img alt="linked" src="linkedin.png" className="linkedinIcon" />
                    </Link>
                    </div>
                </div>

                <div className="team">
                    <h3>Brooke</h3>
                    <img alt="Brooke" src="http://placekitten.com/300/300" className="portrait" />
                    <p>Welcome to Entertainment720, where the worst stuff is the best stuff!
                        I'm Brooke, and I'm thrilled to be a part of the team that curates your delightfully awful travel experience.
                        As an avid travel fan, I appreciate the unique experience Detestination
                        offers its users. 
                    </p>
                    <div className="bio-links">
                    <Link to="https://github.com/brookeperkins">
                    <img alt="github" src="github.png" className="githubIcon" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/brookeperkins/">
                    <img alt="linked" src="linkedin.png" className="linkedinIcon" />
                    </Link>
                    </div>
                </div>
                </div>

            </main>
        );
    }
}
 
export default AboutUs;