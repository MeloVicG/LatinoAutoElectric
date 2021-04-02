import { Link } from '@reach/router';
import { useEffect } from 'react';
import HomePageCSS from '../components/HomePage.css'

import NavBar from '../components/NavBar';
import mapPlaceholder from '../static/images/map-placeholder.PNG';


const HomePage = () => {

    return(
        <div className="App">

            <div className="wrapper">
                <h1 className="titleBox">Latinos Auto Electric</h1>


                {/* has css */}
                <NavBar/>
                <div className="container">
                    <div className="container-top">
                        <div className="homeTopSection">
                            <img className="image1" src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2017/03/ford-focus-michigan-assembly-plant.jpg?itok=da7Zvhu9" alt="first image"/>
                            <img className="image2" src="https://i.pinimg.com/originals/c1/9f/a5/c19fa5a2b6de80d4b5e8866f2cf36c0f.jpg" alt="second"/>
                        </div>
                    </div>
                    <div className="quick-schedule">
                        <Link to="/schedule"><button><h1>Schedule Now!</h1></button></Link>
                    </div>
          
                <div className="homeMidBox">
                        <div >
                            <p className="homeMidP"> Gallery </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                            <button style={{boxShadow:"1px 1px 1px 1px", backgroundColor:"rgb(18,151,210)", fontSize:"20px"}}>View</button>
                        </div>
                        <div >
                            <p className="homeMidP">Service</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                            <button style={{boxShadow:"1px 1px 1px 1px", backgroundColor:"rgb(18,151,210)", fontSize:"20px"}}>View</button>
                        </div>
                        <div >
                            <p className="homeMidP"> Customer Reviews </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                            <button style={{boxShadow:"1px 1px 1px 1px", backgroundColor:"rgb(18,151,210)", fontSize:"20px"}}>View</button>
                        </div>
                    </div>
      
                </div>
                <div className="quote">
                    <p>"Latinos Auto Electric has been taking care of my cars for over 20 years. They continue to do an amazing job and I will always choose them to take care of any auto issues I have."</p>
                </div>
                <div className="location-box">
                    <img className="img3" src={mapPlaceholder} alt="map" />
                    <div className="location-box-text">
                        <p>We currently have one local shop dedicated to serving our community's auto needs. We're located at: 123 Auto Blvd, Los Angeles, CA 11111</p>
                        <Link to="/directions">Get Directions</Link>
                    </div>
                </div>
      
              <footer style={{backgroundColor:"rgb(18,151,210)"}}>
                    <div>
                        <p>Latinos Auto Electric</p>
                        <p>Contact:</p>
                        <p>427 E Anaheim st</p>
                        <p>Long Beach, CA</p>
                        <p>90813</p>
                        <p>562-218-8560</p>
                    </div>
                    <div style={{margin:"30px"}}>
                        <a href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                    </div>
                    <div style={{margin:"30px"}}>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                    </div>
                    <div style={{margin:"30px"}}>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                    </div>
                    <div style={{margin:"30px"}}>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                        <a  href="">something</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HomePage;