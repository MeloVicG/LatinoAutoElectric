import ServicePageCSS from "../components/ServicePage.css"

const ServicePage = () => {

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="titleBox">Latinos Auto Electric</h1>
                <nav style={{ backgroundColor: "rgb(18,151,210)" }}>
                    <a className="navBarHome" href="/"> Home </a>
                    <a href=""> Schedule </a>
                    <a href="/service"> Service </a>
                    <a href="/about"> About </a>
                    {/* <a href="/location"> Contact / Location </a>  */}
                    <a href="/faq"> FAQ </a>
                </nav>
                <h4>Chart on statistics or whatever here</h4>
                <br/>

                <div className="serviceMidBox">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid praesentium atque nisi suscipit corrupti sapiente quod iure, enim vero et quia repellat, nemo at. Eos culpa maiores illum architecto!</p>
                </div>
            </div>
        </div>
    )
}

export default ServicePage;