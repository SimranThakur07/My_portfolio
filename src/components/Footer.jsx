import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import logo from '../assets/logo.jpg'

function Footer() {
  return (
    <div>
        <footer>
            <div>
                <img src={logo} alt="" />

                <h2>Simran</h2>
                <p>I’m not a great programmer; I’m just a good programmer with great habits. </p>
            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href="https://www.linkedin.com/in/simran-t-a7a438217/" target={'blank'}>
                       <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/SimranThakur07" target={'blank'}>
                        <AiFillGithub/>
                    </a>
                    <a href="" target={'blank'}>
                        <AiFillInstagram/>
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp/>
            </a>
        </footer>
    </div>
  )
}

export default Footer