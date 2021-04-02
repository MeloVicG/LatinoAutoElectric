import { Link } from '@reach/router';
import { useEffect } from 'react';
import HomePageCSS from '../components/HomePage.css'


const HomePage = () => {

    return(
        <div className="App">

            <div className="wrapper">
                <div className="container">
                    <h1 className="titleBox">Latinos Auto Electric</h1>

                    {/* has css */}
                    <nav style={{backgroundColor:"rgb(18,151,210)"}}>
                        <a className="navBarHome" href=""> Home </a> 
                        <a href=""> Schedule </a> 
                        <a href="/service"> Service </a> 
                        <a href="/about"> About </a> 
                        {/* <a href="/location"> Contact / Location </a>  */}
                        <a href="/faq"> FAQ </a> 
                    </nav>
                    
                    <div className="homeTopSection">
                        <img className="image1" src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2017/03/ford-focus-michigan-assembly-plant.jpg?itok=da7Zvhu9" alt="first image"/>
                        <img className="image2" src="https://i.pinimg.com/originals/c1/9f/a5/c19fa5a2b6de80d4b5e8866f2cf36c0f.jpg" alt="second"/>
                    </div>

                        <Link to="/schedule"><button style={{boxShadow:"1px 1px 1px 1px", marginTop:"20px", backgroundColor:"rgb(18,151,210)"}}><h1>Schedule Now!</h1></button></Link>

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


                <h1 style={{border:"1px black solid"}}>add google API here</h1>


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