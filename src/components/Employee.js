import React, { useState, useRef,useMemo } from 'react';
import { employeedata } from '../emplyeedata'
import '../App.css'
import Dialog from "./Dialog";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


let PageSize = 2;
const Employee = () => {
    const [employee, setEmployee] = useState(employeedata)
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return employee.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
    });
    const idProductRef = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        });
    };


    const deleteRecord = (id) => {


        //const newdata = employee.filter(emp => emp.id !== id);
        //setEmployee(newdata);
        const index = employee.findIndex((p) => p.id === id);
        handleDialog("Are you sure you want to delete?", true);
        idProductRef.current = id;
    }

    const areUSureDelete = (choose) => {
        if (choose) {
            setEmployee(employee.filter((p) => p.id !== idProductRef.current));
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    return (
        <div className="wrapper">
            <h6>Test App</h6>
            <div className="list-group">
                {
                    currentTableData.map((emp) => {
                        return (
                            <div  key={emp.id}>
                            <Link className="list-group-item list-group-item-action" to={"/employeedetail/" + emp.id}>
                                <div className="employee-detail">
                                    <div><img src="../images/profile-picture.png" alt="Employee Profile" className="profile-photo img-fluid" /></div>
                                    <div>

                                        <h6>{emp.name}</h6>
                                        <p>{emp.designation}</p>
                                        <p>{emp.phone}</p>

                                    </div>
                                </div>
                               
                            </Link>
                                <button className="btn btn-danger delete-btn" onClick={() => { deleteRecord(emp.id) }}>Delete</button></div>

                        )

                    })

                }
                {dialog.isLoading && (
                    <Dialog

                        onDialog={areUSureDelete}
                        message={dialog.message}
                    />
                )}

                <Link to="/add" className="add">+</Link>
                <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={employee.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

            </div>


        </div>
    )


}

export default Employee;




