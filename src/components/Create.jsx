// import axios from 'axios';
import axios from 'axios';
import  { useState } from 'react'
import '../Create.css';

const Create = () => {
    let [name, setname] = useState('');
    let [email, setEmail] = useState('');
    let [contact, setcontact] = useState('');
    let [gender, setgender] = useState('');
    let [salary, setsalary] = useState('');
    let [designation, setdesignation] = useState('');
    let [department, setdept] = useState('');
    let [msg, setmsg] = useState('');

    function clear() {
        setEmail("")
        setname("")
        setcontact("")
        setsalary("")
        setgender("");
        setdesignation("")
        setdept("")
    }
    function handlesubmit(){
        try {
            axios.post('https://677d5cf34496848554ca48ee.mockapi.io/crud/EmployeeInfo',{
                name: name,
                email:email,
                contact:contact,
                salary:salary,
                gender:gender,
                designation:designation,
                department:department
            })
            setmsg("Data saved Successfully!");
            clear()
        } catch (error) {
            console.log(error)
            setmsg(error)
        }
    }
   
    return (
       <div className='createbody'>
            <h1 className='text-center'>Create Records</h1>
            <div className="container">
                <center>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" required className="form-control"  />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" required id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Salary</label>
                            <input type="text" value={salary} onChange={(e) => { setsalary(e.target.value) }} className="form-control" required id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Contact</label>
                            <input type="text" value={contact} onChange={(e) => { setcontact(e.target.value) }} className="form-control" id="exampleInputEmail1" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Gender</label>
                            <input type="text" value={gender} onChange={(e) => { setgender(e.target.value) }} className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Designation</label>
                            <input type="text" value={designation} onChange={(e) => { setdesignation(e.target.value) }} className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Department</label>
                            <input type="text" value={department} onChange={(e) => { setdept(e.target.value) }} className="form-control" id="exampleInputPassword1" required />
                        </div>

                        <button type="submit" onClick={handlesubmit}  className="btn btn-primary">Submit</button>
                    </form>
                    {msg && (<div class="alert alert-warning alert-dismissible fade show" role="alert">
                       {msg}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>)}
                   
                </center>
            </div>

            </div>
        
    )
}

export default Create