import React, { useState } from 'react';
import { employeedata } from '../emplyeedata';
import { useParams,Link } from "react-router-dom";
import '../App.css'

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState(employeedata)
    const params = useParams();

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                <Link className="btn btn-success mt-5" to="/">Back</Link>
                    <h2>Employee Details</h2>
                    {
                        employee.map((emp)=>{
                            if(emp.id===params.id){
                                return(
                                    <div key={emp.id} className="empdetails">
                                        <div><img src="../images/profile-picture.png" alt="Employee Profile" className="profile-photo img-fluid" /></div>
                                        <h6>{emp.name}</h6>
                                        <p>{emp.designation}</p>
                                        <p>{emp.phone}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail;