import React, { useState } from 'react';
import Form from './Form';
import styles from './App.module.css';

const App = () => {
    const [results, setResults] = useState({
        monthlyPayment: 0,
        totalInterestPaid: 0
    });

    const updateResults = (monthlyPayment, totalInterestPaid) => {
        setResults(state => ({ ...state, monthlyPayment, totalInterestPaid }));
    }

    return (
        <div className={styles.app}>
            <section className={styles.content}>
                <h1 className={styles.header}>Estimate your monthly car loan payment</h1>
                <div className={styles.blocks}>
                    <Form onSubmit={updateResults} />
                    <section className={styles.results}>
                        <h3>Results:</h3>
                        <div className={styles.resultItem}>
                            <p>Estimated monthly payment($)</p>
                            <p className={styles.resultValue}>{results.monthlyPayment}</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Total interest paid($)</p>
                            <p className={styles.resultValue}>{results.totalInterestPaid}</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Amortization schedule</p>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default App;
