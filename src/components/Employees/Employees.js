import { Button } from '@material-ui/core'
import React from 'react'
import Header from '../Header/Header'
import './Employees.css'

function Employees() {

    const showEmployeesPage = (e) => {
        console.log("testing e")
    }

    return (
        <div className="employees">
            <Header />

        </div>
    )
}

export default Employees
