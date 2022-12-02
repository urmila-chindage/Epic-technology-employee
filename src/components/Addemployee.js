import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Addemployee() {
    const [empname, setEmpName] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
    const [dob, setDOB] = useState("");
    const [profile, setProfile] = useState("");
    const [department, setDepartment] = useState("");
    const [error, setError] = useState(false)

    function handleChange(e) {
        console.log(e.target.files);
        setProfile(URL.createObjectURL(e.target.files[0]));
    }

    function addemp() {
        console.log(empname, designation, salary, dob, profile, department)
        if (!empname || !designation || !salary || !dob || !profile || !department) {
            setError(true)
            return false
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link className="btn btn-success mt-5" to="/">Back</Link>
                    <h2>Employee Form</h2>

                    <div className="emp-form">
                        <label className="form-label">Name</label>
                        <br />
                        <input

                            type='text'
                            value={empname}
                            className="form-control form-control-lg"
                            onChange={e => setEmpName(e.target.value)}
                        />
                        {error && !empname && <span className="error-text">Please Enter Name</span>}
                        <br />
                        <label className="form-label">Designation:</label>
                        <br />
                        <select
                            className="form--input float-left dropdown" value={designation} onChange={e => setDesignation(e.target.value)}>
                            <option value="">--Choose Designation--</option>
                            <option value="Ui">UI Developer</option>
                            <option value="tester">Tester</option>
                            <option value="android">Android Developer</option>
                            <option value="backend">Backend Developer</option>
                            <option value="hr">HR</option>
                            <option value="admin">Admin</option>
                            <option value="team lead">Team Lead</option>
                        </select>
                        {error && !designation && <span className="error-text">Please Enter Name</span>}
                        <br /><br/>
                        <label className="form-label">Salary</label>
                        <br />
                        <input

                            type='number'
                            value={salary}
                            className="form-control form-control-lg"
                            onChange={e => setSalary(e.target.value)}
                        />
                          {error && !salary && <span className="error-text">Please Enter Name</span>}
                        <br />
                        
                        <label className="form-label">DOB</label>
                        <br />
                        <input

                            type='date'
                            value={dob}
                            className="form-control form-control-lg"
                            onChange={e => setDOB(e.target.value)}
                        />
                        {error && !dob && <span className="error-text">Please Enter Name</span>}
                        <br />


                        <input
                            type="file"
                            onChange={handleChange}
                            className='form-control form--input'
                        />
                        <img src={profile} className="imageupload profile-image" alt="Profile" />
                        {error && !profile && <span className="error-text">Please Enter Name</span>}
                        <br/><br/>

                        <label className="form-label">Department</label>
                        <br />

                        <input

                            type='text'
                            value={department}
                            className="form-control form-control-lg"
                            onChange={e => setDepartment(e.target.value)}
                        />
                         {error && !department && <span className="error-text">Please Enter Name</span>}
                        <br />

                        <button className="btn btn-success" onClick={addemp}>Add employee</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addemployee;
