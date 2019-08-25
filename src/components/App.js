import React from 'react';
import Form from './Form';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.app}>
            <section className={styles.content}>
                <h1 className={styles.header}>Estimate your monthly car loan payment</h1>
                <div className={styles.blocks}>
                    <Form />
                    <section className={styles.results}>
                        <h3>Results:</h3>
                        <div className={styles.resultItem}>
                            <p>Estimated monthly payment($)</p>
                            <p className={styles.resultValue}>0</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Total interest paid($)</p>
                            <p className={styles.resultValue}>0</p>
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
