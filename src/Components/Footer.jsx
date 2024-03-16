import React from 'react'
import "../Styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <main>
  <footer>
    <header>
      <h2>Better Shop</h2>
      <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, accusantium?"</p>
      <ul class='icons'>
        <FacebookIcon/>
        <InstagramIcon/>
        <XIcon/>
        <YouTubeIcon/>
      </ul>
    </header>
    <aside>
      <ul class='category'>
        <li>
          <h3>Project</h3>
        </li>
        <li>Houses</li>
        <li>Rooms</li>
        <li>Flats</li>
        <li>Apartments</li>
      </ul>
      <ul class='category'>
        <li>
          <h3>Company</h3>
        </li>
        <li>Objective</li>
        <li>Capital</li>
        <li>Security</li>
        <li>Selling</li>
      </ul>
      <ul class='category'>
        <li>
          <h3>Movement</h3>
        </li>
        <li>Movement</li>
        <li>Support us</li>
        <li>Pricing</li>
        <li>Renting</li>
      </ul>
      <ul class='category'>
        <li>
          <h3>Help</h3>
        </li>
        <li>Privacy</li>
        <li>Contact</li>
        <li>FAQs</li>
        <li>Blog</li>
      </ul>
    </aside>
  </footer>
</main>
  )
}

export default Footer