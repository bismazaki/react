import React, { useState } from 'react'

const QuizApp = () => {
    var [que2, setque2] = useState("");
    var [que3, setque3] = useState("");
    var [que4, setque4] = useState("");
    var [que5, setque5] = useState("");
    var [que6, setque6] = useState("");
    var [score, setscore] = useState(0);
    var [right, setright] = useState(0);
    var [wrong, setwrong] = useState(0);

    //color state
    var [Sque2, setSque2] = useState({});
    var [Sque3, setSque3] = useState({});
    var [Sque4, setSque4] = useState({});
    var [Sque5, setSque5] = useState({});
    var [Sque6, setSque6] = useState({});
    //oNCHANGE FUNCTION
    const handleonchange = (statehandle) => (a) => {
        return statehandle(a.target.value);
    }

    function print_status(a) {
        a.preventDefault();
        if (que2 === "a") {
            score += 5;
            right++
        }
        else {
            wrong++;
            setSque2({ color: "red" })
        }
        if (que3 === "b") {
            score += 5;
            right++
        }
        else {
            wrong++;
            setSque3({ color: "red" })
        }
        if (que4 === "a") {
            score += 5;
            right++
        }
        else {
            wrong++;
            setSque4({ color: "red" })
        }
        if (que5 === "b") {
            score += 5;
            right++
        }
        else {
            wrong++;
            setSque5({ color: "red" })
        }
        if (que6 === "c") {
            score += 5;
            right++
        }
        else {
            wrong++;
            setSque6({ color: "red" })
        }
        setscore(score);
        setright(right);
        setwrong(wrong);
    }
    // Progress Bar
    var progreebar = (score * 100) / 25;
    var progess_bar_style = progreebar === 100 ? "progress-bar progress-bar-striped bg-success" :
        progreebar === 80 ? "progress-bar progress-bar-striped bg-warning" :
            progreebar === 60 ? "progress-bar progress-bar-striped bg-secondary" :
                progreebar === 40 ? "progress-bar progress-bar-striped bg-dark" : "progress-bar progress-bar-striped bg-danger";
    function Count_of_Attempted_Questions() {
        return [que2, que3, que4, que5, que6].filter((b) => b !== "").length
    };
    var Attemptedprogress_bar = Count_of_Attempted_Questions() * 100 / 5;

    return (
        <div>
            <div className="container">
                <h1>Quiz Application:</h1>
                <form onSubmit={print_status}>

                    <p style={Sque2}>Q2: Who is the Founder of Pakistan?</p>
                    <input type="radio" name="founder" value="a" onChange={handleonchange(setque2)} checked={que2 === "a"} /> Quaid-e-Azam <br />
                    <input type="radio" name="founder" value=" b" onChange={handleonchange(setque2)} checked={que2 === " b"} /> Allama Iqbal <br />
                    <input type="radio" name="founder" value="c" onChange={handleonchange(setque2)} checked={que2 === "c"} /> Liaquat Ali Khan <br />
                    <p style={Sque3}>Q3: What is our national game?</p>
                    <input type="radio" name="game" value="a" onChange={handleonchange(setque3)} checked={que3 === "a"} /> Cricket <br />
                    <input type="radio" name="game" value="b" onChange={handleonchange(setque3)} checked={que3 === "b"} /> Hockey <br />
                    <input type="radio" name="game" value="c" onChange={handleonchange(setque3)} checked={que3 === "c"} /> Football <br />
                    <p style={Sque4}>Q4: Who is our First primeMinister of Pakistan?</p>
                    <input type="radio" name="prime" value="a" onChange={handleonchange(setque4)} checked={que4 === "a"} /> Liaquat Ali Khan <br />
                    <input type="radio" name="prime" value=" b" onChange={handleonchange(setque4)} checked={que4 === " b"} /> Allama Iqbal  <br />
                    <input type="radio" name="prime" value="c" onChange={handleonchange(setque4)} checked={que4 === "c"} /> Sir syed Ahmed khan <br />

                    <p style={Sque5}>Q5: What is our nation language?</p>

                    <input type="radio" name="Language" value="a" onChange={handleonchange(setque5)} checked={que5 === "a"} /> English<br />
                    <input type="radio" name="Language" value="b" onChange={handleonchange(setque5)} checked={que5 === "b"} /> Urdu<br />
                    <input type="radio" name="Language" value="c" onChange={handleonchange(setque5)} checked={que5 === "c"} /> Sindhi<br />


                    <p style={Sque6}>Q6: What is the shape of earth?</p>
                    <input type="radio" name="Shape" value="a" onChange={handleonchange(setque6)} checked={que6 === "a"} />Oval<br />
                    <input type="radio" name="Shape" value="b" onChange={handleonchange(setque6)} checked={que6 === "b"} />Square<br />
                    <input type="radio" name="Shape" value="c" onChange={handleonchange(setque6)} checked={que6 === "c"} />Circle <br />

                    <input type="submit" value="Submit" className="btn btn-primary my-3" />
                </form>
                <table className='w-100 table-bordered' style={{ border: `4px solid black` }}>
                    <tr style={{ fontWeight: `bold`, fontSize: 20 }}>
                        <td>Score: {score}</td>
                        <td>Right Answers: {right}</td>
                        <td>Wrong Answer: {wrong}</td>
                    </tr>
                </table>

                <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={progreebar} aria-valuemin="0" aria-valuemax="100">
                    <div className={progess_bar_style} style={{ width: `${progreebar}%`, fontSize: 20 }}>{progreebar} %</div>
                </div>
            </div>
            <h3 className="text-center"> Attempted Questions:</h3>
        <div class="my-3 progress" role="progressbar" aria-label="Default striped example" aria-valuenow={Attemptedprogress_bar} aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped" style={{width:`${Attemptedprogress_bar}%`}}>{Attemptedprogress_bar}</div>
        </div>

        </div>


    )
}

export default QuizApp;