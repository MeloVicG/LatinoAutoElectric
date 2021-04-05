import { Link } from '@reach/router';
import { useEffect } from 'react';
import styles from '../styles/HomePage.module.scss';

import NavBar from '../components/NavBar';
import mapPlaceholder from '../static/images/map-placeholder.PNG';
import Carousel from '../components/Carousel';

import Footer from '../components/Footer'


const HomePage = () => {

    return (
        <div className={styles.App}>
            <div className={styles.wrapper}>
                <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
                {/* has css */}
                <NavBar />
                <div className={styles.container}>
                    <div className={styles.containerTop}>
                        <div className={styles.homeTopSection}>
                            <img className={styles.image1} src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2017/03/ford-focus-michigan-assembly-plant.jpg?itok=da7Zvhu9" alt="first image" />
                            <img className={styles.image2} src="https://i.pinimg.com/originals/c1/9f/a5/c19fa5a2b6de80d4b5e8866f2cf36c0f.jpg" alt="second" />
                            {/* <Carousel /> */}
                        </div>
                    </div>
                    <div className={styles.quote}>
                        <p>"Latinos Auto Electric has been taking care of my cars for over 20 years. They continue to do an amazing job and I will always choose them to take care of any auto issues I have."</p>
                    </div>
                    <div className={styles.quickSchedule}>
                        <Link to="/schedule"><button><h1>Schedule Now!</h1></button></Link>
                    </div>

                    <div className={styles.homeMidBox}>
                        <div >
                            <Link to="/about"> <p className={styles.homeMidP}> Gallery </p> </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                            {/* <button style={{ boxShadow: "1px 1px 1px 1px", backgroundColor: "white", fontSize: "20px" }}>View</button> */}
                        </div>
                        <div >
                            <Link to="/services"> <p className={styles.homeMidP}>Service</p> </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                            {/* <button style={{ boxShadow: "1px 1px 1px 1px", backgroundColor: "white", fontSize: "20px" }}>View</button> */}
                        </div>
                        <div >
                            <Link to="/reviews"><p className={styles.homeMidP}> Reviews </p> </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa ad saepe necessitatibus quidem mollitia numquam nihil eos sunt sequi adipisci, quae est, eaque sapiente. Sit reprehenderit animi voluptate molestias?</p>
                            {/* <button style={{ boxShadow: "1px 1px 1px 1px", backgroundColor: "white", fontSize: "20px" }}>View</button> */}
                        </div>
                    </div>

                </div>
                <div className={styles.locationBox}>
                    <img style={{width:"50%"}} className="img3" src={mapPlaceholder} alt="map" />
                    <div style={{ marginLeft:"100px"}}className="locationBoxText">
                        <p>We currently have one local shop dedicated to serving our community's auto needs. We're located at:</p>
                        <div>
                        <br/>
                        <p>427 E Anaheim st</p>
                        <p>Long Beach, CA</p>
                        <p>90813</p>
                        <p>562-218-8560</p>
                    </div>
                        <Link to="/directions">Get Directions</Link>
                    </div>
                </div>

                <Footer />
                
            </div>
        </div>
    )
}

export default HomePage;