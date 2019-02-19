import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import banner from '../assets/images/redbanner.png'

class About extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={banner} alt="" /></span>
            <h2>About Me</h2>
            <p>As a producer, I thoroughly enjoy taking something that you have written and fleshing it out until it is exactly as you pictured it should be. There is nothing more rewarding than bringing something from an idea to reality. I have a solid knowledge of music and theory and can orchestrate what needs to be done to get any instruments on your tracks so that you don’t have to face the headache of finding musicians, writing parts, and communicating the feel of the song!</p>
            <p>As an audio engineer, I love tweaking everything until the exact desired sound is found! Whether that’s in the recording stage and we are changing mics and outboard gear, or in the mixdown phase where were are putting everything together making it sit right, I love it all, and am aware that a little extra time in this process can make or break a song.</p>
            <h2>Favored Facilities</h2>
            <p>My Favored Facility is <a href="http://musiclanerecording.com/" target="_blank" rel="noopener noreferrer">Music Lane</a>. It is a ‘Home Studio” in the best possible way! The studio is packed full of pro gear, while still having the great relaxed vibe that you simply can’t get elsewhere. If you have questions about the studio and want to know if its right for you and your project; just contact me and I’ll arrange a tour!</p>
            <p>I’m not tied down to any one location, and if there is a specific studio that you’re itching to get into I can make all the arrangements. Austin is lucky to have a plethora of studios running the entire spectrum of gear, price, and atmosphere. I’ve you’re just interested in what is out there feel free to ask me questions, I’m well acquainted with the local options!</p>
            <h2>Rates</h2>
            <p>Please <a href="mailto:therealredbeard@gmail.com">contact me</a> for rates regarding your specific project. Unfortunately every project entails different needs and requirements and therefore expenses vary vastly. I’d be more than happy to talk to you and figure out what the pricing on your project will look like and work to get you the best possible product within your budget. We can work in a variety of studios at a variety of price points depending on your wants and needs. If you need a price quote for a Kickstarter/IndieGoGo, we can sit down and work out exactly what your project will cost, and then work within those parameters.</p>
            <Link to="/">Take me home!</Link>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
