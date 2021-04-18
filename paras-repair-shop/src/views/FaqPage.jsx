import NavBar from '../components/NavBar'
import React, { useState } from 'react';

import styles from '../styles/FaqPage.module.scss'
import Footer from '../components/Footer'
import { Link } from '@reach/router';

const FaqPage = () => {

    const [answer, setAnswer] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");

    // const A1 = (e) => {
    //     return (
    //         <div>
    //             <p>Appointments can be made on our <Link to="/schedule">schedule page</Link></p>
    //         </div>
    //     );
    // };

    // const AA1 = console.log(A1)

    // const A2 = <p>We are open :
    // <br /> Weekdays 8am - 5pm
    // <br />
    //         Saturday 9am - 2pm
    //         <br />
    //         Sunday Closed
    //         </p>;
    // const A3 = <p>Parts are provided at the shop, if you would like to provide the part necessary contact our manager</p>;

    // const A4 = <p>There may be positions available, contact our manager for futher information</p>;

    // const A5 = <p>Your car may be left overnight depending on the repairs required</p>;
    // const changeAnswer = (e) => {
    //     setAnswer(e.target.value);
    // }


    return (
        <div className="wrapper">
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            <NavBar />
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
                        {/* 
                        {answer.map((val, index) =>
                            <div key={index}>
                                <h3>{val.A2}</h3>
                            </div>
                        )} */}
                        {/* {AA1} */}
                        {/* {A1}
                        {A2}
                        {A3}
                        {A4}
                        {A5} */}
                    </div>



                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FaqPage;