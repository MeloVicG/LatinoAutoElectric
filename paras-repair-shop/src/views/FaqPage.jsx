import NavBar from '../components/NavBar'
import React, { useState, useEffect } from 'react';

import styles from '../styles/FaqPage.module.scss'
import Footer from '../components/Footer'
import { Link } from '@reach/router';

const FaqPage = ({page, setPage}) => {
    

    const [answer, setAnswer] = useState("");

    useEffect(() => {
        setPage(4)
    }, []);


    return (
        <div className="wrapper" style={{height:"950px"}}>
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            <NavBar page={page}/>
            <div className={styles.container}>
                <div className={styles.faqBanner}>

                    <div>
                        <h1>FAQ</h1>
                        <br />
                        <select value={answer} className="dropDownQuestions" type="text" onChange={(e) => setAnswer(e.target.value)}>
                            <h4>Questions?</h4>
                            <option value="">Questions?</option>
                            <option value="Appointments can be made on our Schedule Page">Where can I make an appointment?</option>
                            <option value="We are open :
                                Weekdays 8am - 5pm,
                                Saturday 9am - 2pm,
                                Sunday Closed">
                                When does the shop open?</option>
                            <option value="Parts are provided at the shop, if you would like to provide the part necessary contact our manager">Do I need to buy parts?</option>
                            <option value="There may be positions available, contact our manager for futher information">Is there positions available?</option>
                            <option value="Your car may be left overnight depending on the repairs required">Do I have to leave my car overnight?</option>
                        </select>
                        <br />
                        <br />
                        <p>{answer}</p>
                    </div>



                </div>
            </div>
            <Footer className="faqFooter"/>
        </div>
    )
}

export default FaqPage;