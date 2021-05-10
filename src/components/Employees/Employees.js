import React from 'react'
import './Employees.css'

function Employees() {
    const myObj = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        sickTime: 10,
        personalTime: 10,
        vacationTime: 8

    };

    return (
        <div className="employees">
            <div className="employees__left">
                <h3>testing</h3>
                <h3>testing</h3>

            </div>
            <div className="employees__right">
                <p>First name</p>
                <input placeholder="First name" />
                <p>Middle name</p>
                <input placeholder="Middle Name" />
                <p>Last name</p>
                <input placeholder="Last name" />
                <p>Address</p>
                <input placeholder="Address" />
            </div>
        </div>
    )
}

export default Employees
