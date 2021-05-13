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
                <h3>testing </h3>
                <h3> testing</h3>

            </div>
            <div className="employees__right">
                <div class="item">
                    <p>Name</p>
                    <div class="name-item">
                        <input type="text" name="name" placeholder="First" />
                        <input type="text" name="name" placeholder="Last" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Employees
