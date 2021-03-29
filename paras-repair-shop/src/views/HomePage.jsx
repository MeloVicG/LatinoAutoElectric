import { Link } from '@reach/router';
import { useEffect } from 'react';

const HomePage = () => {

    return(
        <div className="App">
            Vic figure this out!
            <div className="wrapper">
                <div className="container">
                    <h1 className="titleBox">Latinos Auto Electric</h1>

                    {/* has css */}
                    <nav style={{backgroundColor:"rgb(18,151,210)"}}>
                        <a className="navBarHome"href=""> Home </a> 
                        <a href="" style={{margin:"25px"}}> Schedule </a> 
                        <a href="" style={{margin:"25px"}}> Services </a> 
                        <a href="" style={{margin:"25px"}}> About / Staff </a> 
                        <a href="" style={{margin:"25px"}}> Contact / Location </a> 
                        <a href="" style={{margin:"25px"}}> FAQ </a> 
                    </nav>
                    
                    <div className="homeTopSection">
                        <img className="image1" src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2017/03/ford-focus-michigan-assembly-plant.jpg?itok=da7Zvhu9" alt="first image"/>
                        <img className="image2" src="https://i.pinimg.com/originals/c1/9f/a5/c19fa5a2b6de80d4b5e8866f2cf36c0f.jpg" alt="second"/>
                    </div>

                        <Link to="/schedule"><button><h1>Schedule Now!</h1></button></Link>

                    <div className="homeMidBox" style={{color:"white", margin:"50px"}}>
                        {/* <div> */}
                            <div className="homeMidSection">Gallery 
                            </div>
                                <p>ldkfjglkdfjglkfdjg</p>
                        {/* </div> */}
                        
                        <div className="homeMidSection">Services
                            <p>ldkfjglkdfjglkfdjg</p>
                        </div>
                        <div className="homeMidSection">Customer Reviews
                            <p>ldkfjglkdfjglkfdjg</p>
                        </div>
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