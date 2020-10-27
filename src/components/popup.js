import React, {Component} from 'react';
import './popupStyle.css';

class Popup extends React.Component {
    render() {
        return (
          <div className='popup'>
            <div className='popup_inner'>
              <h1>{this.props.text}</h1>
              <button className="exit" onClick={this.props.closePopup}>X</button>
              <div className="about">
                  <h3>About Us</h3>
                  <br></br>
                  <ul className='about-components'>
                    <li><a href='./history.html'>Our Story</a></li>
                    <br></br>
                    <li><a href='./history.html'>News</a></li>
                    <br></br>
                    <li><a href='./history.html'>Financials and Reports</a></li>
                    <br></br>
                    <li><a href='./history.html'>Our Staff</a></li>
                    <br></br>
                    <li><a href='./history.html'>SHFB Advisory Board</a></li>
                  </ul>
              </div>
              <div className="our-work">
                  <h3>Our Work</h3>
                  <br></br>
                  <ul className='about-components'>
                    <li><a href='./history.html'>Our Impact</a></li>
                    <br></br>
                    <li>
                      <ul>
                        <li><a href='./history.html'><h4>Partnerships</h4></a></li>
                        <br></br>
                        <li><a href='./history.html'>- Coporate Mission Partner</a></li>
                        <br></br>
                        <li><a href='./history.html'>- Alice Anne Miller Hunger Hero</a></li>
                        <br></br>
                        <li><a href='./history.html'>- Sharon's Pantry Humanitarian</a></li>
                      </ul>
                    </li>
                    <li>
                    <ul>
                        <li><a href='./history.html'><h4>Programs</h4></a></li>
                        <br></br>
                        <li><a href='./history.html'>- Backpack Buddies</a></li>
                        <br></br>
                        <li><a href='./history.html'>- MilitaryShare</a></li>
                        <br></br>
                        <li><a href='./history.html'>- SNAP Outreach</a></li>
                        <br></br>
                        <li><a href='./history.html'>- SUNShine Boxes</a></li>
                      </ul>
                    </li>
                  </ul>
              </div>
              <div className="volunteer">
                  <h3>Get Involved</h3>
                  <br></br>
                  <ul className='about-components'>
                    <li>
                      <ul>
                        <li><a href='./history.html'><h4>Volunteer</h4></a></li>
                        <br></br>
                        <li><a href='./history.html'>- Group</a></li>
                        <br></br>
                        <li><a href='./history.html'>- Individuals and Families</a></li>
                        <br></br>
                        <li><a href='./history.html'>- Upcoming</a></li>
                      </ul>
                    </li>
                    <li><a href='./history.html'>Farm to Fork</a></li>
                    <br></br>
                    <li><a href= './history.html'>Host a Food & Fund Drive</a></li>
                    <br></br>
                  </ul>
              </div>
              <div className="give">
                  <h3>Give</h3>
                  <br></br>
                  <ul className='about-components'>
                    <li><a href='https://interland3.donorperfect.net/weblink/weblink.aspx?name=E98896&id=10'>Donate Money</a></li>
                    <br></br>
                    <li><a href='./history.html'>Giving Societies</a></li>
                    <br></br>
                    <li>
                      <ul>
                        <li><a href='./history.html'><h4>Individuals</h4></a></li>
                        <br></br>
                        <li><a href='./history.html'>- Give Monthly</a></li>
                        <br></br>
                        <li><a href='./history.html'>- Crowdfunding</a></li>
                        <br></br>
                        <li><a href='./history.html'>- Give By Mail or Phone</a></li>
                      </ul>
                    </li>
                    <br></br>
                    <li><a href= './history.html'>Donate Food</a></li>
                  </ul>
              </div>
              <div className="Food">
                <h2>Find Food</h2>
              </div>
              <div className="Contact">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        );
    }
}

export default Popup;