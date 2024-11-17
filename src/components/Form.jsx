import { useState } from "react";
import Cardinfo from "../components/Cardinfo";

export default function Form() {

    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [phone , setphone] = useState("");

    function handlesubmit(a){
        a.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phone);
    }
    return (
        <div className="container">
            <h1>INFORMATION</h1>
            <form onSubmit={handlesubmit}>
            <div className="mb-3">
                <label className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e)=>{setname(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter Your Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Your Phone Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={phone} onChange={(e)=>{setphone(e.target.value)}}  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>
           <Cardinfo a={name} b={email} c={phone}/>
        </div>

    );
}