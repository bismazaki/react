import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Readtable = () => {
    const[tabledata , setTabledata] = useState([]);

    // useEffect(()=>{
    //     axios.get("https://67768c0e12a55a9a7d0c1cac.mockapi.io/crud/Personinfo)
    //     .then((a)=>{setTabledata(a.data)})
    //     .catch((e)=>{console.log(e)})
    // },[])
    useEffect(()=>{
        axios.get(`https://677d5cf34496848554ca48ee.mockapi.io/crud/EmployeeInfo`)
        .then((a)=>{setTabledata(a.data)})
        .catch((e)=>{console.log(e)})
    },[])
  return (
    <>
    <h1 className='text-center'>Display Records</h1>
    <center><Link to={'/create'}><button className='btn btn-primary'>+</button></Link></center>
   
      <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Designation</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            {tabledata.map((i)=>(
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.salary}</td>
                    <td>{i.contact}</td>
                    <td>{i.gender}</td>
                    <td>{i.designation}</td>
                    <td>{i.department}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Readtable