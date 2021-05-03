import { Button } from '@material-ui/core'
import React from 'react'
import './Employees.css'

function Employees() {

    const showEmployeesPage = (e) => {
        console.log("testing e")
    }

    return (
        <div className="employees">
            <Button onClick={showEmployeesPage}>Employees</Button>

        </div>
    )
}

export default Employees
