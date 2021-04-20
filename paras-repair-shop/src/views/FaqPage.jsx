import NavBar from '../components/NavBar'
import React, { useState, useEffect } from 'react';

import styles from '../styles/FaqPage.module.scss'
import Footer from '../components/Footer'
import { Link } from '@reach/router';

const FaqPage = ({ page, setPage }) => {


    const [answer, setAnswer] = useState("");
    const [finalAnswers, setFinalAnswers] = useState([]);

    const answerBank = [
        {
            "a": "0",
            "text": "Appointments can be made on our Schedule Page"
        },
        {
            "a": "1",
            "text": "We are open :",
            "text1": "Weekdays 8am - 5pm,",
            "text2": "Saturday 9am - 2pm,",
            "text3": "Sunday Closed",
        },
        {
            "a": "2",
            "text": "Parts are provided at the shop, if you would like to provide the part necessary contact our manager",
        },
        {
            "a": "3",
            "text": "There may be positions available, contact our manager for further information"
        },
        {
            "a": "4",
            "text": "Your car may be left overnight depending on the repairs required"
        },
    ]

    useEffect(() => {
        setPage(4);
    }, []);

    const handleAnswer = (e) => {
        setAnswer(e.target.value);
        let newAnswers = [];
        answerBank.map((obj) => {
            if (obj["a"] === e.target.value) {
                Object.keys(obj).forEach(key => {
                    if (key !== "a") {
                        newAnswers.push(obj[key]);
                    }
                })
            }
        })
        setFinalAnswers(newAnswers);
    }


    return (
        <div className="wrapper">
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            <NavBar page={page} />
            <div className={styles.container}>
                <div className={styles.faqBanner}>

                    <div>
                        <h1>FAQ</h1>
                        <br />
                        <select value={answer} className="dropDownQuestions" type="text" onChange={handleAnswer}>
                            <h4>Questions?</h4>
                            <option value="">Questions?</option>
                            <option value="0">Where can I make an appointment?</option>
                            <option value="1">When does the shop open?</option>
                            <option value="2">Do I need to buy parts?</option>
                            <option value="3">Is there positions available?</option>
                            <option value="4">Do I have to leave my car overnight?</option>
                        </select>
                        <br />
                        <br />
                        {finalAnswers.map((str, idx) =>
                            <div key={idx}>
                                <p>{str}</p>
                            </div>
                        )
                        }
                    </div>



                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FaqPage;