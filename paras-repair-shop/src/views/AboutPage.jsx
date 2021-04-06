// import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/AboutPage.module.scss';
import camaro from '../static/images/camaro.jpg';
import mustang from '../static/images/ev-mustang.jpg';
import Footer from  '../components/Footer'

import owner from '../static/images/repairGuy.jpg'
import mechanic from '../static/images/wrenchGuy.jpg'
import specialist from '../static/images/salesMan.jpg'


const AboutPage = () => {

    return (
        <div className="wrapper">
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            <NavBar/>
            <div className={styles.banner}>
                <h1>About Us</h1>
                <p>My parents began this repair shop back in XXXX. Our family has be serving the community for over XX years through our passion for everything automotive. We love working on vehicles of all types and helping out our community by fixing any kind of vehicle issue.</p>
            </div>
            <div className={styles.infoSection}>
                <p>My family built this shop from the ground up to help service cars for our neighbors. We work to this day as a family owned business looking to help out families near us.</p>
                <img src="" alt="founders family"/>
            </div>
            <div className={styles.infoSection}>
                <img src={camaro} alt="vintage car"/>
                <p>Our love of cars has no bounds. We regularly work on vintage vehicles and provide high-quality custom work for any vehicle that comes through our shop. </p>
            </div>
            <div className={styles.infoSection}>
                <p>We also can perform maintenance on all modern vehicles and can handle any maintenance and repairs to ensure your and your families safety.</p>
                <img src={mustang} alt="modern car"/>
            </div>

            <div className={styles.botBox}>
                <h1>Meet our Staff</h1>
                <div className={styles.staffBox}>
                    <div className={styles.staff}>
                        <h3>Owner</h3>
                        <img src={owner} alt="manager"/>
                        <p>Jose is the proud owner of Latino Auto Electric.
                            His family has been in the business for more than Xx years. 
                            He is more than happy to be of assistance to his community, 
                            fixing what needs to be fixed to get you back on the road
                        </p>
                    </div>
                    <div className={styles.staff}>
                        <h3>Head Mechanic</h3>
                        <img src={mechanic} alt="head mechanic"/>
                        <p>Jacob is a long time friend of Jose and the community. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam delectus maxime alias iusto autem veritatis exercitationem corrupti, porro in sunt nulla unde natus, explicabo mollitia atque commodi. In, magni.
                        </p>
                    </div>
                    <div className={styles.staff}>
                        <h3>Repair Specialist</h3>
                        <img src={specialist} alt="specialist"/>
                        <p>just some random hire guy
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum eos unde ducimus a adipisci ab odit. Possimus cumque dolores fuga, necessitatibus velit ducimus facilis dicta cum optio ratione expedita ipsa.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default AboutPage;