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
                <div className="employees__leftSearch">
                    <label>Search Employees</label>
                    <input type="text" name="name" placeholder="Enter name" required />
                    <ul>
                        <li>testing</li>
                        <li>testing</li>
                        <li>testing</li>
                        <li>testing</li>
                        <li>testing</li>
                        <li>testing</li>
                        <li>testing</li>
                        <li>testing</li>
                    </ul>
                </div>

            </div>
            <div className="employees__right">
                <div className="item">
                    <p>Name</p>
                    <div className="name-item">
                        <input type="text" name="name" placeholder="First" required />
                        <input type="text" name="name" placeholder="Middle" />
                        <input type="text" name="name" placeholder="Last" required />
                    </div>
                </div>

                <div className="item">
                    <p>Address</p>
                    <div className="city-item">
                        <input type="text" name="name" placeholder="Street Address" />
                        <input type="text" name="name" placeholder="City" />
                        <input type="text" name="name" placeholder="Region" />
                        <input type="text" name="name" placeholder="Postal / Zip code" />
                        <select>
                            <option value="">Country</option>
                            <option value="1">Russia</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Armenia</option>
                            <option value="5">USA</option>
                        </select>
                    </div>
                </div>

                <div className="item">
                    <h3>benfits</h3>
                </div>


            </div>
        </div>
    )
}

export default Employees
