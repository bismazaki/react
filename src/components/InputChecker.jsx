import { useState } from "react"

export  default function InputChecker(){
    const [martial , setMartial] = useState("");
    const [founder , setfounder] = useState("");
    const [game , setgame] = useState("");
    const [prime , setprime] = useState("");

    function handlestatus(e){
        return (
            setMartial(e.target.value)
        )
    }
    function handlefounder(e){
        return (
            setfounder(e.target.value)
        )
    }
    function handlegame(e){
        return (
            setgame(e.target.value)
        )
    }
    function handleprime(e){
        return (
            setprime(e.target.value)
        )
    }
    function print_status(e){
        e.preventDefault();
        console.log(martial);
        console.log(founder);
        console.log(game);
        console.log(prime);
    }
    return(
    <div className="container">
        <h1>Input Checker:</h1>
        <form onSubmit={print_status}>
        <p>Select Martial Status</p>
        <input type="radio" name="martial" value="Married" onChange={handlestatus} checked={martial === "Married"} /> Married <br/>
        <input type="radio" name="martial" value="UnMarried" onChange={handlestatus} checked={martial === "UnMarried"} /> UnMarried <br/>
        <input type="radio" name="martial" value="Widow" onChange={handlestatus} checked={martial === "Widow"}/> Widow <br/>
        <input type="radio" name="martial" value="Other" onChange={handlestatus} checked={martial === "Other"}/> Other <br/>

        <p>Who is the Founder of Pakistan?</p>
        <input type="radio" name="founder" value="Quaid-e-Azam" onChange={handlefounder} checked={founder === "Quaid-e-Azam"} /> Quaid-e-Azam <br/>
        <input type="radio" name="founder" value=" Allama Iqbal" onChange={handlefounder} checked={founder === " Allama Iqbal"} /> Allama Iqbal <br/>
        <input type="radio" name="founder" value="Liaquat Ali Khan" onChange={handlefounder} checked={founder === "Liaquat Ali Khan"}/> Liaquat Ali Khan <br/>
        <p>What is our national game?</p>
        <input type="radio" name="game" value="Cricket" onChange={handlegame} checked={game === "Cricket"} /> Cricket <br/>
        <input type="radio" name="game" value=" Hockey" onChange={handlegame} checked={game === " Hockey"} /> Hockey <br/>
        <input type="radio" name="game" value="Football" onChange={handlegame} checked={game === "Football"}/> Football <br/>
        <p>Who is our First primeMinister of Pakistan?</p>
        <input type="radio" name="prime" value="Liaquat Ali Khan" onChange={handleprime} checked={prime === "Liaquat Ali Khan"} /> Liaquat Ali Khan <br/>
        <input type="radio" name="prime" value=" Allama Iqbal" onChange={handleprime} checked={prime === " Allama Iqbal"} /> Allama Iqbal  <br/>
        <input type="radio" name="prime" value="Sir syed Ahmed khan" onChange={handleprime} checked={prime === "Sir syed Ahmed khan"}/> Sir syed Ahmed khan <br/>
        

        <input type="submit" value="Submit"  className="btn btn-primary my-3"/>
        </form>
        </div>
    )
}