
const HomePage = () => {

    return(
        <div className="App">

            <div className="wrapper">
                <div className="container">

                    <h1 className="titleBox">Latinos Auto Electric</h1>

                    <nav style={{backgroundColor:"white"}}>
                        <a href=""> Home </a> |
                        <a href=""> Career </a> |
                        <a href=""> Features </a> |
                        <a href=""> Staff </a> |
                        <a href=""> Gallery </a> |
                        <a href=""> Contact </a> |
                        <a href=""> FAQ </a> |
                    </nav>
                    <div className="homeTopSection">
                        <img className="image1" src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2017/03/ford-focus-michigan-assembly-plant.jpg?itok=da7Zvhu9" alt="first image"/>
                        <img className="image2" src="https://i.pinimg.com/originals/c1/9f/a5/c19fa5a2b6de80d4b5e8866f2cf36c0f.jpg" alt="second"/>
                    </div>

                    <button><h1>Schedule Now!</h1></button>

                    <div className="homeMiddleSection">
                        <div>Repairs</div>
                        <div>Staff</div>
                        <div>Satisfaction</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage;