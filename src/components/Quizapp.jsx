import { Button, Typography, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import '../Quizapp.css';

const QuizApp_Array = () => {
    var [radio, setradio] = useState({});
    var [score, setscore] = useState(0);
    var [right, setright] = useState(0);
    var [wrong, setwrong] = useState(0);

    var Question_Array = [
        {
            question: "Who's the Founder of Pakistan",
            options: ["Shahrukh Khan", "Peshawar Khan", "Quaid e Azam", "Gandhi"],
            correct: "Quaid e Azam",
            no: 1
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            correct: "Jupiter",
            no: 2
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Oxygen", "Gold", "Osmium", "Ozone"],
            correct: "Oxygen",
            no: 3
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correct: "William Shakespeare",
            no: 4
        }
    ];

    function value_get_radio(ques, v) {
        setradio((a) => ({
            ...a,
            [ques]: v
        }));
    }

    function handlesubmit(a) {
        a.preventDefault();
        let tempScore = 0;
        let tempRight = 0;
        let tempWrong = 0;

        Question_Array.forEach((q) => {
            if (radio[q.no] === q.correct) {
                tempScore += 5;
                tempRight++;
            } else {
                tempWrong++;
            }
        });

        setscore(tempScore);
        setright(tempRight);
        setwrong(tempWrong);
    }

    const totalQuestions = Question_Array.length;
    const scoreProgress = (score / (totalQuestions * 5)) * 100; // Score out of 100
    const rightProgress = (right / totalQuestions) * 100; // Right answers percentage
    const wrongProgress = (wrong / totalQuestions) * 100; // Wrong answers percentage

    return (
        <div>
            <h1 className="quiz-title">Quiz Application:</h1>
            <form action="" onSubmit={handlesubmit}>
                {Question_Array.map((ques) => (
                    <div key={ques.no}>
                        <h4>
                            {ques.no}: {ques.question}
                        </h4>
                        {ques.options.map((o, i) => (
                            <div key={i}>
                                <input
                                    type="radio"
                                    name={`q${ques.no}`}
                                    id={`q${ques.no}-${i}`}
                                    value={o}
                                    onChange={(e) => value_get_radio(ques.no, o)}
                                    checked={radio[ques.no] === o}
                                />
                                <label htmlFor={`q${ques.no}-${i}`}>{o}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <Button sx={{ mt: 2 }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>

            <Typography variant="h4" color="white" sx={{ mt: 3 }}>
                Score Progress:
            </Typography>
            <LinearProgress
                variant="determinate"
                value={scoreProgress}
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
            />

            <Typography variant="h4" color="white" sx={{ mt: 3 }}>
                Right Answers Progress:
            </Typography>
            <LinearProgress
                variant="determinate"
                value={rightProgress}
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
                color="success"
            />

            <Typography variant="h4" color='white' sx={{ mt: 3 }}>
                Wrong Answers Progress:
            </Typography>
            <LinearProgress
                variant="determinate"
                value={wrongProgress}
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
                color="error"
            />
        </div>
    );
};

export default QuizApp_Array;
