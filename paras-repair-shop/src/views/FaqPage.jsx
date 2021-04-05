import NavBar from '../components/NavBar'
import styles from './FaqPage.module.css'

const AboutPage = () => {
    return (
        <div className="wrapper">
            <div>
                <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
                <NavBar/>
                <div className="faqBanner">
                    <h1>FAQ</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;