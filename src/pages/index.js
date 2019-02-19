import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import aaron from '../assets/images/aaron.jpg'
import MissQueen from '../assets/audio/Mississippi_Queen.mp3'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Redbeard Productions" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who is this Red Beard?</h2>
                </header>
                <p>My name is Aaron Glemboski, and I am Red Beard. I am a producer/audio engineer currently located in Austin, TX. I look forward to working with you and creating something amazing!</p>
                <ul className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={aaron} alt="Aaron at the console" /></span>
            </div>
          </section>

          <section id="clients" className="main special">
            <header className="major">
              <h2>Clients</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-music"></span>
                <h3>The Banisters</h3>
                <p>Blues-punk rock 'n' roll</p>
                <a href="https://open.spotify.com/album/6MxEgVACdeJkVIe5kPlwyf?si=1qD7afR1R6ehc3uZ4qrTNA" target="_blank" rel="noopener noreferrer">Check out Darwin, TX on Spotify</a>
              </li>
              <li>
                <span className="icon major style1 fa-headphones"></span>
                <h3>Jomo & The Possum Posse</h3>
                <p>Honky-tonk bluegrass</p>
                <a href="https://store.cdbaby.com/cd/jomothepossumposse" target="_blank" rel="noopener noreferrer">Grab Local Motive from CDBaby</a>
              </li>
              <li>
                <span className="icon major style1 fa-play"></span>
                <h3>Tombstone Wasteland</h3>
                <p>Southern rock trio</p>
                <a href="http://www.tombstonewasteland.com/" target="_blank" rel="noopener noreferrer">Listen to Don't Wanna Hear</a>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/about" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="demos" className="main special">
            <header className="major">
              <h2>Demos</h2>
              <p>Here are some of my recent projects. Enjoy!</p>
            </header>
            <div>
              <audio ref="audio_tag" src={MissQueen} controls />
            </div>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/about" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>Shoot me a text, call, or e-mail anytime. Let's grab a coffee and talk about your project!</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><a href="mailto:therealredbeard@gmail.com" className="button special">Drop me a line</a></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
