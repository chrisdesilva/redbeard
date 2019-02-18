import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>(512) 516-3271</dd>
                <dt>Email</dt>
                <dd><a href="mailto:therealredbeard@gmail.com">therealredbeard@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.facebook.com/therealredbeard/" target="_blank" rel="noopener noreferrer" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/dreadedredbeard/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://soundcloud.com/red-beard-productions" target="_blank" rel="noopener noreferrer" className="icon fa-soundcloud alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Redbeard Productions. Design: <a href="https://www.desilvadev.com">desilvadev</a>.</p>
    </footer>
)

export default Footer
