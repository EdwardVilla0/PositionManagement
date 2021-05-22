import React from 'react';

import './Home.css';

function Home() {

    const myObj = {
        id: 1020,
        firstName: 'John',
        lastName: 'Doe',
        sickTime: 10,
        personalTime: 10,
        vacationTime: 8,
        birthday: "03/25/2015"

    };

    return (
        <div className="home">
            <div className="home__left">
                <h1>My Timesheet</h1>
                <h2>sick time: {myObj.sickTime}</h2>
                <h2>vacation time: {myObj.vacationTime}</h2>
                <h2>personal time: {myObj.personalTime}</h2>
            </div>
            <div className="home__right">
                <h1>My information</h1>
                <h2>id: {myObj.id}</h2>
                <h2>Full name: {myObj.firstName} {myObj.lastName}</h2>
                <h2>birthday: {myObj.birthday}</h2>
            </div>

        </div>
    )
}

export default Home
