import { Link } from '@reach/router';
import { useEffect } from 'react';
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
                            <div className="homeMidSection">
                                <h3>Gallery</h3> 
                                <p>Checkout our restorations and repairs!</p>
                            </div>
                            <div className="homeMidSection">
                                <h3>Services</h3>
                                <p>We provide complete vehicle maintenance and restoration. Check out our services to see what we can do for your vehicle.</p>
                            </div>
                            <div className="homeMidSection">
                                <h3>Customer Reviews</h3>
                                <p>We provide the best services to the best of our ability. Check out what our community is saying about us!</p>
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
                <footer>
                    <div>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                    </div>
                    <div>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                    </div>
                    <div>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                    </div>
                    <div>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                        <a style={{margin:"50px"}} href="">something</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HomePage;