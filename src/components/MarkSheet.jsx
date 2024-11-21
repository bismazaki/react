import { useState } from "react";
import Showmarksheet from "../components/Showmarksheet";

export default function Marksheet(){
    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [eng , seteng] = useState(0);
    const [maths , setmaths] = useState(0);
    const [comp , setcom] = useState(0);
    var [total , settotal] = useState(0);
    var [per , setper] = useState(0);

    function handlesubmit(a){
        a.preventDefault();
        console.log(name);
        console.log(email);
        total = parseFloat(eng) + parseFloat(maths) + parseFloat(comp);
        settotal(total);

        per = total/3;
        setper(per);

        console.log(total + " " + per);
    }

    function boxcolor(subject){
        return (subject > 100 || subject < 0) ? {borderColor: "red"} : {} && (subject < 100 || subject > 0) ? {borderColor: "green"} : {}
    }
    return(
        
        <div className="container">
            <h1>MARK SHEET:</h1>
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
                <label className="form-label">Enter Your English Marks</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" value={eng} onChange={(e)=>{seteng(e.target.value)}} style={boxcolor(eng)}  />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Your Maths Marks</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" value={maths} onChange={(e)=>{setmaths(e.target.value)}} style={boxcolor(maths)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Your Computer Marks</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" value={comp} onChange={(e)=>{setcom(e.target.value)}} style={boxcolor(comp)} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={eng > 100 || maths > 100 || comp > 100 || maths < 0 || eng < 0 || comp < 0}>Submit</button>
            </form>
            <br/>
            {(eng > 100 || maths > 100 || comp > 100 || maths < 0 || eng < 0 || comp < 0) &&
            <div className="alert alert-danger" role="alert"> Invalid Marks </div>}
            {!(eng > 100 || maths > 100 || comp > 100 || maths < 0 || eng < 0 || comp < 0) &&
                <Showmarksheet a={name} b={email} c={eng} d={maths} e={comp} f={total} g={per}/>}
        </div>
    )
}