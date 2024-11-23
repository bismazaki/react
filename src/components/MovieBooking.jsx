import React, { useState } from 'react'
import Ticket from './Ticket';

const MovieBooking = () => {
    var [username, setusername] = useState("");
    var [movie, setmovie] = useState("");
    var [ticketType, setticketType] = useState("");
    var [Quantity, setQuantity] = useState(0);
    var [glasses, setglasses] = useState("");
    var [typeadd, settypeadd] = useState(0);
    var [glassadd, setglassadd] = useState(0);
    var [total, setTotal] = useState(0);


    //oNCHANGE FUNCTION
    const handleonchange = (statehandle) => (a) => {
        return statehandle(a.target.value);
    }
    function handlesubmit(b) {
        b.preventDefault();
        // console.log(username);
        // console.log(movie);
        // console.log(ticketType);
        // console.log(Quantity);
        // console.log(glasses);

        if (ticketType === "Silver") {
            typeadd = (700 * Quantity);
        }
        else if (ticketType === "Gold") {
            typeadd = (900 * Quantity);
        }
        else if (ticketType === "Platinum") {
            typeadd = (1200 * Quantity);
        }
        if (glasses === "YES") {
            glassadd = (Quantity * 400);
        }
        settypeadd(typeadd);
        setglassadd(glassadd);
        total = glassadd + typeadd;
        setTotal(total);
        console.log(total);
    }
    return (
        <>
            <div className='container'>
                <form action="" onSubmit={handlesubmit}>
                    <h3 className='text-center'><u> Movie Ticket Booking:</u></h3>
                    <div className="mb-3">
                        <label className="form-label">*: Enter Username</label>
                        <input type="text" className="form-control" value={username} onChange={handleonchange(setusername)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">*: Enter Movie Name</label>
                        <input type="text" className="form-control" value={movie} onChange={handleonchange(setmovie)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">*: Select Ticket type</label><br />
                        <input type="radio" name="movietype" value="Silver" onChange={handleonchange(setticketType)} checked={ticketType === "Silver"} /> Silver <br />
                        <input type="radio" name="movietype" value="Gold" onChange={handleonchange(setticketType)} checked={ticketType === "Gold"} />  Gold <br />
                        <input type="radio" name="movietype" value="Platinum" onChange={handleonchange(setticketType)} checked={ticketType === "Platinum"} /> Platinum <br />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">*: Enter Ticket Quantity</label>
                        <input type="number" className="form-control" value={Quantity} onChange={handleonchange(setQuantity)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">*: Select glasses Include</label><br />
                        <input type="radio" name="glasses" value="YES" onChange={handleonchange(setglasses)} checked={glasses === "YES"} /> YES <br />
                        <input type="radio" name="glasses" value="NO" onChange={handleonchange(setglasses)} checked={glasses === "NO"} /> NO <br />
                    </div>
                    <div className='mb-3'>
                        <input type="submit" value="Submit" className="btn btn-primary my-3" />
                    </div>
                </form>
                <Ticket a={username} b={movie} c={Quantity} d={glasses} e={ticketType} f={total} />
            </div>
        </>
    )
}

export default MovieBooking