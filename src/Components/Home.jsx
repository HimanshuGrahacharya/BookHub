import React from 'react'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="page1">
        <div className="trans">
          <b>Digital Library</b>
          <hr />
          <p>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital</p>
          <p>Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more</p>
          <div className="btn">
            <div>Learn More</div>
            <div>→</div>
          </div>
        </div>
      </div>
      <div className="page2 ">
        <div className="page2bg">
          <div className="page2text">
            <p style={{marginBottom:"3vh"}}>ABOUT</p>
            <b >Cos Cob Library Renovation</b>
            <hr />
            <p>Greenwich Library recently announced a new plan for the much-anticipated Cos Cob</p>
            <p>Branch Library renovation. The revised plan considers ideas raised by the community to</p>
            <p>expand the community room for greater program capacity, increase space dedicated to</p>
            <p>children s services, and enhance the collections to make it a go-to destination.</p>
            <div className="btn">
              <div>Learn More</div>
              <div>→</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page3">
        <b>January Events</b>
        <p>These printable one-page calendars for each Greenwich Library branch are fridge-ready.</p>
        <div className="btn">
              <div>Get Printable Calenders</div>
              <div>→</div>
            </div>
      </div>
      <div className="page2 page4">
        <div className="page2bg">
          <div className="page2text">
            <p style={{marginBottom:"3vh"}}>EXPLORE</p>
            <b>Peterson Business Collection</b>
            <hr />
            <p>Our Peterson Business Collection offers support for job seekers, entrepreneurs, small</p>
            <p>businesses, and nonprofits. The Library also provides financial literacy resources for</p>
            <p>individuals of all skill levels. Access our business databases to get started. Make sure to</p>
            <p>check out our business workshops too!</p>
            <div className="btn">
              <div>Get Started</div>
              <div>→</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="page5">
        <div className='p51'></div>
        <div className='p52'></div>
        <div className='p53'></div>
        <div className='p54'></div>
      </div> */}

    </div>
  );
}

export default Home
