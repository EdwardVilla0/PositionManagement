import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';

function Home() {

    const myObj = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        sickTime: 10,
        personalTime: 10,
        vacationTime: 8

    };

    return (
        <div className="home">
            <div className="home__left">
                <h1>My Timesheet</h1>
                <h2>{myObj.sickTime}</h2>
            </div>
            <div className="home__right">
                <h1>My information</h1>
                <h2>{myObj.firstName}</h2>
            </div>

        </div>
    )
}

export default Home
