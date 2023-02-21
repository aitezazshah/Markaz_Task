import React from 'react'
import NavBar from './NavBar'
import '../styles/HomeScreen.css'

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <div className="hero_section">
        <div className="content">
          <span className="grab">
            Grab your <span className="ride">ride now!</span>
          </span>
          <span className="discount">50% OFF on your first ride!</span>
          <button className="book">Book Ride</button>
        </div>
      </div>
      <div className="services">
        <div className="left_content">
          <span className="heading">Dropping you to the last mile!</span>
          <span className='text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
        <div className="image">
          <img className="location_image" src={require("../location.jpg")} />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen
