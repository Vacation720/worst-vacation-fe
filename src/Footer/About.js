import React from 'react';
import { Link } from 'react-router-dom';
import './FooterPages.css';


class AboutUs extends React.Component {
    render() { 
        return (
            <main className="about-main">
                <h3 className="meet">MEET VACATION720</h3>
                <div className="bios">
                    <div className="team">
                        <h3 className='dev-name'>Ryan</h3>
                        <img alt="Ryan" src="ryan.png" className="portrait" />
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
                        <h3 className='dev-name'>Josh</h3>
                        <img alt="Josh" src="josh.jpg" className="portrait" />
                        <p>Hello, my name is Josh and welcome to Detestination (patent pending…). 
                            This is the world’s sickest travel itinerary maker that the whole family will love. 
                            We have millions and millions of daily users from the likes of Zark Muckerburg to Beff Jezos. 
                            If I can convince my family members to use this app, so can you!
                        </p>
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
                        <h3 className='dev-name'>Charlie</h3>
                        <img alt="Charlie" src="charlie.png" className="portrait" />
                        <p>I'm Charlie, also known as the "arbiter of nightmare vacations." 
                            Why take your family to Disneyland when you can take them to the 1-star rated Gangnam Style Bar (a real place) 
                            in Downtown LA? I don't know, and neither do you. Please enjoy Detestination.
                        </p>
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
                        <h3 className='dev-name'>Brooke</h3>
                        <img alt="Brooke" src="brooke.png" className="portrait" />
                        <p>Welcome to Vacation720, where the worst stuff is the best stuff!
                            I'm Brooke, and I'm thrilled to be a part of the team that curates your delightfully awful travel experience.
                            As an avid travel fan, I appreciate the unique and horrifying experiences Detestination
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